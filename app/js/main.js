

let slider = tns({
    controlsContainer: '#controls',
    prevButton: '.previous',
    nextButton: '.next',
    autoplayButton: '.auto',
    container: '.my-slider',
    items: 1,
    slideBy: 'page',
    autoplay: true,

    

    responsive: {
    640: {
        items: 2
    },
    1000: {
        items: 3
},
    1400: {
        items: 3
}
    }
});

