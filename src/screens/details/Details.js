
import React from 'react';
import './Details.css';
import Button from '@material-ui/core/Button';
import { Typography } from '@material-ui/core/';
import data from "../../assets/movietile.json";
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';

import ReactPlayer from 'react-player';
import StarBorderIcon from "@material-ui/icons/StarBorder";

var mydate = new Date(data[0].release_date);
var dt = mydate.toDateString();
function Details() {


    return (
        <div>
            <div className="bookshowbtn">
                <Button color="primary" variant="contained" id="bookshow" size="small" >
                    Book show
                </Button>
            </div>
            <div className="back-btn">

                <Typography variant="button" display="block" gutterBottom>
                    &#60; Back to Home
                </Typography>
            </div>
            <div className="details-body">
                <div className="left">
                    <img src={data[0].image} alt={data[1].title} style={{ height: "60%", width: "90%", marginLeft: "5px" }} />
                </div>
                <div className="middle">
                    <Typography variant="headline" component="h2">
                        {data[0].title}
                    </Typography>
                    <Typography style={{ fontWeight: 600 }}>
                        Genre: {data[0].genres}
                    </Typography>
                    <Typography style={{ fontWeight: 600 }}>
                        Duration:{data[0].duration}
                    </Typography>
                    <Typography style={{ fontWeight: 600 }}>
                        Release Date:{dt}


                    </Typography>
                    <Typography style={{ fontWeight: 600 }}>
                        Rating:{data[0].critics_rating}
                    </Typography>
                    <br />
                    <Typography style={{ fontWeight: 600 }}>
                        Plot:<a href={data[0].wiki_url}> (Wiki Link) </a>{data[0].story_line}

                    </Typography>

                    <div className="player">
                        <Typography style={{ fontWeight: 600 }}>Trailer:</Typography>
                        <ReactPlayer url={data[0].trailer_url} />

                    </div>
                 </div>

                <div className="right">
                    <Typography style={{ fontWeight: 600 }}>Rate this movie</Typography>
                    <br />
                    <div class="box">
                        <StarBorderIcon></StarBorderIcon>
                        <StarBorderIcon></StarBorderIcon>
                        <StarBorderIcon></StarBorderIcon>
                        <StarBorderIcon></StarBorderIcon>
                        <StarBorderIcon></StarBorderIcon>
                    </div>
                    <Typography style={{ fontWeight: 600 }}>Artists</Typography>
                    <div class="artistGrid">
                        <GridListTile>
                            <img
                                src={data[0].profile_url}
                                cellHeight={250}
                                style={{ height: "100%", width: "100%" }}
                                alt={data[0].first_name + " " + data[0].last_name}
                            />
                            <GridListTileBar title={data[0].first_name + " " + data[0].last_name} />
                        </GridListTile>
                    </div> 
                </div>

            </div>

        </div>
            );
}

            export default Details;
