function loadGuide(milestone) {
    // Construct the path to the HTML file
    const fileName = `guides/${milestone}.html`;

    const guideDiv = document.getElementById('guide');
    guideDiv.innerHTML = `<h1>Loading ${milestone}...</h1><p>Please wait.</p>`;

    // Fetch the HTML content and display it in the page
    fetch(fileName)
        .then((response) => {
            if (response.ok) {
                return response.text();
            }
            throw new Error(`Error loading ${fileName}`);
        })
        .then((htmlContent) => {
            // Display the HTML content inside the guide section
            guideDiv.innerHTML = htmlContent;

            // Adjust image paths dynamically
            const resourcePath = `guides/${milestone}_files/`;
            const images = guideDiv.querySelectorAll('img');
            images.forEach((img) => {
                const src = img.getAttribute('src');
                if (src && !src.startsWith('http') && !src.includes(resourcePath)) {
                    img.src = resourcePath + src.split('/').pop(); // Ensure path uses the _files folder
                }
            });
        })
        .catch((error) => {
            // Display an error message if the file can't be loaded
            guideDiv.innerHTML = `<h1>Error</h1><p>Could not load the content for ${milestone}.</p>`;
            console.error(error);
        });
}