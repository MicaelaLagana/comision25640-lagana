import { Container, Row, Col } from 'react-bootstrap';
import './App.css';
import NavbarComponent from './components/navbar';
import ItemListContainer from './containers/itemList';

const greeting = "Holis! :)"
const greeting2 = "Hello! :)"
const title1 = "title1 :)"
const title2 = "title2 :)"

function App() {
  return (
    <>
      <NavbarComponent />
      <Container>
        <Row className="justify-content-md-center">
            <ItemListContainer greeting={greeting} title={title1}/>
            <ItemListContainer greeting={greeting2} title={title2}/>
        </Row>
      </Container>
    </>
  );
}

export default App;
