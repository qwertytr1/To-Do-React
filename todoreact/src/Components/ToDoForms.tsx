import React, { useState } from "react";
import { FormControl, Container, TextField, Button } from '@mui/material';

interface ToDoFormProps {
  addTodo: (text: string[], tags: string[]) => void;
}

const ToDoForm: React.FC<ToDoFormProps> = ({ addTodo }) => {
  const [text, setText] = useState<string>("");
  const [tags, setTags] = useState<string[]>([]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newText = e.target.value;
    setText(newText);

    const newTags = newText.match(/#\w+/g) || [];
    setTags(newTags);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addTodo([text], tags);
    setText("");
    setTags([]);
  };
    console.log(text, tags);
  return (
    <Container maxWidth="sm" style={{ marginTop: 15 }}>
      <form onSubmit={handleSubmit}>
        <FormControl fullWidth>
          <TextField
            label="Write task"
            required={true}
            value={text}
            onChange={handleInputChange}
          />
          <Button color="primary" type="submit" variant="contained" style={{ marginTop: 15 }}>
            ADD TODO
          </Button>
        </FormControl>
      </form>
    </Container>
  );
};

export default ToDoForm;