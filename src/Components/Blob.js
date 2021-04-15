import React, { useEffect } from "react"
import DrawBlob, { BlobType } from 'blob-animated';

function Blob(props){

  useEffect(() => {
    const BlobB = new DrawBlob({
      canvas: document.getElementById('canvasExample'),
      maskedElement: document.getElementById('image'),
      speed: 400,
      scramble: 0.1,
    });
  })
  
  return(
    <div >
      {console.log(props.imagename)}
       <canvas id="canvasExample" style={{'width': props.width}} /> 
       <img ids="image" src={props.imagename} style={{ 'display': 'none'}}/>
    </div>

  )

}
export default Blob