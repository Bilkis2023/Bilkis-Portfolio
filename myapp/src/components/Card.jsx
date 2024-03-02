import React from "react";
 
const style = {
    card: {
        margin: "20px",
        background:"#"

    },
   heading:{
    background: "#3f51b5",
    minHeight: 50,
    loneHeight:3.5,
    fontSize: "1.2rem",
    color:"white",
    padding:"0.20px"  
   },

   content:{
    padding: 20
   }
};



function Card() {
return(
    <div style={style.card}>
      <div style={ style.heading}>Bilkis's work</div> 
      <div style={ style.content}>
      "Good work...as.."
      </div> 
    </div>
);
}

export default Card;