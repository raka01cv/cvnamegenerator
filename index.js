const imageContainer = document.getElementById('imageContainer');
const inputLetters = document.querySelectorAll('.letter');

function generateImages() {
    imageContainer.innerHTML = ''; // Clear previous images

    inputLetters.forEach(async (input) => {
        const letter = input.value.toLowerCase();
        if (letter) {
            const imageUrl = `images/${letter.toUpperCase()}.png`; // Assuming images are named with uppercase letters
            const imgElement = document.createElement('img');
            imgElement.src = imageUrl;
            imageContainer.appendChild(imgElement);
        }
    });
}




