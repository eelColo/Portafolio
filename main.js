
//atributos
const tech = document.getElementById("tech1");
const LTech = ['Java', 'HTML5', 'Css', 'Javascript', 'mySql', 'Spring-boot'];

const proyects = document.getElementById("proyectoCarousel");

const proyectInfo = [
    {
        titulo: "Producto API",
        tecnologias: ["Java", 'Spring-Boot', 'Html', 'Css', 'mySQL', 'Tomcat', 'Hibernate'],
        link: "https://github.com/eelColo/ProductoApi",
        imgUrl: 'css\assets\examples\producto-api-example.png'
    },
    {
        titulo: "",
        tecnologias: "",
        link: "",
        imgUrl: ""
    }
];



//funciones
//renderizado de tecnologias
function renderTech(){
    for(let element of LTech){
        tech.innerHTML += `<li class="m-2 d-inline-block">${element}</li>`;
    }
}

// Renderizado de proyectos
function renderProys(){
    for(let item of proyectInfo){
        
    }
}



function toggletext(number){
    var text = document.getElementById("habilidades" + number);
    if(text.style.display == "none"){
        text.style.display = "block";
    } else {
        text.style.display = "none";
    }


}

//eventos
renderTech();