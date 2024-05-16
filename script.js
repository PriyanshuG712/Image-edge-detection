


const body=document.querySelector('body');
const browseImageBtn = document.getElementById('browseImageBtn');
const resetBtn = document.getElementById('resetBtn');
const inputImage = document.getElementById('inputImage');
const outputImage = document.getElementById('outputImage');
const button= document.querySelectorAll('button');
const inputFile= document.getElementById('input-file');
cv['onRuntimeInitialized'] = () => {
    console.log('OpenCV.js is ready');

    // Event listener for input file change
    inputFile.onchange = function() {
        inputImage.src = URL.createObjectURL(inputFile.files[0]);
    };


// inputFile.onchange=function(){
//     inputImage.src= URL.createObjectURL(inputFile.files[0]);
// }

let arr = Array.from(button);
arr.forEach(button => {
    button.addEventListener('click', (e) =>{
        if(e.target.innerHTML == 'Roberts'){
            // string = eval(string);
            // input.value = string;
            body.style.backgroundColor="pink";
        }

        else if(e.target.innerHTML == 'Prewitt'){

        }
        else if(e.target.innerHTML == 'Sobel'){
            
        }
        else if(e.target.innerHTML == 'Canny'){
            let src = cv.imread(inputImage);

        // Convert image to grayscale
        let gray = new cv.Mat();
        cv.cvtColor(src, gray, cv.COLOR_RGBA2GRAY, 0);

        // Apply edge detection algorithm (e.g., Sobel)
        let dst = new cv.Mat();
        cv.Sobel(gray, dst, cv.CV_8U, 1, 0, 3, 1, 0, cv.BORDER_DEFAULT);

        // Convert result Mat to image
        outputImage.src=URL.createObjectURL(cv.imshow(outputImage, dst));

        // Free memory
        src.delete();
        gray.delete();
        dst.delete();
        }
        else if(e.target.innerHTML == 'LoG'){
            
        }
        else if(e.target.innerHTML == 'Kirsch'){
            
        }
        else if(e.target.innerHTML == 'Isotropic'){
            
        }
        else if(e.target.innerHTML == 'Compass'){
            
        }
        else if(e.target.innerHTML == 'Centered Difference'){
            
        }
        
    });
});
// // Event listeners
// browseImageBtn.addEventListener('click', () => {
//     // Simulate image browsing (replace placeholder with actual image selection logic)
//     inputImage.src = 'https://via.placeholder.com/300x200';
// });
// exitBtn.addEventListener('click', () => {
//     // Simulate image browsing (replace placeholder with actual image selection logic)
//     inputImage.src = 'https://via.placeholder.com/300x200';
// });

// edgeDetectionBtn.addEventListener('click', () => {
//     // Simulate edge detection (replace with actual edge detection logic)
//     // You can use inputImage.src to get the image URL and apply edge detection algorithms
//     // For now, let's just change the output image source to a different placeholder image
//     outputImage.src = 'https://via.placeholder.com/300x200';
// });

// resetBtn.addEventListener('click', () => {
//     // Reset both input and output images to default placeholder
//     inputImage.src = 'https://placehold.co/300x200';
//     outputImage.src = 'https://placehold.co/300x200';
// });
}