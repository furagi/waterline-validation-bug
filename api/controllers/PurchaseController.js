/**
 * PurchaseController
 *
 * @description :: Server-side logic for managing purchases
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	find: function(req, res) {
    Purchase.create({
      purchasePrice: 1
    })
    .then(function(purchase) {
      res.json(purchase);
    })
    .catch(function(err) {
      console.log(err);
      res.send(err);
    });
  }
};

