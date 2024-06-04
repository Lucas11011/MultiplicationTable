// Lucas Aurelio
document.getElementById('tableForm').addEventListener('submit', function(event) {
    // Prevent the form from submitting the default way and refreshing the page
    event.preventDefault();

    // (parseInt: converts its first argument to a string, parses that string, then returns an integer or NaN)
    // Get the input values from the user
    const minRow = parseInt(document.getElementById('minRow').value);
    const maxRow = parseInt(document.getElementById('maxRow').value);
    const minCol = parseInt(document.getElementById('minCol').value);
    const maxCol = parseInt(document.getElementById('maxCol').value);

    // Error message handling
    const errorMessage = validateInputs(minRow, maxRow, minCol, maxCol);
    if (errorMessage) {
        // If there is an error, display an error message
        document.getElementById('errorMessage').innerText = errorMessage;
        return;
    } else {
        // Else clear any previous error messages
        document.getElementById('errorMessage').innerText = '';
    }

    // Call funtion to generate the table 
    generateTable(minRow, maxRow, minCol, maxCol);
});

// Function to generate the multiplication table
function generateTable(minRow, maxRow, minCol, maxCol) {
    // Get the multiplication table element
    const table = document.getElementById('multiplicationTable');

    // Clear previous content in the table if any
    table.innerHTML = '';

    // Create header row element
    const headerRow = document.createElement('tr');
    // Create element to represent an empty cell
    const emptyCell = document.createElement('th');
    // Add new child node
    headerRow.appendChild(emptyCell);

    // for loop to create column values from the given inputs
    let col = minCol;
    for (col; col <= maxCol; col++) {
        // Create tabe header element
        const colHeader = document.createElement('th');
        // Display in the table
        colHeader.innerText = col;
        // Append as children of headerRow
        headerRow.appendChild(colHeader);
    }
    // Append to table element
    table.appendChild(headerRow);

    // for loop to create row values from the given inputs
    let row = minRow;
    for (row; row <= maxRow; row++) {
        // Create table row element
        const tableRow = document.createElement('tr');
        // Create table header element to represent the header cell of the current row
        const rowHeader = document.createElement('th');
        // Display in the table
        rowHeader.innerText = row;
        // Append rowHeader
        tableRow.appendChild(rowHeader);

        // Loop to calculate the values in the table and display them
        let col = minCol;
        for (col; col <= maxCol; col++) {
            // Create table data element
            const tableData = document.createElement('td');
            // Calculation and display
            tableData.innerText = row * col;
            // Append to current row of the table
            tableRow.appendChild(tableData);
        }
        // Append current table row to the table
        table.appendChild(tableRow);
    }
}

// Function for input validation
function validateInputs(minRow, maxRow, minCol, maxCol) {
    // Check if inputs are numbers
    if (isNaN(minRow) || isNaN(maxRow) || isNaN(minCol) || isNaN(maxCol)) {
        return 'Error: Please provide numbers for inputs.';
    }
    // Check if min value is less than max value
    if (minRow > maxRow) {
        return 'Error: Minimum row value must be less than or equal to maximum row value.';
    }
    // Check if min value is less than max value
    if (minCol > maxCol) {
        return 'Error: Minimum column value must be less than or equal to maximum column value.';
    }
    // Check if inuts are in range
    if (minRow < -50 || maxRow > 50 || minCol < -50 || maxCol > 50) {
        return 'Error: inputs must be between -50 and 50.';
    }
}
