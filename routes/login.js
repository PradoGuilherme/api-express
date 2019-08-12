const mongodb = require('../dbConnection')
const jwt = require('jsonwebtoken')

const login = async (req, res) => {
  try {
    if (!req && !req.body) throw new Error('Please, send body.')

    const body = req.body

    const user = await mongodb('users').findOne({
      email: body.email,
      password: body.password
    })

    if (!user || !user._id) throw new Error('Não existe usuário com estes dados.')

    const token = jwt.sign({ _id: user._id }, process.env.SECRET, {
      expiresIn: 259200
    })

    res.json({ error: null, data: { token: token } })
  } catch (error) {
    res.json({ error: error.message || 'Erro interno.', data: null })
  }
}

module.exports = login
