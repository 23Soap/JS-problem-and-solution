"use strict";

function _findNumOfDigits(arg){
    "use strict";
    let str = arg.toString();
    let  countDigits = 0;

    for (let i = 0; i < str.length; i++){
        if (str[i] >= "0" && str[i] <= "9"){
            countDigits++;
        }
    }
    return countDigits;
}

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

function _surplus(str){


    function inner(str){
        return str;

    }

    return inner(str);

}

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


function _strNumbers(array){
    let numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    let array2 = [];


    for (let i = 0; i < array.length; i++) {
        let bool = false;

             for (let h = 0; h < array[i].length; h++) {

                    if (numbers.includes(array[i][h])){
                        bool = true;
                        break;
                    }

             }


         if (bool) {
             array2.push(array[i]);
         }
     }

     return array2;

}

//----------------------------------------------------------------------------------------------------------------------------------------------------------

    const  _moveCapitalLetters = str => {
        let lowerLetters = "";
        let  upperLetter = "";

        for (let i = 0; i < str.length;i++){
            let char = str[i];
            if (char === char.toUpperCase()){
                upperLetter += char;
            }else{
                lowerLetters += char;
            }
        }
        let result = upperLetter + lowerLetters;
        return result;
}



    function _determineClassGrading(array){
     let failingGrades = 0;
     let passingGrades = 0;
     let gradesSum = 0;
     let average = 0;

        for (let i = 0; i < array.length;i++){
            if(array[i] >= 50){
                passingGrades++;
                gradesSum += array[i];
            }else{
                failingGrades++;
                gradesSum += array[i];
            }

        }

        average = gradesSum / array.length;
        average = average.toFixed(1);
        average = parseFloat(average);
        return [passingGrades, failingGrades,average];

    }
//----------------------------------------------



