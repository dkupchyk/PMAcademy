const valid = function (alertText, equalExpr, ...values) {
    for (let value of values){
        if (value === equalExpr) {
            alert(alertText);
            return false;
        }
    }
    return true;
}
