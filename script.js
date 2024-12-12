const toggleImg = document.getElementById('toggle-img');
const mainText = document.getElementById('main-text');
const subText = document.getElementById('sub-text');
const body = document.body;

// Create a div that will serve as the cursor gradient effect
const cursorGradient = document.createElement('div');
cursorGradient.style.position = 'absolute';
cursorGradient.style.width = '150px';
cursorGradient.style.height = '150px';
cursorGradient.style.borderRadius = '50%';
cursorGradient.style.pointerEvents = 'none'; // Prevent interference with other elements
cursorGradient.style.mixBlendMode = 'overlay'; // Blend with the background
cursorGradient.style.transition = 'transform 0.05s ease'; // Smooth movement
body.appendChild(cursorGradient);

function animateText() {
    const textElements = document.querySelectorAll('.magical-text span');
    textElements.forEach((letter) => {
        const randomDelay = Math.random() * 2;
        letter.style.animationDelay = `${randomDelay}s`;
    });
}

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
    animateText();
}

function updateTextAndImage() {
    if (toggleImg.src.includes('thedog.png')) {
        toggleImg.src = 'thecat.jpg';
        toggleImg.alt = 'the cat is awesome!';
        mainText.textContent = 'the cat';
        subText.textContent = 'what the cat doin?';
        body.style.backgroundColor = '#6a9fb5';
        document.title = 'what the cat doin';
    } else {
        toggleImg.src = 'thedog.png';
        toggleImg.alt = 'the dog is awesome!';
        mainText.textContent = 'the dog';
        subText.textContent = 'what the dog doin?';
        body.style.backgroundColor = '#e4954c';
        document.title = 'what the dog doin';
    }

    wrapTextInSpans();
}

// Add event listener for mouse movement to update gradient position and color
document.body.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    // Move the gradient to follow the mouse
    cursorGradient.style.transform = `translate(${mouseX - 75}px, ${mouseY - 75}px)`;

    // Update the gradient colors dynamically based on mouse position
    cursorGradient.style.background = `radial-gradient(circle at center, rgba(${mouseX % 255}, ${mouseY % 255}, 150, 0.8), transparent)`;
});

// Ensure that text is wrapped in spans on page load
window.onload = () => {
    wrapTextInSpans();
};

toggleImg.addEventListener('click', updateTextAndImage);
