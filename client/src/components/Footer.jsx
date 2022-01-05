import React from "react";
import { Typography } from "@mui/material";

export default function Footer() {
    return (
        <div style={{backgroundColor: "#404040", color: "#B5B5B5", textAlign: "center", padding: "2em", marginTop: "2em"}}>
            <Typography variant="caption" display="block" gutterBottom>
                Educate Girls is a project of Foundation To Educate Girls Globally (FEGG) | FEGG is registered in India under Section 8 of the Indian Companies Act, 2013
            </Typography>
            <Typography variant="caption" display="block" sx={{ color: "#B03F36"}} gutterBottom>
                Child Protection Policy | Privacy Policy | Terms of Use | Employee Login | IT Assets
            </Typography>
            <Typography variant="caption" display="block" gutterBottom>
                © 2022 All rights reserved. Educate Girls.
            </Typography>
        </div>
    )
}
