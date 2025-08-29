// heart count
const sumNumber = 1
const queryBtn = (document.querySelectorAll('.heart-btn'));

for (query of queryBtn) {
    query.addEventListener('click', function () {
        const heart = parseInt(document.getElementById('heart-count').innerText);
        const sumNum = heart + sumNumber
        document.getElementById('heart-count').innerText = sumNum;
    })
}

