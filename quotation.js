var Quotation;

Quotation = function Quotation (price, date) {
  this.price = price;
  this.date  = date;

  this.formatPrice = formatPrice;

  function formatPrice() {
    return "$" + this.price;
  }

};

Quotation.all = all;

function all() {
  return "all quotations";
}

module.exports = Quotation;

