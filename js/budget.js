document.getElementById('calculate-btn').addEventListener('click', function () {
    const perPlayerInputField = document.getElementById('per-player-input');
    const perPlayerInputString = perPlayerInputField.value;
    console.log(perPlayerInputString);
    if (isNaN(perPlayerInputString) || perPlayerInputString == '') {
        alert('please enter a valid number');
        return;
    }
    const perPlayerInput = parseFloat(perPlayerInputString);
    const getPlayerNumberField = document.getElementById('selected-player-ol');
    const getPlayerNumber = getPlayerNumberField.childNodes.length - 1;
    if (getPlayerNumber == 0) {
        alert('no player selected, please select maximum 5 player');
        return;
    }
    const totalNeedPerPlayer = getPlayerNumber * perPlayerInput;
    const totalPlayerExpensesField = document.getElementById('all-player-expenses');
    totalPlayerExpensesField.innerText = totalNeedPerPlayer;
});
document.getElementById('total-calculation').addEventListener('click', function () {
    const managerInputField = document.getElementById('manager-input');
    const managerInputString = managerInputField.value;
    if (isNaN(managerInputString) || managerInputString == '') {
        alert('enter a valid number for manager ');
        return;
    }
    const managerInput = parseFloat(managerInputString);
    const coachInputField = document.getElementById('coach-input');
    const coachInputString = coachInputField.value;
    if (isNaN(coachInputString) || coachInputString == '') {
        alert('enter a valid number for Coach ');
        return;
    }
    const coachInput = parseFloat(coachInputString);
    const playerExpenseField = document.getElementById('all-player-expenses');
    const playerExpenseString = playerExpenseField.innerText;
    if (playerExpenseString == '') {
        alert('enter player expenses');
        return;
    }
    const playerExpenses = parseFloat(playerExpenseString);
    const totalCost = '$' + (managerInput + coachInput + playerExpenses);
    const totalCoastField = document.getElementById('total-cost');
    totalCoastField.innerText = totalCost;
})