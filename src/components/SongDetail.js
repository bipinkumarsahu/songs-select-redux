import React from "react";
import { connect, useSelector } from "react-redux";

//const SongDetail = (props) => {
//   const renderDetail = () => {
//     return props.selectedSong === null ? (
//       <label>
//         <h2 className="ui center aligned row ">Please Select a Song </h2>
//       </label>
//     ) : (<div>
//       <img
//         className="ui small bordered centered image"
//         src={props.selectedSong.art}
//       ></img>      
//       <div className='ui meta'> Name: {props.selectedSong.name}</div> <br></br>
//       <div className='ui meta'> Length: {props.selectedSong.length}</div></div>
//     );
//   };


//   return (
//     <React.Fragment>
//       <h2>SongDetail</h2>
//       <div className="ui placeholder segment">{renderDetail()}</div>
//     </React.Fragment>
//   );
// };

// const mapStateToProps = (state) => {
//   return {
// selectedSong: state.selectedSong,
//   };
// };

// export default connect(mapStateToProps)(SongDetail);

const SongDetail =()=>{

  const selectedSong = useSelector(state=>state.selectedSong);

    const renderDetail = () => {
    return selectedSong === null ? (
      <label>
        <h2 className="ui center aligned row ">Please Select a Song </h2>
      </label>
    ) : (<div>
      <img
        className="ui small bordered centered image"
        src={selectedSong.art}
      ></img>      
      <div className='ui meta'> Name: {selectedSong.name}</div> <br></br>
      <div className='ui meta'> Length: {selectedSong.length}</div></div>
    );
  };




  return (
    <React.Fragment>
      <h2>SongDetail</h2>
      <div className="ui placeholder segment">{renderDetail()}</div>
    </React.Fragment>
  );
};

export default SongDetail;

