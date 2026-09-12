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
        console.log(TotalBalance);
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

Bank.check();
Bank.drawings(20000);
Bank.set(50000);
Bank.check();
Bank.add(25000);
Bank.check();

