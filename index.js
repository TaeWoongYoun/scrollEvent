// 1차 공부
// window.addEventListener('scroll', function(){
//     window.scrollTo(0,500);
//     //윈도우 창 강제로 스크롤시키기(x좌표,y좌표) 
// })

// $(window).on('scroll', function(){
//     $(window).scrollTop()
// })

// function window(){
//     console.log('스크롤 감지');
// }

// window.addEventListener('scroll', window);

// 2차 공부
// 스크롤하면 콘솔창에 1이 출력되는 코드
// window.addEventListener('scroll', function(){
//     console.log(1);
// });

// 얼마나 스크롤바 내렸는지 알려주는 코드
// window.addEventListener('scroll', function(){
    // 둘이 같은 코드
    // console.log(window.scrollY);
//    // console.log(window.pageYOffset);
// });

// 내가 설정한 좌표로 스크롤바가 강제 고정되는 코드
// window.addEventListener('scroll',function(){
//     window.scrollTo(0, 100);
// })

// 내가 설정한 좌표로 스크롤 해주세요
// window.addEventListener('scroll',function(){
//     window.scrollBy(0, 100);
// })

// 내가 얼마나 스크롤 했는지 정확하게 알려주는 코드
// $(window).on('scroll', function(){
//     console.log($(window).scrollTop())
// })

// 현재 스크롤바 이동하는 코드(고정)
// $(window).on('scroll', function(){
//     $(window).scrollTop(100)
// })

// 스크롤되면 네브 안에 a가 글자가 커지고 글자색이 변경되는 코드

// window.addEventListener('scroll', function(){
//     // getElementsByClassName은 여러 요소를 반환하므로 배열 형태로 반환됩니다.
//     // 따라서 인덱스를 사용하여 해당 요소에 접근해야 합니다.
//     var elements = document.getElementsByClassName('navbar-brand');

//     // 예시로 첫 번째 요소에 대해 fontSize를 변경합니다.
//     if (elements.length > 0) {
//         elements[0].style.fontSize = '32px';
//         elements[0].style.color = 'aqua';
//     }
// });

// 숙제 1번 한글로 적어보기
// 만약에 스크롤바를 100px 내리면 로고의 폰트사이즈를 작게 만들기
// 그렇지 않다면 로고의 폰트사이즈를 원래대로 설정하기

$(window).on('scroll', function(){
    var down = $(window).scrollTop();
    var a = document.getElementById('a')
    var event = document.getElementsByClassName('navi')[0].classList

    if( down >= 100){
        event.add('scroll');
    } else {
        event.remove('scroll');
    }

    // console.log();
})

// 숙제 2번 완료
// 2. 회원약관 박스를 거의 끝까지 스크롤하면 alert를 띄워줍시다.
// $('.lorem').on('scroll', function(){
//     var 내린양 = document.querySelector('.lorem').scrollTop+100;
//     var 실제높이 = document.querySelector('.lorem').scrollHeight;

//     if( 내린양 == 실제높이 ){
//         alert('ㅊㅊ 정독함')
//     }

//     console.log(내린양, 실제높이);
// })