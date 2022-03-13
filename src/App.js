import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { Products } from "./components/Products";
import { ProductDetail } from "./components/ProductDetail";
import { ProductsList } from "./components/ProductsList";

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/products" element={<Products />}>
            <Route path="/products" element={<ProductsList />} />
            <Route path="/products/:id" element={<ProductDetail />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

function MainPage() {
  return <>Main page</>;
}

