<?php
echo "Topic: Spread in Arrays\n";

$numbers_a = [1,2,3];
$numbers_b = [4,5,6];

$numbers_c = [...$numbers_a, ...$numbers_b];

print_r($numbers_c);


echo "Topic: Spread in Objects\n";

$array1 = ['key1' => '234', 'key2' => '843'];
$array2 = ['key3' => '09234', 'key4' => '49870'];

$result = [...$array1, ...$array2];
print_r($result);