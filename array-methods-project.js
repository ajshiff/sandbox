console.log("Practical array.push(): Transaction History");
var transactionHistory = [
    ["Walmart", 50],
    ["Taco Bell", 10],
    ["Fat Cats" , 25]
];
/***************************************************************
 * displayTransaction is a quick way to display elements from 
 * your transaction history
 ***************************************************************/
function displayTransaction(store, price){
    console.log("Store: " + store + " --- Price: " + price);
}

/***************************************************************
 * addAndDisplayNewTransaction will push a new element to the
 * transactionHistory array, then will display that new element
 * from the array.
 ***************************************************************/
function addAndDisplayNewTransaction(store, price){
    let newLength = transactionHistory.push([store, price])-1;
    displayTransaction(transactionHistory[newLength][0], transactionHistory[newLength][1]);
}

/***************************************************************
 * displaySpecificTransaction() grabs transaction info from the
 * transactionHistory array with the coresponding element number
 * and displays that specific transaction.
 ***************************************************************/
function displaySpecificTransaction(transactionNumber){

}

/***************************************************************
 * displayAllTransactions() runs through the transactionHistory
 * array foreach element and displays them using displayTransaction()
 ***************************************************************/
function displayAllTransactions(){
    transactionHistory.forEach(element => {
        displayTransaction(element[0], element[1]);
    });
}

displayAllTransactions();
addAndDisplayNewTransaction("Rent", 300);
addAndDisplayNewTransaction("Car Insurance", 80);

