/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

let ModelService = require('../services/ModelService')
let Constants = require('../utils/Constants')
let DateUtils = require('../utils/DateUtils')

const viewPath = 'pages/models/user/'
const model = User

module.exports = {
  
    add: async (req, res) => {
        let userRole
        await ModelService.find(UserRole,{}).then((types) => {
            userRole = types
        })

        let cities
        await ModelService.find(City,{}).then((result) => {
            cities = result
        })

        if(req.method == 'GET'){
            return res.view(viewPath + 'create',{
                data: {
                    cities: cities,
                    userRole: userRole
                },
                status: Constants.RESULT_OK
            })
        }

        let options = {
            username: req.body.username,
            password: req.body.password,
            email: req.body.email,
            sex: req.body.sex,
            address: req.body.address,
            phone: req.body.phone,
            age: req.body.age,
            city: req.body.city,
            role: req.body.role
        }

        ModelService.create(model, options)
        .then((result) => {
            res.view(viewPath + 'create',{
                data: {
                    cities: cities,
                    userRole: userRole
                },
                result: result,
                status: Constants.RESULT_OK
            })
        })
    },

    list: async (req, res) => {
        let userRole
        await ModelService.find(UserRole,{}).then((types) => {
            userRole = types
        })

        let cities
        await ModelService.find(City,{}).then((result) => {
            cities = result
        })
        
        ModelService.find(model, {})
        .then((result) => {
            res.view(viewPath + 'home',{
                data: {
                    cities: cities,
                    userRole: userRole
                },
                result: result,
                status: Constants.RESULT_OK
            })
        })
    },

    update: (req, res) => {
        let options = {
            username: req.body.username,
            password: req.body.password,
            email: req.body.email,
            sex: req.body.sex,
            address: req.body.address,
            phone: req.body.phone,
            age: req.body.age,
            city: req.body.city,
            role: req.body.role
        }

        let btnAction = req.body.btnAction
        if(btnAction == "Delete") {
            options.deletedAt = DateUtils.getCurrentTimestamp()
        }

        ModelService.update(model, {
            id: id
        },options).then((result) => {
            res.redirect('/user')
        })
    },

    login: (req, res) => {
        let options = {
            username: req.body.username,
            password: req.body.password,            
        }

        ModelService.findOne(model, options)
        .then((result) => {
            return res.send({
                result: result,
                status: Constants.RESULT_OK
            })
        })
    }

};

