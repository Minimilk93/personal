export default function Loader() {
	const body = document.querySelector(`body`);
	body.classList.add('scroll-control');

    setTimeout(function(){
    	body.classList.remove('scroll-control');
        body.classList.add('loaded');
    }, 2500);
}
