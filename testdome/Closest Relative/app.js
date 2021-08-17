/**
 * @param {HTMLElement} parent The HTML element of the parent
 * @param {string} relativeName The name of relative to be searched
 * @return {HTMLElement} The HTML element of the closest relative
 */
function closestRelative(parent, relativeName) {
    // Your code goes here
    const queue = [...parent.children];
    const tagName = relativeName.toUpperCase();
    let el;

    while (queue.length > 0) {
        el = queue.shift();
        if (el.tagName === tagName) return el;
        if (!el.hasChildNodes()) {
            continue;
        }

        for (const childEl of el.children) {
            console.log(childEl);
            queue.push(childEl);
        }
    }
    return null;
}

// Example case
document.body.innerHTML = "<James>" + "<Dave></Dave>" + "<Mike></Mike>" + "<Sarah></Sarah>" + "</James>";

let parent = document.getElementsByTagName("James")[0];
let relative = closestRelative(parent, "Mike");
console.log(relative && relative.tagName); // prints MIKE
