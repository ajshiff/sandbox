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
 * displaySpecificTransaction() grabs transaction info from the
 * transactionHistory array with the coresponding element number
 * and displays that specific transaction.
 ***************************************************************/
function displaySpecificTransaction(transactionNumber){
    let value = transactionHistory[transactionNumber];
    displayTransaction(value[0], value[1], value[2]);
}

/***************************************************************
 * addAndDisplayNewTransaction() will push a new element to the
 * transactionHistory array, then will display that new element
 * from the array.
 ***************************************************************/
function addAndDisplayNewTransaction(date, store, price){
    let newLength = transactionHistory.push([date, store, price])-1;
    displaySpecificTransaction(newLength);
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
    let 
}

/***************************************************************
 * 
 ***************************************************************/
function sortByHighPrice(a, b){
    priceA = a[2];
    priceB = b[2];
    console.log(priceA);
    console.log(priceB);
    return priceB - priceA;
}

console.log('\n');
displayAllTransactions();
addAndDisplayNewTransaction(new Date(2018, 4, 13), "Rent", 300);
addAndDisplayNewTransaction(new Date(2017, 10, 31), "Car Insurance", 80);
addAndDisplayNewTransaction(new Date(2017, 7, 27), "Tuition", 2000);
addAndDisplayNewTransaction(new Date(2019, 7, 27), "Student Store", 20);
//displaySpecificTransaction(0);

console.log('\n');
transactionHistory.sort(sortByDate).ghjk();
displayAllTransactions();


