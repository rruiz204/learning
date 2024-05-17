<?php declare(strict_types=1);

class Node {
  public int $value;
  public ?Node $left = null;
  public ?Node $right = null;

  function __construct(int $value)
  {
    $this->value = $value;
  }
}


class BinaryTree {
  public ?Node $root = null;

  function __construct(int $value)
  {
    $this->root = new Node($value);
  }

  public function insert(int $value): void
  {
    $this->recursive_insert($this->root, $value);
  }

  public function recursive_insert(Node $node, int $value): void
  {
    if ($value < $node->value) {
      if (!$node->left) {
        $node->left = new Node($value);
      } else {
        $this->recursive_insert($node->left, $value);
      }
    } else {
      if (!$node->right) {
        $node->right = new Node($value);
      } else {
        $this->recursive_insert($node->right, $value);
      }
    }
  }
}


$tree = new BinaryTree(76);
echo $tree->root->value;

echo "\n";

$tree->insert(90);
echo $tree->root->right->value;

echo "\n";

$tree->insert(120);
echo $tree->root->right->right->value;

echo "\n";

$tree->insert(20);
echo $tree->root->left->value;