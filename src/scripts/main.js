function toggleSidebar() {
    document.getElementById("sidebar").classList.toggle("sidebarOpen");
}

document.addEventListener('DOMContentLoaded', function () {
    const toggles = document.querySelectorAll('.dropdown-toggle');

    toggles.forEach(toggle => {
        toggle.addEventListener('click', function (event) {
            event.stopPropagation(); // Prevents the click event from propagating to the parent anchor
            const content = this.parentElement.nextElementSibling; // Find the sibling ul element
            if (content.style.display === "block") {
                content.style.display = "none";
                this.classList.remove('active');
            } else {
                content.style.display = "block";
                this.classList.add('active');
            }
        });
    });

    // Prevent dropdown from closing when clicking inside it
    document.querySelectorAll('.dropdown-content').forEach(content => {
        content.addEventListener('click', function (event) {
            event.stopPropagation();
        });
    });
});
