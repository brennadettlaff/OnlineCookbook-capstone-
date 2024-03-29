// General Imports
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import axios from 'axios';


// Pages Imports
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import RecipePage from "./pages/RecipePage/RecipePage"
import SearchPage from "./pages/SearchPage/SearchPage";

// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import SearchBar from "./components/SearchBar/SearchBar";

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";
import AddRecipePage from "./pages/AddRecipePage/AddRecipePage";
import EditRecipePage from "./pages/EditRecipePage/EditRecipePage";
import FavoritesPage from "./pages/FavoritesPage/FavoritesPage";
import CollectionsDisplayPage from "./pages/CollectionsDisplayPage/CollectionsDisplayPage";
import CollectionPage from "./pages/CollectionPage/CollectionPage";

function App() {

  return (
    <div>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <HomePage />
            </PrivateRoute>
          }
        />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/recipe/:id" element={<RecipePage />} />
        <Route path="/edit/:id" element={<EditRecipePage />} />
        <Route path="/addrecipe/" element={<AddRecipePage />} />
        <Route path="/search/" element={<SearchPage  />} />
        <Route path="/favorites/" element={<FavoritesPage  />} />
        <Route path="/collections/" element={<CollectionsDisplayPage  />} />
        <Route path="/collection/:id" element={<CollectionPage  />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
