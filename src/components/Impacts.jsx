import { Typography, Grid, Paper } from "@mui/material";
import React from "react";

import undraw_education from "../assets/undraw_education.svg";

export default function Impacts() {
    const impactsList = [
        "14% reduction in child marriage",
        "Earn 10-20% more income",
        "Contribute to global economic growth",
        "Reduce class and income inequalities",
        "Be more empowered",
        "50% more likely to immunize her children",
        "2x more likely to educate her children",
    ]

    return (
        <>
            <Typography sx={{ mt: 2, fontSize: 40, fontWeight: 800, color: "#FF0000", textAlign: "center" }}>Educating a Girl can have Multifold Impact!</Typography>
            <Grid container sx={{ mt: 2 }}>
                <Grid item lg="5" md="5" xs="12">
                    {impactsList.map((item, i) => (
                        <Paper sx={{ backgroundColor: '#FF0000', mt: 2 }}>
                            <Typography sx={{ fontSize: 16, p: 1.5, color: "white" }} key={i}>{item}</Typography>
                        </Paper>
                    ))}
                </Grid>
                <Grid item lg="5" md="5" xs="12">
                    <img src={undraw_education} width="500vw" style={{margin: "3em" }}/>
                </Grid>
            </Grid>
        </>
    )
}
