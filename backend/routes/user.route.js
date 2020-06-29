const express = require('express');
const userRoute = express.Router();

// User model
let UserModel = require('../models/User');

userRoute.route('/').get((req, res) => {
    UserModel.find((error, data) => {
     if (error) {
       return next(error)
     } else {
       res.json(data)
     }
   })
 })

 userRoute.route('/create').post((req, res, next) => {
    UserModel.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});

userRoute.route('/edit:id').get((req, res) => {
   UserModel.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Update User
userRoute.route('/update/:id').post((req, res, next) => {
  UserModel.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data)
    }
  })
})

// Delete user
userRoute.route('/delete/:id').delete((req, res, next) => {
  UserModel.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})

module.exports = userRoute;