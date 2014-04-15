require_relative './../quotation.rb'
require_relative './../bitcoin.rb'

quotation = Quotation.new(600, "2014-04-01")
puts quotation.price
puts quotation.date
puts quotation.format_price
puts Bitcoin.quotations