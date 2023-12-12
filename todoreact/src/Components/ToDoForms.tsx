import React, { useState } from "react";
import { FormControl, Container, TextField, Button } from '@mui/material';

interface ToDoFormProps {
    addTodo: (text: string[]) => void
  }

const ToDoForm: React.FC<ToDoFormProps> = ({ addTodo }) => {
    const [text, setText] = useState<string>("");

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
        addTodo([text]);
        setText("");
    };

    return (
      <Container maxWidth="sm" style={{ marginTop: 15 }}>
        <form onSubmit={handleSubmit}>
          <FormControl fullWidth>
                    <TextField label="Write task" required={true} value={text}  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setText(e.target.value);
            }} />
            <Button color="primary" type="submit" variant="contained" style={{ marginTop: 15 }}>
              ADD TODO
            </Button>
          </FormControl>
        </form>
      </Container>
    );
  };

export default ToDoForm;