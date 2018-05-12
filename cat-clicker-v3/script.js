const catList = document.querySelector('#cat-list');
const display = document.querySelector('#display');

const cats = [
    {
        name: 'Pooky',
        img: 'cat.png',
        clicks: 0
    },
    {
        name: 'Luci',
        img: 'cat.png',
        clicks: 0
    },
    {
        name: 'Bob',
        img: 'cat.png',
        clicks: 0
    },
    {
        name: 'Ted',
        img: 'cat.png',
        clicks: 0
    },
    {
        name: 'Wednesday',
        img: 'cat.png',
        clicks: 0
    }
];

// ADD EVENT LISTENERS
catList.addEventListener('click', displayCat);
display.addEventListener('click', incrementClicks);

// FILL CAT UL
function populateList() {
    let html = cats.map(createLi).join('');
    catList.innerHTML = html;
}

// CREATE CAT LI
function createLi(cat) {
    let i = cats.indexOf(cat);
    return `<li class="cat" data-index="${i}">${cat.name}</li>`
}

// CAT DIV FOR DISPLAY
function createCat(cat) {
    let i = cats.indexOf(cat);
    return `<div>
                <h3>${cat.name}</h3>
                <p>Clicks: ${cat.clicks}</p>
                <img data-index="${i}" src="${cat.img}">
            </div>`;
}

// SHOW CAT IN DISPLAY
function displayCat(e) {
    if (e.target && e.target.classList.contains('cat')) {
        let i = e.target.dataset.index;
        updateHTML(i);
    }
}

// UPDATE DISPLAY HTML
function updateHTML(i) {
    let html = createCat(cats[i]);
    display.innerHTML = html;
}

// COUNT CAT IMG CLICKS
function incrementClicks(e) {
    if (e.target && e.target.tagName == 'IMG') {
        let i = e.target.dataset.index;
        cats[i].clicks++;
        updateHTML(i);
    }
}

// INIT THIS SHIZZ
populateList();