document.getElementById('player1').addEventListener('click', function () {
    const playerField = document.getElementById('player1-name');
    const playerName = playerField.innerText;
    const getValue = getSelectedPlayer(playerName);
    if (getValue == false) {
        return;
    }
    document.getElementById('player1').disabled = true;

});
document.getElementById('player2').addEventListener('click', function () {
    const playerField = document.getElementById('player2-name');
    const playerName = playerField.innerText;
    const getValue = getSelectedPlayer(playerName);
    if (getValue == false) {
        return;
    }
    document.getElementById('player2').disabled = true;
});
document.getElementById('player3').addEventListener('click', function () {
    const playerField = document.getElementById('player3-name');
    const playerName = playerField.innerText;
    const getValue = getSelectedPlayer(playerName);
    if (getValue == false) {
        return;
    }
    document.getElementById('player3').disabled = true;
});
document.getElementById('player4').addEventListener('click', function () {
    const playerField = document.getElementById('player4-name');
    const playerName = playerField.innerText;
    const getValue = getSelectedPlayer(playerName);
    if (getValue == false) {
        return;
    }
    document.getElementById('player4').disabled = true;
});
document.getElementById('player5').addEventListener('click', function () {
    const playerField = document.getElementById('player5-name');
    const playerName = playerField.innerText;
    const getValue = getSelectedPlayer(playerName);
    if (getValue == false) {
        return;
    }
    document.getElementById('player5').disabled = true;
});
document.getElementById('player6').addEventListener('click', function () {
    const playerField = document.getElementById('player6-name');
    const playerName = playerField.innerText;
    const getValue = getSelectedPlayer(playerName);
    if (getValue == false) {
        return;
    }
    document.getElementById('player6').disabled = true;
});