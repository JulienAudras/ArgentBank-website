// import User from "../components/User";
// import { render, screen, act } from "@testing-library/react";
// import { Provider } from "react-redux";
// import { Store } from "../redux";
// import { BrowserRouter } from "react-router-dom";

// const saveButton = screen.getByText("Save");

// describe("when the user click on the save button", () => {
//   it("the user is redirected to the accounts page", () => {
//     render(
//       <Provider store={Store}>
//         <BrowserRouter>
//           <User />
//         </BrowserRouter>
//       </Provider>
//     );

//     act(() => {
//       saveButton.click();
//     });
//     expect(window.location.pathname).toEqual("/accounts");
//   });
//   it("and the onSubmit action is called", () => {
//     const onSubmit = jest.fn();
//     render(
//       <Provider store={Store}>
//         <BrowserRouter>
//           <User onSubmit={onSubmit} />
//         </BrowserRouter>
//       </Provider>
//     );
//     act(() => {
//       saveButton.click();
//     });
//     expect(onSubmit).toHaveBeenCalled();
//   });
// });
