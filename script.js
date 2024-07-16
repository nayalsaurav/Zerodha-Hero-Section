const box = document.querySelector(".box");
const menu = document.querySelector("#menu");

menu.addEventListener('click', toggleBox);

function toggleBox() {
    if (box.style.display === 'block') {
        box.style.display = 'none';
    } else {
        box.style.display = 'block';
    }
}


    const principleInput = document.getElementById('Principle');
    const timeInput = document.getElementById('time');
    const interestInput = document.getElementById('interest');
    const showButton = document.getElementById('show');
    const outputDiv = document.querySelector('.output');

    showButton.addEventListener('click', function si() {
        const p = parseFloat(principleInput.value);
        const t = parseFloat(timeInput.value);
        const r = parseFloat(interestInput.value);

        if (isNaN(p) || isNaN(t) || isNaN(r)) {
            outputDiv.innerHTML = 'Please enter valid numbers for all fields.';
        } else {
            const simpleInterest = (p * t * r) / 100.0;
            outputDiv.innerHTML = `${simpleInterest.toFixed(2)}`;
        }
    });

