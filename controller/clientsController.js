const { generateId } = require('../utils/generateId')
const mongodb = require('../dbConnection')

const create = async (req, res) => {
  if (!req && !req.body) throw new Error('Please, send body.')

  const body = req.body

  const clients = {
    name: body.name,
    email: body.email,
    userName: body.userName
  }

  await mongodb('clients').insert({ ...clients })
  res.json({ error: null, data: clients })
}

const list = async (req, res) => {
  const RESPONSE = await mongodb('clients').find().toArray()
  res.json({ error: null, data: RESPONSE })
}

const remove = async (req, res) => {
  const idsToDelete = req.body.idsToDelete

  idsToDelete.forEach(async element => {
    await mongodb('clients').removeOne({
      _id: element
    })
  })

  const RESPONSE = await mongodb('clients').find().toArray()
  res.json({ error: null, data: RESPONSE })
}

module.exports = {
  create,
  remove,
  list
}
