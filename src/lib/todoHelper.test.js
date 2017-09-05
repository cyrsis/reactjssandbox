import { addTodo, findById, toggleTodo, updateTodo } from './todoHelpers'

test('addTodo should add the pass todo to the list', () => {
    const startTodos = [
        {id: 1, name: 'one', isComplete: false},
        {id: 2, name: 'two', isComplete: false},
    ]

    const newTodo = {id: 3, name: 'three', isComplete: true}

    const expected = [
        {id: 1, name: 'one', isComplete: false},
        {id: 2, name: 'two', isComplete: false},
        {id: 3, name: 'three', isComplete: true}
    ]

    const result = addTodo(startTodos, newTodo)

    expect(result).toEqual(expected)
})

test('addTodo should not mutate the existing todoArray', () => {
    const startTodos = [
        {id: 1, name: 'one', isComplete: false},
        {id: 2, name: 'two', isComplete: false},
    ]

    const newTodo =
        {id: 3, name: 'three', isComplete: false}

    const expected = [
        {id: 1, name: 'one', isComplete: false},
        {id: 2, name: 'two', isComplete: false},
        {id: 3, name: 'three', isComplete: false}
    ]

    const result = addTodo(startTodos, newTodo)

    expect(result).not.toBe(startTodos)

})

test('findByid should return the expected item from an array ', () => {
    const startTodos = [
        {id: 1, name: 'one', isComplete: false},
        {id: 2, name: 'two', isComplete: false},
        {id: 3, name: 'three', isComplete: false},
    ]

    const expected = {id: 2, name: 'two', isComplete: false}

    const result = findById(2, startTodos)

    expect(result).toEqual(expected)
})

test('toggleTodo should toggle the isComplete prop of a todo', () => {
    const startTodos = {id: 1, name: 'one', isComplete: false}


    const expected = {id: 1, name: 'one', isComplete: true}


    const result = toggleTodo(startTodos)

    expect(result).toEqual(expected)
})

test('toggleTodo should not mutate the orginal todo', () => {
    const startTodos =
        {id: 1, name: 'one', isComplete: false}



    const expected =
        {id: 1, name: 'one', isComplete: true}


    const result = toggleTodo(startTodos)

    expect(result).not.toBe(startTodos)
})

test('updateTodo should update an item by id', () => {
    const startTodos = [
        {id: 1, name: 'one', isComplete: false},
        {id: 2, name: 'two', isComplete: false},
        {id: 3, name: 'three', isComplete: false},
    ]

    const updatedTodo = {id: 2, name: 'two', isComplete: true}

    const expected = [
        {id: 1, name: 'one', isComplete: false},
        {id: 2, name: 'two', isComplete: true},
        {id: 3, name: 'three', isComplete: false}
    ]

    const result = updateTodo(startTodos, updatedTodo)

    expect(result).toEqual(expected)
})

test('UpdateTodo shold not mutate the orginal array', () => {
    const startTodos = [
        {id: 1, name: 'one', isComplete: false},
        {id: 2, name: 'two', isComplete: false},
        {id: 3, name: 'three', isComplete: false},
    ]

    const updatedTodo = {id: 2, name: 'two', isComplete: true}

        const result = updateTodo(startTodos, updatedTodo)

    expect(result).not.toBe(startTodos)
})
