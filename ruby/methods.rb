puts "Topic: Methods"
def square_perimeter(side=1)
  perimeter = side * 4
end
result = square_perimeter 7
puts result
puts "\n"

puts "Topic: Rest Operator"
def sample (*test)
  puts "The number of parameters is #{test.length}"
  for index in 0...test.length
    puts "The parameter number #{index} is: #{test[index]}"
  end
end
sample "Typescript", "Ruby", "PHP", "GO"
