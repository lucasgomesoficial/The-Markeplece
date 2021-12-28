 import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Header from './components/Header';
import Menu from './components/Menu';

export default function Router () {
    return(
        <BrowserRouter>
            <Header />
            <Menu />
            <Routes>
              {/*   <Route path="/" element={<Home />} /> */}
            </Routes>
        </BrowserRouter>
    )
}