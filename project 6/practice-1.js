let Bank = (function (){
    let TotalBalance = 120000;

    function checkBalance(){
        console.log(TotalBalance);
    }

    function setBalance(value){
        TotalBalance = value
    }

    function addBalance(value){
        TotalBalance += value;
    }

    function withdraw(value){
        if(value <= TotalBalance){
            TotalBalance -= value;
            console.log(TotalBalance);
        }
    }

    return {
        check: checkBalance, 
        set: setBalance,
        add: addBalance,
        drawings: withdraw
    }
})();

Bank.checkBalance();
Bank.withdraw(20000);
Bank.setBalance(50000);
Bank.checkBalance();
Bank.addBalance(25000);
Bank.checkBalance();

