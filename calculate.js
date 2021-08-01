function calculation(){
    var action = prompt("what would u like to do{/,*,-,+}");
    var num1,num2;
    num1=Number(document.cal.one.value);
    num2=Number(document.cal.two.value);
    switch(action){
        case "/":
            document.cal.ans.value=num1/num2;
            break;
        case "*":
            document.cal.ans.value=num1*num2;
            break;
        case "-":
            document.cal.ans.value=num1-num2;
            break;
        case "+":
            document.cal.ans.value=num1+num2;
            break;
        default:
            alert("please enter a valid action");          
    }
}