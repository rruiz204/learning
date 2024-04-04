puts "Topic: Blocks"
puts "\n"

def blockExample()
  puts "Before Block"
  yield(33, 109, 1)
  puts "After Block"
end

blockExample do |a, b, c|
  puts "a: #{a}, b: #{b}, c: #{c}"
end
