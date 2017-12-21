'use strict';
var mongoose = require('mongoose');

var Schema = mongoose.Schema;
let bcrypt   = require("bcrypt");

const UserSchema = new Schema({
    first_name: {
        type: String,
        minlength:[4,"First name must be more than 4 characters"],
        required: [true,'You need to enter a first name'],
    },
    last_name:{
        type: String,
        minlength: [4,"Last name must be more than 4 characters"],
        required: [true,'you need to enter a last name'],
    },
    email:{
        type: String,
        unique: [true, 'a account with this password already exists'],
        required: [true,'You need to enter a email adress'],
        validate: {
            validator:function(value){
              return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test( value );
            },
            message: "You need a valid email"
        }
    },
    password:{
        type: String,
        minlength: 8,
        maxlength: 32,
        required: [true,'a password is required'],
        validate: {
          validator: function( value ) {
            return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,15}/.test( value );
          },
          message: "Password failed validation, you must have at least 1 number, uppercase and special character"
        
    }
        
    },
    password_confirm:{
        type: String,
        required: [true,'please re-enter your password'],
        validate: {
            validator: function(value) {
                return this.password == value;
            },
            message: "Your password dose not match"
        }
    },
    license:{
        type: String,
        required:[true, "license is required"]
    },
    company:{
        type: String,
    }
},{timestamps: true});


UserSchema.methods.hash = function(password){
    return bcrypt.hashSync(password,bcrypt.genSaltSync(8));
}
UserSchema.methods.match = function(formPass,password){
    return bcrypt.compareSync(formPass,password);
}
UserSchema.pre("save",function(done){
    this.password = this.hash(this.password);
    this.password_confirm = undefined;
    done();
})
const User=mongoose.model('User', UserSchema);