const mongodb = require('../dbConnection')

const login = async (req, res) => {
  try {
    if (!req && !req.body) throw new Error('Please, send body.')

    const body = req.body

    const user = await mongodb('users').findOne({
      email: body.email,
      password: body.password
    })

    if(!user || !user._id) throw new Error('Não existe usuário com estes dados.')

    res.json({ error: null, data: user })
  } catch (error) {
    console.log("TCL: login -> error", error)
    res.json({ error: error.message || 'Erro interno.', data: null })
  }
}

module.exports = login