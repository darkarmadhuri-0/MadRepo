import { fireEvent, render, waitFor, waitForElementToBeRemoved } from '@testing-library/react';
import React from 'react'
import { Store } from '../Store'


// it("Api testing", async function () {
//     const response =  new (Store as any)
//     var data = await response.fetchData();
//     expect(data.items[1].id).toEqual("1")
// })

describe('testing Api', () => {
  test('Verify if items are added to the cart after button click', async () =>{
     const {getByText} = render(<Store/>);

     const button = getByText('+Add to Cart');
     expect(button).toBeInTheDocument();
    
     fireEvent.click(button);

     const ITEM = await waitForElement(
        () => getByText('Mens Cotton Jacket')
     );
     expect(ITEM).toBeInTheDocument();
  });
});

function waitForElement(arg0: () => HTMLElement) {
    throw new Error('Function not implemented.');
}
