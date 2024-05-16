const browseImageBtn = document.getElementById('browseImageBtn');
const edgeDetectionBtn = document.getElementById('edgeDetectionBtn');
const resetBtn = document.getElementById('resetBtn');
const exitBtn = document.getElementById('exitBtn');
const inputImage = document.getElementById('inputImage');
const outputImage = document.getElementById('outputImage');

// Event listeners
browseImageBtn.addEventListener('click', () => {
    // Simulate image browsing (replace placeholder with actual image selection logic)
    inputImage.src = 'https://via.placeholder.com/300x200';
});
exitBtn.addEventListener('click', () => {
    // Simulate image browsing (replace placeholder with actual image selection logic)
    inputImage.src = 'https://via.placeholder.com/300x200';
});

edgeDetectionBtn.addEventListener('click', () => {
    // Simulate edge detection (replace with actual edge detection logic)
    // You can use inputImage.src to get the image URL and apply edge detection algorithms
    // For now, let's just change the output image source to a different placeholder image
    outputImage.src = 'https://via.placeholder.com/300x200';
});

resetBtn.addEventListener('click', () => {
    // Reset both input and output images to default placeholder
    inputImage.src = 'https://placehold.co/300x200';
    outputImage.src = 'https://placehold.co/300x200';
});
