document.addEventListener("DOMContentLoaded", function () {
    // Smooth scroll to sections
    const navLinks = document.querySelectorAll("nav ul li a");

    navLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 50,
                    behavior: "smooth"
                });
            }
        });
    });

    // Example of a modal popup for "Plan Your Trip"
    const ctaButton = document.querySelector(".cta-button");
    const modal = document.createElement("div");
    const modalContent = document.createElement("div");

    modal.classList.add("modal");
    modalContent.classList.add("modal-content");

    modalContent.innerHTML = `
        <span class="close-button">&times;</span>
        <h2>Plan Your Eco-Friendly Trip</h2>
        <p>Details about planning your trip will go here.</p>
    `;

    modal.appendChild(modalContent);
    document.body.appendChild(modal);

    ctaButton.addEventListener("click", function (e) {
        e.preventDefault();
        modal.style.display = "block";
    });

    // Close the modal
    const closeButton = document.querySelector(".close-button");

    closeButton.addEventListener("click", function () {
        modal.style.display = "none";
    });

    // Close the modal if the user clicks outside of it
    window.addEventListener("click", function (e) {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });
});
