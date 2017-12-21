const mongoose = require('mongoose');
const User = mongoose.model('User');

module.exports = {
    show(req, res) {
        if(req.session.no){
            errs= req.session.no
        }
        if(req.session.errors){
            var errs= [];
            for(let i in req.session.errors.errors){
                errs.push(req.session.errors.errors[i].message);
            }
            errs = errs.reverse()
        }
        req.session.destroy();
        
        return res.status(404).json(err);
    },
    findAll(req,res){
        User.find({}, function(err,user){
            if (err) {
                return res.status(404).json(err);
            }
            return res.json(user);
        });
    },
    delAll(req,res){
        User.remove({}, (err,user)=>{
            if (err) {
                return res.status(404).json(err);
            }
            return res.json(user);
        })
    },
    login(req, res) {
        var body = req.body;
        if(!body.email || !body.password){
            err = "Wrong login info";
           return res.status(404).json(err);
        }
        User.find({email: body.email}, function(err, user){
            if(user.length < 1){
                err = "Wrong login info";
               return res.status(404).json(err);
            }  
            user=user[0]; 
                if(User.schema.methods.match(req.body.password, user.password)){
                    req.session._id = user._id.toString();
                    
                    return res.json(user);
                }else{
                err = "Wrong login info";
                return res.status(404).json(err);
                }
            })
    },
    logout(req,res){
        req.session.destroy();
    },
    register(req, res ){
        var body = req.body;
           var user = new User(body)
            user.save(function(err){
                if(!err){
                    req.session._id = user._id; //do I need this?
                return res.json(user);
                }
                var errs = [] 
                errs.push(err);
                return res.status(404).json(err);
            });
    },
    session(req, res){
        if(!'_id' in req.session){
            return res.json(false)
        }
       
        User.findById(req.session._id, function(err, user){
            
            if(user){
                
              return res.json(user);
            }
            return res.json(false);
        })
    }
}
