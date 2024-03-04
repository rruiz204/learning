<?php
echo "Topic: Functions\n";

function sum($a=0, $b=0) {
  return $a + $b;
}

$result = sum(a: 1, b: 3);
echo $result;


echo "Topic: Arrow Functions\n";

$upper = fn ($message) => strtoupper($message);
$message = $upper("hello world!");
echo "$message\n";


echo "Topic: Anonymous Functions\n";

$printer = function($message) {
  echo $message;
};

$printer("bye bitches");