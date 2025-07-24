// Get input box and task list container
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

// Add task
function addCheck() {
    if (inputBox.value === '') {
        alert("Oops! You forgot to type something."); // Empty input check
    } else {
        let li = document.createElement("li"); // Create task
        li.textContent = inputBox.value;
        listContainer.appendChild(li);

        let span = document.createElement("span"); // Delete button
        span.innerHTML = "\u00d7"; // × symbol
        li.appendChild(span);
    }

    inputBox.value = ""; // Clear input
    saveData(); // Save to localStorage
}

// Handle check or delete
listContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked"); // Toggle check
        saveData();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove(); // Delete task
        saveData();
    }
}, false);

// Save list HTML
function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

// Load saved list
function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}

showTask(); // Run on load
