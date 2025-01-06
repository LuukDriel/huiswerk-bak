function wachtenprint() {
    console.log("Wachten");
    setTimeout(() => {
        console.log("Wachtijd is voorbij");
    }, 2000);
}

wachtenprint()