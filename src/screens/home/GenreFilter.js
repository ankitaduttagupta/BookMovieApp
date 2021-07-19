
import React, { Component, useState } from 'react';

import { createStyles, makeStyles, useTheme, Theme } from '@material-ui/core/styles';
// import Input from '@material-ui/core/Input';
// import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
// import FormControl from '@material-ui/core/FormControl';
import ListItemText from '@material-ui/core/ListItemText';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';
import Chip from '@material-ui/core/Chip';
import { FormControl, InputLabel, Input, FormHelperText, TextField } from '@material-ui/core';



const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

const names = [
    'Drama',
    'Romance',
    'Horror',
    'Action',
    'Crime',
    'Thriller',
    'Political',
    'Social',
    'Fantasy',
    'Suspense',
    'Adventure',
    'Comendy'
];
const artist = [
    'Manisha Koirala',
    'Rajkumar Hirani',
    'Marlon brando',
    'Leonardo Dicaprio',
    'Joseph Gordon levitt',
    'Mathew mcConaughty',
    'Anne Hathway',
    'Kay Kay Menon',
    'Anthony Lapaglia'
];

function GenreFilter() {


    return (
        <div>
            <div>

                <FormControl >
                    <InputLabel id="demo-mutiple-checkbox-label">Genre</InputLabel>
                    <Select
                        labelId="demo-mutiple-checkbox-label"
                        id="demo-mutiple-checkbox"


                        input={<Input />}

                        MenuProps={MenuProps}
                    >
                        {names.map((name) => (
                            <MenuItem key={name} value={name}>
                                <Checkbox />
                                <ListItemText primary={name} />
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </div>
            <div>

                <FormControl>
                    <InputLabel id="demo-mutiple-checkbox-label" style={{width:'200'}}>Artists</InputLabel>
                    
                    <Select
                        labelId="demo-mutiple-checkbox-label"
                        id="demo-mutiple-checkbox"


                        input={<Input />}

                        MenuProps={MenuProps}
                    >
                        {artist.map((name) => (
                            <MenuItem key={name} value={name}>
                                <Checkbox />
                                <ListItemText primary={name} />
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </div>
            <div>

                
            </div>

        </div>

    );
}

export default GenreFilter;
