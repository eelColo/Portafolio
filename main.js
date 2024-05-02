
// Atributos


// Proyectos

const proyectInfo = [
    {
        titulo: "Producto API",
        tecnologias: ["Java", 'Spring-Boot', 'Html', 'Css', 'mySQL', 'Tomcat', 'Hibernate', 'PostMan'],
        link: "https://github.com/eelColo/ProductoApi",
        imgUrl: 'css/assets/examples/producto-api-example.png'
    },
    {
        titulo: "Lumina LandinPage",
        tecnologias: ["Html5", "Css", "Bootstrap"],
        link: "https://github.com/eelColo/Lumina",
        imgUrl: 'css/assets/examples/lumina.png'
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
        
        titulo: "FullStack-Developer | Fundacion Pescar | J.P Morgan",
        certificado: "",
        resumen: "Capacitacion laboral FullStack de la mano de Fundacion Pescar donde me estoy capacitando como desarrollador web fullstack con tecnologias y teoria sobre: HTML5, Css, JavaScript, Node.js, Maquetacion web avanzada, React, Angular, MongoDB, UML, etc.",
        finalizado: false
    }
]



// Funciones




// Renderizado de tecnologias del HEADER
function renderTechH(){
    // Header
    const hTech = document.getElementById("tech1");
    const listTech = ['Java', 'HTML5', 'Css', 'Javascript', 'mySql', 'Spring-boot'];
    for(let element of listTech){
        hTech.innerHTML += `<li class="m-2 d-inline-block">${element}</li>`;
    }
}





// Renderizado de proyectos y luego las tecnologias utilizadas dentro del mismo
function renderProys(){
    const proyects = document.getElementById("proyectoCarousel");

    for(let i = 0; i < proyectInfo.length; i++){
        const actualItem = proyectInfo[i];
        proyects.innerHTML += `
        <div class="carousel-item ${i === 0 ? 'active' : ''}">
            <img src="${actualItem.imgUrl}" class="d-inline-block img-fluid " alt="proyecto_${actualItem.titulo}">
            <a href="${actualItem.link}" class="carousel-caption d-none d-md-block ">

            <h5 class="mb-4">${actualItem.titulo}</h5>
            
            <ul id="slidetec${i}" class="p-0 d-none d-md-block">
            </ul>   
            </button>
        </div>`

        const slideUl = document.getElementById("slidetec" + i);
        
        for(let x = 0; x < actualItem.tecnologias.length; x++){  
            const slideLi = document.createElement('li');
            slideLi.className = "d-inline p-1 m-1 border border-1 border-black tec";
            slideLi.textContent = actualItem.tecnologias[x];
            slideUl.appendChild(slideLi);
        }
        
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
            <span class="enchantingxp">${estudiosInf[x].finalizado ? 'Terminado' : "Cursando"}</span>
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

//Boton para detener el gif

const stopGif = () => {
    const headerBackground = document.querySelector("header");
    const mainBackground = document.querySelector("main");
    

    const stopButton = document.querySelector(".a");
    const logo = document.querySelector(".a svg");
    console.log(logo);

    stopButton.addEventListener('click', () => {

        if(headerBackground.classList.contains('gifBack') && mainBackground.classList.contains('gifBack')){

            stopButton.innerHTML = 
            `<svg  xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">
            <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393"/>
            </svg>`

            logo.setAttribute('id', 'playButton1');
            
            headerBackground.classList.remove("gifBack");
            mainBackground.classList.remove("gifBack");

            mainBackground.classList.add("pngBack");
            headerBackground.classList.add("pngBack");

            
        } else if(headerBackground.classList.contains('pngBack') && mainBackground.classList.contains('pngBack')) {
            
            stopButton.innerHTML = 
            `<svg id="stopButton1" xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-stop-fill" viewBox="0 0 16 16">
            <path d="M5 3.5h6A1.5 1.5 0 0 1 12.5 5v6a1.5 1.5 0 0 1-1.5 1.5H5A1.5 1.5 0 0 1 3.5 11V5A1.5 1.5 0 0 1 5 3.5"/>
            </svg>`

            mainBackground.classList.remove("pngBack");
            headerBackground.classList.remove("pngBack");

            headerBackground.classList.add("gifBack");
            mainBackground.classList.add("gifBack");
        }

    });

}





















//eventos
document.addEventListener('DOMContentLoaded',() =>{
    renderTechH();
    renderProys();
    renderStudies();
    evButton();
    stopGif();
});
