const db = require('../../data/dbConfig');

const getAll = () => {
  return db('jokes');
}

const getById = (id) => {
  return db('jokes').where('id', id).first()
}

const create = async (joke) => {
  const [id] = await db('jokes').insert(joke)
  return getById(id)
}

module.exports = {
  getAll,
  getById,
  create,
}