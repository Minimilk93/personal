export default function Loader() {
	const body = document.querySelector(`body`);

	$(document).ready(function() {
		body.classList.add('scroll-control');

	    setTimeout(function(){
	    	body.classList.remove('scroll-control');
	    }, 2500);
	});

}
