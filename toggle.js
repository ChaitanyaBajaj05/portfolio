document.addEventListener('DOMContentLoaded', function() {
    const toggleBtn = document.getElementById('toggle-btn');
    const sidenav = document.getElementById('sidenav');
    const mainContent = document.querySelector('.main-content');
  
    toggleBtn.addEventListener('click', function() {
        sidenav.classList.toggle('show');
        mainContent.classList.toggle('shift');
    });
  });