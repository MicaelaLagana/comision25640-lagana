import { Container, Row } from 'react-bootstrap';
import './App.css';
import ItemDetail from './components/itemDetail/itemDetail';
import NavbarComponent from './components/navbar/navbar';
import ItemListContainer  from './containers/itemList/itemListContainer';

function App() {
  return (
    <>
      <NavbarComponent />
      <Container>
        <Row className="justify-content-md-center">
            <ItemListContainer/>
            <ItemDetail/>
        </Row>
      </Container>
    </>
  );
}

export default App;
