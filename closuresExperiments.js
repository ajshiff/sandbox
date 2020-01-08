function main ()
{
    var number = 0

    function increment ()
    {
        return ++number;
    }
    // var increment = () =>
    // {
    //     return ++number;
    // }
    function decrement ()
    {
        return --number;
    }
    function print ()
    {
        return console.log(number);
    }
    function value ()
    {
        return number;
    }
    number++
    return {up: () => increment(), down: () => decrement(), value, print, test: number};

}
var meep = main()
meep.up()
meep.up()
meep.up()
meep.up()
meep.print();
console.log(meep.value());
console.log(meep.test);


// function main2 ()
// {
//     var word = "boop";

//     (function close(gib)
//     {
//         gib = "beep"
//     })()
//     console.log(word)
// }
// main2()