import React, { useEffect, useState } from "react";
import styles from "../Loading/Loading.module.css"

const Loading = () => {
  const [dots, setDots] = useState([]);

  useEffect(()=>
  {
setTimeout(()=>{
  if(dots.length < 5){
    setDots(prevDots => [...prevDots, "."])
  }
},200)


  },[dots])
  return (
    <div className={`${styles.loading} text-center`}>
      <span style={{color:"white", fontSize: "25px", fontWeight: "bold"}}>Loading ....</span>
      {dots.map((dots,idx)=><span key={idx} style={{color: "white", fontWeight: "bold", fontSize: "25px"}}>{dots}</span>)}
    </div>
  );
};

export default Loading;
