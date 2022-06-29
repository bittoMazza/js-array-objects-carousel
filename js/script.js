const images = [
    {
        url: 'http://www.viaggiareonline.it/wp-content/uploads/2014/11/sweden_148857365.jpg',
        title: 'Svezia',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },

    {
        url: 'https://static1.evcdn.net/images/reduction/1513757_w-1920_h-1080_q-70_m-crop.jpg',
        title: 'Perù',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },

    {
        url: 'https://img.itinari.com/pages/images/original/0d3ed180-d22d-48e8-84df-19c4d888b41f-62-crop.jpg?ch=DPR&dpr=2.625&w=1600&s=7ebd4b5a9e045f41b4e0c7c75d298d6c',
        title: 'Chile',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
    {
        url: 'https://static1.evcdn.net/images/reduction/1583177_w-1920_h-1080_q-70_m-crop.jpg',
        title: 'Argentina',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
    {
        url: 'https://cdn.sanity.io/images/24oxpx4s/prod/ed09eff0362396772ad50ec3bfb728d332eb1c30-3200x2125.jpg?w=1600&h=1063&fit=crop',
        title: 'Colombia',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
];

let activeIndex=0;
let newImages;
let newThumbImg;
let thumbnailContainer = document.getElementById('thumbnail-container');
let containerImages = document.getElementById('carousel-image-container');
let titleZone = document.getElementById('title-zone');
let descriptionZone = document.getElementById('description-zone');
titleZone.innerHTML = images[activeIndex].title;
descriptionZone.innerHTML = images[activeIndex].description;

console.log(images.length)
for(let i = 0;i < images.length; i++){
    newThumbImg = document.createElement("img");
    newThumbImg.setAttribute('src',images[i].url)
    newImages = document.createElement('img');
    newImages.setAttribute('src',images[i].url)
    // Al primo elemento diamo la classe active
    if(i == 0){
        newThumbImg.classList.add('active');
        newImages.classList.add('active');
    }
    containerImages.append(newImages)
    thumbnailContainer.append(newThumbImg);
}

console.log(thumbnailContainer)
// Con children creiamo una lista con tutti i figli del container 
const listImage = containerImages.querySelectorAll('img');
const listThumbnail = thumbnailContainer.querySelectorAll('img');
const btnNext = document.getElementById('next-btn');
const btnPrev = document.getElementById('prev-btn');

btnNext.addEventListener('click',function(){
    moveForward();
})


btnPrev.addEventListener('click',function(){
    titleZone.innerHTML = images[activeIndex].title;
    listImage[activeIndex].classList.remove('active');
    listThumbnail[activeIndex].classList.remove('active');
    activeIndex--;
    // Quando andiamo sotto la posizione 0 torniamo alla lunghezza dell'array - 1
    if(activeIndex < 0){
       activeIndex = listImage.length - 1;
    }
    titleZone.innerHTML = images[activeIndex].title;
    descriptionZone.innerHTML = images[activeIndex].description
    listImage[activeIndex].classList.add('active');
    listThumbnail[activeIndex].classList.add('active');
 }) 

function moveForward(){
    
    listImage[activeIndex].classList.remove('active');
    listThumbnail[activeIndex].classList.remove('active');
    activeIndex++;
   // Quando raggiungiamo la lunghezza masssima dell'array torniamo alla posizione iniziale 
   if(activeIndex === listImage.length){
      activeIndex = 0;
   }
   titleZone.innerHTML = images[activeIndex].title;
   descriptionZone.innerHTML = images[activeIndex].description
   listImage[activeIndex].classList.add('active');
   listThumbnail[activeIndex].classList.add('active');
}

setInterval(moveForward,3000)