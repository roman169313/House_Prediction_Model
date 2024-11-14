function onPageLoad() {
    console.log("Document loaded");

    // URL of the API endpoint that returns location names
    var url = "http://127.0.0.1:5000/get_location_names";

    // Fetch location names from the API
    $.get(url, function(data, status) {
        console.log("Got response for get_location_names request");

        if (data && data.locations) {
            var locations = data.locations;
            var uiLocations = document.getElementById("location");

            // Clear the current options in the dropdown
            $('#location').empty();

            // Populate the dropdown with new options from the API data
            for (var i = 0; i < locations.length; i++) {
                var opt = new Option(locations[i]);
                $('#location').append(opt);
            }
        }
    });
}

// Call onPageLoad when the window loads
window.onload = onPageLoad;


// Function to handle selection for BHK and Bath options
function selectOption(group, value) {
    const buttons = document.querySelectorAll(`#${group} button`);
    buttons.forEach(button => button.classList.remove('selected'));
    buttons[value - 1].classList.add('selected');
}

// Dummy function to estimate the price (can be customized with real logic)


