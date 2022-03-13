import { Container, Row } from 'react-bootstrap';
import './App.css';
import NavbarComponent from './components/navbar/navbar';
import ItemDetailConainer from './containers/itemDetail/itemDetailConainer';
import ItemListContainer  from './containers/itemList/itemListContainer';

function App() {
  return (
    <>
      <NavbarComponent />
      <Container>
        <Row className="justify-content-md-center">
            <ItemListContainer/>
            <ItemDetailConainer/>
        </Row>
      </Container>
    </>
  );
}

export default App;
