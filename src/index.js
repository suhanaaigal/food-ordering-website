import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.css";
import "remixicon/fonts/remixicon.css";
import { BrowserRouter as Router } from "react-router-dom";
import store from "./store/store";
import { Provider } from "react-redux";
import { ClerkProvider } from "@clerk/clerk-react";

const PUBLISHABLE_KEY =
  "pk_test_YXJyaXZpbmctZm9hbC01Ni5jbGVyay5hY2NvdW50cy5kZXYk";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <Router>
        <Provider store={store}>
          <App />
        </Provider>
      </Router>
    </ClerkProvider>{" "}
  </React.StrictMode>
);
