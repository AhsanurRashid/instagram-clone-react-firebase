import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Header from './components/Header'
import Post from './components/Post'
import ImageOne from './images/one.jpg'
import ImageTwo from './images/two.jpg'
import ImageThree from './images/three.jpg'


function App() {
  return (
    <div className="App">
      <CssBaseline />
        <Header />
        <Container maxWidth="md" style={{ marginTop: '100px'}}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={8}>
              <Post image={ImageOne}/>
              <Post image={ImageTwo}/>
              <Post image={ImageThree}/>
            </Grid>
            <Grid item xs={12} sm={4}>
              <h1>Massager here</h1>
            </Grid>
          </Grid>
        </Container>
    </div>
  );
}

export default App;
