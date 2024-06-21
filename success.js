document.addEventListener("DOMContentLoaded", function() {
    const userEmailEl = document.getElementById('user-email');
    const emailValue = localStorage.getItem('emailValue');
    if (emailValue) {
        userEmailEl.textContent = emailValue;
    }
});
