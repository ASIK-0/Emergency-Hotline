// heart count
const sumNumber = 1
const heartqueryBtn = document.querySelectorAll('.heart-btn');

for (const query of heartqueryBtn) {
    query.addEventListener('click', function () {
        const heart = parseInt(document.getElementById('heart-count').innerText);
        const sumNum = heart + sumNumber
        document.getElementById('heart-count').innerText = sumNum;
    })
}

// copy count
const copySumNum = 1
const copyQueryBtn = document.querySelectorAll('.copy-button');

for(const copy of copyQueryBtn){
    copy.addEventListener('click', function (){
        const card = copy.parentNode.parentNode.parentNode
        const callNumber = card.querySelector(".call-number").innerText;
        const copyCount = parseInt(document.getElementById('copy-count').innerText);
        const copyNum = copyCount + copySumNum

        document.getElementById('copy-count').innerText = copyNum;
        navigator.clipboard.writeText(callNumber);
        alert('📋Number '+ callNumber +' has been copied to clipboard...')
    })
}

// card section
// call button 
const callHistoryData = [];
const callBtn = document.querySelectorAll('.call-button');
const coinNum = 20
for (const call of callBtn) {
    call.addEventListener('click', function () {
        const card = call.parentNode.parentNode.parentNode
        const callName = card.querySelector(".call-name").innerText;
        const callNumber = card.querySelector(".call-number").innerText;

        const coinCountEl = document.getElementById('coin-count')
        let count = parseInt(coinCountEl.innerText)

        if (count <= 0) {
            alert("⚠️You don't have any money! 20 money to call.")
            return
        }
        coins = count - coinNum
        document.getElementById('coin-count').innerText = coins


        alert('📞calling ' + callName + ' ' + callNumber + ' ' + ' ...')
        // save call history
        const data = {
            name: callName,
            number: callNumber,
            date: new Date().toLocaleTimeString()
        }
        callHistoryData.push(data)
        // Call history
        const historyContainer = document.getElementById('history-card')
        historyContainer.innerText = "";
        for (const data of callHistoryData) {
            const div = document.createElement("div")
            div.innerHTML =`
            <div class="flex items-center justify-between bg-[#fafafa] p-4 mt-4 rounded-lg">
                <div>
                    <h1 class="inter-font font-semibold text-[18px] ">${data.name}</h1>
                    <p class="text-[#5c5c5c] text-[18px] hind-madurai">${data.number}</p>
                </div>
                <div>
                    <p class="hind-madurai ml-5 text-[18px]">${data.date}</p>
                </div>
            </div>
        
            `
            historyContainer.appendChild(div)
        }
    })
}

// history clear 

document.getElementById('clear-btn')
.addEventListener('click',function(){
    document.getElementById("history-card").innerHTML = '';
})
