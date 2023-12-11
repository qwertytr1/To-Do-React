import React from 'react';
import {Card, CardContent, Typography, Container, IconButton} from '@mui/material'
import {Check,Delete, Edit } from '@mui/icons-material'
const Todo = ({ title }: { title: string }) => {
    return (
        <div>
            <Container>
                <Card variant='outlined' style={{ marginTop:35, background: "lightgray"}}>
                    <CardContent>
                        <Typography variant='h3' component="h2" >
                            <IconButton>
                                <Check style={{color: 'green'}}/>
                            </IconButton>
                            <IconButton>
                                <Edit style={{color: 'yellow'}}/>
                            </IconButton>
                            {title}
                            <IconButton style={{float: 'right'}}>
                                <Delete style={{color: 'black'}}/>
                            </IconButton>

                        </Typography>
                    </CardContent>
                </Card>
            </Container>
        </div>
    )
}
export default Todo