<<<<<<< HEAD
// Detectar y compensar el zoom del navegador
function updateZoomCompensation() {
  // Obtener el nivel de zoom actual
  const zoomLevel = window.devicePixelRatio || window.visualViewport?.scale || 1;
  
  // Compensar el zoom aplicando una escala inversa
  const compensation = 1 / zoomLevel;
  
  // Aplicar la compensación al page-shell
  const pageShell = document.querySelector('.page-shell');
  if (pageShell) {
    pageShell.style.transform = `scale(${compensation})`;
    pageShell.style.transformOrigin = 'top center';
    pageShell.style.transition = 'transform 0.1s ease-out';
  }
}

// Ejecutar al cargar la página
window.addEventListener('load', updateZoomCompensation);

// Ejecutar cuando el usuario cambia el zoom
window.addEventListener('resize', updateZoomCompensation);

// Ejecutar cuando cambia la vista
window.visualViewport?.addEventListener('resize', updateZoomCompensation);
window.visualViewport?.addEventListener('scroll', updateZoomCompensation);

// Ejecutar periódicamente para capturar cambios de zoom rápidos
setInterval(updateZoomCompensation, 500);

// Funcionalidad del botón "Mostrar más"
document.addEventListener('DOMContentLoaded', function() {
  const showMoreBtn = document.getElementById('showMoreBtn');
  const hiddenProducts = document.querySelectorAll('.product-hidden');
  
  if (showMoreBtn) {
    showMoreBtn.addEventListener('click', function() {
      hiddenProducts.forEach(product => {
        product.classList.toggle('show');
      });
      
      // Cambiar el texto del botón
      if (showMoreBtn.textContent === 'Mostrar más') {
        showMoreBtn.textContent = 'Mostrar menos';
      } else {
        showMoreBtn.textContent = 'Mostrar más';
      }
    });
  }

  // Funcionalidad del modal "Habla con Cabo"
  const chatBtn = document.getElementById('chatBtn');
  const chatModal = document.getElementById('chatModal');
  const closeModalBtn = document.querySelector('.close-modal');
  const modalOptions = document.querySelectorAll('.modal-option');
  const modalResponse = document.getElementById('modalResponse');

  // Abrir modal
  if (chatBtn) {
    chatBtn.addEventListener('click', function(e) {
      e.preventDefault();
      chatModal.classList.add('show');
    });
  }

  // Cerrar modal
  if (closeModalBtn) {
    closeModalBtn.addEventListener('click', function() {
      chatModal.classList.remove('show');
      modalResponse.classList.remove('show');
    });
  }

  // Manejar opciones del modal
  modalOptions.forEach(option => {
    option.addEventListener('click', function() {
      const optionType = this.getAttribute('data-option');
      let response = '';

      if (optionType === 'medicamento') {
        response = '💊 <strong>Consulta de medicamento:</strong><br>Contáctanos al correo hola@farmatech.demo para obtener información sobre medicamentos específicos.';
      } else if (optionType === 'horarios') {
        response = '🕐 <strong>Horarios de atención:</strong><br>Lunes a Viernes: 8:00 AM - 8:00 PM<br>Sábados: 9:00 AM - 6:00 PM<br>Domingos: 10:00 AM - 4:00 PM';
      } else if (optionType === 'ubicacion') {
        response = '📍 <strong>Ubicación de sucursales:</strong><br>Sarmiento, Godoy Cruz<br>Ozamis, Maipu<br>San Martin, Ciudad';
      }

      modalResponse.innerHTML = response;
      modalResponse.classList.add('show');
    });
  });

  // Cerrar modal al hacer click fuera
  chatModal.addEventListener('click', function(e) {
    if (e.target === chatModal) {
      chatModal.classList.remove('show');
      modalResponse.classList.remove('show');
    }
  });
});

=======
// Funcionalidad del botón "Mostrar más"
document.addEventListener('DOMContentLoaded', function() {
  const showMoreBtn = document.getElementById('showMoreBtn');
  const hiddenProducts = document.querySelectorAll('.product-hidden');
  
  if (showMoreBtn) {
    showMoreBtn.addEventListener('click', function() {
      hiddenProducts.forEach(product => {
        product.classList.toggle('show');
      });
      
      // Cambiar el texto del botón
      if (showMoreBtn.textContent === 'Mostrar más') {
        showMoreBtn.textContent = 'Mostrar menos';
      } else {
        showMoreBtn.textContent = 'Mostrar más';
      }
    });
  }

  // Funcionalidad del modal "Habla con Cabo"
  const chatBtn = document.getElementById('chatBtn');
  const chatModal = document.getElementById('chatModal');
  const closeModalBtn = document.querySelector('.close-modal');
  const modalOptions = document.querySelectorAll('.modal-option');
  const modalResponse = document.getElementById('modalResponse');

  // Abrir modal
  if (chatBtn) {
    chatBtn.addEventListener('click', function(e) {
      e.preventDefault();
      chatModal.classList.add('show');
    });
  }

  // Cerrar modal
  if (closeModalBtn) {
    closeModalBtn.addEventListener('click', function() {
      chatModal.classList.remove('show');
      modalResponse.classList.remove('show');
    });
  }

  // Manejar opciones del modal
  modalOptions.forEach(option => {
    option.addEventListener('click', function() {
      const optionType = this.getAttribute('data-option');
      let response = '';

      if (optionType === 'medicamento') {
        response = '💊 <strong>Consulta de medicamento:</strong><br>Contáctanos al correo hola@farmatech.demo para obtener información sobre medicamentos específicos.';
      } else if (optionType === 'horarios') {
        response = '🕐 <strong>Horarios de atención:</strong><br>Lunes a Viernes: 8:00 AM - 8:00 PM<br>Sábados: 9:00 AM - 6:00 PM<br>Domingos: 10:00 AM - 4:00 PM';
      } else if (optionType === 'ubicacion') {
        response = '📍 <strong>Ubicación de sucursales:</strong><br>Sarmiento, Godoy Cruz<br>Ozamis, Maipu<br>San Martin, Ciudad';
      }

      modalResponse.innerHTML = response;
      modalResponse.classList.add('show');
    });
  });

  // Cerrar modal al hacer click fuera
  chatModal.addEventListener('click', function(e) {
    if (e.target === chatModal) {
      chatModal.classList.remove('show');
      modalResponse.classList.remove('show');
    }
  });
});

>>>>>>> bf01303 (Primer commit)
