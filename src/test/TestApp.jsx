import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TestMain from './TestMain';

function App() {
    function func () {
        console.log("e");
    }
    return (
        <Router>
            <Routes>
                <Route exact path='/' element={<TestMain onClick={() => func()}/>} />
            </Routes>
        </Router>
    );
}

export default App;
