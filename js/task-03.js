const images = [
    {
        url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'White and Black Long Fur Cat',
    },
    {
        url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
    },
    {
        url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'Group of Horses Running',
    },
];


const targetUl = document.querySelector('.gallery');

const img = images.map(image => `
  <li class="item">
    <img src="${image.url}" alt="${image.alt}" width="400">
  </li>
`).join('');

targetUl.insertAdjacentHTML('beforeend', img);

const li = document.querySelectorAll(".item");
li.forEach(e => {
  e.style.display = 'flex'
  e.style.margin = '10px'
});