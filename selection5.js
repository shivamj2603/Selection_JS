var num = process.argv[2];
var result = "";
console.log("Number in digit is : " + num);
if (num == 0) {
    result = "zero";
}
else if (num == 1) {
    result = "one";
}
else if (num == 2) {
    result = "two";
}
else if (num == 3) {
    result = "three";
}
else if (num == 4) {
    result = "four";
}
else if (num == 5) {
    result = "five";
}
else if (num == 6) {
    result = "six";
}
else if (num == 7) {
    result = "seven";
}
else if (num == 8) {
    result = "eight";
}
else if (num == 9) {
    result = "nine";
}
else {
    result = "Invalid number";
}
console.log("Number in words is : " + result);