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
    <div className={styles.loading}>
      <span style={{color:"white"}}>Loading...</span>
      {dots.map((dots,idx)=><span key={idx} style={{color: "white"}}>{dots}</span>)}
    </div>
  );
};

export default Loading;
