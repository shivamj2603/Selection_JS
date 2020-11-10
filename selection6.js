var num = process.argv[2];
var result = "";
console.log("Number is : " + num);
if (num == 1) {
    result = "Monday";
}
else if (num == 2) {
    result = "Tuesday";
}
else if (num == 3) {
    result = "Wednesday";
}
else if (num == 4) {
    result = "Thursday";
}
else if (num == 5) {
    result = "Friday";
}
else if (num == 6) {
    result = "Saturday";
}
else if (num == 7) {
    result = "Sunday";
}
else {
    result = "Invalid day";
}
console.log(result);