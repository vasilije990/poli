var poliureten=document.querySelector("#poliureten");
var guma=document.querySelector("#guma");
var plastika=document.querySelector("#plastika");
var asid=document.querySelectorAll(".materijaliLi");
console.log(asid)
asid.forEach(function(element) {
    element.addEventListener("click",prikazi)
});


function prikazi (e) {
	asid.forEach(function(element) {
		element.classList.remove('red')	

	});
	console.log(this.attributes.selectProduct.value)
	this.classList.add('red')
	var divBlock=document.querySelector("#"+this.attributes.selectProduct.value+"");
	poliureten.classList.remove('block')
	guma.classList.remove('block')
	plastika.classList.remove('block')
	divBlock.classList.add('block')
	
}
