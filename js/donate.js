document.getElementById('btn-donate').addEventListener('click',function(){
     const donateAmount = document.getElementById('input-donate-amount').value;
     const donateAmountNumber = parseFloat(donateAmount);
    //  console.log(donateAmount);
     if (donateAmount === ''  || donateAmount <= 0 || isNaN(donateAmount) || donateAmount > 5500){
        alert('Invalid Donation Amount.');
        return false;
     }
       
     const balance = document.getElementById('balance-amount').innerText;
     const balanceNumber = parseFloat(balance);
     const newBalance = balanceNumber + donateAmountNumber;
     document.getElementById('balance-amount').innerText = newBalance;
     const accountBalance = document.getElementById('account-balance').innerText;
     const accountBalanceNumber = parseFloat(accountBalance);
     const totalBalance = accountBalanceNumber - donateAmount;
     document.getElementById('account-balance').innerText = totalBalance;

     const historyItem = document.createElement("div");
     historyItem.className = "bg-white p-4 rounded-md border-2";
     const currency = "Taka";
     const cause = "famine-2024";
     const location = "Feni, Bangladesh";
      
     const date = new Date('2024-09-17T08:39:11+06:00');
      historyItem.innerHTML= `
      <p class="text-base font-bold">${donateAmount} ${currency} is donated for ${cause} at ${location}</p>
      <p class="text-xs text-gray-500">Date: ${ date.toString()}</p>
      `;
      
     const historyContainer = document.getElementById('history-list');
     historyContainer.insertBefore(historyItem, historyContainer.firstChild,); 
       
     return true;
});

// history tab------------
const historyTab = document.getElementById('history-tab')
const donationTab = document.getElementById('donation-tab')
historyTab.addEventListener('click',function(){
    historyTab.classList.add('bg-primary');
    historyTab.classList.remove('text-gray-500')
    donationTab.classList.remove('bg-primary');
    donationTab.classList.add('text-gray-500')
     
     document.getElementById('donation-page').classList.add('hidden');

     document.getElementById('history-section').classList.remove('hidden');
});
donationTab.addEventListener('click',function(){
   donationTab.classList.add('bg-primary');
   historyTab.classList.remove('bg-primary');
   document.getElementById('donation-page').classList.remove('hidden');
   document.getElementById('history-section').classList.add('hidden');
})


 document.getElementById('btn-donation').addEventListener('click',function(){
    const donationAmount = getInputFiledValueById('input-donation');
     
    if (donationAmount === ''  || donationAmount <= 0 || isNaN(donationAmount) || donationAmount > 500){
      alert('Invalid Donation Amount.');
      return false;
   }

    const accountBalance = getTextFiledValueById('account-balance') ;
     
   const balance = getTextFiledValueById('donate-account-balance');
    
   const newBalance = balance + donationAmount;
   document.getElementById('donate-account-balance').innerText = newBalance;
   const totalBalance = accountBalance - donationAmount;
     document.getElementById('account-balance').innerText = totalBalance;

     const historyItem = document.createElement("div");
     historyItem.className = "bg-white p-4 rounded-md border-2";
     const currency = "Taka";
     const cause = "Flood Relief";
     const location = "Feni, Bangladesh";
      
     const date = new Date('2024-09-17T08:39:11+06:00');
      historyItem.innerHTML= `
      <p class="text-base font-bold">${donationAmount} ${currency} is donated for ${cause} at ${location}</p>
      <p class="text-xs text-gray-500">Date: ${ date.toString()}</p>
      `;
      
     const historyContainer = document.getElementById('history-list');
     historyContainer.insertBefore(historyItem, historyContainer.firstChild,); 
     return true;
});
 
document.getElementById('donate-btn-now').addEventListener('click',function(){
    const donateAmountNow = getInputFiledValueById('input-donation-now');
    if (donateAmountNow  === ''  || donateAmountNow  <= 0 || isNaN(donateAmountNow ) || donateAmountNow  > 500){
      alert('Invalid Donation Amount.');
      return false;
   }

    const accountBalance = getTextFiledValueById('account-balance') ;
    const balance = getTextFiledValueById('donation-balance-now');
    console.log(donateAmountNow,balance);
    const newBalance = balance + donateAmountNow;
    document.getElementById('donation-balance-now').innerText = newBalance;
    const totalBalance = accountBalance - donateAmountNow;
    document.getElementById('account-balance').innerText = totalBalance;
    const historyItem = document.createElement("div");
     historyItem.className = "bg-white p-4 rounded-md border-2";
     const currency = "Taka";
     const cause = "Injured";
     const location = "Movement, Bangladesh";
      
     const date = new Date('2024-09-17T08:39:11+06:00');
      historyItem.innerHTML= `
      <p class="text-base font-bold">${donateAmountNow} ${currency} is Donated for Aid ${cause} in the Quota ${location}</p>
      <p class="text-xs text-gray-500">Date: ${ date.toString()}</p>
      `;
      
     const historyContainer = document.getElementById('history-list');
     historyContainer.insertBefore(historyItem, historyContainer.firstChild,); 
     return true;
});