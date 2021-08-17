function appendChildren(decorateDivFunction) {
    var allDivs = [...document.getElementsByTagName("div")];
    console.log(decorateDivFunction);
    for (var i = 0; i < allDivs.length; i++) {
        var newDiv = document.createElement("div");
        decorateDivFunction(newDiv);
        allDivs[i].appendChild(newDiv);
    }
}

// Example case.
document.body.innerHTML = `
  <div id="a">
	<div id="b">
	</div>
  </div>`;

appendChildren(function (div) {});
console.log(document.body.innerHTML);
