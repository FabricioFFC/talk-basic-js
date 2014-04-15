require_relative './quotation.rb'

class Bitcoin
  def self.quotations
    Quotation.all
  end
end
