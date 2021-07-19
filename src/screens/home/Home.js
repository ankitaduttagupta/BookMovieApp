import React, { Component, useState,useEffect } from 'react';
import './Home.css';
import GenreFilter from './GenreFilter';
import { makeStyles, createStyles, Theme, withStyles, createTheme } from '@material-ui/core/styles';
import { GridList, GridListTile, GridListTileBar } from '@material-ui/core';
import data from "../../assets/movietile.json";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Button from '@material-ui/core/Button';
import Modal from 'react-modal';
import { FormControl,TextField } from '@material-ui/core';
// import {useHistory  } from 'react-router-dom';
import { useHistory } from 'react-router';
import Details from '../details/Details';
function Home() {
    




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
    const StylesGridList = withStyles(() =>
        createStyles({
            root: {

                flexWrap: 'nowrap'
            }

        })
    )(GridList);
    const useStyles = () => ({
        root: {
            display: 'flex',
            justifyContent: "space-between",
            width: '100%',

        }
    });
    const classes = useStyles();
    


    return (
        <div>
            <div className="heading">
                Upcoming Movies
            </div>
            <div >
                <StylesGridList cellHeight={250} cols={6} width="100%" >
                    {data.map((data) => (
                        <GridListTile key={data.id}>
                            <img src={data.image}
                            
                             cellHeight={250} 
                             style={{ height: '100%', width: '100%' }} 
                             alt={data.title}
                             style={{cursor:"pointer"}}
                              />
                            <GridListTileBar title={data.title} />
                        </GridListTile>
                    ))}
                </StylesGridList>
            </div>
            <div className="filter-movie-container">
                <div className="releasedmovies classes.root">
                    <GridList className={classes.gridlist} cellHeight={350} cols={4} style={{ height: 350 }}>

                        {data.map((data) => (

                            <GridListTile key={data.id}>
                                <img className="imagehover" 
                               src={data.image} 
                                alt={data.title} />
                                <GridListTileBar title={data.title} subtitle={data.reldt} />
                            </GridListTile>
                        ))}
                    </GridList>
                </div>
                <div className="filter-card">
                    <Card >
                        <CardHeader title="FIND MOVIES BY:" />
                        <CardContent>
                            <FormControl>
                                <TextField required id="standard-required" label="Movie Name" />
                                <GenreFilter />
                                <TextField
                                    id="date"
                                    label="Relase Date Start"
                                    type="date"
                                    
                                    style={{width:'200'}}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    />
                                <TextField
                                    id="date"
                                    label="Relase Date End"
                                    type="date"
                                    
                                    style={{width:'200'}}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    />
                                <Button variant="contained" color="primary" type="submit" size="small">Apply</Button>
                            </FormControl>
                        </CardContent>
                    </Card>
            </div>
        </div>

        </div >
    );
}

export default Home;