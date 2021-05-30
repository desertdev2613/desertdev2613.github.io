
// menu array 
smoothie_menu = [
    {
        id: 1, 
        name: "Green Smoothie",
        image_url: "https://pngimage.net/wp-content/uploads/2018/06/green-smoothie-png-2.png", 
        description: "Spinach, leafy greens, water, mango, pineapple and banannas",
        price: "$4.99"
    }, 
    {
        id: 2, 
        name: "Strawberry Wild Refresher",
        image_url: "./images/greenSmoothie.png", 
        description: "Strawberries, kale, water, banannas and protein powder",
        price: "$3.99"
    }, 
    {
        id: 3, 
        name: "Peanut Butter Delight",
        image_url: "./images/greenSmoothie.png", 
        description: "Peanut butter, spinach, almond milk,banannas, protein powder",
        price: "$4.50"
    }, 
    {
        id: 4, 
        name: "Green Smoothie",
        image_url: "./images/greenSmoothie.png", 
        description: "Spinach, leafy greens, water, mango, pineapple and banannas",
        price: "$4.99"
    }, 
    {
        id: 5, 
        name: "Green Smoothie",
        image_url: "./images/greenSmoothie.png", 
        description: "Spinach, leafy greens, water, mango, pineapple and banannas",
        price: "$4.99"
    }, 
    {
        id: 6, 
        name: "Green Smoothie",
        image_url: "./images/greenSmoothie.png", 
        description: "Spinach, leafy greens, water, mango, pineapple and banannas",
        price: "$4.99"
    }, 
    {
        id: 7, 
        name: "Green Smoothie",
        image_url: "./images/greenSmoothie.png", 
        description: "Spinach, leafy greens, water, mango, pineapple and banannas",
        price: "$4.99"
    }, 
    {
        id: 8, 
        name: "Green Smoothie",
        image_url: "./images/greenSmoothie.png", 
        description: "Spinach, leafy greens, water, mango, pineapple and banannas",
        price: "$4.99"
    }
]

const smoothie_section = document.getElementById('smoothie_menu'); 

// Dynamically show smoothie menu 
function displaySmoothieOptions(menuItems) {
    let displayMenu = menuItems.map(function (item) {
       return  `<div class="menu-item">
          <img src=${item.image_url} alt="smoothie">
          <div class="menu-item-info">
            <h4>${item.name}<span>${item.price}</span></h4>
            <p>${item.description}</p>
          </div>
        </div>`
    });
    displayMenu = displayMenu.join('');
    smoothie_section.innerHTML = displayMenu; 
}
displaySmoothieOptions(smoothie_menu);



acai_bowls = [
    {
        id: 9, 
        name: "Energy Bowl",
        image_url: "./images/energyBowl.png", 
        description: "Made with organize fruits, peanut butter and protein powder",
        price: "$6.99"
    }, 
    {
        id: 10, 
        name: "Energy Bowl",
        image_url: "./images/energyBowl.png", 
        description: "Made with organize fruits, peanut butter and protein powder",
        price: "$6.99"
    }, 
    {
        id: 11, 
        name: "Energy Bowl",
        image_url: "./images/energyBowl.png", 
        description: "Made with organize fruits, peanut butter and protein powder",
        price: "$6.99"
    }, 
    {
        id: 12, 
        name: "Energy Bowl",
        image_url: "./images/energyBowl.png", 
        description: "Made with organize fruits, peanut butter and protein powder",
        price: "$6.99"
    }, 
    {
        id: 13, 
        name: "Energy Bowl",
        image_url: "./images/energyBowl.png", 
        description: "Made with organize fruits, peanut butter and protein powder",
        price: "$6.99"
    }, 
    {
        id: 14, 
        name: "Energy Bowl",
        image_url: "./images/energyBowl.png", 
        description: "Made with organize fruits, peanut butter and protein powder",
        price: "$6.99"
    }, 
    {
        id: 15, 
        name: "Energy Bowl",
        image_url: "./images/energyBowl.png", 
        description: "Made with organize fruits, peanut butter and protein powder",
        price: "$6.99"
    }, 
    {
        id: 16, 
        name: "Energy Bowl",
        image_url: "./images/energyBowl.png", 
        description: "Made with organize fruits, peanut butter and protein powder",
        price: "$6.99"
    }
]

const acai_section = document.getElementById('acai_menu'); 

// Dynamically show smoothie menu 
function displayBowlOptions(menuItems) {
    let displayMenu = menuItems.map(function (item) {
       return  `<div class="menu-item">
          <img src=${item.image_url} alt="bowl">
          <div class="menu-item-info">
            <h4>${item.name}<span>${item.price}</span></h4>
            <p>${item.description}</p>
          </div>
        </div>`
    });
    displayMenu = displayMenu.join('');
    acai_section.innerHTML = displayMenu; 
}
displayBowlOptions(acai_bowls);
