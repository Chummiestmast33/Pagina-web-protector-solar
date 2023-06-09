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
function abrirWhatsapp(){
  let win= window.open("https://api.whatsapp.com/send?phone=528712500956&text=Hola%2C%20me%20interesa%20el%20bloqueador%20solar%20de%20nopal%20%C2%BFSigue%20disponible%3F", '_blank');
  win.focus

}
window.addEventListener('resize', cambiarTamano);

cambiarTamano();