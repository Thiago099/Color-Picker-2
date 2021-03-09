import React,{useState} from 'react';
import './Trackbar.css'; 


export default e=>
{
    const min={}
    const max={}
    for(const [i,ii] of Object.entries(e.color))
        min[i]=ii;    
    for(const [i,ii] of Object.entries(e.color))
        max[i]=ii;   
     
    var maxv=-255;
    var minv=255;
    for (const [i, ii] of Object.entries(e.center)) 
    {
        if(ii>maxv)maxv=parseInt(ii);
        if(ii<minv)minv=parseInt(ii);
    }
    maxv=255-maxv;
    minv= Math.abs(minv);
    const update=
    {
        light:c=>
        {
            c = parseInt(c);
            e.update("light",c+e.center.r,c+e.center.g,c+e.center.b)
        },
        light_rg:c=>
        {
            c = parseInt(c);
            var cc={
            r:c+e.center.r,
            g:c+e.center.g,
            b:e.color.b,
            }
            e.update("light_rg",cc.r,cc.g,cc.b);
        },
        light_rb:c=>
        {
            c = parseInt(c);
            var cc={
            r:c+e.center.r,
            g:e.color.g,
            b:c+e.center.b,
            }
            e.update("light_rb",cc.r,cc.g,cc.b);
        },
        light_gb:c=>
        {
            c = parseInt(c);
            var cc={
            r:e.color.r,
            g:c+e.center.g,
            b:c+e.center.b,
            }
            e.update("light_gb",cc.r,cc.g,cc.b);
        }
    }
    for(const [i, ii] of Object.entries(e.center)){
        min[i]=minv+ii;
        max[i]=maxv+ii;
    };
    
    return (<>
    <input
     type="range" 

     value={e.value}
     class="slider" 
     max={255}
     min={0}
     style={{background: `linear-gradient(90deg, rgba(255,255,255,1),rgba(255,255,255,1)${minv*100/255}%,rgba(${min.r},${min.g},${min.b},1) ${minv*100/255}%, rgba(${max.r},${max.g},${max.b},1) ${maxv*100/254}%, rgba(0,0,0,1),${maxv*100/254}%,rgba(0,0,0,1))`}}
     
     onChange={f=>{
         if(f.target.value>maxv)
         {
            e.setValue(maxv);
            update[e.chanel](maxv);
         }
         else
         if(f.target.value>minv)
         {
            e.setValue(f.target.value);
            update[e.chanel](f.target.value);
         }
         else
         {
             e.setValue(minv);
             update[e.chanel](minv);
         }
         

     }} /></>)
}