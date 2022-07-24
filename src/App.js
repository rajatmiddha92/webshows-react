import logo from './logo.svg';
import './App.css';
import React from 'react';
import Shows from './Shows';
import List from './List';



function App() {
return(
  <React.Fragment>
  <h2 className='heading_style'>Best Web Show to watch in 2022</h2>
 {List.map( (val, index) =>
{
  return (
    <Shows 
    key={val.id}
    imgs={val.imgs}
    category={val.category}
    sname={val.sname}
    link={val.link}
    />
  );
})}

  </React.Fragment>
  );
}

export default App;
