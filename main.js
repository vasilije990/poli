
var buttonMeni=document.querySelector('.mobMeni i');
var padajuciNav=document.querySelector('.mobMeni ul');
buttonMeni.addEventListener('click', padajuciMeni );
var mobMeni=document.querySelector('.mobMeni')
var body=document.querySelector('body')
document.addEventListener('scroll',skrol);
var navBar=document.querySelector('header');
var navBar=document.querySelector('header');
var kocka=document.querySelector('.kocka');
var navLogo=document.querySelector('nav div img');
var navFont=Array.from(document.querySelectorAll('nav ul li a'));
var brojacSlika=0;
 skrol()


 function padajuciMeni () {
 	console.log('123')
  	padajuciNav.classList.toggle('block')
  } 
function skrol() {
	if (window.scrollY>100) {
		
		navBar.classList.add('navColor')
		navLogo.classList.add('navLogo')
		// navFont.map(dodaj);
		kocka.classList.add('width0')
		mobMeni.classList.add("fixedMob")


	}
	else {
		navBar.classList.remove('navColor')
		navLogo.classList.remove('navLogo')
		// navFont.map(izbaci);
		kocka.classList.remove('width0')
		mobMeni.classList.remove("fixedMob")
	}
}





// function izbaci (el) {
// 	el.classList.remove('red')
// }
// 				function dodaj (el) {
// 	el.classList.add('red')
// 	console.log(navFont)
// }
// Galerija
