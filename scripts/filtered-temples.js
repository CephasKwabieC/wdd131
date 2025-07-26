document.addEventListener('DOMContentLoaded', () => {
   

    // --- Footer Data Script ---
    document.getElementById("currentyear").textContent = new Date().getFullYear();
    document.getElementById("lastModified").textContent = "Last Modified: " + document.lastModified;

    
     const menuToggle = document.getElementById("menu-toggle");
     const navMenu = document.querySelector(".nav-links");
     if (menuToggle && navMenu) {
     menuToggle.addEventListener("click", () => {
       const isVisible = navMenu.classList.toggle("open");
            menuToggle.textContent = isVisible ? "✖" : "☰";
     });
    }

    // --- Temple Data ---
    const temples = [
        {
            templeName: "Aba Nigeria",
            location: "Aba, Nigeria",
            dedicated: "2005, August, 7",
            area: 11500,
            imageUrl:
                "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
        },
        {
            templeName: "Manti Utah",
            location: "Manti, Utah, United States",
            dedicated: "1888, May, 21",
            area: 74792,
            imageUrl:
                "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
        },
        {
            templeName: "Payson Utah",
            location: "Payson, Utah, United States",
            dedicated: "2015, June, 7",
            area: 96630,
            imageUrl:
                "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
        },
        {
            templeName: "Yigo Guam",
            location: "Yigo, Guam",
            dedicated: "2020, May, 2",
            area: 6861,
            imageUrl:
                "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
        },
        {
            templeName: "Washington D.C.",
            location: "Kensington, Maryland, United States",
            dedicated: "1974, November, 19",
            area: 156558,
            imageUrl:
                "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
        },
        {
            templeName: "Lima Perú",
            location: "Lima, Perú",
            dedicated: "1986, January, 10",
            area: 9600,
            imageUrl:
                "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
        },
        {
            templeName: "Mexico City Mexico",
            location: "Mexico City, Mexico",
            dedicated: "1983, December, 2",
            area: 116642,
            imageUrl:
                "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
        },
        {
            templeName: "Vancouver British Columbia Temple",
            location: "Vancouver, British Columbia, Canada",
            dedicated: "2010, May, 2",
            area: 13064,
            imageUrl:
                "https://churchofjesuschristtemples.org/assets/img/temples/vancouver-british-columbia-temple/vancouver-british-columbia-temple-13064-main.jpg"
        },
        {
            templeName: "Melbourne Australia Temple",
            location: "Melbourne, Australia",
            dedicated: "2000, June, 16",
            area: 10700,
            imageUrl:
                "https://churchofjesuschristtemples.org/assets/img/temples/melbourne-australia-temple/melbourne-australia-temple-58608-main.jpg"
        },
        {
            templeName: "Chicago Illinois Temple",
            location: "Chicago, Illinois, United States",
            dedicated: "1985, August, 9-13",
            area: 37062,    
            imageUrl:
                "https://churchofjesuschristtemples.org/assets/img/temples/chicago-illinois-temple/chicago-illinois-temple-58403-main.jpg"
        },
        {
            templeName: "Brigham City Utah Temple",
            location: "Brigham City, Utah, United States",
            dedicated: "2012, September, 23",
            area: 36000, 
            imageUrl:
                "https://churchofjesuschristtemples.org/assets/img/temples/brigham-city-utah-temple/brigham-city-utah-temple-39612-main.jpg"
        },
        {
            templeName: "Abidjan Ivory Coast Temple",
            location: "Abidjan, Ivory Coast",
            dedicated: "2025, May, 25",
            area: 17362, 
            imageUrl:
                "https://churchofjesuschristtemples.org/assets/img/temples/abidjan-ivory-coast-temple/abidjan-ivory-coast-temple-58993-main.jpg"
        },
        {
            templeName: "Antofagasta Chile Temple", 
            location: "Antofagasta, Chile",
            dedicated: "2019, April, 7",
            area: 26163,
            imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/antofagasta-chile-temple/antofagasta-chile-temple-60193-main.jpg"
        }
    ];

    // --- DOM Elements ---
    const templeCardsContainer = document.querySelector(".temple-cards-container");
    const navButtons = document.querySelectorAll('nav button');

    // --- createTempleCard Function ---
    function createTempleCard(temple) {
        const card = document.createElement("div");
        card.classList.add("temple-card");

        const img = document.createElement("img");
        img.src = temple.imageUrl;
        img.alt = `${temple.templeName} Temple`; // Ensure appropriate alt value
        img.loading = 'lazy'; // Added native lazy loading 

        const name = document.createElement("h2");
        name.textContent = temple.templeName;

        const location = document.createElement("p");
        location.textContent = `Location: ${temple.location}`;

        const dedicated = document.createElement("p");
        dedicated.textContent = `Dedicated: ${temple.dedicated}`;

        const area = document.createElement("p");
        area.textContent = `Area: ${temple.area.toLocaleString()} sq ft`; // Added .toLocaleString() for formatting

        // Assemble the card
        card.appendChild(img);
        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedicated);
        card.appendChild(area);

        return card;
    }

    // --- Function to Display Temples (uses createTempleCard) ---
    function displayTemples(filteredTemples) {
        // Clear existing cards
        templeCardsContainer.innerHTML = '';

        filteredTemples.forEach(temple => {
            // Call createTempleCard function to get the card element
            const cardElement = createTempleCard(temple);
            templeCardsContainer.appendChild(cardElement);
        });
    }

    // --- Navigation Filtering Logic ---
    navButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            // Remove 'active' class from all buttons
            navButtons.forEach(btn => btn.classList.remove('active'));
            // Add 'active' class to the clicked button
            event.target.classList.add('active');

            const filter = event.target.id;
            let filteredTemples = [];

            switch (filter) {
                case 'old':
                    // Temples dedicated before 1900
                    filteredTemples = temples.filter(temple => {
                        // Parse year from "YYYY, Month, Day" format
                        const dedicatedYear = parseInt(temple.dedicated.substring(0, 4));
                        return dedicatedYear < 1900;
                    });
                    break;
                case 'new':
                    // Temples dedicated after 2000
                    filteredTemples = temples.filter(temple => {
                        // Parse year from "YYYY, Month, Day" format
                        const dedicatedYear = parseInt(temple.dedicated.substring(0, 4));
                        return dedicatedYear > 2000;
                    });
                    break;
                case 'large':
                    // Temples larger than 90,000 square feet
                    filteredTemples = temples.filter(temple => temple.area > 90000);
                    break;
                case 'small':
                    // Temples smaller than 10,000 square feet
                    filteredTemples = temples.filter(temple => temple.area < 10000);
                    break;
                case 'home':
                default:
                    // Display all temples
                    filteredTemples = temples;
                    break;
            }
            displayTemples(filteredTemples);
        });
    });

    // --- Initial Page Load ---
    // This call is now correctly inside the DOMContentLoaded listener
    displayTemples(temples);
}); // This closing brace } correctly closes the DOMContentLoaded listener
