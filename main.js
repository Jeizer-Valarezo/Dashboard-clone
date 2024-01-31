/* HEADER INICIO */
const boton__sidebar = document.querySelector('#hamburguesita');
const sidebar = document.querySelector('.sidebar');
const body = document.querySelector('body');
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

/* CONTENIDO INICIO */
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

const options = {
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

const miGrafico = new Chart(ctx, {
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

const miGrafico2 = new Chart(ctx2, {
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

/*Grafico 4*/

const chartData = {
  january: [60, 80, 60, 80, 65, 130, 120, 100 ,30 ,40 ,30, 70, 80],
  february: [100, 70, 80, 50, 120, 100, 130, 140, 90, 100, 40, 50, 60],
  march: [80, 50, 60, 40, 60, 120, 100, 130, 60, 80, 50, 60, 70],
  april: [70, 80, 100, 70, 90, 60, 80, 130, 40, 60, 50, 80, 90],
  may: [90, 40, 80, 80, 100, 140, 100, 130, 90, 60, 70, 50, 60],
  june: [80, 60, 80, 60, 40, 100, 120, 100, 30, 40, 30, 70, 80],
  july: [20, 40, 20, 50, 70, 60, 110, 80, 90, 30, 50, 50, 60],
  august: [60, 70, 30, 40, 80, 140, 80, 140, 120, 130, 100, 110, 120],
  september: [90, 90, 40, 60, 40, 110, 90, 110, 60, 80, 60, 70, 80],
  october: [50, 80, 50, 80, 50, 80, 120, 80, 50, 120, 110, 110, 120],
  november: [60, 90, 60, 70, 40, 70, 100, 140, 30, 40, 30, 70, 180],
  december: [20, 40, 20, 50, 30, 80, 120, 100, 30, 40, 30, 70, 80],

};

function showChart() {
  console.log('Entrando en showChart');
  const allCharts = document.querySelectorAll('.chart');
      allCharts.forEach(chart => {
        chart.style.display = 'none';
      });

  const selectedMonth = document.getElementById('months').value;
  console.log('Mes seleccionado:', selectedMonth);

  const selectedChart = document.getElementById(selectedMonth);
  console.log('Canvas seleccionado:', selectedChart);
  selectedChart.style.display = 'block';

  const data = chartData[selectedMonth];
  console.log('Datos del mes:', data);

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: '90%',
    plugins: {
     legend: {
      display: false,
    },
  }};
  const ctx = selectedChart.getContext('2d');
  selectedChart.width = selectedChart.width;

  const myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['1', '5', '9', '13', '17', '21', '25'],
      datasets: [{
        data: data,
        borderColor: 'rgba(49, 126, 230, 1)',
        borderWidth: 2,
        fill: false,
      }],
    },
    options: options,
  });
  console.log('Gráfico creado:', myChart);
}
document.addEventListener('DOMContentLoaded', function() {
  showChart();});


/* Cards 2 --> */

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
/* CONTENIDO FIN */
/* Ajustes INICIO */
const boton__ajustes = document.querySelector('.boton__ajustes');
const ajustes = document.querySelector('.capa__ajustes');
const darkmode =document.querySelector('#dark');
const lightmode =document.querySelector('#light');
boton__ajustes.addEventListener('click', () => {
  
  if (ajustes.style.display === 'none') {
    ajustes.style.display = 'block';
    body.style.overflow = 'hidden';
  } else {
    
    ajustes.style.display = 'none';
  }
});

document.addEventListener("DOMContentLoaded", function() {
    const closeButton = document.querySelector(".close-button");
    const capaAjustes = document.querySelector(".capa__ajustes");
    closeButton.addEventListener("click", function() {
      capaAjustes.style.display = "none";
      body.style.overflow = 'scroll';
    });
  });
darkmode.addEventListener("click", () => {
  root.style.setProperty('--fondo', 'rgb(6,19,37)');
  root.style.setProperty('--complemento-fondo', 'rgb(19,34,56)');
  root.style.setProperty('--cards', 'rgb(14,28,47)');
  root.style.setProperty('--font-color', '#cfcfcf');
})
lightmode.addEventListener("click", () => {
  root.style.setProperty('--fondo', '#edf2f9');
  root.style.setProperty('--complemento-fondo', '#f9fafd');
  root.style.setProperty('--cards', '#ffffff');
  root.style.setProperty('--font-color', '#000000');
})
  
function toggleBorder(element) {
   
  document.querySelectorAll('.light-mode-img, .dark-mode-img').forEach(img => {
      img.classList.remove('selected');
  });

  
  element.classList.add('selected');
}

function toggleBorderFin(element) {

  document.querySelectorAll(".nav1-img, .nav2-img, .nav3-img, .nav4-img").forEach(img => {
      img.classList.remove('selected');
  });

  element.classList.add('selected');
}
  
/* Ajustes FIN */



      
  
