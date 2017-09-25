import {observable , computed,reaction} from 'mobx'


export default class TodoStore{

    @observable todos = [];

    @computed get activeTodoCount(){
        return this.todos.reduce(
            (sum,todo) => sum + (todo.completed? 0:1),0
        )
    }


}