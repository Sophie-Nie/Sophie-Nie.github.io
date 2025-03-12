document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.ner img, .zpbox img').forEach(img => {
      img.onclick = function () {
        showModal(this.src);
      }
    }); 
  
    function showModal(src) {
      const modal = document.getElementById('modal');
      const modalImg = document.getElementById('modal-image');
      modal.style.display = 'flex';
      modalImg.src = src;
    }
  
    function hideModal() {
      document.getElementById('modal').style.display = 'none';
    }
  
    document.getElementById('modal').onclick = function (e) {
      if (e.target === this) hideModal();
    }
  });