import React from 'react'
import SongDetail from './SongDetail'
import SongList from './SongList'
const App = () => {
  return (
    <div className='ui placeholder segment'>
        <div className='ui two column internally celled center aligned grid'>

        
            <div className='column'>

              <SongList/>
            </div>

            <div className='column'>
            <SongDetail/>
            </div>


        </div>
        </div>
  )
}

export default App