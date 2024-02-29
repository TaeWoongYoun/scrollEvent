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

// $(window).on('scroll', function(){
//     var down = $(window).scrollTop();
//     var a = document.getElementById('a');
//     var event = document.getElementsByClassName('navi')[0].classList;

//     if( down >= 100){
//         event.add('scroll');
//     } else {
//         event.remove('scroll');
//     }

//     // console.log();
// })

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


// 숙제 3번
// 페이지 내릴 때 마다 페이지를 얼마나 읽었는지 진척도를 알려주는 UI 같은건 어떻게 만들면 될까요?
// 까만색의 가로로 긴 div 박스 하나 만들고 
// 페이지를 1% 읽으면 div 박스 길이는 1%
// 페이지를 50%정도 읽으면 div 박스 길이는 50% 
// 페이지 다 읽으면 div 박스 길이는 100% 
// 이런거 만들어보면 재미있을듯요 
// 실은 간단해서 재미없습니다 

// 만약에 1만큼 스크롤하면 line의 width를 1%를 증가시킴 width를 시작 전 0으로 고정해두기. 내일하겠습니당.

// $(window).on('scroll', function(){
//     var 스크롤양 = Math.floor($('html')[0].scrollTop);
//     var 실제높이 = $('html')[0].scrollHeight;
//     var 스크롤바높이 = $('html')[0].clientHeight;

//     console.log(스크롤양+스크롤바높이, 실제높이,);
// })



$(window).on('scroll', function(){
    var 스크롤양 = Math.floor($('html')[0].scrollTop);
    var 길이 = document.getElementById('line').style.width = '1%';
    // 문서 전체의 높이
    var 전체높이 = $(document).height();
    // 창의 높이
    var 창높이 = $(window).height();
    // 스크롤 위치를 퍼센트로 계산
    var 스크롤양_퍼센트 = Math.floor(($(window).scrollTop() / (전체높이 - 창높이)) * 100);

    console.log(스크롤양_퍼센트);

})