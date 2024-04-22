
//atributos
const hTech = document.getElementById("tech1");
const LTech = ['Java', 'HTML5', 'Css', 'Javascript', 'mySql', 'Spring-boot'];

const proyects = document.getElementById("proyectoCarousel");
const proyectInfo = [
    {
        titulo: "Producto API",
        tecnologias: ["Java", 'Spring-Boot', 'Html', 'Css', 'mySQL', 'Tomcat', 'Hibernate'],
        link: "https://github.com/eelColo/ProductoApi",
        imgUrl: 'css/assets/examples/producto-api-example.png'
    }
];



//funciones
//renderizado de tecnologias del HEADER
function renderTechH(){
    for(let element of LTech){
        hTech.innerHTML += `<li class="m-2 d-inline-block">${element}</li>`;
    }
}

// Renderizado de tecnologias dentro del proyecto
function renderProysTech(){
    for(let item of proyectInfo){
        
        for(let i = 0; i < item["tecnologias"].length; i++){
            console.log(item.tecnologias);
            const slide = document.querySelector("#slidetec");
            slide.innerHTML += `<p id="slidetec" class="d-inline p-1 m-1 border border-1 border-black tec">${item.tecnologias[i]}</p>`
        }
    }
}

// Renderizado de proyectos (llama a la funcion de arriba para renderizar tecnologias)
function renderProys(){
    for(let item of proyectInfo){
        proyects.innerHTML += `
        <div class="carousel-item active">
            <img src="${item.imgUrl}" class="d-block w-100" alt="...">
            <div id="slidetec" class="carousel-caption d-none d-md-block">

            </div>
        </div>`
        renderProysTech();
    }
}





//borrar y rehacer
function toggletext(number){
    var text = document.getElementById("habilidades" + number);
    if(text.style.display == "none"){
        text.style.display = "block";
    } else {
        text.style.display = "none";
    }


}

//eventos
renderTechH();
renderProys();