var express = require("express");
var utils = require("./utils");
var mongoose = require("mongoose");
var router = express.Router();

// handle image queries
router.get(/\/api\/imagesearch\/.+/, function(req, res) {
    var imgQuery = req.path.substring(17);
    utils.extractResults(imgQuery, req.query.offset || 1, function(data) {
        res.send(data);
    });
});

// return latest search strings
router.get('/api/latest/imagesearch', function(req, res) {
    var Queries = mongoose.model('Queries');
    Queries.find({}, function(err, list) {
        if (err) {
            res.send('{error: Error retrieving last queries.}');
        } else {
            var strQry = "[";
            for (var i=0; i<list.length; i++) {
                strQry += '{"term": "' + list[i].term + '", "when": "'
                    + list[i].when + '"}' + (i == list.length -1 ?']':', ');
            }
            res.send(strQry);
        }
    }).limit(10);
});

module.exports = router;