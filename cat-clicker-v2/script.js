let catsDiv = document.querySelector('.cats');
let clickCnt = document.querySelector('#clicks');

let cats = [
    {
        name: 'Bob',
        img: 'cat.png',
        clicks: 0
    },
    {
        name: 'Ted',
        img: 'cat.png',
        clicks: 0
    }
];

displayCats(cats);

catsDiv.addEventListener('click', updateClicks);

function updateClicks(e) {
   if(e.target && e.target.className == 'img') {
       let name = e.target.dataset.name;
       cats.map(cat => {
           if(cat.name !== name) return;

           cat.clicks++;
           displayCats(cats);
       });
   } 
}

function createCat(cat) {
    return `<div class='cat'>
                <h2>${cat.name}</h2>
                <img data-name='${cat.name}' src='${cat.img}' class='img'>
                <p>Clicks: ${cat.clicks}</p>
            </div>`;
}

function displayCats(cats) {
    let html = cats.map(createCat).join('');
    catsDiv.innerHTML = html;
}

