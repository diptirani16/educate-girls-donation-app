import React from "react";
import { Paper, Typography } from "@mui/material";

export default function InvestDetails() {
    return (
        <>
            <Paper sx={{ backgroundColor: '#BBD7D6', mt: 2 }}>
                <Typography sx={{ fontSize: 16, p: 2 }}>
                    Program costs cover girls enrollment and retention in school learning improvement activities life skill training and impact assessment.
                </Typography>
            </Paper>
            <Paper sx={{ backgroundColor: '#FFCCCC', mt: 2 }}>
                <Typography sx={{ fontSize: 16, p: 2 }}>
                    Operational costs include overheads like rent, electricity, maintenance,development etc.
                </Typography>
            </Paper>
            <Paper sx={{ backgroundColor: '#C0BDC0', mt: 2 }}>
                <Typography sx={{ fontSize: 16, p: 2 }}>
                    Capital expenditure refers to fixed assets like furniture and fixtures, computers and peripherals, office equipment etc.
                </Typography>
            </Paper>
        </>
    )
}
