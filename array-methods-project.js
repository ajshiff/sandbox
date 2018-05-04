//
var transactionHistory = [
    [new Date(2018, 2, 28), "Walmart", 50],
    [new Date(2018, 3, 2), "Taco Bell", 10],
    [new Date(2018, 3, 30), "Fat Cats" , 25]
];

/*var transactionHistory = [
    [new Date(2018, 2, 28), "Walmart", 50],
    [new Date(2018, 3, 2), "Taco Bell", 10],
    [new Date(2018, 3, 30), "Fat Cats" , 25]
];*/

var deletedTransactions = [];
var potentialFraud = [];

/***************************************************************
 * Print months takes a number input between 0-11 and returns the month name in string.
 ***************************************************************/
function printMonth(monthNumber){
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return months[monthNumber];
}

/***************************************************************
 * displayTransaction() is a quick way to display elements from 
 * your transaction history
 ***************************************************************/
function displayTransaction(date, store, price){
    console.log("Date: " + date.getFullYear() + ' ' + printMonth(date.getMonth()) + ' ' + date.getDate() + " --- Store: " + store + " --- Price: " + price);
}

/***************************************************************
 * displaySpecificTransaction() grabs transaction info from the
 * transactionHistory array with the coresponding element number
 * and displays that specific transaction. Defaults to the last
 * element in the array.
 ***************************************************************/
function displaySpecificTransaction(transactionNumber = (transactionHistory.length-1)){
    var value = transactionHistory[transactionNumber];
    displayTransaction(value[0], value[1], value[2]);
}

/***************************************************************
 * returnSpecificTransaction() grabs transaction info from the
 * transactionHistory[] array with the coresponding element number
 * and returns that specific transaction. Defaults to the last
 * element in the array.
 ***************************************************************/
function returnSpecificTransaction(transactionNumber = (transactionHistory.length-1)){
    var value = transactionHistory[transactionNumber];
    return value;
}

/***************************************************************
 * addNewTransaction() replaced the old addAndDisplayNewTransaction().
 * addNewTransaction() adds a new element to the transactionHistory[].
 * It no longer displays the element by default.
 ***************************************************************/
function addNewTransaction(date, store, price){
    var newLength = transactionHistory.push([date, store, price])-1;/**************************************array.push*****/
    //displaySpecificTransaction(newLength);
}

/***************************************************************
 * displayAllTransactions() runs through the transactionHistory
 * array foreach element and displays them using displayTransaction()
 ***************************************************************/
function displayAllTransactions(array = transactionHistory){
    array.forEach(transaction => {
        displayTransaction(transaction[0], transaction[1], transaction[2]);/****************************array.forEach*****/
    });
}

/***************************************************************
 * sortByDate works naturally with array.sort() function as the
 * input parameter. The first inner-element of that array must be a type
 * Date to read correctly. 
 ***************************************************************/
function sortByDate(a, b){
    let yearA = a[0].getFullYear();
    let yearB = b[0].getFullYear();
    if (yearA === yearB){
        let monthA = a[0].getMonth();
        let monthB = b[0].getMonth();
        if(monthA === monthB){
            let dateA = a[0].getDate();
            let dateB = b[0].getDate();
            if (dateA === dateB){
                return 0;
            } else {
                return dateB - dateA;
            }
        } else {
            return monthB - monthA;
        }
    } else {
        return yearB - yearA;
    }
    sortByDate.calledCount += 1;
}

sortByDate.calledCount = 0;

/***************************************************************
 * 
 ***************************************************************/
function sortByStore(){
    
}

/***************************************************************
 * sortByHighPrice works naturally with array.sort() function as 
 * the input parameter. It compares prices and if run through sort,
 * will order the array from highest price to lowest price.
 ***************************************************************/
function sortByHighPrice(a, b){
    priceA = a[2];
    priceB = b[2];
    return priceB - priceA;
}

/**********************************************************************
 * undoRecentTransactions() takes an array input and an integer. 
 * It organizes the given array by date, removes the first element in 
 * given array and adds it to the recentlyDeleted[]. It then concatinates
 * it to the global deletedTransactions[]. 
 **********************************************************************/
function undoRecentTransactions(array = transactionHistory, removeAmount){
    var recentlyDeleted = [];
    array.sort(sortByDate);/*******************************************************************************array.sort*****/
    for(x = 0; x < removeAmount; x++){
        recentlyDeleted.push(array.shift());/*************************************************************array.shift*****/
    }
    deletedTransactions = deletedTransactions.concat(recentlyDeleted);/**********************************array.concat*****/
    deletedTransactions.sort(sortByDate);
}

/**********************************************************************
 * restoreRecentTransactions() resorts the deletedTransactions[] to get them
 * in the correct order, then unshifts them to the transactionHistory[]
 * to effectively restore all recent deletedTransactions[]. All data is
 * then removed from deletedTransactions[];
 **********************************************************************/
function restoreRecentTransactions(){
    // deletedTransactions is by default sorted with date most in the future first.
    // so reordering the array in the reverse order will get the transactions
    // in the correct transactionHistory.unshift order.
    deletedTransactions.reverse();///array.sort(-1) will achieve the same result./*************************array.reverse**/
    deletedTransactions.forEach(deletedTransaction => transactionHistory.unshift(deletedTransaction) );/***array.unshift**/
    deletedTransactions = [];
}

/**********************************************************************
 * eraseDeletedTransactions() is a hard-coded function that perminately
 * deletes and removes all data from the deletedTransactions[].
 **********************************************************************/
function eraseDeletedTransactions(){
    deletedTransactions = [];
}

/**********************************************************************
 * detectFraudulentBehavior() searches the transactionHistory[] for all 
 * elememnts. It returns all elements that meet the criteria. As of right 
 * now, the criteria for a transaction to be considered potentially 
 * fraudulent is any charge that is over $1500.
 **********************************************************************/
function detectFraudulentBehavior(){
    var warningThreshold = 1500;
    potentialFraud = (transactionHistory.filter(transaction => transaction[2] > warningThreshold));/*****array.filter*****/
}

/**********************************************************************
 * isDateDataRealistic() compares the date data to the data data of right now.
 * If all data from transactionHistory[] has happened before right now, 
 * it returns true. Otherwise it returns false.
 **********************************************************************/
function isDateDataRealistic(){
    var areDatesReal = transactionHistory.every(transaction => transaction[0] < new Date());/*************array.every*****/
    return areDatesReal;
}

/**********************************************************************
 * hasShoppedAtThisStore() takes a string as a parameter. That string is
 * compared to the store name value of each transaction. It returns true
 * if one or more element has a store name that matches exactly. 
 * else return false.
 **********************************************************************/
function hasShoppedAtThisStore(storeName){
    var hasShoppedHere = transactionHistory.some(transaction => transaction[1] === storeName);/************array.some*****/
    return hasShoppedHere;
}

/**********************************************************************
 * Takes an array as a parameter, ordered as follows: 
 * [new Date(year, month, day), "Store Name", Dollar-Amount]
 * and checks it against all elements in the transactionHistory[] to
 * see if there are any exact matches.
 **********************************************************************/
function doesTransactionInclude(specificTransaction){
    return transactionHistory.includes(specificTransaction);/******************************************array.includes*****/
}

/**********************************************************************
 * fetchDollarAmounts() reads all the dollar values for each transaction
 * and adds them together.
 **********************************************************************/
function fetchDollarAmounts() {
    var dollarAmounts = [0];
    var totalDollars;
    transactionHistory.forEach(function (transactiion) {
        dollarAmounts.push(transactiion[2]);
    });
    totalDollars = dollarAmounts.reduce(((accumulator, dollars) => accumulator + dollars));/*************array.reduce*****/
    return totalDollars;
}

/**********************************************************************
 * fetchStoreNamesAndIndex() returns a multi-dimensional array of 
 * upperCase store names, created from the list of all transactions,
 * and the index that that store name was taken from.
 **********************************************************************/
function fetchStoreNamesAndIndex() {
    var storeNames = [];
    transactionHistory.forEach(function(transaction){
        storeNames.push([transaction[1].toLowerCase(), transactionHistory.indexOf(transaction)]);/******array.indexOf*****/
    });
    storeNames = storeNames.map(function(store){return [store[0].toUpperCase(), store[1]]});/***************array.map*****/
    return storeNames;
}

/**********************************************************************
 * userSearchTransactionByStore takes a string input, and compares it
 * against 
 **********************************************************************/
function userSearchTransactionByStore(userInput){
    userInput = userInput.toUpperCase();
    var storeNamesAndIndex = fetchStoreNamesAndIndex();
    var matchingTransactions = storeNamesAndIndex.filter(storeName => storeName[0] === userInput);
    if (matchingTransactions.some(match => match[0] === userInput)){
        console.log("The following transactions match your search criteria: ");
        matchingTransactions.forEach(match => displaySpecificTransaction(match[1]));
    } else {
        console.log("No Transactions found with: " + userInput);
    }
}

console.log('\n');
//displayAllTransactions(); console.log('\n');
addNewTransaction(new Date(2018, 4, 13), "Rent", 300);
addNewTransaction(new Date(2017, 10, 31), "Car Insurance", 80);
addNewTransaction(new Date(2017, 7, 27), "Tuition", 2000);
addNewTransaction(new Date(2016, 8, 3), "School", 1800);
addNewTransaction(new Date(2019, 7, 27), "Student Store", 20);
addNewTransaction(new Date(2019, 7, 28), "Student Store", 15);
addNewTransaction(new Date(2018, 4, 3), "Billy the Theif", 5000);
//displaySpecificTransaction(0);

console.log("SORTING ALL TRANSACTIONS BY DATE");
transactionHistory.sort(sortByDate);
console.log("DISPLAYING ALL TRANSACTIONS");
displayAllTransactions(); console.log('\n');

//transactionHistory.sort(sortByHighPrice);
//displayAllTransactions();

undoRecentTransactions(transactionHistory, 2);
undoRecentTransactions(transactionHistory, 2);
console.log("DISPLAYING RECENTLY DELETED TRANSACTIONS");
displayAllTransactions(deletedTransactions); console.log('\n');

console.log("RESTORING RECENTLY DELETED TRANSACTIONS");
restoreRecentTransactions();
console.log("DISPLAYING ALL TRANSACTIONS");
displayAllTransactions(); console.log('\n');

console.log("DETECTING ALL HIGH-COST TRANSACTIONS");
detectFraudulentBehavior();
console.log("DISPLAYING ALL POTENTIALLY FRAUDULENT TRANSACTIONS");
displayAllTransactions(potentialFraud); console.log('\n');

userSearchTransactionByStore("student store");
userSearchTransactionByStore("pizza hut");
console.log(isDateDataRealistic());
console.log(hasShoppedAtThisStore("Walmart"));
console.log(doesTransactionInclude(returnSpecificTransaction(0)));
console.log('$' + fetchDollarAmounts());