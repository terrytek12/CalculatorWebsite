// Initialize variables to store the current input and result
let currentInput = '';
let result = '';

// Function to display a value on the calculator screen
function display(value) {
    currentInput += value;
    // Update the calculator screen with the current input
    document.getElementById('result').value = currentInput;
}

// Function to clear the calculator screen
function clearScreen() {
    // Reset the current input and result variables
    currentInput = '';
    result = '';
    // Clear the calculator screen
    document.getElementById('result').value = '';
}

// Function to solve and display the result
function solve() {
    try {
        // Use eval to evaluate the current input and calculate the result
        result = eval(currentInput);
        // Display the result
        document.getElementById('result').value = result;
        // Store the result
        currentInput = result.toString();
    } catch (error) {
        // If an error occurs during evaluation, display an error message
        document.getElementById('result').value = 'Error';
        // Reset the current input and result variables
        currentInput = '';
        result = '';
    }
}