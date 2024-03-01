interface ICharacter {
  name: string;
  attack: number;
  defense: number;
  health: number;
  inventory: string[];
  display(): void;
}

class Character implements ICharacter {
  constructor (
    public name: string,
    public attack: number,
    public defense: number,
    public health: number,
    public inventory: string[],
  ) {}

  display(): void {
      console.log(`My name is: ${this.name}`);
      console.log("=== Stats ===");
      console.log(`Attack: ${this.attack}`);
      console.log(`Defense: ${this.defense}`);
      console.log(`Health: ${this.health}`);
      console.log("=== Inventory ===");
      this.inventory.forEach((item: string) => console.log(item));
  }
}

const guts = new Character("Guts", 15, 12, 20, ["Dragon Slayer"]);
guts.display();