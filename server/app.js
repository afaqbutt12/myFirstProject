let mongoose = require("mongoose");
var multer = require('multer');
let Iyrix = require("./db/mymodel");
let files = require("./db/myFiles");
const myExpress = require('express');
let app = myExpress();
let mycors=require("cors");
app.use(mycors());
///////////////file upload/////////////////////

var storage = multer.diskStorage({
    destination: function (req, formData, cb) {
      cb(null, './server/uploadFile')
    },
    filename: function (req, formData, cb) {
      cb(null, formData.originalname)
    }
    // new Date().toISOString()+'-'+
  })
//   console.log(formData.originalname);
  var upload = multer({ storage: storage })

app.post('/myFile', upload.single('file'), function (req, res, next) {
    // console.log(req.path);
    try {
        // let myFile = new myFiles(req.body.path);
        // myFile.save();

        res.end("hello")
       
    }
    catch(e){
        res.end("ni hoa")
        
    }
    // res.json({
    //     success: true,
    //   });
})
// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })
////////////////register//////////////////////
app.post("/register", (req, res) => {
    try {
      let user = new Iyrix(req.body);
  
      user.save();
    } catch (e) {
      console.log(e.messege);
    }
    res.json({
      success: true,
    });
  });
  ///////////////name///////////////////////
app.use(myExpress.static('./build'))
app.listen(process.env.PORT || 5000, () => {
  console.log("hi this is server");
});
/////////////////////////////////////////////////////////
// var storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//       cb(null, './uploadFile')
//     },
//     // filename: function (req, file, cb) {
//     //   cb(null, file.originalname)
//     // }
//     filename: function (req, file, cb) {
//         cb(null, Date.now() + '-' +file.originalname )
//       }
//   })
   
//   var upload = multer({ storage: storage })
// var upload = multer({ storage: storage }).single('file');
// app.post('/myFile',function(req, res) {
     
//     upload(req, res, function (err) {
//            if (err instanceof multer.MulterError) {
//                return res.status(500).json(err)
//            } else if (err) {
//                return res.status(500).json(err)
//            }

//       return res.status(200).send(req.file)

//     })

// });
