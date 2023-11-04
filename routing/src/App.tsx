import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './routes/Home';
import { About } from './routes/About';
import { NotFound } from './routes/NotFound';
import { ShoppingApp } from './routes/ShoppingApp';
import { Categories } from './routes/Categories';
import { Category } from './routes/Category';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" Component={Home} />
        <Route path="/about" Component={About} />
        <Route path="/shopping" Component={ShoppingApp}>
          <Route path={'categories'} Component={Categories}>
            <Route
              path={`categories/category/:categoryId`}
              Component={Category}
            />
          </Route>
        </Route>

        <Route Component={NotFound} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
