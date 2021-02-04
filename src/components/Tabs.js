import React from 'react'
import {useState} from 'react';

export const Tabs = (props) => {
    const[state,setState]= useState("");
    const handleTab= (e, value)=>{
        e.preventDefault();
        setState(value);
    }
    return (<>{

        props.tabs.map( (item, index) => {

            return <button onClick={(e)=>handleTab(e,item.content)}>{item.label}</button>
        })
    }
    <textarea  rows="4" cols="50" value={state} ></textarea>
        </>

    )
}
export default Tabs