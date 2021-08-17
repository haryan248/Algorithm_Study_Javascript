function showCustomers(customers, targetList) {
    // Your code goes here
    const fragment = document.createDocumentFragment();

    customers.forEach(({ name, email }) => {
        const li = document.createElement("li");
        const els = Array.from({ length: 2 }, () => document.createElement("p")); // p 태그 두 개 생성

        els[0].textContent = name; // 이름이 들어갈 p 태그
        els[1].textContent = email; // 이메일이 들어갈 p 태그

        li.append(els[0]);

        els[0].addEventListener("click", () => {
            // email 이 들어갈 p 태그의 부모가 li 라면 제거, 아니라면 li 에 추가
            els[1].closest("li") ? els[1].remove() : li.append(els[1]);
        });

        fragment.append(li);
    });

    targetList.append(fragment);
}

document.body.innerHTML = `
  <div>
	<ul id="customers">
	</ul>
  </div>
  `;
let customers = [
    { name: "John", email: "john@example.com" },
    { name: "Mary", email: "mary@example.com" },
];
showCustomers(customers, document.getElementById("customers"));

let customerParagraph = document.querySelectorAll("li > p")[0];
if (customerParagraph) {
    customerParagraph.click();
}
console.log(document.body.innerHTML);
