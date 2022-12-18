import { fireEvent, render, screen } from '@testing-library/react';
import { EXPORT_MARKER } from 'next/dist/shared/lib/constants';
import App from './App';

test('the counter start at 0', () => {
  render(<App />);
  //screen object를 이용해서 엘리먼트에 접근(접근할 때 ID로)
  const counterElement = screen.getByTestId("counter");
  //id가 counter인 엘리먼트의 텍스트가 0인지 테스트
   expect(counterElement).toHaveTextContent(0); //toBe(0)은 testcode expeted 값이 0이 되어야함
   //tohaveTextcontent는 counterElement안에 0 이라는 content가 있는지 확인
});

test('minus button has correct text', () => {
  render(<App />);
  const minusButtonElement = screen.getByTestId("minus-button");
   expect(minusButtonElement).toHaveTextContent("-"); 

});

test('plus button has correct text', () => {
  render(<App />);
  const plusButtonElement = screen.getByTestId("plus-button");
   expect(plusButtonElement).toHaveTextContent("+"); 
});

test('When the + button is pressed, the counter chnages to 1', () => {
  render(<App />);
  const buttonElement = screen.getByTestId("plus-button");
  fireEvent.click(buttonElement);
  const counterElement = screen.getByTestId("counter")
   expect(counterElement).toHaveTextContent(1); 
});

test('When the - button is pressed, the counter chnages to -1', () => {
  render(<App />);
  const buttonElement = screen.getByTestId("minus-button");
  fireEvent.click(buttonElement);
  const counterElement = screen.getByTestId("counter")
   expect(counterElement).toHaveTextContent(-1); 
});
   
test("on/off button has blue color", () => {
  render (<App />);
  const buttonElement = screen.getByTestId("on/off-button");
  expect(buttonElement).toHaveStyle({backgroundColor: "blue"})
})

//test.only -  이 test만 실행하겠다
//test.skip -  이 test를 건너 뛰겠다
test("Prevent The -,+ button from being pressed when the on/off button is clicked", () => {
  render (<App />);
  const onOffButtonElement = screen.getByTestId("on/off-button");
  fireEvent.click(onOffButtonElement)
  const plusButtonElement = screen.getByTestId("plus-button");
  expect(plusButtonElement).toBeDisabled();
})





