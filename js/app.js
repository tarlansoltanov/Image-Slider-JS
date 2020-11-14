const sliderPhotos = document.querySelector('.slider-photos');
const sliderContainer = document.querySelector('.slider-container');

const previousBtn = document.querySelector('#previousBtn');
const nextBtn = document.querySelector('#nextBtn');

const size = sliderContainer.clientWidth/4;

var photos = ['img1.jpg','img2.jpg','img3.jpg','img4.jpg','img5.jpg', 'img6.jpg', 'img7.jpg', 'img8.jpg']

function img_template(src){
    return '<img src="./img/' + src + '" alt="">';
}

window.onload = () =>{
    for(var i = 0; i < photos.length; i++){
        sliderPhotos.innerHTML += img_template(photos[i]);
    }
}

let counter = 0;

nextBtn.addEventListener('click', ()=>{
    sliderPhotos.style.transition = 'transform 0.2s ease-in-out';
    counter++;
    if (counter>photos.length-4){
        counter=0;
    }
    sliderPhotos.style.transform="translateX(-"+counter*size+"px)";
})

previousBtn.addEventListener('click', ()=>{
    sliderPhotos.style.transition = 'transform 0.2s ease-in-out';
    counter--;
    if (counter<0){
        counter=photos.length-4;
    }
    sliderPhotos.style.transform="translateX(-"+counter*size+"px)";
})