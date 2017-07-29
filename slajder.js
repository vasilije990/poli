var slajd=Array.from(document.querySelectorAll('.poxetnaSlajder'));
var brojacSlika=0;
setInterval(slajder,5000)
function slajder() {
var tekst=document.querySelectorAll('.poxetnaSlajder h1');
	if (brojacSlika>2) {
		brojacSlika=0;
		console.log(brojacSlika)
	}
	slajd.forEach(function  (el) {

		el.classList.remove('block')		
	})
	slajd[brojacSlika].classList.add('block');
	tekst[brojacSlika]
	// .classList.add('efekatSlova');
	console.log(tekst)
	brojacSlika++;
}






