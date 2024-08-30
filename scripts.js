function generateBingoCard(){
    const card = document.getElementById("bingoCard");

    const usedNumbers = new Set();
    const columns = ['B', 'I', 'N', 'G', 'O'];

    for (let i = 0; i < 5; i++){
        const row = card.insertRow();
        for (let j = 0; j < 5; j++){
            const cell = row.insertCell();
        }
    }
}