function wachtenprint() {
    console.log("Wachten");
    setTimeout(() => {
        console.log("Wachtijd is voorbij");
        wachtdrieseconden();
    }, 2000);
}

wachtenprint()

function wachtdrieseconden() {
    
}