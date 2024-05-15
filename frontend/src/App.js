
import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import ChatPage from './components/ChatPage';
import HomePage from './components/HomePage';

// Main application component
function App() {
     // Router component to handle routing in the app
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/chat/:roomId" element={<ChatPage />} />
                {/* Route for the chat page with dynamic roomId parameter */}
            </Routes>
        </Router>
    );
}

export default App;

