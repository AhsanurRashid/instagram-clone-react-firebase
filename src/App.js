import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Header from './components/Header'
import Post from './components/Post'

function App() {
  return (
    <div className="App">
      <CssBaseline />
        <Header />
        <h1 style={{ marginTop: '150px'}}>Hello World!</h1>
        <Post />
    </div>
  );
}

export default App;
