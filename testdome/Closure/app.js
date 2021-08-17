function registerHandlers() {
    var links = document.getElementsByTagName("a");

    for (var i = 0, len = links.length; i < len; i++) {
        links[i].onclick = generateHandler(i);
    }

    function generateHandler(index) {
        return function () {
            alert(index);
            return false;
        };
    }
}
registerHandlers();

/* HTML code for testing purposes (do not submit uncommented):
<body>
  In my life, I used the following web search engines:<br/>
  <a href="//www.yahoo.com">Yahoo!</a><br/>
  <a href="//www.altavista.com">AltaVista</a><br/>
  <a href="//www.google.com">Google</a><br/>
</body>
*/
// registerHandlers 함수의 버그를 수정합니다.
// 경고는 링크를 따라가는 대신 문서 내에서 앵커의 0부터 시작하는 인덱스를 표시해야 합니다.
// 예를 들어 아래 문서에서 Google 앵커를 클릭하면 경고가 "2"로 표시되어야 합니다.
// 이는 문서의 세 번째 앵커 요소이고 0부터 시작하는 인덱스가 2이기 때문입니다.
