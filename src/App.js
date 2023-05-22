import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';
import Main_home from './Components/Main_home/Main_home';
import Footer from './Components/Footer/Footer';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Outlet,
} from "react-router-dom";
import Registration_form from './Components/Registration_form/Registration_form';
import Table_data from './Components/Table_data/Table_data';
import Full_home_page from './Components/Full_home_page/Full_home_page';
import Login_form from './Components/Login_form/Login_form';

function App() {
  return (
    <div className="App">
  {/* <Header/>
  <Full_home_page/> 

<Table_data/>
  <Footer/> */}
  <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Full_home_page/>}/>
        <Route path='/login' element={<Login_form/>}/>
        <Route path='/Register' element={<Registration_form/>}/>
      
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
