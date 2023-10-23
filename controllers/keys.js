const movementKeysArray = [
  "arrowup",
  "arrowleft",
  "arrowdown",
  "arrowright",
  "w",
  "a",
  "s",
  "d",
  "ص",
  "ش",
  "س",
  "ي",
];

const movementKeysMap = {
  up: ["arrowup", "w", "ص"],
  left: ["arrowleft", "a", "ش"],
  down: ["arrowdown", "s", "س"],
  right: ["arrowright", "d", "ي"],
};

export class Keys {
  constructor(element = window) {
    this.element = element;
    this.movement = [];

    this.init();
  }

  init() {
    const movement = this.movement;

    this.element.addEventListener("keydown", (e) => {
      const key = e.key.toLocaleLowerCase();

      if (movementKeysArray.includes(key)) {
        for (const move in movementKeysMap) {
          if (!Object.hasOwnProperty.call(movementKeysMap, move)) continue;
          if (!movementKeysMap[move].includes(key)) continue;
          if (movement.includes(move)) continue;
          movement.push(move);
        }
      }
    });

    this.element.addEventListener("keyup", (e) => {
      const key = e.key.toLocaleLowerCase();

      if (movementKeysArray.includes(key)) {
        for (const move in movementKeysMap) {
          if (!Object.hasOwnProperty.call(movementKeysMap, move)) continue;
          if (!movementKeysMap[move].includes(key)) continue;

          movement.splice(movement.indexOf(move), 1);
        }
      }
    });
  }
}
