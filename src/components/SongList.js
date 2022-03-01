import React from "react";
import { connect } from "react-redux";
import { songSelect } from "../actions";

class SongList extends React.Component {
  renderList() {
    return this.props.songs.map((song) => {
      return (
        <div className="item" key={song.name}>
          <div className="ui right floated content">
            <button
              className="ui button"
              onClick={() => {
                  console.log(this.props)
                this.props.songSelect(song);
              }}
            >
              Select
            </button>
          </div>
          <div className="middle aligned row">
            <h4>{song.name}</h4>
          </div>
        </div>
      );
    });
  }
  render() {
    return (
      <React.Fragment>
        <h2>SongList</h2>
        <div className="ui placeholder segment">
          <div className="ui relaxed divided list">{this.renderList()}</div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  //console.log(state);
   return { songs: state.songs };
 
};
export default connect(mapStateToProps, { songSelect })(SongList);
