import React from 'react'
import './Button.css';


export default p =>{
    const functions=
    {
        m_bw:c=>{
            c={r:p.center,b:p.center,g:p.center};
            return c;
        },
        m_rg:c=>{
            c={r:p.center,b:c.g,g:p.center};
            return c;
        },
        m_rb:c=>{
            c={r:p.center,b:p.center,g:c.g};
            return c;
        },
        m_gb:c=>{
            c={r:c.r,b:p.center,g:p.center};
            return c;
        },
        s_rb:c=>{
            c={r:c.b,g:c.g,b:c.r};
            return c;
        },
        s_rg:c=>{
            c={r:c.g,g:c.r,b:c.b};
            return c;
        },
        s_gb:c=>{
            c={r:c.r,g:c.b,b:c.g};
            return c;
        }
    }
    const color=functions[p.action](p.color);
    return (
    <><div class="button" onClick={()=>
    {
        p.update("equalize",color.r,color.g,color.b);
    }}
    style={{background:`rgba(${color.r},${color.g},${color.b},1)`}}></div>
    </>)
}