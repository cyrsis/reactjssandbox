export const addTodo = (list, item) => {
    // list.push(item)
    //return  list.concat(item)
    return [...list, item]
}