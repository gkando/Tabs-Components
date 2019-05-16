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

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/