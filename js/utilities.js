function getSelectedPlayer(element) {
    const selectedField = document.getElementById('selected-player-ol');
    const elementChildNoodes = selectedField.childNodes;
    if (elementChildNoodes.length <= 5) {
        const li = document.createElement('li');
        li.innerText = element;
        selectedField.appendChild(li);
    }
    else {
        alert('already selected five players');
        return false;
    }

}