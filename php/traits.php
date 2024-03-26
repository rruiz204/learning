<?php

trait Messageable
{
  public function sendMessage($message)
  {
    echo "Sending message: " . $message . "\n";
  }
}


trait Loggable
{
  public function log($message)
  {
    echo "Logging: " . $message . "\n";
  }
}


class UserMessage
{
  use Messageable, Loggable;
}


$userMessage = new UserMessage();
$userMessage->sendMessage("Hello, how are you?");
$userMessage->log("The user has logged in");
