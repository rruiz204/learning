<?php
echo "Topic: Associative Arrays\n";

$user = [
  'username' => 'router',
  'email'    => 'example@gmail.com',
  'password' => '12345'
];

$user['password'] = '12345678';
print_r($user);


echo "Topic: Work with Associative Arrays\n";

$user['role'] = 'developer';
print_r($user);

unset($user['password']);
print_r($user);