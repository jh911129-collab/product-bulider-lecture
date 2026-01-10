class LottoBall extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        const number = this.getAttribute('number');
        const color = this.getColorForNumber(number);

        const style = document.createElement('style');
        style.textContent = `
            :host {
                display: inline-block;
            }
            .ball {
                width: 50px;
                height: 50px;
                border-radius: 50%;
                background-color: ${color};
                color: white;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 1.5rem;
                font-weight: 600;
                box-shadow: 0 4px 8px rgba(0,0,0,0.2), inset 0 -3px 5px rgba(0,0,0,0.3);
            }
        `;

        const ball = document.createElement('div');
        ball.classList.add('ball');
        ball.textContent = number;

        this.shadowRoot.append(style, ball);
    }

    getColorForNumber(number) {
        const num = parseInt(number, 10);
        if (num <= 10) return 'oklch(70% 0.2 90)'; // Yellow
        if (num <= 20) return 'oklch(65% 0.25 260)'; // Blue
        if (num <= 30) return 'oklch(65% 0.25 25)'; // Red
        if (num <= 40) return 'oklch(60% 0.05 260)'; // Gray
        return 'oklch(65% 0.2 150)'; // Green
    }
}

customElements.define('lotto-ball', LottoBall);

const generateBtn = document.getElementById('generate-btn');
const lottoNumbersContainer = document.getElementById('lotto-numbers');

generateBtn.addEventListener('click', () => {
    lottoNumbersContainer.innerHTML = '';
    const lottoNumbers = new Set();

    while (lottoNumbers.size < 6) {
        const randomNumber = Math.floor(Math.random() * 45) + 1;
        lottoNumbers.add(randomNumber);
    }

    const sortedNumbers = Array.from(lottoNumbers).sort((a, b) => a - b);

    sortedNumbers.forEach((number, index) => {
        const lottoBall = document.createElement('lotto-ball');
        lottoBall.setAttribute('number', number);
        lottoBall.style.animationDelay = `${index * 100}ms`;
        lottoNumbersContainer.appendChild(lottoBall);
    });
});
