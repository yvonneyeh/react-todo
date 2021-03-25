import React from 'react';
import TextField from '@material-ui/core/TextField';

const TodoForm = ({ saveTodo }) => {
    return (
        <form>
            <TextField variant="outlined" placeholder="Add to-do" margin="normal" />
        </form>
    );
};

export default TodoForm