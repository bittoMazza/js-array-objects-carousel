const images = [
    'https://cdn.photographycourse.net/wp-content/uploads/2022/04/Portrait-vs-Landscape-Featured-Image-3.jpg',
    'https://i.natgeofe.com/n/2a832501-483e-422f-985c-0e93757b7d84/6.jpg',
    'https://cdn.photographycourse.net/wp-content/uploads/2014/11/Landscape-Photography-steps.jpg',
    'https://www.adorama.com/alc/wp-content/uploads/2018/11/landscape-photography-tips-yosemite-valley-feature.jpg',
    'https://iso.500px.com/wp-content/uploads/2021/02/Torres-Del-Paine-Sunset-By-Paul-Reiffer-2-1500x1000.jpg',
    'https://mymodernmet.com/wp/wp-content/uploads/2020/02/Landscape-Photographer-of-the-Year-Sander-Grefte.jpg'
    ];

let activeIndex=0;
let newImages;
let newThumbImg;
let thumbnailContainer = document.getElementById('thumbnail-container');
let containerImages = document.getElementById('carousel-image-container');
for(let i = 0;i < images.length; i++){
    newThumbImg = document.createElement("img")
    newImages = document.createElement("img");
    newThumbImg.setAttribute('src',images[i])
    newImages.setAttribute('src',images[i]);
    // Al primo elemento diamo la classe active
    if(i == 0){
        newThumbImg.classList.add('active');
        newImages.classList.add('active');
    }
    thumbnailContainer.append(newThumbImg);
    containerImages.append(newImages);
}

console.log(thumbnailContainer)
// Con children creiamo una lista con tutti i figli del container 
const listImage = containerImages.children;
const listThumbnail = thumbnailContainer.children;
const btnNext = document.getElementById('next-btn');
const btnPrev = document.getElementById('prev-btn');

btnNext.addEventListener('click',function(){
    moveForward();
})


btnPrev.addEventListener('click',function(){
    listImage[activeIndex].classList.remove('active');
    listThumbnail[activeIndex].classList.remove('active');
    activeIndex--;
    // Quando andiamo sotto la posizione 0 torniamo alla lunghezza dell'array - 1
    if(activeIndex < 0){
       activeIndex = listImage.length - 1;
    }
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
   listImage[activeIndex].classList.add('active');
   listThumbnail[activeIndex].classList.add('active');
}
setInterval(moveForward,3000)