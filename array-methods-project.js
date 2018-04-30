//console.log("Practical array.push(): Transaction History");
var transactionHistory = [
    [new Date(2018, 2, 28), "Walmart", 50],
    [new Date(2018, 3, 2), "Taco Bell", 10],
    [new Date(2018, 3, 30), "Fat Cats" , 25]
];

/***************************************************************
 * Print months takes a number input between 0-11 and returns the month name in string.
 ***************************************************************/
function printMonth(monthNumber){
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return months[monthNumber]
}

/***************************************************************
 * displayTransaction() is a quick way to display elements from 
 * your transaction history
 ***************************************************************/
function displayTransaction(date, store, price){

    console.log("Date: " + date.getFullYear() + ' ' + printMonth(date.getMonth()) + ' ' + date.getDate() + " --- Store: " + store + " --- Price: " + price);
}

/***************************************************************
 * addAndDisplayNewTransaction() will push a new element to the
 * transactionHistory array, then will display that new element
 * from the array.
 ***************************************************************/
function addAndDisplayNewTransaction(date, store, price){
    let newLength = transactionHistory.push([date, store, price])-1;
    displayTransaction(transactionHistory[newLength][0], transactionHistory[newLength][1], transactionHistory[newLength][2]);
}

/***************************************************************
 * displaySpecificTransaction() grabs transaction info from the
 * transactionHistory array with the coresponding element number
 * and displays that specific transaction.
 ***************************************************************/
function displaySpecificTransaction(transactionNumber){
    let value = transactionHistory[transactionNumber];
    displayTransaction(value[0], value[1], value[2]);
}

/***************************************************************
 * displayAllTransactions() runs through the transactionHistory
 * array foreach element and displays them using displayTransaction()
 ***************************************************************/
function displayAllTransactions(){
    transactionHistory.forEach(element => {
        displayTransaction(element[0], element[1], element[2]);
    });
}

displayAllTransactions();
addAndDisplayNewTransaction(new Date(2018, 4, 13), "Rent", 300);
addAndDisplayNewTransaction(new Date(2017, 10, 31), "Car Insurance", 80);
displaySpecificTransaction(0);
