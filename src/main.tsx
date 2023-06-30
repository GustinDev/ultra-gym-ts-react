import { Auth0Provider } from "@auth0/auth0-react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import React from "react";
import "./index.css";

interface MyAuth0ProviderOptions {
  domain: string;
  clientId: string;
  redirectUri: string;
}

const auth0Config: MyAuth0ProviderOptions = {
  domain: "dev-7iyxi3k0m3phnjow.us.auth0.com",
  clientId: "keK9XqJcxxDzNTYQyqQZ5AIo0uVzLmKY",
  redirectUri: window.location.origin,
};

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Auth0Provider {...auth0Config}>
      <App />
    </Auth0Provider>
  </React.StrictMode>
);
