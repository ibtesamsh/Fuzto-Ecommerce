import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import Login from "./components/Login/Login.jsx";

import { ContextProvider } from "./Context/Context.jsx";
import Home from "./components/Home.jsx";
import Register from "./components/Login/Register.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/" element={<Home />} />

      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ContextProvider>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </ContextProvider>
  </StrictMode>
);
