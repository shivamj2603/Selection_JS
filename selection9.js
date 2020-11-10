var num = parseInt(process.argv[2]);
var result = "";
console.log("Number is : " + num);
switch (num) {
    case 0:
        result = "zero";
        break;
    case 1:
        result = "one";
        break;
    case 2:
        result = "two";
        break;
    case 3:
        result = "three";
        break;
    case 4:
        result = "four";
        break;
    case 5:
        result = "five";
        break;
    case 6:
        result = "six";
        break;
    case 7:
        result = "seven";
        break;
    case 8:
        result = "eight";
        break;
    case 9:
        result = "nine";
        break;
    default:
        result = "Invalid Number";
}
console.log(result);