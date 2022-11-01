import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import CurrencyConverterForm from "../components/CurrencyConverterForm";

describe("Currency Converter Form", () => {
    describe("Displays on screen", () => {
        test("a form with a base currency and amount", () => {
            const props = {
                baseAmount: 1,
                baseCurrency: "EUR",
                convertedAmount:50,
                convertedCurrency: "YEN"
            };
            render(<CurrencyConverterForm {...props}></CurrencyConverterForm>);
            const baseCurrencyValue = screen.getByRole("heading", { level: 2}).textContent; 
            expect(baseCurrencyValue).toContain(`${props.baseAmount} ${props.baseCurrency} equals`);
        })

        test("a form with a converted currency and amount", () => {
            const props = {
                baseAmount: 1,
                baseCurrency: "EUR",
                convertedAmount:50,
                convertedCurrency: "YEN"
            };
            render(<CurrencyConverterForm {...props}></CurrencyConverterForm>);
            const baseCurrencyValue = screen.getByRole("heading", { level: 5}).textContent;
            expect(baseCurrencyValue).toContain(`${props.convertedAmount} ${props.convertedCurrency}`);
        })

        test("a button with a to trigger displaying the converted amount", () => {
            const props = {
                baseAmount: 1,
                baseCurrency: "EUR",
                convertedAmount:50,
                convertedCurrency: "YEN"
            };
            render(<CurrencyConverterForm {...props}></CurrencyConverterForm>);
            const convertButton = screen.getByRole("button", {name: /convert/i}); 
            expect(convertButton).toBeInTheDocument();
        })

        test("a text input for the base amount", () => {
            const props = {
                baseAmount: 1,
                baseCurrency: "EUR",
                convertedAmount:50,
                convertedCurrency: "YEN"
            };
            render(<CurrencyConverterForm {...props}></CurrencyConverterForm>);
            const baseAmountInput = screen.getByLabelText("base amount"); 
            expect(baseAmountInput).toBeInTheDocument();
        })
    })
})