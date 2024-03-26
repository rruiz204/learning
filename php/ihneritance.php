<?php

class Vehicle
{
  protected $brand;
  protected $model;

  public function __construct($brand, $model)
  {
    $this->brand = $brand;
    $this->model = $model;
  }

  public function getDescription()
  {
    return "This vehicle is a " . $this->brand . " " . $this->model;
  }
}


class Car extends Vehicle
{
  private $numberOfDoors;

  public function __construct($brand, $model, $numberOfDoors)
  {
    parent::__construct($brand, $model);
    $this->numberOfDoors = $numberOfDoors;
  }

  public function getDescription()
  {
    return parent::getDescription() . " with " . $this->numberOfDoors . " doors.";
  }
}
