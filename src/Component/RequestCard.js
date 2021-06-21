import React from 'react'
import '../CSS/App.css'
import Button from '@material-ui/core/Button'

function RequestCard({id,data}) {
    
    return (
        <div className="col-4">
            <div className="row" id="RequestNo">
                Request No. {id}
            </div>
            <div>
                Name: {data.name} <br/>
                Item Name: {data.itemName} <br/>
                Discription: {data.description}<br/>
            </div>
            <Button variant="contained" color="primary">
                 Claim
            </Button>
        </div>
    )
}

export default RequestCard
