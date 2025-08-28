// Simple JavaScript for retro blog functionality
document.addEventListener('DOMContentLoaded', function() {
    // Update the last updated date
    const lastUpdated = document.getElementById('last-updated');
    if (lastUpdated) {
        const now = new Date();
        lastUpdated.textContent = now.toLocaleDateString();
    }

    // Simple visitor counter (client-side only)
    let visitorCount = localStorage.getItem('visitorCount');
    if (!visitorCount) {
        visitorCount = Math.floor(Math.random() * 1000) + 100; // Random starting number
        localStorage.setItem('visitorCount', visitorCount);
    } else {
        visitorCount = parseInt(visitorCount) + 1;
        localStorage.setItem('visitorCount', visitorCount);
    }
    
    const counterElement = document.querySelector('.counter');
    if (counterElement) {
        counterElement.textContent = visitorCount.toString().padStart(6, '0');
    }

    // Simple navigation functionality
    const navLinks = document.querySelectorAll('nav a');
    const sections = document.querySelectorAll('main section');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            
            // Hide all sections
            sections.forEach(section => {
                section.style.display = 'none';
            });
            
            // Show target section
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.style.display = 'block';
            }
        });
    });

    // Show home section by default
    sections.forEach((section, index) => {
        section.style.display = index === 0 ? 'block' : 'none';
    });

    // Add some retro effects
    function addRetroEffects() {
        // Random background color change (very subtle)
        const colors = ['#c0c0c0', '#d0d0d0', '#b0b0b0'];
        let colorIndex = 0;
        
        setInterval(() => {
            document.body.style.backgroundColor = colors[colorIndex % colors.length];
            colorIndex++;
        }, 30000); // Change every 30 seconds
    }

    addRetroEffects();

    // Console easter egg
    console.log('%c🌆 Welcome to UrbanBlog! 🌆', 'color: #800080; font-size: 16px; font-weight: bold;');
    console.log('Built with love and nostalgia for the early web!');
});
