import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { Store } from "./redux";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import AccountsPage from "./pages/AccountsPage";
import UserPage from "./pages/UserPage";
import ErrorPage from "./pages/ErrorPage";
import TransactionsPage from "./pages/TransactionsPage";
import "./style/style.css";

function App() {
  return (
    <div className="App">
      <Provider store={Store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/accounts" element={<AccountsPage />} />
            <Route path="/user" element={<UserPage />} />
            <Route path="/transactions" element={<TransactionsPage />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
