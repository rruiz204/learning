<?php
declare(strict_types=1);

class Character
{
  public string $name;
  public array $inventory;
  private int $health;
  private string $role;

  public function __construct(string $name, array $inventory, int $health, string $role)
  {
    $this->name = $name;
    $this->health = $health;
    $this->role = $role;
    $this->inventory = $inventory;
  }

  public function display()
  {
    echo "Hi! My name is $this->name";
  }
}

$guts = new Character(name: "Guts", inventory: [], health: 150, role: "Berserker");
$guts->display();