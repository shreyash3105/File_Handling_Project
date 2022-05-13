import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Register from './pages/Registration/reg';
import LogIn from './pages/LogIn/logIn'
import UserHome from './pages/Home/home';
import List from './components/list';
import UserContext from './Context';
import { useState } from 'react';
import DeleteImage from './components/delete';
import UploadFile from './components/uploadFile';
import Download from './components/download';



function App() {
  const [value, setValue] = useState('')
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <UserContext.Provider value={{ value, setValue }}>
            <Route exact path='/' component={LogIn} />
            <Route path='/login' component={LogIn} />
            <Route path='/register' component={Register} />
            <Route path='/userHome' component={UserHome} />
            <Route path='/uploadFile' component={UploadFile} />
            <Route path='/list' component={List} />
            <Route path='/deleteImage' component={DeleteImage} />
            <Route path='/download' component={Download} />
          </UserContext.Provider>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;