// Get DOM elements
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const messageDiv = document.getElementById("message");
const questionContainer = document.getElementById("questionContainer");
const backgroundImage = document.getElementById("backgroundImage"); // Access the image container

// Local paths to the downloaded GIFs for "No" answers
const noBackgrounds = [
    'sad.jpg',  // Image 1 for "No"
    'sad2.jpg',  // Image 2 for "No"
    'sad3.jpg',  // Image 3 for "No"
    'sad4.jpg',  // Image 4 for "No"
    'sad5.jpg',  // Image 5 for "No"
    'sad6.jpg',  // Image 6 for "No"
    'sad7.jpg',  // Image 7 for "No"
    'sad8.jpg',  // Image 8 for "No"
    'sad9.jpg',  // Image 9 for "No"
    'sad10.jpg'  // Image 10 for "No"
];

// Final image after "Yes" (congratulations image)
const yesBackground = 'happy.jpg';  // Image to show after "Yes"

// Counter for repeated "No" answers
let counter = 0;

// Function to change background image when "No" is clicked
function changeBackgroundForNo() {
    const index = counter % noBackgrounds.length; // Loop through the images
    console.log('Changing background to:', noBackgrounds[index]); // Log the current image URL
    backgroundImage.src = noBackgrounds[index];  // Set the background image to the next one in the array
    backgroundImage.style.display = 'block';  // Make sure the image is visible
}

// Function to change background image when "Yes" is clicked
function changeBackgroundForYes() {
    console.log('Changing background to:', yesBackground); // Log the "Yes" background image
    backgroundImage.src = yesBackground;  // Set the background image to the "Yes" image
    backgroundImage.style.display = 'block';  // Make sure the image is visible
}

// When the user clicks "Yes"
yesBtn.onclick = function() {
    messageDiv.innerHTML = "Congratulations! 💖 nag uu nagyud ka! I love you so much, and I am so proud of you! wishing you all the best baby, Im so grateful for having you in my life, you will not regret💘"; 
    questionContainer.style.display = "none"; // Hide the buttons after answer
    changeBackgroundForYes(); // Change the background when "Yes" is clicked
};

// When the user clicks "No"
noBtn.onclick = function() {
    counter++; // Increase the counter for each "No" answer
    
    // Cycle through 10 different messages based on the counter
    if (counter === 1) {
        messageDiv.innerHTML = `Oh no, you said "No"! 😅 makahurt lgi ka? jaban mn tika rn!`;
    } else if (counter === 2) {
        messageDiv.innerHTML = `No gyapon???? 😢 Grabe ka, will you be my Valentine? 💖`;
    } else if (counter === 3) {
        messageDiv.innerHTML = `Tuo guro kag dali rani pag code ba! 😳 💖`;
    } else if (counter === 4) {
        messageDiv.innerHTML = `kahilakon nako dari oh look... please say YES! 💖`;
    } else if (counter === 5) {
        messageDiv.innerHTML = `Dika maluoy nako?!`;
    } else if (counter === 6) {
        messageDiv.innerHTML = `Am I being too cheesy? 😜 Will you be my Valentine? 💖`;
    } else if (counter === 7) {
        messageDiv.innerHTML = `hago na kayko daria... Will you be my Valentine? 💖`;
    } else if (counter === 8) {
        messageDiv.innerHTML = `Im trying my best mn huhu... will you be my Valentine? 💖`;
    } else if (counter === 9) {
        messageDiv.innerHTML = `huhuhu! Will you say YES? 💖`;
    } else if (counter === 10) {
        messageDiv.innerHTML = `kulbaan nako dari ha... Please say YES! 💖`;
    } else {
        messageDiv.innerHTML = `grabe kaabot gyud ka dari? undang nlng ta!`;
    }
    
    changeBackgroundForNo(); // Change the background when "No" is clicked
};
