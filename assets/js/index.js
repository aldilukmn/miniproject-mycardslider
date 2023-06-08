const carousel = document.querySelector('.carousel');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

let isDragging = false;

const dragStart = () => {
    isDragging = true;
}

const dragging = (e) => {
    if(!isDragging) return;
    console.log(carousel.scrollLeft = e.pageX);
}

prev.addEventListener('click', () => {
    let prevScrollDistance;
    const windowWidth = window.innerWidth;

    if (windowWidth >= 1080) {
        prevScrollDistance = 1200;
    } else if (windowWidth >= 768) {
        prevScrollDistance = 980;
    } else if (windowWidth >= 600) {
        prevScrollDistance = 250;
    } else {
        prevScrollDistance = 100;
    }

    const prevScrollLeft = carousel.scrollLeft - prevScrollDistance;
    carousel.scrollTo({
        left: prevScrollLeft,
        behavior: 'smooth'
    });
});

next.addEventListener('click', () => {
    let nextScrollDistance;
    const windowWidth = window.innerWidth;

    if (windowWidth >= 1080) {
        nextScrollDistance = 1200;
    } else if (windowWidth >= 768 || windowWidth >= 601) {
        nextScrollDistance = 570;
    } else if (windowWidth >= 600 || windowWidth >= 350) {
        nextScrollDistance = 225;
    } else {
        nextScrollDistance = 350;
    }

    const nextScrollLeft = carousel.scrollLeft + nextScrollDistance;
    carousel.scrollTo({
        left: nextScrollLeft,
        behavior: 'smooth'
    });
});
// carousel.addEventListener('mousedown', dragStart)
// carousel.addEventListener('mousemove', dragging);