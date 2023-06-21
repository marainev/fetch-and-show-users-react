import { useEffect, useState } from 'react';
import './app.scss'

function App() {
  const [data, setData] = useState({
    // results: []
  });
  
  const {results} = data;

  useEffect(() => {
    // console.log('Fetching data')
    // fetch("https://randomuser.me/api/?inc=name,picture&results=100")
    // .then((data) => {return data.json()})
    // .then((data) => {setData(data)})
    // .catch((err) => {console.log(err.message)})

    (async() => {
      console.log('hello')
      const rawData = await fetch("https://randomuser.me/api/?inc=name,picture&results=100");
      const data = await rawData.json();
      setData(data);
    })()

  }, []);

  return (
    <div id="app">
      <h1>List of users</h1>
      <div className="container">
        <div className="users row">

          {
            results?.map((item, index) => {

              const finalName = `${item.name.title} ${item.name.first} ${item.name.last}`;
              return <div className="col-2 user" key={`item-${index}`}>
              <img src={item.picture.thumbnail} alt={finalName}/>
              <h3>{finalName}</h3>
              <button
                onClick = {(console.log('hello'))}
              >
                Show me
              </button>
            </div>
            })
          }
        </div>
      </div>
    </div>
  );
}

export default App;
