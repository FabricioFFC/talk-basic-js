class Quotation

  attr_accessor :price, :date

  def initialize(price, date)
    @price = price
    @date  = date
  end

  def format_price
    "$#{@price}"
  end

  def self.all
    "all quotations"
  end
end