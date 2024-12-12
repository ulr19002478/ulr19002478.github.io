const toggleImg = document.getElementById('toggle-img');
const mainText = document.getElementById('main-text');
const subText = document.getElementById('sub-text');
const body = document.body;

// State variable to track gradient flip
let isGradientFlipped = false;

// Add a gradient that follows the mouse
document.body.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    const color1 = isGradientFlipped ? 'rgba(100, 50, 50, 0.5)' : 'rgba(255, 183, 77, 0.8)';
    const color2 = isGradientFlipped ? 'rgba(228, 149, 76, 0.8)' : 'rgba(100, 50, 50, 0.5)';
    const color3 = isGradientFlipped ? 'rgba(255, 183, 77, 0.8)' : 'rgba(228, 149, 76, 0.8)';

    body.style.background = `
        radial-gradient(
            circle at ${mouseX}px ${mouseY}px, 
            ${color1}, 
            ${color2} 50%, 
            ${color3} 100%
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

    // Flip the gradient colors
    isGradientFlipped = !isGradientFlipped;

    wrapTextInSpans();
}

window.onload = () => {
    wrapTextInSpans();
};

toggleImg.addEventListener('click', updateTextAndImage);
