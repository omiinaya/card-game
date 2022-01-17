import * as React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { useEffect } from 'react';

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

async function test(props) {
    const cardApi = await fetch(`localhost:3000/api/card`, {
        method: 'GET',
    }).catch(error => {
        console.error('Error:', error);
    });
    let result = await cardApi
   console.log(result)
}

export default function Album() {
    useEffect(() => {
        test()
    });
    return (
        <Box>
            <AppBar position="relative">
                <Toolbar>
                    <Typography variant="h6" color="inherit" noWrap>
                        Admin Panel
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box>
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    margin: 10
                }}>
                    <Box>
                        <Button
                            variant="contained"
                            color="primary"
                        >
                            Main call to action
                        </Button>
                        <Button
                            variant="contained"
                            color="primary"
                        >
                            Secondary action
                        </Button>
                    </Box>
                </div>
                <Container sx={{ py: 8 }} maxWidth="md">
                    <Grid container spacing={4}>
                        {cards.map((card) => (
                            <Grid item key={card} xs={12} sm={6} md={4}>
                                <Card
                                    sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                                >
                                    <CardMedia
                                        component="img"
                                        sx={{
                                            // 16:9
                                            pt: '56.25%',
                                        }}
                                        image="https://omiinaya.sirv.com/Images/placeholderCard.webp"
                                        alt="random"
                                    />
                                    <CardContent sx={{ flexGrow: 1 }}>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            Card Name
                                        </Typography>
                                        <Typography>
                                            This is a card card description.
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small">Edit</Button>
                                        <Button size="small">Remove</Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>
        </Box>
    );
}