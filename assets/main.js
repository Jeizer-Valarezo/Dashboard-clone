/* HEADER FIN */
const boton__sidebar = document.querySelector('#hamburguesita');
const sidebar = document.querySelector('.sidebar');

boton__sidebar.addEventListener('click', () => {
  
  if (sidebar.style.display === 'none') {
    sidebar.style.display = 'block';
  } else {
    
    sidebar.style.display = 'none';
  }
});
/* HEADER FIN */

/* NAV INICIO */
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
/* NAV FIN */

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
/* Ajustes FIN */