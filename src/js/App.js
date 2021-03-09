

import React,{useState} from 'react';
import './App.css';

import ColorTrackbar from './components/ColorTrackbar';
import LightTrackbar from './components/LightTrackbar';
import ColorDisplay from './components/ColorDisplay';
import Button from './components/Button';


export default ()=>
{
  
  
  const [color, setColor] = useState(
    {
      r:0,
      g:0,
      b:0,
    }
  );
  const [light, setLight] = useState(0);
  const [center, setCenter] = useState(
  {
    r:0,
    g:0,
    b:0,
  }); 
  const [light_rg, setLightRG] = useState(0);
  const [center_rg, setCenterRG] = useState(
  {
    r:0,
    g:0,
  }); 
  const [light_rb, setLightRB] = useState(0);
  const [center_rb, setCenterRB] = useState(
  {
    r:0,
    b:0,
  }); 
  const [light_gb, setLightGB] = useState(0);
  const [center_gb, setCenterGB] = useState(
  {
    g:0,
    b:0,
  }); 

  function update_control(source,r,g,b)
  {
    var r = parseInt(r);
    var g = parseInt(g);
    var b = parseInt(b);
    setColor({r:r,g:g,b:b})
    if(source!=="light")
    {
      setLight((r+g+b)/3)
      setCenter(
        {
          r:r-light,
          g:g-light,
          b:b-light,
        });
    }
    if(source!=="light_rg")
    {
      setLightRG((r+g)/2)
      setCenterRG(
        {
          r:r-light_rg,
          g:g-light_rg,
        }
      )
    }
    if(source!=="light_rb")
    {
      setLightRB((r+b)/2)
      setCenterRB(
        {
          r:r-light_rb,
          b:b-light_rb,
        }
      )
    }
    if(source!=="light_gb")
    {
      setLightGB((g+b)/2)
      setCenterGB(
        {
          g:g-light_gb,
          b:b-light_gb,
        }
      )
    }
  }
  return (
    <>

    <div className="container grid-container" >
      
      <div className="main">
        <ColorTrackbar chanel="r" color={color} update={update_control}/>
        <ColorTrackbar chanel="g" color={color} update={update_control}/>
        <ColorTrackbar chanel="b" color={color} update={update_control}/>
        <LightTrackbar chanel="light"    center={center}    value={light}    setValue={setLight}   color={color} update={update_control}/>  
        <LightTrackbar chanel="light_rg" center={center_rg} value={light_rg} setValue={setLightRG} color={color} update={update_control}/>        
        <LightTrackbar chanel="light_rb" center={center_rb} value={light_rb} setValue={setLightRB} color={color} update={update_control}/>        
        <LightTrackbar chanel="light_gb" center={center_gb} value={light_gb} setValue={setLightGB} color={color} update={update_control}/>        
      </div>
      <div className="display">
        <ColorDisplay color={color}/>
      </div>
      <div className="align">
        <div className="align-top"></div>
        <Button action = "m_bw" center={light}    color = {color} update={update_control}/>
        <Button action = "m_rg" center={light_rg} color = {color} update={update_control}/>
        <Button action = "m_rb" center={light_rb} color = {color} update={update_control}/>
        <Button action = "m_gb" center={light_gb} color = {color} update={update_control}/>
        </div>

        <div className="swap">
          <div className="swap-top"></div>
          <Button action = "s_rg" color = {color} update={update_control}/>
          <Button action = "s_rb" color = {color} update={update_control}/>
          <Button action = "s_gb" color = {color} update={update_control}/>
        </div>
    </div>
    </>
  );
}
