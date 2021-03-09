import React from 'react';
import './Trackbar.css'; 


export default e=>
{
    const min={}
    const max={}
    for(const [i,ii] of Object.entries(e.color))
        min[i]=ii;    
    for(const [i,ii] of Object.entries(e.color))
        max[i]=ii;    

    min[e.chanel]=0;
    max[e.chanel]=255;

    return (<>

    <input
    
     type="range" 

     value={e.color[e.chanel]}
     class="slider" 
     max={255}
     min={0}
     style={{background: `linear-gradient(90deg, rgba(${min.r},${min.g},${min.b},1) 0%, rgba(${max.r},${max.g},${max.b},1) 100%)`}}
     onChange={f=>{
         e.color[e.chanel] = f.target.value;
         var c={r:e.color.r,g:e.color.g,b:e.color.b};
         c[e.chanel]=f.target.value;
         e.update(e.chanel,c.r,c.g,c.b);
     }} /></>)
}