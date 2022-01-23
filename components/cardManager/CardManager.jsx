import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { useEffect, useState } from 'react';
import Card from '@material-ui/core/Card';
import CardCard from '../cardCard/CardCard';
import CardCreate from '../cardCreate/CardCreate'
import axios from 'axios';


export default function Album() {
    const [cards, setCards] = useState([])

    const getCards = () => {
        axios.get(`/api/card`)
            .then(res => {
                setCards(res.data.data)
            })
    }

    useEffect(() => {
        getCards()
    }, []);

    useEffect(() => {
        console.log(cards)
    }, [cards]);

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
                            onClick={() => {
                                console.log(cards)
                            }}
                        >
                            action #1
                        </Button>
                        <Button
                            variant="contained"
                            color="primary"
                        >
                            action #2
                        </Button>
                    </Box>
                </div>
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    margin: 10
                }}>
                    <CardCreate />
                </div>
                <Container sx={{ py: 8 }} maxWidth="md">
                    <Grid container spacing={4} display='flex' justifyContent='center'>
                        {cards.map((card, index) => (
                            <Grid item key={index} xs={12} sm={5} md={4}>
                                <Card
                                    sx={{
                                        height: '100%',
                                        display: 'flex',
                                        flexDirection: 'column'
                                    }}>
                                    <CardCard
                                        cardName={cards[index].cardName}
                                        cardImage={cards[index].cardImage}
                                        cardRarity={cards[index].cardRarity}
                                        cardSubType={cards[index].cardSubType}
                                        cardDesc={cards[index].cardDesc}
                                        cardAtk={cards[index].cardATK}
                                        cardDef={cards[index].cardDEF}
                                        typeImage={cards[index].typeImage}
                                    />
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