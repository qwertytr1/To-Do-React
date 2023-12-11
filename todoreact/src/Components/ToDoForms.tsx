import React from "react";
import { FormControl, Container, TextField, Button } from '@mui/material';

const ToDoForm = () => {
    return (
        <Container maxWidth="sm" style={{marginTop: 15}}>
            <form>
                <FormControl fullWidth>
                    <TextField label="Write task" required={true} />
                    <Button color="primary" type="submit" variant="contained" style={{ marginTop: 15 }}>ADD TODO</Button>
                </FormControl>
            </form>
        </Container>
    )
}
export default ToDoForm;