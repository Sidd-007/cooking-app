import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Navbar from './components/NavBar/NavBar';
import Create from './pages/Create/Create';
import Search from './pages/Search/Search';
import Recipe from './pages/Recipe/Recipe';
import ThemeSelector from './components/ThemeSelector/ThemeSelector';


function App() {
    return (
        <Router>
            <div className="App">
                <Navbar />
                <ThemeSelector />
                <Routes>
                    <Route
                        exact path='/'
                        element={
                            <Home />
                        }
                    >
                    </Route>
                    <Route
                        exact path='/create'
                        element={
                            <Create />
                        }
                    >
                    </Route>
                    <Route
                        exact path='/recipes/:id'
                        element={
                            <Recipe />
                        }
                    >
                    </Route>
                    <Route
                        exact path='/search'
                        element={
                            <Search />
                        }
                    >
                    </Route>
                </Routes>
            </div>
        </Router>
    );
}

export default App
