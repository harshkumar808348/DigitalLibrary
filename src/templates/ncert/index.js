// Get references to the search input and the list of items
const searchInput = document.getElementById("search-input");
const itemsList = document.getElementById("items-list").getElementsByTagName("li");

// Add an event listener to the search input
searchInput.addEventListener("input", function () {
    const searchTerm = searchInput.value.toLowerCase();

    // Loop through the list items and hide/show based on the search term
    for (let i = 0; i < itemsList.length; i++) {
        const itemText = itemsList[i].textContent.toLowerCase();
        if (itemText.includes(searchInput)) {
            $('#LinkDisplay').show().parent('li').css({opacity: 1});
            // itemsList[i].style.display = "block";
        } else {
            itemsList[i].style.display = "none";
        }
    }
});