function newMessage(topicName) {
    // Write your code here
    if (topicName !== null || topicName !== undefined) {
        var ele = document.querySelector(`p[data-topic-name="${topicName}"]`);
        if (ele !== null) {
            ele.style.backgroundColor = "red";
        }
    }
}

// Example case
document.body.innerHTML = `<div>
	<p data-topic-name="discussion">General discussion</p>
	<p data-topic-name="bugs">Bugs</p>
	<p data-topic-name="animals">Animals</p>
  </div>`;
newMessage("discussion");
console.log(document.body.innerHTML);
