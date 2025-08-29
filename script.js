// heart count
const sumNumber = 1
const queryBtn = document.querySelectorAll('.heart-btn');

for (query of queryBtn) {
    query.addEventListener('click', function () {
        const heart = parseInt(document.getElementById('heart-count').innerText);
        const sumNum = heart + sumNumber
        document.getElementById('heart-count').innerText = sumNum;
    })
}

// card section
// call button 
const callHistoryData = []
const callBtn = document.querySelectorAll('.call-button');
const coinNum = 20
for(const call of callBtn){
    call.addEventListener('click', function (){
        const card = call.parentNode.parentNode.parentNode
        const callName = card.querySelector(".call-name").innerText;
        const callNumber = card.querySelector(".call-number").innerText;

        const coinCountEl = document.getElementById('coin-count')
        let count = parseInt(coinCountEl.innerText)

        if(count <= 0 ){
            alert("⚠️You don't have any money! 20 money to call.")
            return
        }
        coins = count - coinNum
        document.getElementById('coin-count').innerText = coins


        alert('📞calling ' + callName + ' ' + callNumber +' '+ ' ...')
        const data = {
        naem: callName,
        num: callNumber,
        date: new Date().toLocaleTimeString()
    }
     callHistoryData.push(data)
     console.log(callHistoryData)
    })   
}

// Call history

