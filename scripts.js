// Get display element and buttons
const display = document.querySelector('#display');
const buttons = document.querySelectorAll('button');

// Add click event listeners to buttons
buttons.forEach((item) => {
    item.onclick = () => {
        if (item.id == 'clear') {
            // Clear the display
            display.innerText = "";
        } else if (item.id == "backspace") {
            // Remove the last character from the display
            let string = display.innerText.toString();
            display.innerText = string.substr(0, string.length - 1);
        } else if (display.innerText != "" && item.id == "equal") {
            // Evaluate the expression in the display
            display.innerText = eval(display.innerText);
        } else if (display.innerText == "" && item.id == "equal") {
            // Show "Empty!" message if the display is empty and equal button is clicked
            display.innerText = "Empty!";
            setTimeout(() => (display.innerText = ""), 2000)
        } else {
            // Add button's id to the display
            display.innerText += item.id;
        }
    }
});

// Get theme toggle button, calculator, and toggle icon elements
const themeToggleBtn = document.querySelector(".theme-toggler");
const calculator = document.querySelector(".calculator");
const toggleIcon = document.querySelector(".toggler-icon");
let isDark = true;

// Add click event listener to theme toggle button
themeToggleBtn.onclick = () => {
    // Toggle dark theme and active state
    calculator.classList.toggle("dark");
    themeToggleBtn.classList.toggle("active");
    isDark = !isDark;
}