let totalInc = 0
let totalExp = 0
let balance = 0

function addIncome(){
    amountEl =  document.getElementById('amount')
    incAmount = amountEl.value
    labelEl = document.getElementById("label")
    label = labelEl.value
    if (incAmount === '') {
        alert("Please enter an amount.");
        return; 
    } else if (!Number.isInteger(parseFloat(incAmount))) {
        alert("Please enter an integer amount.")
        return;
    } else if (label === '') {
        label = 'Unknown'
    } 
    incomeEl = document.getElementById('income')
    totalInc += parseFloat(incAmount)
    incomeEl.textContent = totalInc
    balanceEl = document.getElementById('balance')
    balance += parseFloat(incAmount)
    balanceEl.textContent = balance

    addToHistory(label, incAmount, 'income')
    amountEl.value = '';
    labelEl.value = '';

    alert("Income noted.")
}

function addExpense(){
    amountEl =  document.getElementById('amount')
    expAmount = amountEl.value
    labelEl = document.getElementById("label")
    label = labelEl.value
    if (expAmount === '') {
        alert("Please enter an amount.");
        return; 
    } else if (!Number.isInteger(parseFloat(expAmount))) {
        alert("Please enter an integer amount.")
        return;
    } else if (label === '') {
        label = 'Unknown'
    }
    expenseEl = document.getElementById('expense')
    expenseEl.textContent = expAmount   
    totalExp += parseFloat(expAmount)
    expenseEl.textContent = totalExp
    balanceEl = document.getElementById('balance')
    balance -= parseFloat(expAmount)
    balanceEl.textContent = balance

    addToHistory(label, expAmount, 'expense')
    amountEl.value = '';
    labelEl.value = '';

    alert("Expense noted.")
}

function addToHistory(label,amount,type){

    listEl = document.createElement('li')
    ulEl = document.getElementById('list-history')
    ulEl.appendChild(listEl)
    spanEl = document.createElement('span')
    listEl.appendChild(spanEl)
    spanEl2 = document.createElement('span')
    listEl.appendChild(spanEl2)
    listEl.classList.add('item')
    spanEl.classList.add('hist-label')
    spanEl2.classList.add('hist-amount')
    spanEl.textContent = label

    console.log(ulEl)
    if(type === 'income'){
        spanEl2.classList.add('green')
        spanEl2.textContent =  "+" + amount
    } 
    else if (type === 'expense'){
        spanEl2.classList.add('red')
        spanEl2.textContent = "-" + amount
    }
    else{
        console.log('Invalid type of history item.')
    }

}