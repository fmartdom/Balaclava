const path = require('path');
const fs = require('fs');
const db = require('../database/models')
const userControllers = {

    login: (req, res, next) => {
        res.render("loginRegister");

    },

    registro: (req, res, next) => {
        res.render("register");

    },

    index: (req, res) => {
       db.Users.findAll().then(function(usuarios){
            console.log(usuarios)
        res.render('index');

            //res.render(path.resolve(__dirname, '..', 'views','usuarios'), { usuarios});
            
    })}

}
module.exports = userControllers;