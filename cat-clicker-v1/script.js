let cat = document.querySelector('#cat');
let clicks = document.querySelector('#clicks');
let cnt = 0;

cat.addEventListener('click', updateCnt);

function updateCnt() {
    cnt++;
    clicks.innerText = cnt;
}