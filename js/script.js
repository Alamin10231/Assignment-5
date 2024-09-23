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

    document.getElementById('submitbtn').addEventListener('click', function(event) {
        event.preventDefault();  
    
        const Addmoney = document.getElementById('addmoney').value;
        const AddmoneyNumber = parseFloat(Addmoney);
    
        
        if (isNaN(AddmoneyNumber) || AddmoneyNumber < 0) {
            alert("Please enter a positive number");
            return;  
        }
    
        const currentBalance = document.getElementById('balance').innerText;
        const balanceNumber = parseFloat(currentBalance);
        const updateBalance = AddmoneyNumber + balanceNumber;

        console.log(updateBalance);

     document.getElementById('balance').innerText = `${updateBalance} BDT`;

     
    });
    

