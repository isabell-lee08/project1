document.addEventListener("DOMContentLoaded", (event) => {
    // gsap code here!

    let tl = gsap.timeline({
        repeat: -1,
        ease: 'in',
    })
    tl.to('#intro', {y: 10,});
    tl.to('#intro', {y: 0,});

    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.defaults({
        scrub: 3,
    });

    gsap.to('#intro', {
        scrollTrigger: {
            trigger: "h1",
            scroller: "#main_container",
            start: "40% 20%",
            end: "60% top",
        },
        opacity: 0,
    });

    gsap.from('#directions1', {
        scrollTrigger: {
            trigger: '#directions1',
            scroller: "#main_container",
            start: "top 30%",
            end: "+=3500 bottom",
            pin: true,
        },
        opacity: 0,
    });

    gsap.from('#directions2', {
        scrollTrigger: {
            trigger: '#directions2',
            scroller: "#main_container",
            start: "top 30%",
            end: "+=3500 top",
            pin: true,
        },
        opacity: 0,
    });

    gsap.from('#directions3', {
        scrollTrigger: {
            trigger: '#directions3',
            scroller: "#main_container",
            start: "top 30%",
            end: "+=1000 top",
            pin: true,
        },
        opacity: 0,
    });

})

const chorg = document.getElementById('chorg');
const chorgClick = document.getElementById('chorgClick');

const planetOne = document.getElementById('one');
const planetTwo = document.getElementById('two');
const planetThree = document.getElementById('three');
const planetFour = document.getElementById('four');

planetOne.addEventListener('mouseover', function () {
    chorg.style.backgroundImage = "url(images/chorg_verysad.png)"
})
planetTwo.addEventListener('mouseover', function () {
    chorg.style.backgroundImage = "url(images/chorg_sad.png)"
})
planetThree.addEventListener('mouseover', function () {
    chorg.style.backgroundImage = "url(images/chorg_ok.png)"
})
planetFour.addEventListener('mouseover', function () {
    chorg.style.backgroundImage = "url(images/chorg_happy.png)"
})

function chorgDefault() {
    chorg.style.backgroundImage = "url(images/chorg.png)"
}

chorgClick.addEventListener('mousedown', function () {
    chorg.style.backgroundImage = "url(images/chorg_bop.png)"
    const squish = new Audio("audio/squish.m4a");
    squish.play()
})
chorgClick.addEventListener('mouseup', chorgDefault)