function setup() {
    // Write your code here
    var allDivs = [...document.getElementsByTagName("button")];
}

// Example case
document.body.innerHTML = `<ol>
	<li><button>Up!</button>Taco<button>Down!</button></li>
	<li><button>Up!</button>Pizza<button>Down!</button></li>
	<li><button>Up!</button>Eggs<button>Down!</button></li>
  </ol>`;

setup();
document.getElementsByTagName("button")[2].click();

console.log(document.body.innerHTML);
