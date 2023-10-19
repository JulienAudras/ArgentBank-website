import React from "react";
import Header from "../components/Header";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { Store } from "../redux";
import { BrowserRouter } from "react-router-dom";

describe("when Header is created", () => {
  it("a logo is displayed", () => {
    render(
      <Provider store={Store}>
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      </Provider>
    );
    const logoElement = screen.getByAltText("Argent Bank Logo");
    expect(logoElement).toBeInTheDocument();
  });
});
