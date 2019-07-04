import data from '../models'

export const getAllItems = (req, res) => {
    return res.send(data)
}

export const getItemById = (req, res) => {
    let item = data.find(data => data.id == req.params.id)
    return res.send(item)
}

export const createItem = (req, res) => {
    const { body } = req;
    data.push[body];
    return res.status(201).json({
        status: 201,
        message: 'created',
        data: body
    });
}