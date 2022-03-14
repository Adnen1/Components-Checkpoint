
import './App.css';
import Address from './component/Adress';
import FullName from './component/FullName';
import ProfilePhoto from './component/ProfilPhoto';
function App() {
  return (
    <div className="App">
      <ProfilePhoto></ProfilePhoto>
      <FullName></FullName>
      <Address></Address>
      
    </div>
  );
}

export default App;
