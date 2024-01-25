/* HEADER FIN */
const boton__sidebar = document.querySelector('#hamburguesita');
const sidebar = document.querySelector('.sidebar');
let root = document.querySelector(':root');
let purchase__sidebar = document.querySelector('#purchase_sidebar')
let sidebarWidth = 300;

function sidebar_display(){
  if (sidebar.style.display === 'none') {
    sidebar.style.display = 'block';
    
  } else {
    
    sidebar.style.display = 'none';
  }
}
function side_rezise() { /* Ayuda con el responsive de la sidebar  */
  if (window.matchMedia("(min-width: 1199px)").matches) {
    sidebar.style.display = 'block';

  } 
}
boton__sidebar.addEventListener('click', () => {
  
  if (sidebarWidth === 300) {
    root.style.setProperty('--sidebar-width', '60px');
    sidebarWidth = 60;
    purchase__sidebar.style.display = 'none';
  } else {
    root.style.setProperty('--sidebar-width', '300px');
    sidebarWidth = 300;
    purchase__sidebar.style.display = 'block';
  }
  if (window.matchMedia("(max-width: 1200px)").matches) {

    sidebar_display();
    purchase__sidebar.style.display = 'block';

  } else {
    sidebar.style.display = 'block';
  }
  
});

window.addEventListener('resize', side_rezise);



/* HEADER FIN */

/* SIDEBAR INICIO */

let listElements = document.querySelectorAll('.listN__button--click');

listElements.forEach(listElement => {
    listElement.addEventListener('click', () => {

        listElement.classList.toggle('arrow');

        let height = 0;
        let menu = listElement.nextElementSibling;
        if(menu.clientHeight == "0"){
            height=menu.scrollHeight;
        }

        menu.style.height = `${height}px`
    })
})
/* SIDEBAR FIN */

/* Ajustes INICIO */
const boton__ajustes = document.querySelector('.boton__ajustes');
const ajustes = document.querySelector('.capa__ajustes');
boton__ajustes.addEventListener('click', () => {
  
  if (ajustes.style.display === 'none') {
    ajustes.style.display = 'block';
  } else {
    
    ajustes.style.display = 'none';
  }
});

document.addEventListener("DOMContentLoaded", function() {
    const closeButton = document.querySelector(".close-button");
    const capaAjustes = document.querySelector(".capa__ajustes");
    closeButton.addEventListener("click", function() {
      capaAjustes.style.display = "none";
    });
  });
  
  
/* Ajustes FIN */