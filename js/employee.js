// employee.js
document.addEventListener("DOMContentLoaded", function () {
    const logoutBtn = document.getElementById("logout-btn");

    // Adding event listener to the logout button
    logoutBtn.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent default logout behavior

        // Simulate logout by clearing session storage
        sessionStorage.clear();

        // Redirect to the login page
        window.location.href = "../dashboard.html";
    });
});
