class Carousel {
    constructor(carouselElement){

        this.carousel = carouselElement;
        
        carousel.buttons = {
            'left': carousel.querySelector('.left-button'),
            'right': carousel.querySelector('.right-button')
        }

        carousel.items = carousel.querySelectorAll('img');
        carousel.amount = carousel.items.length - 1
        carousel.current = 0;
        carousel.items.forEach((item, i) => {item.setAttribute("data-item", i)})
        document.querySelector(`img[data-item='${carousel.current}']`).style.display = 'block'

        this.carousel.buttons.right.addEventListener('click', function(){clickTst(+1);}, false);
        this.carousel.buttons.left.addEventListener('click', function(){clickTst(-1);}, false);

        function setItem(){
            carousel.items.forEach(item => item.style.display = 'none');
            document.querySelector(`img[data-item='${carousel.current}']`).style.display = 'block'
        }
        
        function clickTst(direction){

            if (carousel.current == 0 && direction == -1) {
                carousel.current  = carousel.amount
                setItem()
                return;
            }

            if (carousel.current == carousel.amount && direction !== -1) {
                carousel.current  = 0
                setItem()
                return;
            }

            if (direction == +1) { 
                carousel.current  = carousel.current + direction
                setItem()
                return;
                // counter = amount - 1; 
            }
            
            if (direction == -1 && carousel.current !== 0) { 
                carousel.current  = carousel.current + direction
                setItem()
                return;
            }
        }
      }
}

let carousel = document.querySelector('.carousel');
new Carousel(carousel);
