import { Typography, Grid, Paper } from "@mui/material";
import React from "react";

import education from "../assets/education.svg";

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
            <Typography sx={{ mt: 8, fontSize: 40, fontWeight: 800, color: "#263238", textAlign: "center" }}>Educating a Girl can have Multifold Impact!</Typography>
            <Grid container justifyContent={"space-around"} sx={{ mt: 2 }}>
                <Grid item lg="5" md="5" xs="12">
                    {impactsList.map((item, i) => (
                        <Paper sx={{ backgroundColor: '#263238', mt: 2 }}>
                            <Typography sx={{ fontSize: 16, p: 1.5, color: "white" }} key={i}>{item}</Typography>
                        </Paper>
                    ))}
                </Grid>
                <Grid item lg="5" md="5" xs="12">
                    <img src={education} alt="education" width="80%" style={{margin: "2em" }}/>
                </Grid>
            </Grid>
        </>
    )
}
