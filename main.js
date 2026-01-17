// Language
const userLang = localStorage.getItem('lottoLang') || navigator.language || navigator.userLanguage; 
const supportedLangs = ['en', 'ko'];
let lang = 'en';

if (supportedLangs.includes(userLang.substr(0, 2))) {
    lang = userLang.substr(0, 2);
}

const path = window.location.pathname.split('/').pop();
const currentPath = window.location.pathname;
const isKoPage = path.includes('-ko.html') || path === 'index-ko.html';

if (lang === 'ko' && !isKoPage) {
    let newPath = '/' + path.replace('.html', '-ko.html');
    if(path === '' || path === 'index.html') newPath = '/index-ko.html';
    if (currentPath !== newPath) window.location.href = newPath;
} else if (lang === 'en' && isKoPage) {
    let newPath = '/' + path.replace('-ko.html', '.html');
     if(path === 'index-ko.html') newPath = '/index.html';
    if (currentPath !== newPath) window.location.href = newPath;
}

document.querySelectorAll('.lang-dropdown a').forEach(a => {
    a.addEventListener('click', (e) => {
        localStorage.setItem('lottoLang', e.target.dataset.lang);
    });
});


const generateBtn = document.getElementById('generate');
const numbersContainer = document.getElementById('numbers');

class LottoBall extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        const number = this.getAttribute('number');
        const color = this.getColorForNumber(parseInt(number, 10));

        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    --ball-color: ${color};
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: 60px;
                    height: 60px;
                    background-color: var(--ball-color);
                    border-radius: 50%;
                    font-size: 1.8rem;
                    font-weight: 600;
                    color: #fff;
                    box-shadow: inset 0 -5px 10px rgba(0,0,0,0.2), 0 2px 5px rgba(0,0,0,0.15);
                    opacity: 0;
                    animation: fadeIn 0.5s ease forwards;
                    animation-delay: ${this.getAttribute('delay')}s;
                }
                @keyframes fadeIn {
                    to {
                        opacity: 1;
                    }
                }
            </style>
            <div>${number}</div>
        `;
    }

    getColorForNumber(number) {
        if (number <= 10) return 'oklch(65% 0.15 50)';   // Yellow
        if (number <= 20) return 'oklch(65% 0.15 130)';  // Blue
        if (number <= 30) return 'oklch(65% 0.15 20)';   // Red
        if (number <= 40) return 'oklch(60% 0.1 260)';   // Grayish purple
        return 'oklch(70% 0.12 160)'; // Green
    }
}

customElements.define('lotto-ball', LottoBall);

generateBtn.addEventListener('click', () => {
    const numbers = new Set();
    while (numbers.size < 6) {
        const randomNumber = Math.floor(Math.random() * 45) + 1;
        numbers.add(randomNumber);
    }

    const sortedNumbers = Array.from(numbers).sort((a, b) => a - b);

    numbersContainer.innerHTML = '';
    let delay = 0;
    for (const number of sortedNumbers) {
        const lottoBall = document.createElement('lotto-ball');
        lottoBall.setAttribute('number', number);
        lottoBall.setAttribute('delay', delay);
        numbersContainer.appendChild(lottoBall);
        delay += 0.1;
    }
});
