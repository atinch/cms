import './App.css';
import styled from 'styled-components';
import Cms from '../src/pages/Cms'

export const Container = styled.div`
  min-width: 500px;
  max-width: 500px;
  display: flex;
  background: #fff;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  margin: 50px auto;
`;

function App() {
  return(
    <Cms/>
  )
}

export default App;
