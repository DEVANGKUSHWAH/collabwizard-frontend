import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Routes } from "../app/Routes";
import 'antd/dist/antd.css';
import './App.scss';

export default function App() {
  return (
      <BrowserRouter >
          <Routes />
      </BrowserRouter>
  );
}
