import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header";
import { ThemeProvider } from "./contexts/ThemeContext";

const App = () => {
    return (
        <ThemeProvider>
            <Header />
            <Outlet />
        </ThemeProvider>
    );
};

export default App;
