<?php
declare(strict_types=1);

class Stack
{
  private array $stack = [];
  private int $size = 0;
  private int $pointer = -1;

  public function __construct(int $size)
  {
    $this->size = $size;
  }

  private function is_empty()
  {
    return count($this->stack) == 0;
  }

  private function is_full()
  {
    return count($this->stack) == $this->size;
  }

  public function peek()
  {
    if ($this->is_empty()) return "The stack is empty";
    return $this->stack[$this->pointer];
  }

  public function push(mixed $new_item)
  {
    if ($this->is_full()) return "The stack is full";
    $this->stack[] = $new_item;
    $this->pointer += 1;
  }

  public function pop()
  {
    if ($this->is_empty()) return "The stack is empty";
    $this->pointer -= 1;
    array_splice($this->stack, count($this->stack)-1, 1);
  }

  public function main()
  {
    $this->push(10);
    echo $this->peek();
    $this->push(20);
    echo $this->peek();

    $this->pop();
    echo $this->peek();
  }
}

$stack = new Stack(5);
$stack->main();