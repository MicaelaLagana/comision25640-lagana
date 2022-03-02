import { Container, Row } from 'react-bootstrap';
import './App.css';
import NavbarComponent from './components/navbar/navbar';
import ItemListContainer from './containers/itemList/itemListContainer';

function App() {
  return (
    <>
      <NavbarComponent />
      <Container>
        <Row className="justify-content-md-center">
            <ItemListContainer/>
        </Row>
      </Container>
    </>
  );
}

export default App;
