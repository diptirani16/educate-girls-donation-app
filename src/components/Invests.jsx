import React from "react";
import PieChart from "./PieChart";
import { Grid } from "@mui/material";

export default function Invests() {
    return (
        <>
            <Grid container sx={{ mt: 4 }}>
                <Grid item lg="5" md="5" xs="12">
                    <PieChart />
                </Grid>
                <Grid item lg="5" md="5" xs="12">
                    Hello
                </Grid>
            </Grid>
        </>
    )
}