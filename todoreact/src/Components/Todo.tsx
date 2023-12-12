import React, { useState } from 'react';
import { Card, CardContent, Typography, Container, IconButton, TextField } from '@mui/material';
import { Check, Delete, Edit, Save } from '@mui/icons-material';

interface TodoProps {
  title: string;
  checkTodo: (id: number) => void;
  editTodo: (id: number, newText: string) => void;
  deleteTodo: (id: number) => void;
  id: number;
  isCompleted: boolean;
}

const Todo: React.FC<TodoProps> = ({ title, checkTodo, editTodo, deleteTodo, id, isCompleted }) => {
  const [isEditing, setEditing] = useState<boolean>(false);
  const [newText, setNewText] = useState<string>(title);

  const startEditing = () => {
    setEditing(true);
  };

  const saveEdit = () => {
    editTodo(id, newText);
    setEditing(false);
  };

  const cancelEdit = () => {
    setNewText(title);
    setEditing(false);
  };

  const delTodo = () => deleteTodo(id);
  const markCompleted = () => checkTodo(id);

  const todoCompletedStyle = isCompleted
    ? { textDecoration: 'line-through', backgroundColor: 'lightcoral' }
    : { textDecoration: 'none' };

  return (
    <div>
      <Container>
        <Card variant="outlined" style={{ marginTop: 35, ...todoCompletedStyle }}>
          <CardContent>
            <Typography variant="h3" component="h2">
              <IconButton onClick={markCompleted}>
                <Check style={{ color: 'green' }} />
              </IconButton>
              {isEditing ? (
                <>
                  <TextField
                    value={newText}
                    onChange={(e) => setNewText(e.target.value)}
                    variant="standard"
                    fullWidth
                  />
                  <IconButton onClick={saveEdit}>
                    <Save style={{ color: 'blue' }} />
                  </IconButton>
                  <IconButton onClick={cancelEdit}>
                    <Delete style={{ color: 'red' }} />
                  </IconButton>
                </>
              ) : (
                <>
                  <IconButton onClick={startEditing}>
                    <Edit style={{ color: 'orange' }} />
                  </IconButton>
                  {title}
                  <IconButton onClick={delTodo} style={{ float: 'right' }}>
                    <Delete style={{ color: 'black' }} />
                  </IconButton>
                </>
              )}
            </Typography>
          </CardContent>
        </Card>
      </Container>
    </div>
  );
};

export default Todo;
