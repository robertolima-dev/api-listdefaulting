const InadimplentesModel = require('../model/InadimplentesModel')

class InadimplentesController {

    async index(req, res) {
        if(req.query.order) {
            if(req.query.order === 'name') {
                await InadimplentesModel.find().sort({ name: 1 })
                .then(response => {
                    return res.status(200).json(response)
                })
                .catch(error => {
                    return res.status(500).json(error);
                })
            } else if(req.query.order === 'since') {
                await InadimplentesModel.find().sort({ since: 1 })
                .then(response => {
                    return res.status(200).json(response)
                })
                .catch(error => {
                    return res.status(500).json(error);
                })
            } else if(req.query.order === 'value') {
                await InadimplentesModel.find().sort({ value: 1 })
                .then(response => {
                    return res.status(200).json(response)
                })
                .catch(error => {
                    return res.status(500).json(error);
                })
            }
        } else if(req.query.filter) {
            const name = req.query.filter
            await InadimplentesModel.find({name: { $regex: '.*' + name + '.*' } })
            .then(response => {
                return res.status(200).json(response)
            })
            .catch(error => {
                return res.status(500).json(error);
            })
        } else {
            await InadimplentesModel.find()
            .then(response => {
                return res.status(200).json(response)
            })
            .catch(error => {
                return res.status(500).json(error);
            })
        }
    }

    async store(req, res) {
        const inadimplentes = new InadimplentesModel(req.body)
        await inadimplentes
            .save()
            .then(response => {
                return res.status(200).json(response);
            })
            .catch(error => {
                return res.status(500).json(error);
            })
    }

    async show(req, res) {
        await InadimplentesModel.findById(req.params.id)
        .then(response => {
            if(response) {
                return res.status(200).json(response)
            } else {
                return res.status(404).json({ error: 'Inadimplente não encontrada' });
            }
        })
        .catch(error => {
            return res.status(500).json(error)
        })
    }

    async update(req, res) {
        await InadimplentesModel.findByIdAndUpdate({ '_id': req.params.id }, req.body, { new: true })
            .then(response => {
                return res.status(200).json(response);
            })
            .catch(error => {
                return res.status(500).json(error);
            })
    }

    async destroy(req, res) {
        await InadimplentesModel.deleteOne({ '_id': req.params.id })
        .then(response => {
            return res.status(200).json(response)
        })
        .catch(error => {
            return res.status(500).json(error);
        })
    }
}
module.exports = new InadimplentesController()