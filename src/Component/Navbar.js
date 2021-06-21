import React,{useState} from 'react'
import '../CSS/App.css'
import Response from './Response'
import SignIn from './SignIn'
import Request from './Request'
import {NavLink, Route, Switch} from 'react-router-dom'
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button'
import {useSelector,useDispatch} from 'react-redux'
import AddCard from './AddCard';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import SignUp from './SignUp'

const useStyles = makeStyles((theme) => ({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
      width:'65%'
      
    },
  }));

function Navbar() {
    const data = useSelector(state=>state)
    const classes = useStyles();
    const dispatch = useDispatch()
    const handleSignOut = () =>{
        dispatch({type:'signOut'})
    }
    const [open, setOpen] = useState(false);
  
    const handleOpen =()=>{
        setOpen(true)
    }
    const handleClose = () => {
        setOpen(false);
    };
  
    return (
            <>
                <div className="row" id="navbar_row">
                    <div className="col">
                        <NavLink to="/">Home</NavLink>
                    </div>
                    <div className="col">
                        <NavLink to="/Response">Response</NavLink>
                    </div>
                    {data.Reducer.logedIn ? <div className="col" id="signin">
                        <NavLink  to="/" onClick={handleSignOut}>Sign out</NavLink>
                    </div>:
                    <div className="col" id="signin">
                        <NavLink to="/SignIn">Sign In</NavLink>
                    </div> }
                    <div className="col" id="signin">
                        <Button className="btn" onClick={handleOpen}><AddIcon /></Button>
                    </div>
                </div>
                <Switch>
                    <Route path="/" exact component={Request} />
                    <Route path="/Response" component={Response} />
                    <Route path="/SignIn" component={SignIn} />
                    <Route path="/SignUp" component={SignUp} />
                </Switch>

                <Modal
                  aria-labelledby="transition-modal-title"
                  aria-describedby="transition-modal-description"
                  className={classes.modal}
                  open={open}
                  onClose={handleClose}
                  closeAfterTransition
                  BackdropComponent={Backdrop}
                  BackdropProps={{
                  timeout: 500,
                }}
              >
                <Fade in={open}>
                  <div className={classes.paper}>
                    <AddCard />
                  </div>
                </Fade>
              </Modal>



            </>
    )
}

export default Navbar;
