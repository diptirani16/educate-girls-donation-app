import { Container } from '@mui/material';
import './App.css';
import Header from './components/Header';
import Impacts from './components/Impacts';
import Invests from './components/Invests';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Container width="sm">
        <Impacts />
        <Invests />
      </Container>
      <Footer />
    </div>
  );
}

export default App;

