const sliderPhotos = document.querySelector('.slider-photos');
const sliderContainer = document.querySelector('.slider-container');


var photos = ['img1.jpg','img2.jpg','img3.jpg','img4.jpg','img5.jpg', 'img6.jpg', 'img7.jpg', 'img8.jpg']

function img_template(src){
    return '<img src="./img/' + src + '" alt="">';
}

window.onload = () =>{
    for(var i = 0; i < photos.length; i++){
        sliderPhotos.innerHTML += img_template(photos[i]);
    }
}
