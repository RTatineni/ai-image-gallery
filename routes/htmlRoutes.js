var db = require("../models");
const aws = require('aws-sdk')

var s3 = new aws.S3()

module.exports = function(app) {
  // Load index page

  app.get("/", function(req,res){
    var imgUrls = [];
   // res.render("index", {imgUrls: imgUrls[0]});
    var params = { 
      Bucket: 'gallery-images-aa',
      Delimiter: '/',
    }

    s3.listObjects(params, function (err, data) {
      if(err)throw err;
      console.log(data);
  
      for(i in data.Contents){
        var s3URL = "https://gallery-images-aa.s3.amazonaws.com/" + data.Contents[i].Key
   
      imgUrls.push({url: s3URL})
  
      }
      res.render("index", {imgUrls: imgUrls});
    })
  })

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });

};


