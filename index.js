// The Magic Potion Shop
//this section gets the user info like name,age, and favorite element
alert("Hii! Welcome to The Magic Potion Shop!");
alert("Let's get started by you telling me some short info about yourself!");

let name = prompt("What is your name?").trim();
let age = Number(prompt("How old are you?"));
let favElement = prompt("What is your favorite element? (fire 🔥, water 🌊, air 💨, earth ⌛)").trim();

if (isNaN(age)) {
  alert("That doesn't look like a number! Let's just say you're ageless. 🪄");
} else {
  alert(`Welcome again ${name}! At ${age}, you're just the right age to master ${favElement}!`);
}

//Potion names and details 
//this section gives details and shows us the list of potions available
let potionNames = ["Moonlight Tonic", "Dragon's Breath Elixir", "Shadow Veil Draft", "Frostbite Cure"];
let potionStock = {
  "Moonlight Tonic": { quantity: 6, price: 12 },
  "Dragon's Breath Elixir": { quantity: 3, price: 18 },
  "Shadow Veil Draft": { quantity: 2, price: 30 },
  "Frostbite Cure": { quantity: 4, price: 16 }
};

let gold = 0;
let customersHelped = 0;
let potionsBrewed = 0;

let stockMessage = "Here is what we have in stock:\n\n"; //it shows the stock we have 
for (let i = 0; i < potionNames.length; i++) {
  let potionName = potionNames[i];
  let potionInfo = potionStock[potionName];
  stockMessage += `${potionName} — ${potionInfo.quantity} in stock — ${potionInfo.price} gold\n`;
}
alert(stockMessage);

//Customer Orders
//this section takes the customers order
for (let i = 0; i < 3; i++) {
  let answer = prompt("We have a customer! Take their order? (yes/no)").toLowerCase();

  if (answer === "yes") {
    let order = prompt("Which potion would you like?").trim();

    if (potionStock[order] && potionStock[order].quantity > 0) {
      potionStock[order].quantity--; // reduce stock by 1
      gold += potionStock[order].price;
      customersHelped++;
      alert(`Here is your ${order}! That will be ${potionStock[order].price} gold.`);
    } else {
      alert(`Sorry, ${order} is out of stock!`);
    }
  } else {
    alert("No customer right now.");
  }
}

// show remaining stock and gold
let finalStockMessage = "End of customer orders.\n\nCurrent stock:\n";
for (let i = 0; i < potionNames.length; i++) {
    let potionName = potionNames[i];              
    let potionInfo = potionStock[potionName]; 
    finalStockMessage += `${potionName} — ${potionInfo.quantity} in stock\n`;
}
finalStockMessage += `\nGold earned: ${gold} gold`
alert(finalStockMessage)

//Brewing potions
//this section brews the potions
function brewPotion(potionName, quantity) {
  if (!potionStock[potionName]) {
    alert("❌ Potion " + potionName + " does not exist!");
    return;
  }

  let costPerPotion = potionStock[potionName].price / 2;
  let totalCost = costPerPotion * quantity;

  if (gold < totalCost) {
    alert("💰 Not enough gold! You need " + totalCost + " gold but only have " + gold + ".");
    return;
  }

  gold -= totalCost;
  potionStock[potionName].quantity += quantity;
  potionsBrewed += quantity;

  alert("Brewed " + quantity + " " + potionName + "(s).\n" +
        "It cost " + totalCost + " gold.\n" +
        "Now you have " + potionStock[potionName].quantity + " in stock and " + gold + " gold left.");
}

brewPotion ("Moonlight Tonic", 2) 

//End of day report
//this section gives a report of the game
let reportTitle = "END OF DAY REPORT";
let divider = "-".repeat(24); //I thought of something that can looks good 
let report = `${reportTitle}\n${divider}\n`;

let totalLeft = 0;

for (let potionName in potionStock) {
  let potion = potionStock[potionName];
  report += potionName + ": " + potion.quantity + " left (price " + potion.price + "g)\n";
  totalLeft += potion.quantity;
}

report += "\nTotal potions left: " + totalLeft + "\n";
report += "Gold earned: " + gold + "g\n\n";
report += "Great job, " + name+ "! You brewed " + potionsBrewed + " potions and helped " + customersHelped + " customers today!";

alert(report);
