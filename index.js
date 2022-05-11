import {database} from "./db/connection.js";
import {insert, getAll, _delete, update} from './services/tasks.js';

await insert ({task: 'isplauti indus', done: 0})
// try{


// await _delete(1)
// } catch {
//     console.log('istrinti nepavyko')
// }

try{
    await update(6, {task: 'isvesti suni', done: 2})
}catch{
    console.log('nepavyko')
}