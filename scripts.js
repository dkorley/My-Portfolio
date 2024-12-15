// Sample Data for Political Polarization Chart
const ctx = document.getElementById('polarizationChart').getContext('2d');
const polarizationChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['18-24', '25-34', '35-44', '45-54', '55+'], // Age groups
        datasets: [{
            label: 'Political Polarization',
            data: [65, 59, 80, 81, 56], // Data for each age group
            backgroundColor: 'rgba(0, 123, 255, 0.6)',
            borderColor: 'rgba(0, 123, 255, 1)',
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// Contact Form Validation
document.getElementById('contact-form').addEventListener('submit', function(e) {
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Simple validation check
    if (!name || !email || !message) {
        e.preventDefault();  // Prevent form submission
        alert("Please fill out all fields.");
    }
});

// Profile Image Upload
function loadProfileImage(event) {
    const reader = new FileReader();
    
    reader.onload = function() {
        const output = document.getElementById('profile-img');
        output.src = reader.result; // Update the src attribute with the uploaded image
    };
    
    if (event.target.files && event.target.files[0]) {
        reader.readAsDataURL(event.target.files[0]); // Read the file as a data URL
    }
}





// Contact Form Validation
document.getElementById('contact-form').addEventListener('submit', function(e) {
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Simple validation check
    if (!name || !email || !message) {
        e.preventDefault();  // Prevent form submission
        alert("Please fill out all fields.");
    }
});

// Profile Image Upload
function loadProfileImage(event) {
    const reader = new FileReader();
    
    reader.onload = function() {
        const output = document.getElementById('profile-img');
        output.src = reader.result; // Update the src attribute with the uploaded image
    };
    
    if (event.target.files && event.target.files[0]) {
        reader.readAsDataURL(event.target.files[0]); // Read the file as a data URL
    }
}

// Function to load the image when the user selects a file
function loadImage(event) {
    const fileInput = event.target;
    const file = fileInput.files[0];

    if (file) {
        const reader = new FileReader();

        reader.onload = function() {
            const profileImg = document.getElementById('profile-img');
            profileImg.src = reader.result; // Set the source of the image to the uploaded file
            profileImg.style.display = 'block'; // Show the image
        };

        reader.readAsDataURL(file); // Read the file as a data URL
    }
}
