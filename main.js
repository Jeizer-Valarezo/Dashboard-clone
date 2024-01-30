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
/*GRÁFICOS*/
/*Gráfico 1*/
const ctx = document.getElementById('miGrafico').getContext('2d');

const data = {
  labels: ['Sun','Mon','Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  datasets: [{
    data: [6000, 10000, 7500, 4000, 3500, 5500, 6000],
    backgroundColor: 'rgba(44, 123, 229, 0.8)',
    hoverBackgroundColor: 'rgba(44, 123, 229, 1)',
    borderWidth: 1,
    borderRadius: 35, 
    barPercentage: 1,
    maxBarThickness: 10000,
    barThickness: 10,
  }]
};

let options = {
  scales: {
    x: {
      display: false, 
    },
    y: {
      display: false, 
    }
  },
  plugins: {
        legend: {
          display: false, 
        }},
  responsive: true,
  maintainAspectRatio: false,
};

let miGrafico = new Chart(ctx, {
  type: 'bar',
  data: data,
  options: options
});

/*Gráfico 2*/
const ctx2 = document.getElementById('miGrafico2').getContext('2d');

const data2 = {
  labels: ['Semana 4', 'Semana 5'],
  datasets: [{
    label: 'Ventas',
    data: [15000, 43400],
    fill: false,
    borderColor: 'rgba(66, 136, 231, 1)',
    borderWidth: 4,
    pointBackgroundColor: 'rgba(255, 255, 255, 1)',
    pointRadius: 5,
    pointHoverRadius: 7,
    tension: 0.8,
  }]
};

const options2 = {
  scales: {
    x: {
      display: false, 
    },
    y: {
      display: false, 
    }
  },
  plugins: {
    legend: {
      display: false, 
    },
    tooltip: {
      enabled: false, 
    }
  },
  responsive: true,
  maintainAspectRatio: false,
};

var miGrafico2 = new Chart(ctx2, {
  type: 'line',
  data: data2,
  options: options2
});

/*Grafico 3*/
const ctx3 = document.getElementById('miGrafico3').getContext('2d');

const data3 = {
  labels: ['Samsung', 'Huawei', 'Apple'],
  datasets: [{
    data: [58, 21, 22],
    backgroundColor: ['rgb(48, 135, 251)', 
    'rgb(442, 206, 255)', 
    'rgb(237, 248, 255)'],
    borderWidth: 0, 
  }]
};

const options3 = {
  responsive: true,
  maintainAspectRatio: false,
  cutout: '90%',
  plugins: {
   legend: {
    display: false, // Oculta la leyenda
  },
}};

const miGrafico3 = new Chart(ctx3, {
  type: 'doughnut',
  data: data3,
  options: options3
});

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



      document.addEventListener("DOMContentLoaded", function () {
      const customSelect = document.getElementById('customSelect');
      const selectedOption = customSelect.querySelector('.selected-option');
      const optionsContainer = customSelect.querySelector('.options');
      const options = customSelect.querySelectorAll('.option');

      // Event listener para mostrar/ocultar opciones al hacer clic en el div
      selectedOption.addEventListener('click', function () {
        optionsContainer.style.display = optionsContainer.style.display === 'none' ? 'block' : 'none';
      });

      // Event listener para manejar la selección de una opción
      options.forEach(option => {
        option.addEventListener('click', function () {
          const selectedValue = this.getAttribute('data-value');
          selectedOption.textContent = `Opción seleccionada: ${selectedValue}`;
          optionsContainer.style.display = 'none';
        })
      })
    });
  