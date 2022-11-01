import React from "react";
import { format } from 'date-fns'
import { useForm, SubmitHandler } from "react-hook-form";
import { CurrencyConversionObject } from "../types/currency";
import { useFetch } from "../helpers/helpers";

interface Props {
  baseAmount: number
  baseCurrency: string
  convertedAmount: number
  convertedCurrency: string
}


const CurrencyConverterForm: React.FC<Props> = () => {

const { data } = useFetch("USD");
  
const { register, getValues, handleSubmit, formState: { errors } } = useForm<CurrencyConversionObject>();
const onSubmit: SubmitHandler<CurrencyConversionObject> = data => {
  console.log(formInfo);
}
const formInfo = getValues()

  return (
    <div>
      <h5>{formInfo.baseAmount} {formInfo.baseCurrency} equals</h5>
      <h2>{!isNaN(formInfo.convertedAmount) && formInfo.convertedAmount } {formInfo.convertedCurrency}</h2>

      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <input defaultValue="1" {...register("baseAmount", { required: true, valueAsNumber: true,
              validate: (value) => value > 0})} /> 
            {errors.baseAmount && <span>Please enter a valid number</span>}

            <select {...register("baseCurrency")} >
              {data && data.map(({code, name}) => (
                <option defaultValue={"Australian Dollar"} key={name}>
                {code} - {name}
                </option>
              ))}
            </select>
          </div>
          <div>
            <input {...register("convertedAmount", {valueAsNumber: true,
              validate: (value) => value > 0})} />
            {errors.convertedAmount && <span>Please enter a valid number</span>}

            <select {...register("convertedCurrency")}>
            {data && data.map(({code, name}) => (
                <option key={name}>
                {code} - {name}
                </option>
              ))}
            </select>
          </div>
          <input type="submit"/>
        </form>
      </div>

      <small>
        <time>{format(Date.now(), "PPPP")}</time>
      </small>
    </div>
  );
};

export default CurrencyConverterForm;
