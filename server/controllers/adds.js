const mongoose = require('mongoose');
const Add = mongoose.model('Add');

module.exports = {
    newImg(req,res){
        var body = req.body;
        var add = new Add(body);
        add.save(function(err){
            if(!err){
                return res.json(add)
            }
            var errs= []
            errs.push(err);
            return res.stats(404).json(err);
        });
    },
    getimgs(req,res){
        Add.find({}, function(err, add){
            if(err){
                return res.status(404).json(err);
            }
            return res.json(add)
        })
    },
    delete(req,res){
        Add.remove({_id: req.params.id}, (err,add)=>{
            if (err) {
                return res.status(404).json(err);
            }
            return res.json(add);
        })
    }

}