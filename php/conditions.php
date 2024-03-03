<?php
echo "Topic: Conditions\n";

$age = 21;

if ($age >= 18) {
  echo "You have access\n";
} else {
  echo "You dont have access\n";
}


echo "Topic: Logical Operators\n";

echo "AND = &&\n";
echo "OR = ||\n";
echo "NOT = !(expression)\n";


echo "Topic: Ternary Operator\n";

$access = ($age >= 18) ? true : false;