let isLoggedIn = true;
let isAdmin = false; 

if (isLoggedIn) {
    console.log("Vítej na stránce");

    if (isAdmin) {
        console.log("Přístup do adminu povolen.")
    } else {
        console.log("Jsi přihlášen jako uživatel!")
    }
} else {
    console.log("Nejsi přihlášený")
}

let age = 17;
let hasDriverLicense = true;

if (age >= 18 && hasDriverLicense) {
    console.log("Můžeš řídit!")
} else {
    console.log("Nemůžeš řídit!")
}

