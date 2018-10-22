/**
 * StoreController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

let ModelService = require('../services/ModelService')
let Constants = require('../utils/Constants')

const model = Store
const viewPath = 'pages/models/store/'

module.exports = {
    add: async (req, res) => {
        let storeType
        await ModelService.find(StoreType,{}).then((types) => {
            storeType = types
        })

        let status
        await ModelService.find(Status,{}).then((result) => {
            status = result
        })

        let cities
        await ModelService.find(City,{}).then((result) => {
            cities = result
        })

        if(req.method == 'GET'){
            return res.view(viewPath + 'create',{
                data: {
                    storeType: storeType,
                    status: status,
                    cities: cities
                },
                status: Constants.RESULT_OK
            })
        }

        let options = {
            title: req.body.title,
            fullTitle: req.body.fullTitle,
            address: req.body.address,
            phone: req.body.phone,
            city: req.body.city,
            status: req.body.status,
            storeType: req.body.storeType,
            rating: req.body.rating,
            timeOpen: req.body.timeOpen,
            timeClose: req.body.timeClose,
            minPrice: req.body.minPrice,
            maxPrice: req.body.maxPrice,
            timePrepare: req.body.timePrepare,
        }

        ModelService.create(model, options)
        .then((result) => {
            res.view(viewPath + 'create',{
                result: result,
                data: {
                    storeType: storeType,
                    status: status,
                    cities: cities
                },
                status: Constants.RESULT_OK
            })
        })
    },

    list: async (req, res) => {
        let storeType
        await ModelService.find(StoreType,{}).then((types) => {
            storeType = types
        })

        let status
        await ModelService.find(Status,{}).then((result) => {
            status = result
        })

        let cities
        await ModelService.find(City,{}).then((result) => {
            cities = result
        })

        ModelService.find(model, {})
        .then((result) => {
            res.view(viewPath + 'home',{
                result: result,
                data: {
                    storeType: storeType,
                    status: status,
                    cities: cities
                },
                status: Constants.RESULT_OK
            })
        })
    },

    update: (req, res) => {
        let id = req.body.id

        let options = {
            title: req.body.title,
            fullTitle: req.body.fullTitle,
            address: req.body.address,
            phone: req.body.phone,
            city: req.body.city,
            status: req.body.status,
            storeType: req.body.storeType,
            rating: req.body.rating,
            timeOpen: req.body.timeOpen,
            timeClose: req.body.timeClose,
            minPrice: req.body.minPrice,
            maxPrice: req.body.maxPrice,
            timePrepare: req.body.timePrepare,
        }

        let btnAction = req.body.btnAction
        if(btnAction == "Delete") {
            options.deletedAt = DateUtils.getCurrentTimestamp()
        }

        ModelService.update(model, {
            id: id
        },options).then((result) => {
            res.redirect('/store')
        })
    },

    search: (req, res) => {
        let keyword = req.body.keyword
        let page = 0
        let sort = 'rating DESC'

        if(req.body.page) {
            page = req.body.page
        }
        
        if(req.body.sort) {
            sort = req.body.sort
        }

        ModelService.find(model, {
            fullTitle: {
                'contains' : keyword
            },
            limit: Constants.PAGE_SIZE,
            skip: Constants.PAGE_SIZE * page
        }).then((result) => {
            res.send({
                result: result,
                status: Constants.RESULT_OK
            })
        })
    }
};

