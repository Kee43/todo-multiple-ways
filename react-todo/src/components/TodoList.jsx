import React from 'react';
import { TodoItem } from './TodoItem';
import './TodoList.css';

export class TodoList extends React.Component {

    constructor(props) {

        super(props);
        this.state = {
            listArray: [ {text: "Order shopping", isDone: false}, {text: "Clean house", isDone: false}],
            newItem: ""
        };

        this.handleAddItem = this.handleAddItem.bind(this);
        this.handleTextChange = this.handleTextChange.bind(this);
      }

      handleTextChange(event) {
        this.setState({ 
            newItem: event.target.value 
        })
      }

      handleAddItem(event) {
        event.preventDefault();
        let newItem = {text: this.state.newItem, isDone: false};
        this.setState({ 
            listArray: [...this.state.listArray, newItem],
            newItem: ""
        })
      }

    render() {
        var items = [];
        items = this.state.listArray.map((item, index) => {
            return <TodoItem key={index} text={item.text} isDone={item.isDone}/>
        })
      
        return (
            <div>
                {items}
                <form>
                    <input
                        value={this.state.newItem}
                        onChange={this.handleTextChange}
                        type="text" />
                    <button onClick={this.handleAddItem}>
                        Add Item
                    </button>
                </form>
            </div>
        )
      }
  }