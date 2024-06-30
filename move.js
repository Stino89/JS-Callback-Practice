function move(element) {
    // Set the position of the element to fixed
    element.style.position = 'fixed';

    // Function to move the element to specified coordinates
    function moveToCoordinates(left, bottom) {
        element.style.left = left + 'px';
        element.style.bottom = bottom + 'px';
    }

    // Function to move the element with arrow keys and handle direction changes
    function moveWithArrowKeys(left, bottom, callback) {
        let direction = null;
        let x = left;
        let y = bottom;

        // Initialize element position
        element.style.left = x + 'px';
        element.style.bottom = y + 'px';

        // Function to continuously move the element based on direction
        function moveCharacter() {
            if (direction === 'west') {
                x -= 1;
            }
            if (direction === 'north') {
                y += 1;
            }
            if (direction === 'east') {
                x += 1;
            }
            if (direction === 'south') {
                y -= 1;
            }
            // Update element position
            element.style.left = x + 'px';
            element.style.bottom = y + 'px';
        }

        // Set interval to move the element continuously
        setInterval(moveCharacter, 1);

        // Event listener for keydown to handle arrow key presses
        document.addEventListener('keydown', function(e) {
            if (e.repeat) return;

            if (e.key === 'ArrowLeft') {
                direction = 'west';
            }
            if (e.key === 'ArrowUp') {
                direction = 'north';
            }
            if (e.key === 'ArrowRight') {
                direction = 'east';
            }
            if (e.key === 'ArrowDown') {
                direction = 'south';
            }
            // Callback to handle direction change
            callback(direction);
        });

        // Event listener for keyup to reset direction when key is released
        document.addEventListener('keyup', function(e) {
            direction = null;
            // Callback to handle direction change
            callback(direction);
        });
    }

    // Return object with methods for moving the element
    return {
        to: moveToCoordinates,
        withArrowKeys: moveWithArrowKeys
    };
}
