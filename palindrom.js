var checkPalin = function (num) {
    var x = +num.toString().split("").reverse().join("");
    return x === num;
};
console.log(checkPalin(190));
