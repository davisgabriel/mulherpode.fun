function setupCollapsibleButtons() {
    var coll = document.getElementsByClassName("collapsible");
    for (var i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function() {
            var isActive = this.classList.contains("active");
            // Close other open sections
            for (var j = 0; j < coll.length; j++) {
                var otherContent = coll[j].nextElementSibling;
                if (otherContent !== this.nextElementSibling) {
                    coll[j].classList.remove("active");
                    otherContent.style.maxHeight = null;
                }
            }
            // Toggle the clicked section
            this.classList.toggle("active");
            var content = this.nextElementSibling;
            if (isActive) {
                content.style.maxHeight = null; // Collapse the clicked section
            } else {
                content.style.maxHeight = content.scrollHeight + "px"; // Expand the clicked section
            }
        });
    }
}
setupCollapsibleButtons(); // Run when the page loads