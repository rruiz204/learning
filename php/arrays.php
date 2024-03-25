<?php
echo "Topic: Arrays and Index\n";

$numbers = [1, 2, 3, 4, 5];
echo "$numbers[2]\n";


echo "Topic: Array Methods\n";
$anything = [1, "Hello", TRUE];

array_push($anything, 123, "World");
print_r($anything);

array_unshift($anything, 987);
print_r($anything);

array_pop($anything);
print_r($anything);

array_shift($anything);
print_r($anything);


echo "Topic: Map, Filter and Reduce\n";

$first_array = [1, 2, 3, 4];

$first_result = array_map(fn ($number) => $number * 3, $first_array);
print_r($first_result);

$second_result = array_filter($first_array, fn ($number) => $number % 2 == 0);
print_r($second_result);

$third_result = array_reduce($second_result, fn ($prev, $next) => $prev + $next);
echo $third_result;