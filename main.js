const generateBtn = document.getElementById('generate-btn');
const numberSpans = document.querySelectorAll('.lotto-numbers .number');

const getNumberColor = (number) => {
    if (number <= 10) return '#fbc400'; // 노란색
    if (number <= 20) return '#69c8f2'; // 파란색
    if (number <= 30) return '#ff7272'; // 빨간색
    if (number <= 40) return '#aaa'; // 회색
    return '#b0d840'; // 초록색
};

const generateLottoNumbers = () => {
    const numbers = new Set();
    while (numbers.size < 6) {
        const randomNumber = Math.floor(Math.random() * 45) + 1;
        numbers.add(randomNumber);
    }
    return Array.from(numbers).sort((a, b) => a - b);
};

const displayNumber = (number, element, index) => {
    setTimeout(() => {
        element.textContent = number;
        element.style.backgroundColor = getNumberColor(number);
        element.style.color = 'white';
        element.style.transform = 'scale(1.1)';
        setTimeout(() => {
            element.style.transform = 'scale(1)';
        }, 150);
    }, index * 100);
};

const handleGenerateClick = () => {
    const lottoNumbers = generateLottoNumbers();
    numberSpans.forEach((span, index) => {
        span.textContent = '';
        span.style.backgroundColor = '#e9ecef';
        span.style.color = '#495057';
        displayNumber(lottoNumbers[index], span, index);
    });
};

generateBtn.addEventListener('click', handleGenerateClick);

// 초기 로드 시 번호 생성
handleGenerateClick();
