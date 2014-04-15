var Quotation = require('../quotation.js');
var Bitcoin = require('../bitcoin.js');
var quotation = new Quotation(600, '2014-04-01');

console.log(quotation.price);
console.log(quotation.date);
console.log(quotation.formatPrice());
console.log(Bitcoin.quotations());