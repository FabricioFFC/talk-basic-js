var Bitcoin;
var Quotation = require('./quotation.js');

Bitcoin = function Bitcoin () {};

Bitcoin.quotations = function quotations() {
  return Quotation.all();
};

module.exports = Bitcoin;

