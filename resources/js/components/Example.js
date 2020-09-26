import React from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';

function Example() {
    return (
        <Button variant="contained" color="primary">
            Hello World
        </Button>
    );
}

export default Example;

if (document.getElementById('root')) {
    ReactDOM.render(<Example />, document.getElementById('root'));
}
