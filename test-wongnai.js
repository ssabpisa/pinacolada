wongnai = require('./lib/wongnai');

var sampleQuery = {
  "latitude": 10.000033,
  "longitude": 12.0003,
  "radius": 2.0, //KM?
  // "nationality": ["japanese", "thai"],
  // "food": ["ice cream", "fastfood"],
  // "business": ["street food", "food truck"],
  // "alcohol": ["wine"],
  // "parking": ["no parking"],
  // "sort": "best match",
  // "open": true,
  // "discount": true,
  // "page": {
  //   "number": 2, //start with 1
  //   "size": 20
  // },
  "campaign": "ais",
  "price": [125, 100] //Set of prices, will use max() and min() or only max() if length == 1
};



wongnai(sampleQuery).then(function(data, q) {
  console.log(data);
}, function(err) { 
  console.log(err);
});