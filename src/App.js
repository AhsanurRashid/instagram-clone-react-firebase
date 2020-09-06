import React, { useState, useEffect } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Header from './components/Header'
import Post from './components/Post'
import { db } from './firebase';


function App() {

  const [posts, setPosts] = useState([
    {
        username: 'Ahasan Noor',
        imageUrl: 'https://images.unsplash.com/photo-1599344340949-f561137596ae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80',
        caption: 'Man in Black, under water.'
    }
  ])

  useEffect(()=>{
    db.collection('posts').onSnapshot(snapshot =>{
      setPosts(snapshot.docs.map(doc => doc.data()))
    })
  }, [])

  return (
    <div className="App">
      <CssBaseline />
        <Header />
        <Container maxWidth="md" style={{ marginTop: '100px'}}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={8}>
              {
                posts.map(post =>(
                  <Post username={post.username} captin={post.caption} imageUrl={post.imageUrl}/>
                ))
              }
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
