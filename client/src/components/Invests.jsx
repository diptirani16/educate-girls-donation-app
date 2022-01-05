import React from "react";
import PieChart from "./PieChart";
import { Grid } from "@mui/material";
import InvestDetails from "./InvestDetails";

export default function Invests() {
    return (
        <>
            <Grid container justifyContent={"space-around"} sx={{ mt: 4 }}>
                <Grid item lg="5" md="5" xs="12">
                    <PieChart />
                </Grid>
                <Grid item lg="5" md="5" xs="12">
                    <InvestDetails />
                </Grid>
            </Grid>
        </>
    )
}
