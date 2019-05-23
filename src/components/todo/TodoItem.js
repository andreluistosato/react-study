import React from 'react';

function TodoItem() {
    const itemStyle = {
        lineHeight: '30px',
        verticalAlign: 'middle',
        fontFamily: 'sans-serif'
    };

    return (
        <li style={itemStyle}>
            <input type="checkbox" />
            <label>Placeholder text here</label>
        </li>
    )
}

export default TodoItem