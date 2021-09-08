import React from 'react'

import { addChannel } from '../../assets'

function teamChannelList({children, error = false, loading, type}) {
  if(error){
    return type === 'team' ? (
      <div className="team-channel-list">
        <p className="team-channel-list__message">
          Connection error, please wait a moment and try again
        </p>
      </div>
    ) : null
  }
  if(loading){
    return (
      <div className="team-channel-list">
        <p className="team-channel-list__message loading">
        {type === 'team' ? 'Channels' : 'Mesages'} Loading...
        </p>
      </div>
    )
  }
  
  return (
    <div className="team-channel-list">
      <div className="team-channel-list__header__title">
        <p className>
          {type === 'team' ? 'Channel' : 'Direct Messages'}
        </p>
        {/* Button - add Channel */}

      </div>
      {children}
    </div>
  )
}

export default teamChannelList
