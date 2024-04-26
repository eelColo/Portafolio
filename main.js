
// Atributos
// Header
const hTech = document.getElementById("tech1");
const listTech = ['Java', 'HTML5', 'Css', 'Javascript', 'mySql', 'Spring-boot'];

// Proyectos
const proyects = document.getElementById("proyectoCarousel");
const proyectInfo = [
    {
        titulo: "Producto API",
        tecnologias: ["Java", 'Spring-Boot', 'Html', 'Css', 'mySQL', 'Tomcat', 'Hibernate'],
        link: "https://github.com/eelColo/ProductoApi",
        imgUrl: 'css/assets/examples/producto-api-example.png'
    }
];

// Estudios
const estudios = document.getElementById("formacion");
const estudiosInf = [
    {
        titulo: "Java Developer | Educacion IT",
        certificado: "",
        resumen: "Bootcamp Java Backend donde me capacitaron en desarrollo web con Java Spring-Framework, Maven, Git & Github, mySQL entre otras. <br> Desarrollamos API`S RESTFULL que se comunicaban con nuestra base de datos mySQL e interactuaban con nuestros maquetados.",
        finalizado: true
    },
    {
        titulo: "FullStack-Developer | Fundacion Pescar junto a J.P Morgan",
        certificado: "",
        resumen: "Capacitacion laboral FullStack de la mano de Fundacion Pescar donde me estoy capacitando como desarrollador web fullstack con tecnologias y teoria sobre: HTML5, Css, JavaScript, Node.js, Maquetacion web avanzada, React, Angular, MongoDB, UML, etc.",
        finalizado: false
    }
]



// Funciones

// Renderizado de tecnologias del HEADER
function renderTechH(){
    for(let element of listTech){
        hTech.innerHTML += `<li class="m-2 d-inline-block">${element}</li>`;
    }
}

// Renderizado de tecnologias dentro del proyecto para apartado de trabajos
function renderProysTech(){
    for(let item of proyectInfo){
        
        for(let i = 0; i < item["tecnologias"].length; i++){
            
            const slideUl = document.querySelector("#slidetec");
            const slideLi = document.createElement('li');
            Object.assign(slideLi, {
                className: "d-inline p-1 m-1 border border-1 border-black tec",
                textContent: item.tecnologias[i]
            });
            slideUl.appendChild(slideLi);
        }
    }
}



// Renderizado de proyectos (llama a la funcion de arriba para renderizar tecnologias)
function renderProys(){
    for(let item of proyectInfo){
        proyects.innerHTML += `
        <div class="carousel-item active">
            <img src="${item.imgUrl}" class="d-inline-block w-100" alt="proyecto_${item.titulo}">
            <ul id="slidetec" class="carousel-caption d-none d-md-block">

            </ul>
        </div>`
        renderProysTech();
    }
}


function renderStudies(){
    for(let x = 0; x < estudiosInf.length ; x++){
        estudios.innerHTML+= `
        <li class="col-12 enchanting m-auto d-flex" >
            <img src="css/assets/logos/Experience_Orb.webp" alt="xp_orb">
            <button class="enchantingButton">
                
                ${estudiosInf[x].titulo}
                    
            </button> 
            <span class="enchantingxp">29</span>
        </li>
        <p id="resumen${x}" class="d-none habilidadesp text-center w-75 p-2 m-auto">${estudiosInf[x].resumen}</p>
        `

        
    }
}








// Recupera los botones de los estudios, los itera y a cada uno le agrega un addEventListener al click para que tome el id de los resumenes y chequee si tiene la clase d-none y cambiarla por block o none devuelta
const evButton = () => {
    const estudiosButton = document.querySelectorAll('.enchantingButton');
    
    
    estudiosButton.forEach((btn, i) => {
        
        btn.addEventListener('click', () => {
            
            const resumenEstudios = document.getElementById("resumen" + i);
            if(resumenEstudios.className == "d-none"){
                resumenEstudios.classList.toggle("d-block");
            } else {
                resumenEstudios.classList.toggle("d-none");
            }
            
        });
    
    });
}
//eventos
document.addEventListener('DOMContentLoaded',() =>{
    renderTechH();
    renderProys();
    renderStudies();
    evButton();
});
