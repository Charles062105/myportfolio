// Registration Page JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Check if already registered
    const registeredName = localStorage.getItem('registeredName');
    if (registeredName) {
        window.location.href = 'index.html';
        return;
    }

    // Handle form submission
    const registerForm = document.getElementById('registerForm');
    
    if (registerForm) {
        registerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const fullNameInput = document.getElementById('fullName');
            const fullName = fullNameInput.value.trim();
            
            // Validation
            if (!fullName) {
                showMessage('Please enter your name.', 'error');
                fullNameInput.focus();
                return;
            }

            if (fullName.length < 2) {
                showMessage('Name must be at least 2 characters long.', 'error');
                fullNameInput.focus();
                return;
            }

            // Save to localStorage
            localStorage.setItem('registeredName', fullName);
            
            // Show success message
            showMessage('Registration successful! Redirecting...', 'success');
            
            // Redirect after a short delay
            setTimeout(function() {
                window.location.href = 'index.html';
            }, 1000);
        });
    }
});

// Show message function
function showMessage(message, type) {
    // Remove existing messages
    const existingMessage = document.querySelector('.form-message');
    if (existingMessage) {
        existingMessage.remove();
    }

    // Create message element
    const messageDiv = document.createElement('div');
    messageDiv.className = `form-message ${type}`;
    messageDiv.textContent = message;
    
    // Style the message
    messageDiv.style.cssText = `
        padding: 12px 20px;
        border-radius: 8px;
        margin-bottom: 20px;
        font-weight: 500;
        text-align: center;
        animation: slideInDown 0.3s ease;
    `;

    if (type === 'success') {
        messageDiv.style.background = 'rgba(16, 185, 129, 0.1)';
        messageDiv.style.color = '#10b981';
        messageDiv.style.border = '1px solid rgba(16, 185, 129, 0.3)';
    } else {
        messageDiv.style.background = 'rgba(239, 68, 68, 0.1)';
        messageDiv.style.color = '#ef4444';
        messageDiv.style.border = '1px solid rgba(239, 68, 68, 0.3)';
    }

    // Insert message before form
    const form = document.getElementById('registerForm');
    form.parentNode.insertBefore(messageDiv, form);

    // Auto remove after 5 seconds
    setTimeout(function() {
        messageDiv.style.animation = 'slideOutUp 0.3s ease';
        setTimeout(function() {
            messageDiv.remove();
        }, 300);
    }, 5000);
}

// Add animation keyframes
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInDown {
        from {
            opacity: 0;
            transform: translateY(-20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    @keyframes slideOutUp {
        from {
            opacity: 1;
            transform: translateY(0);
        }
        to {
            opacity: 0;
            transform: translateY(-20px);
        }
    }
`;
document.head.appendChild(style);
