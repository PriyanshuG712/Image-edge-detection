const body = document.querySelector("body");
const browseImageBtn = document.getElementById("browseImageBtn");
const resetBtn = document.getElementById("resetBtn");
const inputImage = document.getElementById("inputImage");
const outputImage = document.getElementById("outputImage");
const button = document.querySelectorAll("button");
const inputFile = document.getElementById("input-file");

cv["onRuntimeInitialized"] = () => {
  console.log("OpenCV.js is ready");

  // Event listener for input file change
  inputFile.onchange = function () {
    inputImage.src = URL.createObjectURL(inputFile.files[0]);
  };
};
// inputFile.onchange=function(){
//     inputImage.src= URL.createObjectURL(inputFile.files[0]);
// }

let arr = Array.from(button);
arr.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.innerHTML == "Roberts") {
      let file = inputFile.files[0];
      let reader = new FileReader();
      reader.onload = function (event) {
        let img = new Image();
        img.onload = function () {
          let canvas = document.getElementById("canvas");
          let ctx = canvas.getContext("2d");
          canvas.width = img.width;
          canvas.height = img.height;
          ctx.drawImage(img, 0, 0);
          performRoberts();
        };
        img.src = event.target.result;
      };
      reader.readAsDataURL(file);
    } else if (e.target.innerHTML == "Prewitt") 
      {
      let file = inputFile.files[0];
      let reader = new FileReader();
      reader.onload = function (event) 
      {
        let img = new Image();
        img.onload = function () 
        {
          let canvas = document.getElementById("canvas");
          let ctx = canvas.getContext("2d");
          // Set canvas width and height
          canvas.width = img.width;
          canvas.height = img.height;
          // Draw image onto canvas
          ctx.drawImage(img, 0, 0);
          performPrewitt();
        };
        img.src = event.target.result;
      };
      reader.readAsDataURL(file);
    } else if (e.target.innerHTML == "Sobel") {
      let file = inputFile.files[0];
      let reader = new FileReader();
      reader.onload = function (event) {
        let img = new Image();
        img.onload = function () {
          let canvas = document.getElementById("canvas");
          let ctx = canvas.getContext("2d");
          canvas.width = img.width;
          canvas.height = img.height;
          ctx.drawImage(img, 0, 0);
          performSobel();
        };
        img.src = event.target.result;
      };
      reader.readAsDataURL(file);
    } else if (e.target.innerHTML == "Canny") {
      // Function to handle file input
      let file = inputFile.files[0];
      let reader = new FileReader();
      reader.onload = function (event) {
        let img = new Image();
        img.onload = function () {
          let canvas = document.getElementById("canvas");
          let ctx = canvas.getContext("2d");
          canvas.width = img.width;
          canvas.height = img.height;
          ctx.drawImage(img, 0, 0);
          performCanny();
        };
        img.src = event.target.result;
      };
      reader.readAsDataURL(file);
    } else if (e.target.innerHTML == "Scharr") {
      let file = inputFile.files[0];
      let reader = new FileReader();
      reader.onload = function (event) {
        let img = new Image();
        img.onload = function () {
          let canvas = document.getElementById("canvas");
          let ctx = canvas.getContext("2d");
          canvas.width = img.width;
          canvas.height = img.height;
          ctx.drawImage(img, 0, 0);
          performScharr();
        };
        img.src = event.target.result;
      };
      reader.readAsDataURL(file);
    } else if (e.target.innerHTML == "Laplacian") {
      let file = inputFile.files[0];
      let reader = new FileReader();
      reader.onload = function (event) {
        let img = new Image();
        img.onload = function () {
          let canvas = document.getElementById("canvas");
          let ctx = canvas.getContext("2d");
          canvas.width = img.width;
          canvas.height = img.height;
          ctx.drawImage(img, 0, 0);
          performLaplacian();
        };
        img.src = event.target.result;
      };
      reader.readAsDataURL(file);
    } else if (e.target.innerHTML == "Isotropic") {
    } else if (e.target.innerHTML == "Compass") {
    } else if (e.target.innerHTML == "Centered Difference") {
    }
  });
});

function performCanny() {
  let src = cv.imread("canvas");
  let dst = new cv.Mat();
  cv.cvtColor(src, src, cv.COLOR_RGBA2GRAY, 0);
  cv.Canny(src, dst, 50, 150, 3, false);
  cv.imshow("canvas", dst);
  src.delete();
  dst.delete();
}

function performSobel() {
  let src = cv.imread("canvas");
  let dst = new cv.Mat();
  cv.cvtColor(src, src, cv.COLOR_RGBA2GRAY, 0);
  cv.Sobel(src, dst, cv.CV_8U, 1, 1, 3, 1, 0, cv.BORDER_DEFAULT);
  cv.imshow("canvas", dst);
  src.delete();
  dst.delete();
}
function performRoberts() {
  let src = cv.imread('canvas');
  let dstX = new cv.Mat();
  let dstY = new cv.Mat();
  let dst = new cv.Mat();
  cv.cvtColor(src, src, cv.COLOR_RGBA2GRAY, 0);

  let kernelX = cv.matFromArray(2, 2, cv.CV_32F, [1, 0, 0, -1]);
  let kernelY = cv.matFromArray(2, 2, cv.CV_32F, [0, 1, -1, 0]);
  cv.filter2D(src, dstX, cv.CV_8U, kernelX);
  cv.filter2D(src, dstY, cv.CV_8U, kernelY);
  cv.addWeighted(dstX, 0.5, dstY, 0.5, 0, dst);

  cv.imshow('canvas', dst);
  src.delete();
  dstX.delete();
  dstY.delete();
  dst.delete();
}
// function performRoberts() {
//   let src = cv.imread("canvas");
//   let dst = new cv.Mat();
//   cv.cvtColor(src, src, cv.COLOR_RGBA2GRAY, 0);
//   cv.Sobel(src, dst, cv.CV_8U, 1, 0, 1, 1, 0, cv.BORDER_DEFAULT);
//   cv.imshow("canvas", dst);
//   src.delete();
//   dst.delete();
// }

function performPrewitt() {
  let src = cv.imread("canvas");
  let dstX = new cv.Mat();
  let dstY = new cv.Mat();
  let dst = new cv.Mat();
  cv.cvtColor(src, src, cv.COLOR_RGBA2GRAY, 0);

  let kernelX = cv.matFromArray(3,3,cv.CV_32F,[-1, 0, 1, -1, 0, 1, -1, 0, 1]);

  let kernelY = cv.matFromArray(3,3,cv.CV_32F,[-1, -1, -1, 0, 0, 0, 1, 1, 1]);

  cv.filter2D(src, dstX, cv.CV_8U, kernelX);
  cv.filter2D(src, dstY, cv.CV_8U, kernelY);
  cv.addWeighted(dstX, 0.5, dstY, 0.5, 0, dst);

  cv.imshow("canvas", dst);
  src.delete();
  dstX.delete();
  dstY.delete();
  dst.delete();
}


function performScharr() {
  let src = cv.imread('canvas');
  let dstX = new cv.Mat();
  let dstY = new cv.Mat();
  let dst = new cv.Mat();
  cv.cvtColor(src, src, cv.COLOR_RGBA2GRAY, 0);

  cv.Scharr(src, dstX, cv.CV_8U, 1, 0);
  cv.Scharr(src, dstY, cv.CV_8U, 0, 1);
  cv.addWeighted(dstX, 0.5, dstY, 0.5, 0, dst);

  cv.imshow('canvas', dst);
  src.delete();
  dstX.delete();
  dstY.delete();
  dst.delete();
}

function performLaplacian() {
  let src = cv.imread('canvas');
  let dst = new cv.Mat();
  cv.cvtColor(src, src, cv.COLOR_RGBA2GRAY, 0);
  cv.Laplacian(src, dst, cv.CV_8U, 1, 1, 0, cv.BORDER_DEFAULT);
  cv.imshow('canvas', dst);
  src.delete();
  dst.delete();
}

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
