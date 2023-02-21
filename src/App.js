
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import AddEditUser from './pages/AddEditUser';
import Home from './pages/Home';
import UserInfo from './pages/UserInfo';

function App() {
  return (
    <div className="App">
      <Header/>
     <Routes>
      <Route path="/" element={<Home/>}/>,
      <Route path="/addUser" element={<AddEditUser/>} />,
      <Route path='/editUser/:id' element={<AddEditUser/>}/>,
      <Route path="/userInfo/:id" element={<UserInfo/>}/>
     </Routes>
    </div>
  );
}

export default App;
