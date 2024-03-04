<?php
echo "Topic: For Loop\n";

for ($i = 0; $i < 5; $i++) {
  echo "$i\n";
}


echo "Topic: Foreach Loop\n";

$numbers = [1, 2, 3];

foreach ($numbers as $number) {
  echo "$number\n";
}