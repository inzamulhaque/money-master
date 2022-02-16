// for input validation
function validation(inputValue) {
    // isNaN validation for e and negative value validation
    if (isNaN(inputValue) || inputValue < 0) {
        return "error";
    }
    return inputValue;
}

// for get input value
function getValue(id) {
    const inputField = document.getElementById(id);
    const inputValueString = inputField.value;
    const inputValue = parseFloat(inputValueString);

    // for income field validation
    if (id == "income" && inputValue <= 0) {
        alert("please enter your valid income");
        return "error";
    }

    return validation(inputValue);
}

// check income is greater than or not
function incomeIsGreaterThan(income, exp) {
    if (income < exp) {
        return false;
    }
}

// total expenses function
function totalExp() {
    const incomeValue = getValue("income");
    const foodExpValue = getValue("foodExp");
    const rentExpValue = getValue("rentExp");
    const clotheExpValue = getValue("clotheExp");

    // error check
    if (incomeValue == "error" || foodExpValue == "error" || rentExpValue == "error" || clotheExpValue == "error") {
        return alert("please enter valid value!");
    }

    const totalExpenses = foodExpValue + rentExpValue + clotheExpValue;
    const checkIncome = incomeIsGreaterThan(incomeValue, totalExpenses);

    if (checkIncome == false) {
        return alert("income not less than expenses.");
    }

    const calcTotalBalance = incomeValue - totalExpenses;

    showingBalance("totalExpenses", totalExpenses);
    showingBalance("totalBalance", calcTotalBalance);
}

// for showing balance and expenses
function showingBalance(id, amount) {
    document.getElementById(id).innerText = amount;
}