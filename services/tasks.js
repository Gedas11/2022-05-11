import {database} from '../db/connection.js'

export const  getAll = async () => {
    return await  database.Tasks.findAll()
  
  
  }
  export const getById = async (id) => {
      return await database.Tasks.findByPk(id)
  }
export const _delete = async (id) =>{
   const task = await getById(id)
   await task.destroy()
}

export const  insert = async (data) => {
  const task = new database.Tasks(data)

  await task.save()
}