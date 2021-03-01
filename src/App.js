import UploadImage from './component/upload_image'

import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from '../src/component/Navigation/navbar';
import Home from './component/home/index';
import SearchImages from './component/search-image';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Switch>
          <Route exact path = "/" component = {Home}/>
          <Route path = "/search" component = {SearchImages}/>
          <Route path = "/upload" component = {UploadImage}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
