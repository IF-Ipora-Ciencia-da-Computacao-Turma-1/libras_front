import axios from 'axios';
import React, { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('viacep.com.br/ws/01001000/json/')
      .then(response => setData(response.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
        
      {data.map(post => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
