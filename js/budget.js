document.getElementById('calculate-btn').addEventListener('click', function () {
    const perPlayerInputField = document.getElementById('per-player-input');
    const perPlayerInputString = perPlayerInputField.value;
    const perPlayerInput = parseFloat(perPlayerInputString);
    const getPlayerNumberField = document.getElementById('selected-player-ol');
    const getPlayerNumber = getPlayerNumberField.childNodes.length - 1;
    const totalNeedPerPlayer = getPlayerNumber * perPlayerInput;
    const totalPlayerExpensesField = document.getElementById('all-player-expenses');
    totalPlayerExpensesField.innerText = totalNeedPerPlayer;
});
document.getElementById('total-calculation').addEventListener('click', function () {
    const managerInputField = document.getElementById('manager-input');
    const managerInputString = managerInputField.value;
    const managerInput = parseFloat(managerInputString);
    const coachInputField = document.getElementById('coach-input');
    const coachInputString = coachInputField.value;
    const coachInput = parseFloat(coachInputString);
    const playerExpenseField = document.getElementById('all-player-expenses');
    const playerExpenseString = playerExpenseField.innerText;
    const playerExpenses = parseFloat(playerExpenseString);
    const totalCost = '$' + (managerInput + coachInput + playerExpenses);
    const totalCoastField = document.getElementById('total-cost');
    totalCoastField.innerText = totalCost;
})