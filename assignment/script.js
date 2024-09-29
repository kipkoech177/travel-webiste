document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const href = this.getAttribute('href');
        document.querySelector(href).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
document.querySelector('a[href="#"]').addEventListener('click', function() {
    alert("Booking feature is coming soon!");
});
const topButton = document.getElementById('scrollToTopBtn');

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        topButton.style.display = "block";
    } else {
        topButton.style.display = "none";
    }
}

topButton.addEventListener('click', function() {
    document.documentElement.scrollTop = 0; 
});


document.addEventListener('DOMContentLoaded', function () {

    
    const form = document.querySelector('form');

   
    form.addEventListener('submit', function (event) {
        
        event.preventDefault();

       n
        let name = document.getElementById('name').value.trim();
        let email = document.getElementById('email').value.trim();
        let enquiry = document.getElementById('enquiry').value.trim();
        let appointment = document.getElementById('appointment').value.trim();

        

        
        if (name === '' || email === '' || enquiry === '') {
            alert('Please fill out all required fields.');
            return;
        }

        
        if (!email.match(emailPattern)) {
            alert('Please enter a valid email address.');
            return;
        }

        
        if (appointment) {
            let currentDate = new Date();
            let selectedDate = new Date(appointment);
            if (selectedDate < currentDate) {
                alert('Please choose a future date for your travel.');
                return;
            }
        }

       
        alert('Thank you for your enquiry, ' + name + '! We will get back to you shortly.');

        form.reset();
    });
});


