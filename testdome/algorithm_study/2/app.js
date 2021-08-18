// 제품 평가 HTML 위젯은 별 5개로 구성됩니다.
// 각 별은 span 요소로 표시됩니다.
// 이것은 위젯의 HTML 코드입니다.
// span 요소를 클릭하면 해당 span 요소와 그 앞에 있는 모든 요소에 활성 클래스가 추가되어야 합니다.
// 또한 활성 클래스가 있는 경우 그 뒤의 모든 스팬 요소에서 제거해야 합니다.
// 예를 들어, 세 번째 span 요소를 클릭한 후 HTML 코드는 다음과 같아야 합니다.클릭 이벤트 핸들러를 등록하고 HTML 위젯의 논리를 구현하는 설정 기능을 완료합니다.
function setup() {
    // Write your code here.
    let els = document.getElementsByTagName("span");
    els.forEach((element) => {
        element.addEventListener("click", (i) => {
            console.log(els[i]);
        });
    });
    els.forEach((element) => {
        console.log(element);
    });
}

// Example case.
document.body.innerHTML = `
  <div id='rating'>
	<span>*</span>
	<span>*</span>
	<span>*</span>
	<span>*</span>
	<span>*</span>
  </div>`;

setup();

document.getElementsByTagName("span")[2].click();
console.log(document.body.innerHTML);
