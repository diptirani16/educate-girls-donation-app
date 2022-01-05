import React, { useEffect } from "react";
import { CanvasJSChart } from "canvasjs-react-charts";

export default function PieChart() {

    const options = {
        animationEnabled: true,
        backgroundColor: "#E0E0E0",
        title: {
            text: "Here's how we invest your donation",
            fontSize: 30
        },
        data: [{
            type: "pie",
            startAngle: -90,
            toolTipContent: "<b>{label}</b>: {y}%",
            showInLegend: "true",
            legendText: "{label}",
            // indexLabelFontSize: 16,
            indexLabel: "{label} - {y}%",
            dataPoints: [
                { y: 87, label: "Program costs", color: "#17A2B5" },
                { y: 10, label: "Operational costs", color: "#FF0000" },
                { y: 3, label: "Capital expenditure", color: "#2F2E41" },
            ]
        }]
    }
        
    return(
        <>
          <CanvasJSChart options={options} />  
        </>
    )
}