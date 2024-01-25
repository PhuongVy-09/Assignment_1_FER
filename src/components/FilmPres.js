import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import { Film } from '../List/ListOfFIlm';
import { Link } from 'react-router-dom';
import { Container, Grid } from '@mui/material';

export default function FilmPres() {
    
    return (
        <Container>
            <Grid container spacing={2}> 
                {Film.map((film) => (
                    <Grid item key={film.id} xs={12} sm={6} md={3} lg={4} marginTop="20px"> {/* Sử dụng Grid item để xác định số cột cho mỗi bộ phim trên các kích thước màn hình khác nhau */}
                        <Card sx={{ maxWidth: 345, width: '100%' }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="440"
                                    image={film.image}
                                    alt={film.title}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {film.title}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="large" color="primary">
                                    <Link to={`detail/${film.id}`}>Watch movie</Link>
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}
