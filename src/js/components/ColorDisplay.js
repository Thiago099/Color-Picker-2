import React from 'react'
import './ColorDisplay.css';

export default e=>
{
    function componentToHex(c) {
        var hex = parseInt(c).toString(16);
        return hex.length == 1 ? "0" + hex : hex;
      }
    return <>
      <div class="color" style={{backgroundColor:`rgba(${e.color.r},${e.color.g},${e.color.b},1)`}}></div>    
      <div className="displayContainer">
        <label htmlFor="">Hex:</label>
        <input type="text" className="display" name="" id="" value={"#" + componentToHex(e.color.r) + componentToHex(e.color.g) + componentToHex(e.color.b)}/>
        <label htmlFor="">R:</label>
        <input type="text" className="display" name="" id="" value={parseInt(e.color.r)}/>
        <label htmlFor="">G:</label>
        <input type="text" className="display" name="" id="" value={parseInt(e.color.g)}/>
        <label htmlFor="">B:</label>
        <input type="text" className="display" name="" id="" value={parseInt(e.color.b)}/>
      </div>


    </>
}