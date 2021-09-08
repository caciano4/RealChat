//React 
import React from 'react';
// Import nescessary to Chat
import { StreamChat } from 'stream-chat';
import { Chat } from 'stream-chat-react';
// import cookies from lib
import Cookies from 'universal-cookie';
// import of components oof application
import { ChannelContainer, ChannelListContainer } from './components';
//Global css.
import './App.css'
// key of API chat
const apiKey = 'hynfbpz2bn8k';
const client = StreamChat.getInstance(apiKey)

const App = () => {
  return(
    <div className="app__wrapper">
      <Chat client={client} theme="team light">
        <ChannelContainer
        
        />
        <ChannelListContainer

        />
      </Chat>
    </div>
  );
}
export default App;