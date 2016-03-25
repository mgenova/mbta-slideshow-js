//Constructor
function Slide(elementId){
    this.container = document.getElementById(elementId);
    this.images = [];
    this.currImageIndex = 0;
    this.timer = null;
};


//Add images 
Slide.prototype.addImages = function(imgs) {
    this.images = this.images.concat(imgs);   
};

   
//Creates the page elements
Slide.prototype.render = function() {
    var html = '';
    var currentImage = this.images[this.currImageIndex];

    var div = document.createElement('div');
    var image = document.createElement('img');
    var imageCaption = document.createElement('div');
    
    div.id = 'slider';
    image.src = currentImage.src;
    image.alt = currentImage.alt;
    imageCaption.id = 'imageCaption';
    imageCaption.innerHTML = currentImage.caption;
    imageCaption.style = "margin:auto; text-align:center;"
    div.className = 'animated ' + currentImage.transition;
    div.style.animationDuration = currentImage.duration;
   // console.log('animationDuration: ' + currentImage.duration);
    

    
    div.appendChild(image);
    div.appendChild(imageCaption);
    

    /*
    html = '<div id=slider>';
    html += '<img src=' + currentImage.src + ' alt="' + currentImage.alt + '">';
    html += '<div id=imageCaption>' + currentImage.caption + '</div>';
    html += '</div>';

    
    this.container.innerHTML = html;
    */
    this.container.appendChild(div);
    console.log(this.container.appendChild(div)); 

    
   /* 
        <div id="slider">
            <img src="/images/image0.jpg" alt="text here">
            <div id="imageCaption"></div>
        
        </div>
   */
};



//Moves image to image
Slide.prototype.cycle = function() {
    this.render();
    
    if (this.currImageIndex +1 === this.images.length) {
        this.currImageIndex = 0; //resets index to 0

    } else {
        this.currImageIndex += 1;     

    }
};



//Changes picture every 5 seconds
Slide.prototype.play = function() {
    var that = this; 
    this.timer = window.setInterval(function () {
            that.cycle();
        }, 5000);
  

  
};

      
var slideShow = new Slide('slider');
//slideShow.addImages([{}, {}, {}, {}]);
slideShow.addImages([{
    transition: 'flipInY',
   // duration: '5s',
    src: '/images/image0.jpg',
    alt: 'Lilies',
    caption: 'In three words I can sum up everything I\'ve learned about life: it goes on. -Robert Frost'
},{
    transition: 'fadeInUp',
   // duration: '2s',
    src: '/images/image1.jpg',
    alt: 'Hallstatt',
    caption: 'Don\'t cry because it\'s over, smile because it happened. -Dr. Seuss'
},{
    transition:  'fadeInDown',
   // duration: '10s',
    src: '/images/image2.jpg',
    alt: 'Daisies',
    caption: 'In order to carry a positive action we must develop here a positive vision. -Dalai Lama'
},{
    transition:'bounceIn',
   // duration: '2s',
    src: '/images/image3.jpg',
    alt: 'Orchids',
    caption: 'In three words I can sum up everything I\'ve learned about life: it goes on. -Robert Frost'
},{
    transition:'bounceOut',
   // duration: '10s',
    src: '/images/image4.jpg',
    alt: 'Kiwi',
    caption: 'Don\'t cry because it\'s over, smile because it happened. -Dr. Seuss'
},{
    tranistion: 'flipInX',
  //  duration: '2s',
    src: '/images/image5.jpg',
    alt: 'Lilies',
    caption: 'In order to carry a positive action we must develop here a positive vision. -Dalai Lama'
}]);
       
    
    slideShow.play();




 



/*******************************************************************************************************/ 

/*
 
    //capture images and texts
    Slide.prototype.render = function() {
        var imageContainer = document.getElementById('slider');
        this.images.forEach(function(image){
            var imageElement = document.createElement('img');
            imageElement.src = 'images/'+image+'.jpg';
            imageElement.className = 'slide';
            imageElement.id = image;
            imageContainer.appendChild(imageElement);
        });
       
        var textContainer = document.getElementById('slider');
        this.texts.forEach(function(txt){
            var textElement = document.createElement('p');
            var t = document.createTextNode(txt); 
            textElement.appendChild(t);
            textElement.className = 'txt';
            document.getElementById('slider').appendChild(textElement);
        });      
    };//end of render function     
   


function Slide(type, title, duration, transition, active ) {    

    this.slide = {
        type: type,
        title: title,
        duration: duration,
        active: active,
        transitionIn: function() {},
        transitionOut: function() {},
        
        
        
        create: function (){},
        update: function (){},
        delete: function (){},
        publish: function (){}

    }
    return Object.create(this.slide);
}

var firstSlide = new Slide( );
firstSlide.create();



function Show(slides, title, active){

    this.show = {
        slides: slides,
        title: title,
        active: active,
        create: function (){

        },
        update: function (){},
        delete: function (){},
        publish: function (){},
        addSlide: function (slide){
            this.slides.push(slide);
        },
        removeSlide: function (){
        },
        play: function () {}

    }
}

var slideshow = {
    title: "",
    active: true,
    create: function (){},
    update: function (){},
    delete: function (){},
    publish: function (){}
    
};

 
  */  



    
