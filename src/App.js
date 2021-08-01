import React, {useState,useEffect} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/home/Home';
import List from './components/list/List';
import './App.css';

function App() {
  useEffect(()=>{
    //fetching data at loading screen
    fetch('https://jsonblob.com/api/4e6e6a57-eb72-11eb-9eff-b5f91494da60',{
      method:'get',
    })
    .then((response)=>response.json())
    .then(responseData=>{
      
      setData(responseData.categorys)
    
    })
    .catch((error)=>{console.log(error)})
  },[])
  const [data, setData]=useState(null)
  //fetching data for infinite loading
  const fetchData=()=>{
    fetch('https://jsonblob.com/api/4e6e6a57-eb72-11eb-9eff-b5f91494da60',{
      method:'get',
    })
    .then((response)=>response.json())
    .then(responseData=>{
        setData(data.concat(responseData.categorys))
      
    })
    .catch((error)=>{console.log(error)})
  }
  return (
    <Router>
      <Route exact path="/" render={(props) => <Home {...props}/>}/>
      <Route exact path="/list" render={({history}, props)=><List history={history} {...props} header={'list'} list={data} fetchDataAgain={fetchData}/>}/>
    </Router>
  );
}

export default App;
