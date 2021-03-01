import UploadImage from './component/upload_image'
import SearchImages from './component/search-image/index'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from '../src/component/Navigation/navbar'
function App() {
  return (
    <div className="App">
      {/* <UploadImage /> */}
      <BrowserRouter>
        <Navbar/>
        <Switch>
          <Route exact path = "/home" component = {UploadImage}/>
          <Route path = "/search" component = {SearchImages}/>
          <Route path = "/upload" component = {UploadImage}/>
        </Switch>

      </BrowserRouter>
    </div>
  );
}

export default App;
