function scrollToSection() {
    var section = document.getElementById("secondary-content");
    section.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
}
