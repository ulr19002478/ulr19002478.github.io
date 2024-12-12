const toggleImg = document.getElementById('toggle-img');
const mainText = document.getElementById('main-text');
const subText = document.getElementById('sub-text');
const body = document.body;

// State variable to track gradient inversion
let isGradientInverted = false;

// Add a gradient that follows the mouse
document.body.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    // Define the two gradient color sets
    const gradientColors = isGradientInverted
        ? ['rgba(77, 183, 255, 0.8)', 'rgba(76, 149, 228, 0.8)', 'rgba(50, 50, 100, 0.5)']
        : ['rgba(255, 183, 77, 0.8)', 'rgba(228, 149, 76, 0.8)', 'rgba(100, 50, 50, 0.5)'];

    body.style.background = `
        radial-gradient(
            circle at ${mouseX}px ${mouseY}px, 
            ${gradientColors[0]}, 
            ${gradientColors[1]} 50%, 
            ${gradientColors[2]} 100%
        )
    `;
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

    // Completely invert the gradient
    isGradientInverted = !isGradientInverted;

    wrapTextInSpans();
}

window.onload = () => {
    wrapTextInSpans();
};

toggleImg.addEventListener('click', updateTextAndImage);
