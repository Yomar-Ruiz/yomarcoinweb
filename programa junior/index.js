let circulo = document.querySelector('.circulo')
let color = document.querySelector('.color')
let boton = document.querySelector('.Cambio')


boton.addEventListener('click', (e) =>{
    e.preventDefault();
    circulo.style.backgroundColor = color.value;
},)