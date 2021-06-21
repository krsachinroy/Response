import React,{useState} from 'react';
import '../CSS/Modal.css';
import Button from '@material-ui/core/Button';
import {useDispatch} from 'react-redux'
import nextId from 'random-int'

export default function Addcard() {

    const dispatch = useDispatch();
    const [data,setData] = useState({name:'',itemName:'Gadget',description:''})

    const handleSubmit = ()=>{
        dispatch({type:"addCard", payload:{
            cardId:nextId(1,100).toString(),
            name:data.name,
            itemName:data.itemName,
            description:data.description
        }})
    }
    const handleChange = (event)=>{
        setData((prev)=>({
            ...prev,
            [event.target.name]:event.target.value
        }))
    }

  return (
    <div className="modal_container">
        <div className="modalHeader">
            <h2>Request</h2>
        </div>
        <div className="modalInputs">
            <label>Name </label>
            <input type="text" name = "name" value={data.name} onChange={handleChange}/>
        </div>
        <div className="modalOption">
            <label>Item List</label>
            <select  id="ItemList" name="itemName" value={data.itemName} onChange={handleChange}>
                <option value="Gadget" selected>Gadget</option>
                <option value="Medicine">Medicine</option>
                <option value="Grocery">Grocery</option>
            </select>
        </div>
        <div className="modalDiscription">
            <label>Discription</label>
            <textarea  id="Discription" name="description" value={data.description} onChange={handleChange}/>
        </div>
        <div className="modalButton">
            <Button variant="contained" color="primary" onClick={handleSubmit}>
                 Submit
            </Button>
        </div>
        
    </div>
  );
}
