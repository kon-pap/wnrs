import React from "react";
import Paper from '@mui/material/Paper';

function Card(props) {
  if (props.styleName === "big-card") {
    return <Paper
      sx={{
        color: "#c10016",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        fontSize: { xs: "14px", sm: "18px", md: "22px", lg: "25px" },
        width: { xs: "50vw", lg: "30vw" },
        height: "30vh",
        margin: "5vh",
        borderRadius: "40px",
        padding: "50px"
      }}
      justifyContent="center"
      elevation="3"
    >
      {props.question}
    </Paper>;
  }
  else {
    return <Paper
      sx={{
        color: "#c10016",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        fontSize: { xs: "12px", sm: "14px", md: "16px", lg: "18px" },
        width: { xs: "38vw", md: "28vw", lg: "18vw" },
        height: "20vh",
        minHeight: "20vh",
        margin: "1vh auto",
        borderRadius: "20px",
        padding: "20px"
      }}
      justifyContent="center"
    >
      {props.question}
    </Paper>;
  }
  
}

export default Card;
