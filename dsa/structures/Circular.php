<?php
declare(strict_types=1);

class Circular
{
  private array $queue = [];
  private int $size = 0;
  private int $capacity = 0;

  private int $head = 0;
  private int $tail = 0;

  public function __construct(int $capacity)
  {
    $this->capacity = $capacity;
    $this->queue = array_fill(0, $capacity, null);
  }

  private function is_empty()
  {
    return $this->size == 0;
  }

  private function is_full()
  {
    return $this->size == $this->capacity;
  }

  private function reset_pointers()
  {
    if ($this->head == $this->tail) {
      $this->head = 0;
      $this->tail = 0;
    }
  }

  public function enqueue(mixed $new_item)
  {
    if ($this->is_full()) return "The queue is full\n";
    $this->queue[$this->tail] = $new_item;

    $this->tail = ($this->tail + 1) % $this->capacity;
    $this->size++;
  }

  public function dequeue()
  {
    $this->reset_pointers();
    if ($this->is_empty()) return "The queue is empty\n";
    $this->queue[$this->head] = null;

    $this->head = ($this->head + 1) % $this->capacity;
    $this->size--;
  }

  public function main()
  {
    $this->enqueue(10);
    $this->enqueue(20);
    $this->enqueue(30);
    $this->enqueue(40);
    $this->enqueue(50);

    print_r($this->queue);

    $this->dequeue();
    $this->dequeue();

    print_r($this->queue);

    $this->enqueue(60);
    $this->enqueue(70);

    print_r($this->queue);

    $this->dequeue();
    $this->dequeue();
    $this->dequeue();

    print_r($this->queue);

    $this->dequeue();
    $this->dequeue();

    $this->enqueue(80);
    print_r($this->queue);
  }
}

$circular = new Circular(5);
$circular->main();