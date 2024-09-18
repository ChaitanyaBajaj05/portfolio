// Smooth Scroll for anchor links
document.querySelectorAll('.sidenav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  // Modal functionality
const modal = document.getElementById('modal1');
const modalBtn = document.querySelector('.project-card'); // Adjust selector as needed
const closeBtn = document.querySelector('.close-modal');

// Open modal
modalBtn.addEventListener('click', () => {
  modal.style.display = 'block';
});

// Close modal
closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Close modal when clicking outside the content
window.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});
// JavaScript to animate skill bars
document.addEventListener('DOMContentLoaded', () => {
    const skillsSection = document.getElementById('skills');
    const skillProgressElements = document.querySelectorAll('.skill-progress');
  
    const animateSkills = () => {
      skillProgressElements.forEach(skill => {
        const progress = skill.getAttribute('data-progress');
        skill.style.width = progress;
      });
    };
  
    const handleScroll = () => {
      const sectionPosition = skillsSection.getBoundingClientRect().top;
      const viewportHeight = window.innerHeight;
  
      if (sectionPosition < viewportHeight * 0.8) {
        animateSkills();
        window.removeEventListener('scroll', handleScroll);
      }
    };
  
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Trigger on initial load if section is already in view
  });
  

  document.querySelector('.sidenav-toggle').addEventListener('click', function() {
    const sidenav = document.getElementById('sidenav');
    sidenav.style.display = sidenav.style.display === 'block' ? 'none' : 'block';
  });

  
