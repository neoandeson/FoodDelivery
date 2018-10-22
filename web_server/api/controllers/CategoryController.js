/**
 * StoreController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

let ModelService = require('../services/ModelService')
let Constants = require('../utils/Constants')
let DateUtils = require('../utils/DateUtils')

const viewPath = 'pages/models/category/'
const model = Category

module.exports = {
  
    add: (req, res) => {
        let name = req.body.name

        ModelService.create(model, {
            name: name
        }).then((result) => {
            res.view(viewPath + 'create',{
                result: result,
                status: Constants.RESULT_OK
            })
        })
    },

    list: (req, res) => {
        ModelService.find(model, {})
        .then((result) => {
            res.view(viewPath + 'home',{
                result: result,
                status: Constants.RESULT_OK
            })
        })
    },

    update: (req, res) => {
        let id = req.body.id
        let name = req.body.name

        let options = {
            name: name
        }

        let btnAction = req.body.btnAction
        if(btnAction == "Delete") {
            options.deletedAt = DateUtils.getCurrentTimestamp()
        }

        ModelService.update(model, {
            id: id
        },options).then((result) => {
            res.redirect('/category')
        })
    },
};