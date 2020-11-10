var num = parseInt(process.argv[2]);
var choice = parseInt(process.argv[3]);
switch(choice){
    case 1:
        var inches = num * 12;
        console.log(num + " Feet in inches is : " + inches);
        break;
    case 2:
        var meter = num * 0.3048;
        console.log(num + " Feet in meters is : " + meter);
        break;
    case 3:
        var feet = (num / 12);    
        console.log(num + " Inches in feet is : " + feet);
        break;
    case 3:
        var feet = (num/0.3048);
        console.log(num + " Meters in feet is : " + feet);
        break;
    default:
        console.log("Invalid choice");
        break;            
}
