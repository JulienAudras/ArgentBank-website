import Log from "../components/Log";
import { render, screen, act } from "@testing-library/react";
import { Provider } from "react-redux";
import { Store } from "../redux";
import { BrowserRouter } from "react-router-dom";
import { authSlice } from "../redux";

describe("when Log is created and the user is logged", () => {
  it("a logout button is displayed", () => {
    Store.dispatch(authSlice.actions.login());
    render(
      <Provider store={Store}>
        <BrowserRouter>
          <Log />
        </BrowserRouter>
      </Provider>
    );
    const logoutButton = screen.getByText("Sign Out");
    expect(logoutButton).toBeInTheDocument();
  });
  it("and a click on the logout button is triggered, the user is redirected to the signin page", () => {
    Store.dispatch(authSlice.actions.login());
    render(
      <Provider store={Store}>
        <BrowserRouter>
          <Log />
        </BrowserRouter>
      </Provider>
    );
    const logoutButton = screen.getByText("Sign Out");
    act(() => {
      logoutButton.click();
    });
    expect(window.location.pathname).toEqual("/login");
  });
});
