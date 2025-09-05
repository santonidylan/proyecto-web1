// scripts.js - validaciones y utilitarios básicos
document.addEventListener('DOMContentLoaded', function(){
  // año dinámico
  const yearEl = document.getElementById('year');
  if(yearEl) yearEl.textContent = new Date().getFullYear();

  // ejemplo simple: prevención de submit si campos vacíos (para el formulario de contacto)
  const form = document.querySelector('form');
  if(form){
    form.addEventListener('submit', function(e){
      const req = form.querySelectorAll('[required]');
      let valid = true;
      req.forEach(input => {
        if(!input.value.trim()) valid = false;
      });
      if(!valid){
        e.preventDefault();
        alert('Por favor completá los campos requeridos antes de enviar.');
      }
    });
  }
});
