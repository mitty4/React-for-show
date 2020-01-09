import React, { useState } from 'react';
import {TextField, Button} from '@material-ui/core';




function TodoForm(){



  const [value, setValue] = useState('')

  return(
    <form onSubmit={handleSubmit}>
      <TextField
        value={value}
        placeholder="task..."
        onChange={(e) => setValue(e.target.value)}>
      </TextField>
      <Button
        type="submit"
        variant="contained"
        color="default">
        Add Item
      </Button>
    </form>
  );
}


export default TodoForm;
