import React from 'react';
import { TextField, Button } from '@material-ui/core';


function Todo(){

  return(
    <div>
      <TextField />
      <Button
        type='submit'
        variant='contained'
        color='default'
      >
        Add
      </Button>
    </div>
  );
}

export default Todo;
