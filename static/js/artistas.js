document.querySelector('.boton_filtro').addEventListener("click",(event) => {
    event.preventDefault();
    document.querySelector('.caja_filtros').classList.toggle('active');
    document.querySelector('.filtro_cuerpo').classList.toggle('active');
    document.querySelector('.filtro_estilo').classList.toggle('active');
  });