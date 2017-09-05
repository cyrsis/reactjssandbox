export const addTodo = (list, item) => {
    // list.push(item)
    //return  list.concat(item)
    return [...list, item]
}

export const generatedId = () => Math.floor(Math.random()*10000)

export const findById = (id,list) => {list.find(item => item.id ===id)}