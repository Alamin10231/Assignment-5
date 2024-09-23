    
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
        
            document.getElementById(balanceId).innerText = `${updatedBalance} BDT`;
        
            const totalBalance = document.getElementById(totalBalanceId).innerText;
            const totalBalanceNumber = parseFloat(totalBalance);
            const finalBalance = totalBalanceNumber - addMoneyNumber;
        
            document.getElementById(totalBalanceId).innerText = `${finalBalance} BDT`;
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

        // document.getElementById('submitbtn').addEventListener('click', function(event) {
        //     event.preventDefault();  
        
        //     const Addmoney = document.getElementById('addmoney').value;
        //     const AddmoneyNumber = parseFloat(Addmoney);
        
            
        //     if (isNaN(AddmoneyNumber) || AddmoneyNumber < 0) {
        //         alert("Please enter a positive number");
        //         return;  
        //     }
        
        //     const currentBalance = document.getElementById('balance').innerText;
        //     const balanceNumber = parseFloat(currentBalance);
        //     const updateBalance = AddmoneyNumber + balanceNumber;
    
        //     console.log(updateBalance);
    
        //  document.getElementById('balance').innerText = `${updateBalance} BDT`;
    
        //  const TotalBalance = document.getElementById('totalbalance').innerText;
        //  console.log("gukhaaa hoise")
        //  const floatbalance = parseFloat(TotalBalance);
        //  const finalbalance = floatbalance - AddmoneyNumber;
        //  console.log(finalbalance);
        //  document.getElementById('totalbalance').innerText = `${finalbalance}`;
        // });
    
   
    
    

