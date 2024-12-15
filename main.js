
//Boton para detener el gif

const stopGif = () => {
    const headerBackground = document.querySelector("header");
    const mainBackground = document.querySelector("main");
    

    const stopButton = document.querySelector(".alter");
    const logo = document.querySelector(".alter svg");
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
    
    stopGif();
});
