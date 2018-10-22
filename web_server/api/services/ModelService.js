module.exports = {
    create: (model, options) => {
        return new Promise(async (resolve, reject) => {
            let result = await model.create(options).fetch()

            return resolve(result)
        })
    },

    find: (model, options) => {
        return new Promise(async (resolve, reject) => {
            options.deletedAt = 0
            let result = await model.find(options)

            return resolve(result)
        })
    },

    findOne: (model, options) => {
        return new Promise(async (resolve, reject) => {
            options.deletedAt = 0
            let result = await model.findOne(options)

            return resolve(result)
        })
    },

    update: (model, criteria, options) => {
        return new Promise(async (resolve, reject) => {
            let result = await model.update(criteria, options).fetch()

            return resolve(result)
        })
    },
}