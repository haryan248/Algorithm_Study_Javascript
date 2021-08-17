function setup() {
    // Write your code here.
    var ele = document.getElementsByClassName("remove");
    for (let i = 0; i < ele.length; i++) {
        ele[i].addEventListener("click", function () {
            this.parentNode.remove();
        });
    }
}

// Example case.
document.body.innerHTML = `
  <div class="image">
	<img src="https://bit.ly/3lmYVna" alt="First">
	<button class="remove">X</button>
  </div>
  <div class="image">
	<img src="https://bit.ly/3flyaMj" alt="Second">
	<button class="remove">X</button>
  </div>`;

setup();

document.getElementsByClassName("remove")[0].click();
console.log(document.body.innerHTML);
