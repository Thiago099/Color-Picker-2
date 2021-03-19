import React from 'react'
import './ColorDisplay.css';

export default e =>
{
    
    return <>
      <div class="color" style={{backgroundColor:`rgba(${e.color.r},${e.color.g},${e.color.b},1)`}}></div>    
      <div className="displayContainer">
        <label htmlFor="">Hex:</label>
        <input type="text" className={`display ${e.hex.length==7?'':'invalid'}`} name="" id="" value={e.hex} onChange={f=>{
          e.setHex(f.target.value.substr(0,7));
           var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(f.target.value);
           if(result)
            e.update("hex",parseInt(result[1], 16),
              parseInt(result[2], 16),
             parseInt(result[3], 16));
        }}/>
        <label htmlFor="">R:</label>
        <input type="text" className="display" name="" id="" value={e.color.r} onChange={f=>{
            e.update('input',f.target.value>255?255:f.target.value<0?0:f.target.value,e.color.g,e.color.b)
          }}/>
        <label htmlFor="">G:</label>
        <input type="text" className="display" name="" id="" value={e.color.g} onChange={f=>{
            e.update('input',e.color.r,f.target.value>255?255:f.target.value<0?0:f.target.value,e.color.b)
          }}/>
        <label htmlFor="">B:</label>
        <input type="text" className="display" name="" id="" value={e.color.b} onChange={f=>{
            e.update('input',e.color.r,e.color.g,f.target.value>255?255:f.target.value<0?0:f.target.value)
          }}/>
      </div>


    </>
}
