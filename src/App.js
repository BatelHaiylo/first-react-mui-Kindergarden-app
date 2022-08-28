// import { Typography } from '@mui/material';
import Header from './components/faeturs/Header.component';
import Footer from './components/faeturs/Footer.component';
import Router from './components/Router.component';
import {BrowserRouter} from "react-router-dom"

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <Router/>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}