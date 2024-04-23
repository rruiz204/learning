<?php
declare(strict_types=1);

class Queue
{
  private array $queue = [];
  private int $size = 0;

  private int $head = -1;
  private int $tail = -1;

  public function __construct(int $size)
  {
    $this->size = $size;
    $this->queue = array_fill(0, $size, null);
  }

  private function is_empty()
  {
    return $this->head == -1;
  }

  private function is_full()
  {
    return $this->tail == ($this->size - 1);
  }

  public function peek()
  {
    if ($this->is_empty()) return "The queue is empty\n";
    return $this->queue[$this->head];
  }

  public function enqueue(mixed $new_item)
  {
    if ($this->is_full()) return "The queue is full\n";
    if ($this->head == -1) $this->head = 0;
    $this->tail++;

    $this->queue[$this->tail] = $new_item;
    echo "The new element was added\n";
  }

  public function dequeue()
  {
    if ($this->is_empty()) return "The queue is empty";
    $this->queue[$this->head] = null;
    $this->head++;
    echo "The first element was deleted\n";

    if ($this->head > $this->tail) {
      $this->head = -1;
      $this->tail = -1;
    }
  }

  public function main()
  {
    $this->enqueue(29);
    print_r($this->queue);

    $this->enqueue(107);
    print_r($this->queue);

    $this->enqueue(98);
    print_r($this->queue);

    $this->enqueue(3000);
    print_r($this->queue);
    
    $this->enqueue(8);
    print_r($this->queue);

    $this->dequeue();
    print_r($this->queue);

    $this->dequeue();
    print_r($this->queue);

    $this->dequeue();
    print_r($this->queue);

    $this->dequeue();
    print_r($this->queue);

    $this->dequeue();
    print_r($this->queue);

    $this->enqueue(123);
    print_r($this->queue);
  }
}

$queue = new Queue(5);
$queue->main();