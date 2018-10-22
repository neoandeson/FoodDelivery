/**
 * OrderController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
let ModelService = require('../services/ModelService')
let Constants = require('../utils/Constants')

const model = Order

module.exports = {
    add: async (req, res) => {
        let options = {
            user: req.body.user,
            store: req.body.store,
            purchase: req.body.purchase,
            totalPrice: req.body.totalPrice,
            placePickupLatitude: req.body.placePickupLatitude,
            placePickupLongitude: req.body.placePickupLongitude,
            distance: req.body.distance,
            statusStep: req.body.statusStep,
        }

        ModelService.create(model, options)
        .then(async (result) => {
            let id = result.id
            result.detail = []

            let listDetail = req.body.listDetail
            await listDetail.forEach(detail => {
                let discount
                if(detail.discount) {
                    discount = detail.discount
                }

                ModelService.create(OrderDetail, {
                    order: id,
                    product: detail.id,
                    price: detail.price,
                    discount: discount
                }).then((detailResult) => {
                    result.detail.push(detailResult)
                })
            })
            
            return res.send({
                result: result,
                status: Constants.RESULT_OK
            })
        })
    },

    list: async (req, res) => {
        ModelService.find(model, {})
        .then((result) => {
            res.send({
                result: result,
                status: Constants.RESULT_OK
            })
        })
    },

    update: (req, res) => {
        let id = req.body.id

        let options = {
            user: req.body.user,
            store: req.body.store,
            purchase: req.body.purchase,
            totalPrice: req.body.totalPrice,
            placePickupLatitude: req.body.placePickupLatitude,
            placePickupLongitude: req.body.placePickupLongitude,
            distance: req.body.distance,
            statusStep: req.body.statusStep,
        }

        ModelService.update(model, {
            id: id
        },options).then((result) => {
            res.send({
                result: result,
                status: Constants.RESULT_OK
            })
        })
    },

};

