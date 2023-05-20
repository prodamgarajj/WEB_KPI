$('.btn-js-calc').click(function () {
    value = $(this).data('value');
    getCurrentValue();
    if (value === '=') {
        try {
            calculateResult();
            displayResult();
        } catch (error) {
            displayError();
        }
    } else {
        addSmthToExpression();
    }
});