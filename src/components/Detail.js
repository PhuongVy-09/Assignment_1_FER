import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Film } from "../List/ListOfFIlm";
import { Card, CardActionArea, CardMedia, Typography, Grid } from "@mui/material";
import RatingStar from "./RatingStar";

export default function Detail() {
    const { id } = useParams();
    const movie = Film.find((obj) => {
        return obj.id === id;
    });

    const [rating, setRating] = useState(4);

    const handleRatingChange = (newRating) => {
        setRating(newRating);
    };

    return (

        <Grid container spacing={2} >
            <Grid item xs={12} md={6} margin="10px">
                <Card className="detail-card">
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            image={movie.image}
                            alt={movie.title}
                            className="img-fit"
                            style={{ width: "50%", marginLeft: "150px", height: "500px", paddingTop: "20px", paddingBottom: "20px" }}
                        />
                    </CardActionArea>
                </Card>
            </Grid>
            <Grid item xs={12} md={4} sx={{boxShadow: "0 0 10px rgba(0,0,0,0.2)",width: "100%", height: "500px", marginTop: "28px", paddingBottom: "10px", padding:"20px"}}>
                <Typography variant="h4" gutterBottom sx={{ color: "black", marginTop: "10px", textAlign: "center" }}>
                    {movie.title}
                </Typography>
                <Typography variant="h5" gutterBottom sx={{ color: "black", marginTop: "10px", textAlign: "center" }}>
                    {movie.nation}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" sx={{ fontStyle: "italic", textAlign: "center" }}>
                    Year: {movie.year}
                </Typography>
                <RatingStar rating={rating} onRatingChange={handleRatingChange} startSixe={20} >Rate:</RatingStar>
                <Typography variant="body1" paragraph >
                    Summary: "{movie.info}"
                </Typography>
            </Grid>
        </Grid>

    );
}
