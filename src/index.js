import React from 'react';
import ReactDOM from 'react-dom'; 
import Comment from './Commentbox.js';
import Button from './Button.js';
ReactDOM.render (
    <>
    <Button>
        <Comment name="Ruhi" place="India" info="I'm an MBA student Andhra University" />
    </Button>
    </>,
    document.getElementById('root')
)