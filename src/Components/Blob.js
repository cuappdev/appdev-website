import React, { useEffect } from "react"
import DrawBlob, { BlobType } from 'blob-animated';

function Blob(props){

   /**
     * Constructs a Dyanic Blob component
     * @param {string} blobid - Each Blob must have their own unique canvas and image id. Unique across the entire project
     * @param {image} image - The image object that will fill the blob
     * @param {int} scramble - Scramble rate of dynamic blob
     * @param {string} color - Hex value of a colored blob
     * @param {int} width - Width of the blob 
     * @returns Dynamic Blob
     */
  
  let canid = props.blobid + 'can'
  let imgid = props.blobid

  useEffect(() => {
    const BlobB = new DrawBlob({
      canvas: document.getElementById(canid),
      maskedElement: document.getElementById(imgid),
      speed: 500,
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
         <img id = {imgid} src={props.image} style={{ 'display': 'none'}}/>
      </div>
  
    )
  }
  

}
export default Blob