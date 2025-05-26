//Inicialitza el componen "AOS" //
AOS.init();
// ----------------------------//
//Li posa un border i border radius al element actius de menú//
document.getElementById('active').style.border =
  '1px solid rgb(255, 255, 255)'; //Agafa el ID "Active" i li posa un estil border
document.getElementById('active').style.borderRadius = '10px'; // li posa un radi de 10px al border
// ----------------------------------------------------------//

// Algunes variables per el submenu //
const SubMenuMarques = document.getElementById('SubMenuMarques'); //Posa l'ID agafat en la variable "SubMenuMarques"

const SubMenuMes = document.getElementById('SubMenuMes'); //Posa l'ID agafat en la variable "SubMenuMes"
const NavContainer = document.getElementById('NavContainer');
//Activa i desactiva els submenus//
// Submenu "Marques" //
document.addEventListener('click', event => {
  if (
    event.target.matches('#MenuTriggerMarques') ||
    SubMenuMarques.contains(event.target)
  ) {
    SubMenuMarques.hidden = !SubMenuMarques.hidden;
  } else {
    SubMenuMarques.hidden = true;
  }
});
// Submenu "Més" //
document.addEventListener('click', event => {
  if (
    event.target.matches('#MenuTriggerMes') ||
    SubMenuMes.contains(event.target)
  ) {
    SubMenuMes.hidden = !SubMenuMes.hidden;
  } else {
    SubMenuMes.hidden = true;
  }
});
// ----------------------------------------------------------//

document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".ContainerMenuToggle");
  const navContainer = document.getElementById("NavContainer");

  menuToggle.addEventListener("click", function () {
      navContainer.classList.toggle("show-menu");
  });
});