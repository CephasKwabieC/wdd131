/**
 * @file script.js
 * @description This file contains the JavaScript for the Moon-Art Designs portfolio website.
 * It handles mobile menu toggling and dynamic footer content.
 */

// Ensure the DOM (Document Object Model) is fully loaded before running any script.
// This prevents errors that might occur if the script tries to access HTML elements
// that haven't been created yet by the browser.
document.addEventListener('DOMContentLoaded', () => {

    // ==========================================================================
    // Mobile Menu Toggle Functionality
    // --------------------------------------------------------------------------
    // This section controls the opening and closing of the mobile navigation menu
    // when the hamburger icon is clicked.
    // ==========================================================================

    // Get references to the HTML elements for the menu toggle button and the mobile navigation.
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');

    // Check if both elements exist in the DOM to prevent errors.
    if (menuToggle && mobileMenu) {
        // Add a 'click' event listener to the hamburger menu toggle button.
        menuToggle.addEventListener('click', () => {
            // Toggle the 'show-mobile' class on the mobileMenu element.
            // If the class is present, it's removed (hiding the menu).
            // If the class is absent, it's added (showing the menu).
            mobileMenu.classList.toggle('show-mobile');

            // Update the text content of the menu toggle button.
            // If the mobile menu now contains 'show-mobile' (meaning it's visible),
            // change the button text to '✖' (an 'X' icon).
            // Otherwise (if the menu is hidden), change it back to '☰' (hamburger icon).
            menuToggle.textContent = mobileMenu.classList.contains('show-mobile') ? '✖' : '☰';
        });

        // Add event listeners to each link inside the mobile menu.
        // This ensures the menu closes automatically when a user clicks on a navigation link.
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                // Hide the mobile menu by removing the 'show-mobile' class.
                mobileMenu.classList.remove('show-mobile');
                // Reset the menu toggle button text back to the hamburger icon.
                menuToggle.textContent = '☰';
            });
        });
    }

    // ==========================================================================
    // Footer Dynamic Content
    // --------------------------------------------------------------------------
    // This section dynamically updates the current year and the last modified
    // date in the website's footer.
    // ==========================================================================

    // Get a reference to the HTML element where the current year will be displayed.
    const currentYearSpan = document.getElementById('currentyear');
    // Check if the element exists.
    if (currentYearSpan) {
        // Set the text content of the span to the current full year.
        currentYearSpan.textContent = new Date().getFullYear();
    }

    // Get a reference to the HTML element where the last modified date will be displayed.
    const lastModifiedParagraph = document.getElementById('lastModified');
    // Check if the element exists.
    if (lastModifiedParagraph) {
        // Set the text content to "Last Modified: " followed by the document's last modified date.
        lastModifiedParagraph.textContent = 'Last Modified: ' + document.lastModified;
    }
});
