// JAVASCRIPT 링크를 클릭하면 링크 대상으로 이동할 것인지
// 묻는 기본 확인 대화 상자가 표시되어야 합니다.
// 확인 대화 상자는 링크의 "href" 속성을 메시지로 표시해야 합니다.
// 브라우저는 사용자가 작업을 확인하는 경우에만 대상 페이지로 이동해야 합니다.
// 다음 두 함수를 작성하십시오.

// • clickRedirectHandler(event) - 설명된 리디렉션 확인 동작을 구현하는
// 	< a > 요소(즉, 클릭된 요소를 가리킴)에 바인딩된 클릭 핸들러입니다.
// 제공된 인수(event)는 HTML 이벤트 개체입니다.

// • setRedirectConfirmation Dialogs()
// 	- 현재 페이지의 모든 < a > 요소에 대한 클릭 이벤트 핸들러로 clickRedirectHandler를 등록하는 함수.
function clickRedirectHandler(event) {
    if (event) {//확인시
        // 이동
    } else {//확인 아닐시
        // 이동 x
    }
}

function setRedirectConfirmationDialogs() {
    // Registers clickRedirectHandler for all <a> elements on the page
    const atags = document.querySelectorAll("a");
    for (const atag of atags) {
        atag.addEventListener("click", function (event) {
            confirm(atag.getAttribute("href"));
        });
    }
}
