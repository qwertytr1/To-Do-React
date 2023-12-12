import React from 'react';
import { Card, CardContent, Typography, Container, IconButton } from '@mui/material';
import { Check, Delete, Edit } from '@mui/icons-material';

interface TodoProps {
  title: string;
  checkTodo: (id: number) => void;
  id: number;
  isCompleted: boolean;
}

const Todo: React.FC<TodoProps> = ({ title, checkTodo, id, isCompleted }) => {
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
              <IconButton>
                <Edit style={{ color: 'yellow' }} />
              </IconButton>
              {title}
              <IconButton style={{ float: 'right' }}>
                <Delete style={{ color: 'black' }} />
              </IconButton>
            </Typography>
          </CardContent>
        </Card>
      </Container>
    </div>
  );
};

export default Todo;
