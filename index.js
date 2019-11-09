import React from 'react';
import ReactDOM from 'react-dom';
import AddItem from './addItem';

import './index.css';

function Container(props) {
    return (
        <div>
            <AddItem/>
        </div>
    );
}

ReactDOM.render(<Container/>, document.getElementById('root'));
