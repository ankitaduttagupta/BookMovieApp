
import React, {Component, useState } from 'react';
import './Header.css';
import logo from './../../assets/logo.svg';
import Button from '@material-ui/core/Button';
//import {Modal} from "react-responsive-modal";
import BookShow from "../../screens/bookshow/BookShow";
import Modal from 'react-modal';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import { FormControl, InputLabel, Input, FormHelperText, TextField } from '@material-ui/core';
import { render } from 'react-dom';


function Controller() {
    const [open, setOpen] = useState(false);
    const [register, setRegister] = useState(false);
    const handleOpen = e => {
        setOpen(true);
    }
    const handleClose = e => {
        setOpen(false);

    }
    const openRegisterForm = e => {
        setRegister(true);
    }
    const openLoginForm = () => setRegister(register => false);
    
    return (
        <div>
            <div className="header">
                <div className="login-btn">
                    <Button variant="contained" id="login" size="small" onClick={handleOpen}>
                        Login
                    </Button>
                </div>
                <div className="logo">
                    <img src={logo} className="logo rotate" alt="Logo" />
                </div>
            </div>
            <Modal
                isOpen={open}
                onClose={handleClose}>
               
                    <Tabs aria-label="simple tabs example">
                        <Tab label="LOGIN" onClick={openLoginForm} />
                        <Tab label="REGISTER" onClick={openRegisterForm} />
                        <Tab label="X" onClick={handleClose} />
                    </Tabs>
                    {register === false ? (
                        <FormControl>
                            <TextField required id="standard-required" label="Username" />
                            <TextField id="standard-password-input" label="Password" type="password"
                                autoComplete="current-password"
                            />
                            <Button variant="contained" color="primary" type="submit" id="login" size="small">
                                Login
                            </Button>
                        </FormControl>
                    )
                        : (
                            <FormControl>
                                <TextField error required id="standard-required1" label="First Name" helperText="required" />
                                <TextField required id="standard-required2" label="Last Name" />
                                <TextField required id="standard-required3" label="Email" />
                                <TextField id="standard-password-input" label="Password" type="password"
                                    autoComplete="current-password"
                                />
                                <TextField required id="standard-required4" label="Contact No" />
                                <Button variant="contained" color="primary" type="sumbit" id="register" size="small">
                                    Register
                                </Button>
                            </FormControl>
                        )}                
            </Modal>
            
        </div>

            );
}

            export default Controller;
