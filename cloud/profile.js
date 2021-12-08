var screen = document.getElementById('screen'),
	profile = document.getElementById('profile');

window.addEventListener('message', function(e){
	if (e.data !== 'token'){
		console.warn('Invalid data', e.data);
		return;
	}

	if (e.origin !== screen.dataset.origin) {
		console.warn('Invalid origin', e.origin);
		return;
	}

	e.source.postMessage({token: screen.dataset.token, userSignup: screen.dataset.signup}, screen.dataset.origin);
});

if (window.opener) {
	var origin = screen.dataset.origin;
	//Uncaught DOMException: Blocked a frame with origin "https://cloud-trunk.gravit.io" from accessing a cross-origin frame.
    //console.log(window.opener, screen.dataset.token, origin)
    window.opener.postMessage({token: screen.dataset.token, userSignup: screen.dataset.signup}, !origin||origin=='null'||origin=='undefined'?'file://':origin);
    // todo also window.close() from here (for chrome app)
}


if (!window.hasOwnProperty('URLSearchParams') || !window.hasOwnProperty('fetch') || !Array.hasOwnProperty('from')) {
	var script = document.createElement('script');
	script.src = 'https://cdn.polyfill.io/v2/polyfill.min.js?features=default,URL,fetch';
	document.body.insertBefore(script, document.body.firstChild);
}


profile.firstElementChild.onclick = function(e) {
	var toggled = profile.classList.toggle('active');
	function close(e) {
		if (e.type=='mousedown' && profile.contains(e.target) || e.type=='keyup' && e.key!=='Escape'&& e.key!=='Tab') return;
		profile.classList.remove('active');
		document.removeEventListener('mousedown', close);
		document.removeEventListener('keyup', close);
	}
	if (!toggled) {
		return close({});
	}
	document.addEventListener('mousedown', close);
	document.addEventListener('keyup', close);
}

var jsonRe = /^application\/json/;
function toJson(r) {
	return (jsonRe.test(r.headers.get('Content-Type')) ? r.json() : r.text()).then(function(d) {
		return Promise[r.status>=400?'reject':'resolve'](d);
	})
}

