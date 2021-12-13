import React from 'react';
import { render } from "@testing-library/react";
import App from "./App";


describe('<App />', () => {
    it('renders the component', () => {
        const { container } = render(<App entity="test" />);
        expect(container.querySelector('h1').innerHTML).toEqual("Hello test!")
    })
})
