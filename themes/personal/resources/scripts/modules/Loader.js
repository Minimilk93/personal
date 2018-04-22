export default function Loader() {
	const body = document.body;

	$(document).ready(function() {
		body.classList.add('scroll-control');

	    setTimeout(function(){
	    	body.classList.remove('scroll-control');
	        body.classList.add('loaded');
	    }, 2500);
	});

}
