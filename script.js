var str = "";
var y1 = 1;
var numbers = [];
var operations = [""];
var answer;
function GetButtons(x, y) {
    if (x == "DEL") {
        str = str.substring(0, (str.length) - 1);
        document.getElementById("text").innerHTML = str;
    } else if (x == "=") {
        var q = "";
        for (var i = 0; i < str.length; i++) {
            if (str[i] == "+" || str[i] == "÷" || str[i] == "─" || str[i] == "x") {
                numbers.push(q);
                operations.push(str[i]);
                q = "";
            } else {
                q += str[i];
            }
        }
        numbers.push(q);
        answer = numbers[0];
        for (var j = 0; j < numbers.length; j++) {
            if (operations[j] == '+') {
                answer = parseInt(answer) + parseInt(numbers[j]);
            }else if (operations[j] == '─') {
                answer = parseInt(answer) - parseInt(numbers[j]);
            }else if (operations[j] == 'x') {
                answer = parseInt(answer) * parseInt(numbers[j]);
            }else if (operations[j] == '÷') {
                answer = parseInt(answer) / parseInt(numbers[j]);
            }
        }
        //lock for * and do the opration on it index and -1 of it index then delete it
        document.getElementById("text").innerHTML = "<span  style=\"left:100%; color:red;\"> كل زق ماعرفت اسويها  </span>";
        str = "";
        numbers = [];
        operations = [""];
        answer = 0;
    } else {
        if (y) {
            str += x;
            document.getElementById("text").innerHTML = str;
            y1 = 1;
        } else {
            if (y1) {
                str += x;
                document.getElementById("text").innerHTML = str;
                y1 = y;
            }
        }
    }
}
