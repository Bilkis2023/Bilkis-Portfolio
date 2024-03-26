import React from "react";
 
const style = {
    card: {
        margin: "0",
        background:"#bebebe"

    },
   heading:{
    background: "#fff",
    minHeight: 50,
    loneHeight:3.5,
    fontSize: "1.2rem",
    color:"white",
    padding:"0"  
   },
 
   content:{
    padding: 20
   }
};



function Card() {
return(
    <div style={style.card}>
      <div style={ style.heading}></div> 
      <div style={ style.content}>
      
      </div> 
      <div style={ style.p}></div> 


      
    </div>
);
}

export default Card;