document.addEventListener('DOMContentLoaded', () => {
    // --- Footer Related Information ---
    const currentYearSpan = document.getElementById('currentyear');
    const lastModifiedP = document.getElementById('lastModified');

    const today = new Date();
    const year = today.getFullYear();
    const formattedDate = today.toLocaleDateString('en-GB', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    });
    const formattedTime = today.toLocaleTimeString('en-GB', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    });

    currentYearSpan.textContent = year;
    lastModifiedP.textContent = `Last Modification: ${formattedDate} ${formattedTime}`;

    // --- Weather Data Population and Wind Chill Calculation ---

    // Define static weather data values within JavaScript
   
    const weatherData = {
        location: "Accra",
        temperature: 30.0, // °C
        condition: "Sunny",
        humidity: 70, // %
        windSpeed: 10 // km/h
    };

    // Get references to the HTML elements for weather display
    
    const temperatureSpan = document.getElementById('temperature');
    const conditionSpan = document.getElementById('condition');
    const humiditySpan = document.getElementById('humidity');
    const windSpeedSpan = document.getElementById('windSpeed');
    const windChillSpan = document.getElementById('windChill');

    // Populate the HTML elements with the static weather data

    temperatureSpan.textContent = `${weatherData.temperature.toFixed(1)}°C`;
    conditionSpan.textContent = weatherData.condition;
    humiditySpan.textContent = `${weatherData.humidity}%`;
    windSpeedSpan.textContent = `${weatherData.windSpeed} km/h`;

    // Function to calculate Wind Chill for Metric units (°C and km/h)
    // Formula from Environment Canada:
    // WC = 13.12 + 0.6215*T - 11.37*V^0.16 + 0.3965*T*V^0.16
    // where T is air temperature in Celsius and V is wind speed in km/h
    function calculateWindChill(tempC, windKPH) {
        // The function must use one line of code that returns the result
        return (13.12 + (0.6215 * tempC) - (11.37 * Math.pow(windKPH, 0.16)) + (0.3965 * tempC * Math.pow(windKPH, 0.16))).toFixed(1);
    }

    // Do not call calculateWindChill function unless conditions are met:
    // Temperature <= 10 °C AND Wind speed > 4.8 km/h
    if (weatherData.temperature <= 10 && weatherData.windSpeed > 4.8) {
        const windChill = calculateWindChill(weatherData.temperature, weatherData.windSpeed);
        windChillSpan.textContent = `${windChill}°C`;
    } else {
        windChillSpan.textContent = "N/A"; // Display "N/A" if conditions are not met
    }
});