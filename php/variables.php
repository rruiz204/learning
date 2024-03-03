<?php
echo "Topic: Data Types\n";

$integer = 100;

$float = 3.14;

$string = 'Hello World!';

$boolean = true;

$nullable = null;


echo "Topic: Data Casting\n";

$integer_text = '234';
$number = (int) $integer_text;
$result = $number + 2;

$text = strval($number);
$type = gettype($text);