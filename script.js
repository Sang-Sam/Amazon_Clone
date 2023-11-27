// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function() {
    // Get the necessary elements
    const searchInput = document.querySelector(".search-input");
    const searchIcon = document.querySelector(".search-icon");
    const panelAll = document.querySelector(".panel-all");
  
    // Add event listeners
    searchIcon.addEventListener("click", handleSearch);
    searchInput.addEventListener("keydown", function(event) {
      if (event.key === "Enter") {
        handleSearch();
      }
    });
    panelAll.addEventListener("click", handlePanelAllClick);
  
    // Function to handle search
    function handleSearch() {
      const searchQuery = searchInput.value;
      // Perform search operation or redirect to search page
      // based on the searchQuery
      // Replace the below console.log statement with your logic
      console.log("Search query:", searchQuery);
    }
  
    // Function to handle panel-all click
    function handlePanelAllClick() {
      // Perform actions when panel-all is clicked
      // Replace the below console.log statement with your logic
      console.log("Panel All clicked");
    }
  });
  