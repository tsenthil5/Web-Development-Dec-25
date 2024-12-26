import React, {useContext} from "react"
import {AppContext} from "./App"
export default function ChildComponent(){
    const bg_color = useContext(AppContext);
    return(
        <h1 style={{backgroundColor:bg_color}}>The Following Color has been applied succesfully: {bg_color}</h1>
    )
}