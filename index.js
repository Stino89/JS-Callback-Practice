// Initialize the inventory
const inventory = newInventory();
// Move the inventory to coordinates (0, 0)
move(inventory).to(0, 0);

// Create a new character with a static image
const character = newImage('assets/green-character/static.gif');

// Function to handle direction changes
function handleDirectionChange(direction) {
    // If no direction is provided, set the character to the static image
    if (direction === null) {
        character.src = `assets/green-character/static.gif`;
    }
    // If direction is 'west', set the character image to the west-facing image
    if (direction === 'west') {
        character.src = `assets/green-character/west.gif`;
    }
    // If direction is 'north', set the character image to the north-facing image
    if (direction === 'north') {
        character.src = `assets/green-character/north.gif`;
    }
    // If direction is 'east', set the character image to the east-facing image
    if (direction === 'east') {
        character.src = `assets/green-character/east.gif`;
    }
    // If direction is 'south', set the character image to the south-facing image
    if (direction === 'south') {
        character.src = `assets/green-character/south.gif`;
    }
}

// Move the character using arrow keys, starting at coordinates (100, 250)
move(character).withArrowKeys(100, 250, handleDirectionChange);

// Move various images to specified coordinates
move(newImage('assets/tree.png')).to(200, 450);
move(newImage('assets/pillar.png')).to(350, 250);
move(newImage('assets/pine-tree.png')).to(450, 350);
move(newImage('assets/crate.png')).to(150, 350);
move(newImage('assets/well.png')).to(500, 575);

// Move various items to specified coordinates
move(newItem('assets/sword.png')).to(500, 555);
move(newItem('assets/shield.png')).to(165, 335);
move(newItem('assets/staff.png')).to(600, 250);
