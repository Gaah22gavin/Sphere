$(document).on('ready', e=>{
    $('.line').on('click', e=>{
        $('.menu').toggleClass("line-open")
        $('header').toggleClass('open');
    });
})