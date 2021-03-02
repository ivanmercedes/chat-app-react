import { ChatEngine } from 'react-chat-engine'

import ChatFeed from './components/ChatFeed'

import './App.css';

const App = () => {
    return ( 
        <ChatEngine

            height="100vh"
            projectID="4ee30f47-b4d1-4c96-88a4-1c11224c314d"
            userName="IvanMercedes"
            userSecret="123456789"
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        
        />
     );
}
 
export default App;