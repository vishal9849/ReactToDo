import './App.css';

import { Container,Row,Col } from 'react-bootstrap';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';


import NavigationBar from './components/NavigationBar';
import Welcome from './components/Welcome';
import Footer from './components/Footer'
import AddProduct from './components/AddProduct';
import ProductList from './components/ProductList';

function App() {
  
const marginTop = {
  marginTop: '20px'
};

  return (
    <Router>
      <NavigationBar/>
        <Container>
          <Row>
            <Col lg={12} style={marginTop}>
              <Routes>
                <Route path ="/" element={<Welcome/>} />
                <Route path ="/list" element={<ProductList/>} />
                <Route path ="/add" element={<AddProduct/>} />
              </Routes>
            </Col>
          </Row>
        </Container>
      <Footer/>
    </Router>
  );
}

export default App;
