function toggleContact() {
    var contactSection = document.getElementById("contact-info");
    if (contactSection.classList.contains("hidden")) {
        contactSection.classList.remove("hidden"); // Show the contact info
    } else {
        contactSection.classList.add("hidden"); // Hide the contact info
    }
}
