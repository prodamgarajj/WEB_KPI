let value = 0;
let expression;
let result;
function getCurrentValue(){
    expression = $('#expression').val();
}
function calculateResult(){
    result = eval(expression);
}