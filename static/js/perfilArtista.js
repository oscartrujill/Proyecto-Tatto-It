ScrollReveal().reveal('.imageSR', {
    reset: true
});
  
ScrollReveal().reveal('.nombre_artista', {
delay: 200,
});
ScrollReveal().reveal('.descripcion_artista', {
delay: 700,
});
ScrollReveal().reveal('.contacto_artista', {
delay: 1100,
});
ScrollReveal().reveal('.caja_img', {
delay: 100,
});
  
/*tatuajes*/
document.querySelector('.boton_filtro').addEventListener("click",(event) => {
event.preventDefault();
document.querySelector('.caja_filtros').classList.toggle('active');
document.querySelector('.filtro_cuerpo').classList.toggle('active');
document.querySelector('.filtro_estilo').classList.toggle('active');
});