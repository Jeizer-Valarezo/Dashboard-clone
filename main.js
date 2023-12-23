/* HEADER FIN */
const boton = document.querySelector('#hamburguesita');


const sidebar = document.querySelector('.sidebar');


boton.addEventListener('click', () => {
  
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