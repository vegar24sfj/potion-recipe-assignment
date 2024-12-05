let cauldron = {
    herbs: 0,
    berries: 0,
    mushrooms: 0,
    water: 0,
    flowers: 0
};

document.getElementById('addHerb').addEventListener('click', function () {
    cauldron.herbs += 1;
    console.log("Added 1 herb to the cauldron.");
});

document.getElementById('addBerry').addEventListener('click', function () {
    cauldron.berries += 1;
    console.log("Added 1 berry to the cauldron.");
});

document.getElementById('addMushroom').addEventListener('click', function () {
    cauldron.mushrooms += 1;
    console.log("Added 1 mushroom to the cauldron.");
});

document.getElementById('addWater').addEventListener('click', function () {
    cauldron.water += 1;
    console.log("Added 1 water to the cauldron.");
});

document.getElementById('addFlower').addEventListener('click', function () {
    cauldron.flowers += 1;
    console.log("Added 1 flower to the cauldron.");
});

document.getElementById('checkPotion').addEventListener('click', function () {
    console.log("Cauldron contains:");
    console.log("Herbs: " + cauldron.herbs);
    console.log("Berries: " + cauldron.berries);
    console.log("Mushrooms: " + cauldron.mushrooms);
    console.log("Water: " + cauldron.water);
    console.log("Flowers: " + cauldron.flowers);

    const messageElement = document.getElementById("message");

    if (cauldron.herbs === 2 && cauldron.berries === 1 && cauldron.mushrooms === 1) {
        console.log("Congratulations! You've brewed a perfect healing potion!");
        messageElement.textContent = "Congratulations! You've brewed a perfect healing potion!";
    } else {
        console.log("Potion is incomplete. Keep adding ingredients.");
        messageElement.textContent = "Potion is incomplete. Keep adding ingredients.";
    }
});

document.getElementById('clearIngredients').addEventListener('click', function () {
    cauldron = {
        herbs: 0,
        berries: 0,
        mushrooms: 0,
        water: 0,
        flowers: 0
    };
    console.log("Cleared all ingredients from the cauldron.");
    document.getElementById("message").textContent = "";
});




