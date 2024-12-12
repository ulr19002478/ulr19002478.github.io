const toggleImg = document.getElementById('toggle-img');
const mainText = document.getElementById('main-text');
const subText = document.getElementById('sub-text');
const body = document.body;

let isGradientFlipped = false;  // Flag to track if the gradient is flipped

// Add a gradient that follows the mouse
document.body.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    // Apply the gradient with the correct colors, based on whether it's flipped or not
    if (!isGradientFlipped) {
        body.style.background = `
            radial-gradient(
                circle at ${mouseX}px ${mouseY}px, 
                rgba(255, 183, 77, 0.8), 
                rgba(228, 149, 76, 0.8) 50%, 
                rgba(90, 180, 228, 0.8) 100%
            )
        `;
    } else {
        body.style.background = `
            radial-gradient(
                circle at ${mouseX}px ${mouseY}px, 
                rgba(90, 180, 228, 0.8), 
                rgba(120, 220, 229 , 0.8) 50%, 
                rgba(255, 183, 77, 0.8) 100%
            )
        `;
    }
});

function wrapTextInSpans() {
    const magicalText = document.querySelectorAll('#main-text, #sub-text');
    magicalText.forEach((textElement) => {
        const text = textElement.textContent.split('');
        textElement.innerHTML = '';
        text.forEach((letter) => {
            const span = document.createElement('span');
            span.classList.add('letter');
            span.textContent = letter;
            textElement.appendChild(span);
        });
    });
}

function updateTextAndImage() {
    // Toggle the image and text
    if (toggleImg.src.includes('thedog.png')) {
        toggleImg.src = 'thecat.jpg';
        toggleImg.alt = 'the cat is awesome!';
        mainText.textContent = 'the cat';
        subText.textContent = 'what the cat doin?';
        document.title = 'what the cat doin';
    } else {
        toggleImg.src = 'thedog.png';
        toggleImg.alt = 'the dog is awesome!';
        mainText.textContent = 'the dog';
        subText.textContent = 'what the dog doin?';
        document.title = 'what the dog doin';
    }

    // Toggle the background colors
    isGradientFlipped = !isGradientFlipped;  // Flip the state
    wrapTextInSpans();
}

window.onload = () => {
    wrapTextInSpans();
};

toggleImg.addEventListener('click', updateTextAndImage);
