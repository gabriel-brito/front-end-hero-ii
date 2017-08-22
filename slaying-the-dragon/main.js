var slaying = true;
var youHit = Math.floor(Math.random() * 2);
var damageThisRound = Math.floor(Math.random() * 5 + 1);
var totalDamage = 0;

while (slaying) {
    if (youHit) {
        totalDamage += damageThisRound;
        if (totalDamage >= 4) {
            console.log("You slayed the Dragon!");
            slaying = false;
        }
    } else {
        console.log("The Dragon ate you!");
    }

    slaying = false;
}
