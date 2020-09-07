import React, { useState, useEffect } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Header from './components/Header'
import Post from './components/Post'
import { db } from './firebase';


function App() {

  const [posts, setPosts] = useState([])

  useEffect(()=>{
    db.collection('posts').onSnapshot(snapshot =>{
      setPosts(snapshot.docs.map(doc => (
        {
          id: doc.id,
          post: doc.data()
        }
      )))
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
                posts.map(({id,post}) =>(
                  <Post key={id} username={post.username} captin={post.caption} imageUrl={post.imageUrl}/>
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
