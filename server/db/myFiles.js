let mongoose=require('mongoose');
mongoose.connect('mongodb+srv://afaq_ahmed:080907@cluster0.lmhty.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, (err) => {

    if(err){
        console.log(err)
    }else{
        console.log("iyrix mongo is connected")
    }

});

module.exports = mongoose.model('myFiles', {
    file: {
        type: String,
        // required: true
    },
    
});