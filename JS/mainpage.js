// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', checkLanguagePreference);


document.addEventListener('DOMContentLoaded', function() {
    const popupLinks = document.querySelectorAll('.popup-link');
    const popupModal = document.getElementById('popup-modal');
    const popupImg = document.getElementById('popup-img');

    popupLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            popupImg.src = this.href;
            popupModal.style.display = "block";
        });
    });
});

function closePopup() {
    document.getElementById("popup-modal").style.display = "none";
}