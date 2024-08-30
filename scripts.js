function generateBingoCard(){
    const card = document.getElementById("bingoCard");

    const usedNumbers = new Set();
    const columns = ['B', 'I', 'N', 'G', 'O'];

    for (let i = 0; i < 5; i++){
        const row = card.insertRow();
        for (let j = 0; j < 5; j++){
            const cell = row.insertCell();
            if (i == 2 && j == 2){
                cell.textContent = 'Free';
                cell.classList.add('free');
            } else{
                let number;
                number = Math.floor(Math.random() * 15) + 1 + (j * 15);
                console.log(number)
            }
        }
        
    }
}