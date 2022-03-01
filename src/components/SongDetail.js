import React from "react";
import { connect } from "react-redux";

const SongDetail = (props) => {
  const renderDetail = () => {
    return props.song === null ? (
      <label>
        <h2 className="ui center aligned row ">Please Select a Song </h2>
      </label>
    ) : (<div>
      <img
        className="ui small bordered centered image"
        src={props.song.art}
      ></img>      
      <div className='ui meta'> Name: {props.song.name}</div> <br></br>
      <div className='ui meta'> Length: {props.song.length}</div></div>
    );
  };

  return (
    <React.Fragment>
      <h2>SongDetail</h2>
      <div className="ui placeholder segment">{renderDetail()}</div>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    song: state.selectedSong,
  };
};

export default connect(mapStateToProps)(SongDetail);
