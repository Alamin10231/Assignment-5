    
        const historyButton = document.getElementById('history-btn');
        if (historyButton) {
            historyButton.addEventListener('click', function() {
                window.location.href = 'home.html'; 
            });
        }
        const donateButton = document.getElementById('donate-btn');
        if (donateButton) {
            donateButton.addEventListener('click', function() {
                window.location.href = 'index.html'; 
            });
        }
        const backButton = document.getElementById('back-btn');
        if (backButton) {
            backButton.addEventListener('click', function() {
                window.location.href = 'index.html'; 
            });
        }
    
        function updateBalance(addMoneyId, balanceId, totalBalanceId) {
            const addMoney = document.getElementById(addMoneyId).value;
            const addMoneyNumber = parseFloat(addMoney);

            if (isNaN(addMoneyNumber) || addMoneyNumber < 0) {
                alert("Please enter a positive number");
                return;
            }
        
            const currentBalance = document.getElementById(balanceId).innerText;
            const balanceNumber = parseFloat(currentBalance);
            const updatedBalance = addMoneyNumber + balanceNumber;
            document.getElementById('my_modal_6').checked = true;

        
            document.getElementById(balanceId).innerText = `${updatedBalance} BDT`;
        
            const totalBalance = document.getElementById(totalBalanceId).innerText;
            const totalBalanceNumber = parseFloat(totalBalance);
            const finalBalance = totalBalanceNumber - addMoneyNumber;
        
            document.getElementById(totalBalanceId).innerText = `${finalBalance} BDT`;
             
            if(finalBalance > 0){
           
                
               
            }else{
                alert("successfully not donate your money")
            }
            
        }
       
        document.getElementById('submitbtn').addEventListener('click', function(event) {
            event.preventDefault();          
            updateBalance('addmoney', 'balance', 'totalbalance'); 
  
        });
        
        document.getElementById('submitbtn2').addEventListener('click', function(event) {
            event.preventDefault();
            updateBalance('addmoney2', 'balance2', 'totalbalance');
        });

        document.getElementById('submitbtn3').addEventListener('click', function(event) {
            event.preventDefault();
            updateBalance('addmoney3', 'balance3', 'totalbalance');
        });      
   document.getElementById('donate-btn').addEventListener('click',function(){
    document.getElementById('donate-btn').style.backgroundColor = "#C6EBC9"
    document.getElementById('history-btn').style.backgroundColor = 'transparent'
   })
   document.getElementById('history-btn').addEventListener('click',function(){
    document.getElementById('history-btn').style.backgroundColor = "#C6EBC9"
    document.getElementById('donate-btn').style.backgroundColor = 'transparent'
   })
   function student(){
    document.getElementById('submitbtn').addEventListener('click', function() {
        const donationAmount = document.getElementById('addmoney').value;
       
        const donationTitle = document.getElementById('Donation-title').innerText;
       
        const date = new Date().toLocaleDateString();
        console.log(donationAmount, donationTitle, date);
   
   
  })
 }
    student();
   
   document.getElementById('notification').appendChild(student())






    


    
    

