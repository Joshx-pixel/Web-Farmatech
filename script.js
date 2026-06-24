// Detectar y compensar el zoom del navegador
function updateZoomCompensation() {
  const zoomLevel = window.devicePixelRatio || window.visualViewport?.scale || 1;
  const compensation = 1 / zoomLevel;

  const pageShell = document.querySelector('.page-shell');
  if (pageShell) {
    pageShell.style.transform = `scale(${compensation})`;
    pageShell.style.transformOrigin = 'top center';
    pageShell.style.transition = 'transform 0.1s ease-out';
  }
}

window.addEventListener('load', updateZoomCompensation);
window.addEventListener('resize', updateZoomCompensation);
window.visualViewport?.addEventListener('resize', updateZoomCompensation);
window.visualViewport?.addEventListener('scroll', updateZoomCompensation);
setInterval(updateZoomCompensation, 500);

// Funcionalidad del botón "Mostrar más"
document.addEventListener('DOMContentLoaded', function() {
  const showMoreBtn = document.getElementById('showMoreBtn');
  const hiddenProducts = document.querySelectorAll('.product-hidden');
  const chatBtn = document.getElementById('chatBtn');
  const chatModal = document.getElementById('chatModal');
  const closeModalBtn = document.querySelector('.close-modal');
  const modalOptions = document.querySelectorAll('.modal-option');
  const modalResponse = document.getElementById('modalResponse');

  if (showMoreBtn) {
    showMoreBtn.addEventListener('click', function() {
      hiddenProducts.forEach(product => {
        product.classList.toggle('show');
      });
      showMoreBtn.textContent = showMoreBtn.textContent === 'Mostrar más' ? 'Mostrar menos' : 'Mostrar más';
    });
  }

  if (chatBtn && chatModal) {
    chatBtn.addEventListener('click', function(e) {
      e.preventDefault();
      chatModal.classList.add('show');
    });
  }

  if (closeModalBtn && chatModal) {
    closeModalBtn.addEventListener('click', function() {
      chatModal.classList.remove('show');
      modalResponse?.classList.remove('show');
    });
  }

  modalOptions.forEach(option => {
    option.addEventListener('click', function() {
      const optionType = this.getAttribute('data-option');
      let response = '';

      if (optionType === 'medicamento') {
        response = '💊 <strong>Consulta de medicamento:</strong><br>Contáctanos al correo hola@farmatech.demo para obtener información sobre medicamentos específicos.';
      } else if (optionType === 'horarios') {
        response = '🕐 <strong>Horarios de atención:</strong><br>Lunes a Viernes: 8:00 AM - 8:00 PM<br>Sábados: 9:00 AM - 6:00 PM<br>Domingos: 10:00 AM - 4:00 PM';
      } else if (optionType === 'ubicacion') {
        response = '📍 <strong>Ubicación de sucursales:</strong><br>Sarmiento, Godoy Cruz<br>Ozamis, Maipú<br>San Martín, Ciudad';
      }

      if (modalResponse) {
        modalResponse.innerHTML = response;
        modalResponse.classList.add('show');
      }
    });
  });

  if (chatModal) {
    chatModal.addEventListener('click', function(e) {
      if (e.target === chatModal) {
        chatModal.classList.remove('show');
        modalResponse?.classList.remove('show');
      }
    });
  }
});
