import {
    BrowserRouter as Router,
    Route,
    Routes,
    Outlet,
} from 'react-router-dom';

import Home from 'pages/home';
import PageRender from 'routes/pageRender';

function App() {
    return (
        <Router>
            <div className="App">
                <div className="main">
                    <Routes>
                        <Route exact path="/" element={<Home />} />
                        <Route exact path="/:page" element={<Outlet />}>
                            <Route
                                exact
                                path="/:page"
                                element={<PageRender />}
                            />
                        </Route>
                        <Route exact path="/:page/:id" element={<Outlet />}>
                            <Route
                                exact
                                path="/:page/:id"
                                element={<PageRender />}
                            />
                        </Route>
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;
