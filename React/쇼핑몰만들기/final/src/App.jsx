import './App.css'
import Homepage from './pages/homepage/Hompage';
import Login from './pages/login/Login'

function App() {
    const user = {
        login: false,
        name: '이호준'
    }
    return (
        <div>
            {user.login ? <Homepage userName={user.name}/> : <Login/>}
        </div>
    );
}

export default App;