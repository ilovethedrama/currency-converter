import React from 'react';
import { CurrencyConverter } from './features/counter/CurrencyConverter';
import styled from 'styled-components';

const PageWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  margin: 100px 0;
  background: #EFF2F8;

  p {
    font-size: 2rem;
    font-weight: 500;
    color: #D94B5F;
  }
`;

function App() {
  
  return (
    <PageWrapper className="App">
      <p>A Currency Converter</p>
      <CurrencyConverter/>
    </PageWrapper>
  );
}

export default App;
