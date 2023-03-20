import React from 'react';
import { Routes, Route, BrowserRouter, Link } from 'react-router-dom';
import { AddPost, HomePage, PostDetails, PostsListPage } from './pages';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav className="flex nav">
          <Link className="link" to="/">
            Home
          </Link>
          <Link className="link" to="/posts">
            Lista postów
          </Link>
          <Link className="link" to="/add">
            Dodaj nowy post
          </Link>
        </nav>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/posts" element={<PostsListPage />} />
          <Route path="/posts/:id" element={<PostDetails />} />
          <Route path="/add" element={<AddPost />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
