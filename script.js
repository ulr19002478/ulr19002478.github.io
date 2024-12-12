const toggleImg = document.getElementById('toggle-img');
const mainText = document.getElementById('main-text');
const subText = document.getElementById('sub-text');
const body = document.body;
const gradientFollow = document.getElementById('gradient-follow');

function animateText() {
    const textElements = document.querySelectorAll('.magical-text span');
    textElements.forEach((letter) => {
        const randomDelay = Math.random() * 2;
        letter.style.animationDelay = `${randomDelay}s`;
    });
}

function wrapTextInSpans() {
    const magicalText = document.querySelectorAll('#main-text, #sub-text');
    magicalText.forEach(textElement => {
        const text = textElement.textContent.split('');
        textElement.innerHTML = '';
        text.forEach(letter => {
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

document.body.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    // Update the gradient-follow element position
    gradientFollow.style.left = `${mouseX}px`;
    gradientFollow.style.top = `${mouseY}px`;
});

window.onload = () => {
    wrapTextInSpans();
};

toggleImg.addEventListener('click', updateTextAndImage);