< script type = "text/javascript" >
// var skin_code_js_url = 'http://i.blogads.com/static/demo_urban_dict/skin_code.js?var=' + Math.floor(Math.random() * 100);
var skin_code_js_url = 'http://localhost:8000/skin_code.js?var=' + Math.floor(Math.random() * 100);

//this two parameters below are needed if the skin code will be inserted from an iframe, for example from a dfp/openx/... ad zone
var iframe_buster_url = ''; //this is the site's url where the skin code will run, if this parameter is empty the program will try to generate it
var iframe_buster_path = '/iframebuster/iframebuster.html'; //it can be modified for a custom path
if (window.top != window.self) {
	if (iframe_buster_url === '') {
		var referrer = document.referrer;
		if (referrer.indexOf('http://') != -1) {
			var iframe_buster_url_tags = referrer.split('http://');
			var protocol = 'http://';
		} else if (referrer.indexOf('https://') != -1) {
			var iframe_buster_url_tags = referrer.split('https://');
			var protocol = 'https://';
		}
		if (iframe_buster_url_tags.length > 0) iframe_buster_url = protocol + iframe_buster_url_tags[1].split('/')[0];
	}
	ifrm = document.createElement("iframe");
	ifrm.setAttribute("src", iframe_buster_url + iframe_buster_path + '?skin_js=' + encodeURIComponent(skin_code_js_url));
	ifrm.style.width = 0 + "px";
	ifrm.style.height = 0 + "px";
	ifrm.style.display = 'none';
	document.getElementsByTagName('body')[0].appendChild(ifrm);
} else {
	script_tag = document.createElement("script");
	script_tag.setAttribute("src", skin_code_js_url);
	script_tag.setAttribute("type", 'text/javascript');
	document.getElementsByTagName('head')[0].appendChild(script_tag);
} < /script>
