<?php

class PasswordGenerator
{
  private static $seed = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

  public static function generatePassword($length = 8)
  {
    $password = '';
    $seedLength = strlen(self::$seed);

    for ($i = 0; $i < $length; $i++) {
      $password .= self::$seed[random_int(0, $seedLength - 1)];
    }

    return $password;
  }
}

$password = PasswordGenerator::generatePassword(12);
echo "Random password: " . $password . "\n";
