                        // *Used onClick on each and every element as only one event handler** 



// let result = document.getElementById('result')





// function display (numbers){
//     result.value += numbers 


// }


// function calculate (){
//     // var final_number = result.value
//     // var final_result = eval(final_number)
//     // result.value = final_result
//     var final_result = eval(result.value)
//     result.value = final_result
// }


// function clr (){
//     result.value = ""
// }

// function del(){
//     result.value = result.value.slice(0,-1)
// }


// _____________________________________________________________________________________________________________
                        //  ** Using addEventListener as multiple handlers **

// let input = document.getElementById("inputBox")
// let buttons = document.querySelectorAll("button")

// let str = "";

// let arr = Array.from(buttons)


// arr.forEach(button => {
//     button.addEventListener("click", (e) => {
//         let btnValue = e.target.innerHTML.trim(); 
       
//         if( btnValue =='='){
//             str = eval(str)
//             input.value = str 
//         } else if(e.target.innerHTML == "AC"){
// str = ""
// input.value = str 
//         } else if(e.target.innerHTML == "DEL"){
// str =  str.slice(0,-1)
// input.value = str 

//         }else {
//             str += e.target.innerHTML
// input.value = str 

//         }


//     })
// })


let input = document.getElementById("inputBox");
let buttons = document.querySelectorAll("button");

let str = "";

buttons.forEach(button => {
    button.addEventListener("click", (e) => {
        let value = e.target.innerHTML.trim();  // Trim any extra spaces

        if (value === "=") {
            try {
                str = eval(str);
                input.value = str;
            } catch (error) {
                input.value = "Error";
                str = "";
            }
        } else if (value === "AC") {
            str = "";
            input.value = str;
        } else if (value === "DEL") {
            str = str.slice(0, -1);
            input.value = str;
        } else {
            str += value;
            input.value = str;
        }
    });
});

