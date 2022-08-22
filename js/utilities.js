function getSelectedPlayer(element) {
    const selectedField = document.getElementById('selected-players');
    const elementChildNoodes = selectedField.childNodes;
    if (elementChildNoodes.length <= 5) {
        const ol = document.createElement('ol');
        const li = document.createElement('li');
        li.innerText = element;
        ol.appendChild(li);
        selectedField.appendChild(ol);

    }
    else {
        alert('already selected five players');
        return false;
    }

}