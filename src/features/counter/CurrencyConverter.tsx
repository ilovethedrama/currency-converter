import React, { useState } from 'react';


import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  incrementIfOdd,
  selectCount,
} from './currencyConverterSlice';
import CurrencyConverterForm from '../../components/CurrencyConverterForm';



export function CurrencyConverter() {

  
  // const count = useAppSelector(selectCount);
  // const dispatch = useAppDispatch();
  // const [incrementAmount, setIncrementAmount] = useState('2');

  // const incrementValue = Number(incrementAmount) || 0;

  const props = { convertedAmount: 30, convertedCurrency: "EUR", baseAmount: 1, baseCurrency: "EUR"};

  return (
    <div>
      <CurrencyConverterForm {...props}></CurrencyConverterForm>
    </div>
  );
}
