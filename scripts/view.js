$(document).ready(function () {
    $(".sidenav").sidenav();
    $("select").formSelect();
});

function displayError(){
    $('#expression').val('Error');
}
function displayResult(){
    $('#expression').val(result);
}
function addSmthToExpression(){
    $('#expression').val(expression + value);
}