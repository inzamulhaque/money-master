// for input validation
function validation(inputValue) {
    // isNaN validation for e and negative value validation
    if (isNaN(inputValue) || inputValue < 0) {
        alert(inputValue);
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
    const validationValue = validation(inputValue);

    return validationValue;
}

// check income is greater than or not
function incomeIsGreaterThan(income, exp) {
    if (income < exp) {
        return false;
    }
}

// for clearing input value
function clearInputValue() {
    for (const id of arguments) {
        document.getElementById(id).value = "";
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
        clearInputValue("income", "foodExp", "rentExp", "clotheExp");
        return document.getElementById("incomeError").style.display = "block";
    } else {
        document.getElementById("incomeError").style.display = "none";
    }

    const calcTotalBalance = incomeValue - totalExpenses;

    showingBalance("totalExpenses", totalExpenses);
    showingBalance("totalBalance", calcTotalBalance);
}

document.getElementById("saveMoney").addEventListener("click", function () {
    const incomeValue = getValue("income");
    const savePercentage = getValue("savePercentage");

    // check error
    if (incomeValue == "error" || savePercentage == "error") {
        return alert("please enter valid income amount and saving percentage!");
    }
    const saveAmount = (incomeValue * savePercentage) / 100;
    // alert("saveAmount");
    const restBalanceString = document.getElementById("totalBalance").innerText;
    const restBalance = parseFloat(restBalanceString);
    const checkRestBalance = incomeIsGreaterThan(restBalance, saveAmount);

    if (checkRestBalance == false) {
        return document.getElementById("savingError").style.display = "block";
    } else {
        document.getElementById("savingError").style.display = "none";
    }
    const remainingBalance = restBalance - saveAmount;
    showingBalance("savingAmount", saveAmount);
    showingBalance("restBalance", remainingBalance);
});

// for showing balance and expenses
function showingBalance(id, amount) {
    document.getElementById(id).innerText = amount;
}