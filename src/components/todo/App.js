import React from 'react';
import TodoItem from './TodoItem';

function App() {
    const listStyle = {
        listStyle: 'none'
    };

    return (
        <div>
            <ul style={listStyle}>
                <TodoItem />
                <TodoItem />
                <TodoItem />
            </ul>
        </div>
    )
}

export default App