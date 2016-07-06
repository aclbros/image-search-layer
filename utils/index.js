var request = require("request");
var mongoose = require("mongoose");
require("dotenv").load();

mongoose.connect(process.env.MONGO_URI);

var Queries = mongoose.model('Queries', {term: String, when: { type: Date, default: Date.now }});

function extractResults(imgQuery, start, callback) {
    var apiUrl = "https://www.googleapis.com/customsearch/v1?q=" + imgQuery
        + "&cx=" + process.env.CX + "&start=" + start
        + "&fields=items(link%2Cpagemap%2Csnippet)&key=" + process.env.KEY;
    var myJson = [];
    var result;
    request(apiUrl, function(error, response, body) {
        if (!error && response.statusCode == 200) {
            var jsonBody = JSON.parse(body);
            myJson.push('[');
            for (var i = 0; i<jsonBody.items.length; i++) {
                myJson.push('{"url": "', (jsonBody.items[i].pagemap.cse_image == undefined ? "":jsonBody.items[i].pagemap.cse_image[0].src), '", '
                    , '"snippet": "', jsonBody.items[i].snippet, '", '
                    , '"thumbnail": "', (jsonBody.items[i].pagemap.cse_thumbnail == undefined ? "":jsonBody.items[i].pagemap.cse_thumbnail[0].src), '", '
                    , '"context": "', jsonBody.items[i].link, '"}', (i == jsonBody.items.length - 1 ? ']':', '));
            }
            result = myJson.join("");
            callback(result);
        }
        if (!error && response.statusCode == 400) {
            result = '{"error": "Invalid query"}';
            callback(result);
        }
    });
    var newQuery = new Queries({ term: imgQuery});
    newQuery.save(function (err, userObj) {
        if (err) {
            console.log(err);
        }
    });
}

exports.extractResults = extractResults;