function toggleMenu(){
    const navbar = document.querySelector('.Navbar');
    const computedStyle= getComputedStyle(navbar);
    
    if (computedStyle.display === 'block') {
        setTimeout(() => {
          navbar.style.display = 'none';
        }, 100); // Retraso de 700 ms para que se complete la transición
      } else {
        navbar.style.display = 'block';
      }
}
function cambiarTamano(){
    const navbar = document.querySelector('.Navbar');
    var pantallita = window.innerWidth;
    console.log("la pantalla cambio de tamaño a "+pantallita)
    if(pantallita > 520){
        navbar.style.display = 'flex';
    }
    else{
        navbar.style.display = 'none';
    }
}
window.addEventListener('resize', cambiarTamano);

cambiarTamano();