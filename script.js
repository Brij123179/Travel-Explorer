// Navigation active link highlighting
document.addEventListener('DOMContentLoaded', function() {
    // Get current page URL
    const currentPage = window.location.pathname.split('/').pop();
    
    // Remove active class from all links
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.classList.remove('active');
    });
    
    // Add active class to current page link
    if (currentPage === 'index.html' || currentPage === '') {
        document.querySelector('.nav-links a[href="index.html"]').classList.add('active');
    } else if (currentPage === 'about.html') {
        document.querySelector('.nav-links a[href="about.html"]').classList.add('active');
    } else if (currentPage === 'contact.html') {
        document.querySelector('.nav-links a[href="contact.html"]').classList.add('active');
    }
    
    // Contact form submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            // In a real application, you would send this data to a server
            console.log('Form submitted:', { name, email, message });
            
            alert('Thank you for your message! We will get back to you soon.');
            contactForm.reset();
        });
    }
    
    // Explore button functionality
    const exploreBtn = document.getElementById('exploreBtn');
    if (exploreBtn) {
        exploreBtn.addEventListener('click', function() {
            document.querySelector('.recommendations').scrollIntoView({
                behavior: 'smooth'
            });
        });
    }
    
    // Dynamic recommendation loading (simulated)
    const beachSection = document.getElementById('beach-section');
    const templeSection = document.getElementById('temple-section');
    const countrySection = document.getElementById('country-section');
    
    if (beachSection && templeSection && countrySection) {
        // In a real app, you would fetch this data from an API
        const recommendations = {
            beaches: [
                {
                    name: "Maldives",
                    description: "Pristine white sand beaches and crystal clear waters perfect for relaxation.",
                    image1: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
                    image2: "https://images.unsplash.com/photo-1519046904884-53103b34b206"
                },
                {
                    name: "Bora Bora",
                    description: "Luxurious overwater bungalows and stunning lagoons in French Polynesia.",
                    image1: "https://images.unsplash.com/photo-1579130781921-76e18892b57b",
                    image2: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4"
                }
            ],
            temples: [
                {
                    name: "Angkor Wat",
                    description: "The largest religious monument in the world located in Cambodia.",
                    image1: "https://images.unsplash.com/photo-1580327344181-c1163234e5a0",
                    image2: "https://images.unsplash.com/photo-1566438480900-0609be27a4be"
                },
                {
                    name: "Borobudur",
                    description: "9th-century Mahayana Buddhist temple in Indonesia with stunning sunrise views.",
                    image1: "https://images.unsplash.com/photo-1544551763-46a013bb70d5",
                    image2: "https://images.unsplash.com/photo-1560857794-6b0b6c5f0b9e"
                }
            ],
            countries: [
                {
                    name: "Japan",
                    description: "Experience the perfect blend of ancient traditions and cutting-edge technology.",
                    image1: "https://images.unsplash.com/photo-1492571350019-22de08371fd3",
                    image2: "https://images.unsplash.com/photo-1492571350019-22de08371fd3"
                },
                {
                    name: "Italy",
                    description: "From Roman ruins to Renaissance art and world-class cuisine.",
                    image1: "https://images.unsplash.com/photo-1518391846015-55a9cc003b25",
                    image2: "https://images.unsplash.com/photo-1533676802871-eca1ae998cd5"
                }
            ]
        };
        
        // This is where you would dynamically populate the recommendations
        // For this example, we're using static content in the HTML
    }
});