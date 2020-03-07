import React from 'react';
import { TodoList } from './TodoList';

export class TodoApp extends React.Component {

    render() {
        return (
            <div>
                <header className="App-header">
                    React Todo Application
                </header>
                <TodoList></TodoList>
            </div>
        )
      }
  }