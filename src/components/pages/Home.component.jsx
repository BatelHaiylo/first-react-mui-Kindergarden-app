import { useState,useContext,useEffect } from "react";
import { Typography, AppBar ,Card , CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container } from "@mui/material";

export default function Home(){
    // let [,]=useState

    return(
        <main>
            <Container maxWidth="sm">
                <Typography varient="h1" align="center" color="textPrimary" gutterBottom>
                    Hello Dear Parents
                </Typography>
            </Container>
        </main>
    )
}