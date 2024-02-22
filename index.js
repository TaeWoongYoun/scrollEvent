// window.addEventListener('scroll', function(){
//     window.scrollTo(0,500);
//     //윈도우 창 강제로 스크롤시키기(x좌표,y좌표) 
// })

// $(window).on('scroll', function(){
//     $(window).scrollTop()
// })


// div의 스크롤바 내린 양 + 100== div의 실제높이
// $('lorem').om('scroll', function(){
//     document.querySelector('.lorem').scrollTop;
// })


window.addEventListener('scroll', function(){
    // getElementsByClassName은 여러 요소를 반환하므로 배열 형태로 반환됩니다.
    // 따라서 인덱스를 사용하여 해당 요소에 접근해야 합니다.
    var elements = document.getElementsByClassName('navbar-brand');

    // 예시로 첫 번째 요소에 대해 fontSize를 변경합니다.
    if (elements.length > 0) {
        elements[0].style.fontSize = '32px';
        elements[0].style.color = 'aqua';
    }
});


// function window(){
//     console.log('스크롤 감지');
// }

// window.addEventListener('scroll', window);