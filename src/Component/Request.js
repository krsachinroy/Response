import React from 'react'
import RequestCard from './RequestCard'
import '../CSS/App.css'
import {useSelector} from 'react-redux'
function Request() {
    const data = useSelector(state => state.cardReducer)
    return (
        <div className="row row-cols-3" id="Card_row">
           {data.map((data,index)=>(
               <RequestCard id={index+1} data={data}/>
           ))}
        </div>
    )
}

export default Request
