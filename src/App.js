import React, { Component } from 'react';
import Header from './components/Header'
import MainContent from './components/MainContent'
import Footer from './components/Footer';
import Checkbox from './components/Checkbox';
import Joke from './components/Joke';
import todosData from './todosData';



export default class App extends Component {
    constructor(){
        super()
        this.state = {
            todos: todosData,
            count: 0,
            isLoading: true,
        }
        this.handleChange = this.handleChange.bind(this)
    }

    componentDidMount(){
        setTimeout(() => {
            this.setState({
                isLoading: false
            })
        }, 1500)
    }

    handleChange(id) {
        this.setState(prevState => {
            const updatetTodos = prevState.todos.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed
                }
                return todo
            })
            return { 
                todos: updatetTodos
            }
        })
    }
  

    render(){
        const todosItem = todosData.map(todo=> 
        <Checkbox 
            isLoading={this.state.isLoading}
            id={todo.id} text={todo.text} 
            completed={todo.completed} 
            handleChange={this.handleChange}
        />)
       
        return(
            <div className="todo-list">
                {todosItem} 
            </div>
        )  
    }
}
