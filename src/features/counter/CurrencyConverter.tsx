import React  from 'react';
import CurrencyConverterForm from '../../components/CurrencyConverterForm';

import styled from 'styled-components';

const PageWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  margin: 100px 0;
  padding: 40px 0;
`;
export function CurrencyConverter() {


  const props = { convertedAmount: 30, convertedCurrency: "EUR", baseAmount: 1, baseCurrency: "USD"};

  return (
    <PageWrapper>
      <CurrencyConverterForm {...props}></CurrencyConverterForm>
    </PageWrapper>
  );
}
