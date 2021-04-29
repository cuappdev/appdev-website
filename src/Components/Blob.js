import React, { useEffect } from "react"
import DrawBlob, { BlobType } from 'blob-animated';
import defaultimg from '../Images/appdevlanding.jpeg'

function Blob(props){

  //Each Blob must have their own unique canvas and image id. Unique across the entire project
  
  let canid = props.blobid + 'can'
  let imgid = props.blobid

  useEffect(() => {
    const BlobB = new DrawBlob({
      canvas: document.getElementById(canid),
      maskedElement: document.getElementById(imgid),
      speed: 800,
      scramble: (props.scramble) ? 0.1 : props.scramble,
      color: (props.color !== undefined) ? props.color : "#FFFFFF"
    });
  })
  
  console.log(props.color !== undefined)

  if(props.color !== undefined){
    return(
      <div >
         <canvas id= {canid} style={{'width': props.width}} /> 
      </div>
  
    )
  }
  else{
    return(
      <div >
         <canvas id= {canid} style={{'width': props.width}} /> 
         <img id = {imgid} src={props.imagename} style={{ 'display': 'none'}}/>
      </div>
  
    )
  }
  

}
export default Blob