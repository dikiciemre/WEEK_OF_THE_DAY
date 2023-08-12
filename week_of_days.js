
//The program that shows the day of the week according to the number entered by the user.


let number = prompt("Please enter a number.. ") // The user was asked to input a number.



switch(number){ // Code block that enables the specification of days based on the number entered by the user.

    case "1":
        console.log("first day of the week is monday");
        break;

        case "2":
            console.log("second day of the week is tuesday");
            break;
            
            case "3":
                console.log("the third day of the week is Wednesday");
                break;

                case "4":
                    console.log("the fourth day of the week is thursday");
                    break;

                    case "5":
                        console.log("The fifth day of the week is friday");
                        break;

                        case "6":
                            console.log("The sixth day of the week is saturday");
                            break;

                            case "7":
                                console.log("The seenth day of the week is sunday");
                                break;

                                     default:
                                         console.log("Number should between 1-7");
                                         break;
}  

