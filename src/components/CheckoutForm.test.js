import React from "react";
import { render, screen, waitFor, within } from "@testing-library/react";
// import * as rtl from 'react-testing-library'
import CheckoutForm from "./CheckoutForm";
import userEvent from "@testing-library/user-event";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm/>)
    const header = screen.getByText(/Checkout Form/i)
    expect(header).toBeInTheDocument()
});

test("form shows success message on submit with form details", async () => {
    render(<CheckoutForm/>)

    const firstName = 'Kyle'
    const lastName = 'Andrews'
    const address = '1234 5th Ave S'
    const city = 'Lambdaville'
    const state = 'Anytime, USA'
    const zip = '98765'

    const firstNameInput= screen.getByLabelText(/first name:/i)
    userEvent.type(firstNameInput, firstName)

    const lastNameInput= screen.getByLabelText(/last name:/i)
    userEvent.type(lastNameInput, lastName)

    const addressInput= screen.getByLabelText(/address:/i)
    userEvent.type(addressInput, address)

    const cityInput= screen.getByLabelText(/city:/i)
    userEvent.type(cityInput, city)

    const stateInput= screen.getByLabelText(/state:/i)
    userEvent.type(stateInput, state)

    const zipInput= screen.getByLabelText(/zip:/i)
    userEvent.type(zipInput, zip)

    const submitButton = screen.getByRole("button");
    userEvent.click(submitButton);

    // const submission = await screen.getByText(/you have ordered some plants! woo-hoo!/i);
    // expect(submission).toBeInTheDocument();
    // expect(firstNameInput).within()

    const submission = await screen.getByTestId('successMessage')
    expect(submission).toHaveTextContent('You have ordered some plants! Woo-hoo!')
    expect(submission).toHaveTextContent(firstName)
    expect(submission).toHaveTextContent(lastName)
    expect(submission).toHaveTextContent(address)
    expect(submission).toHaveTextContent(city)
    expect(submission).toHaveTextContent(state)
    expect(submission).toHaveTextContent(zip)
    
        
    

    // const submissionPromise = screen.getByText(/You have ordered some plants! Woo-hoo!/i)
    // submissionPromise
    //     .then(res => expect(res).toBeInTheDocument())

    // await waitFor(() => {
    //     const submission = screen.getByTestId('successMessage')
    //     expect(submission)

    // })
});

// firstName: "",
//   lastName: "",
//   address: "",
//   city: "",
//   state: "",
//   zip: "",