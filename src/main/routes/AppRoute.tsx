import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Categories, Footer, Header } from "@/ui/components";
import { Home } from "@/ui/pages";
import "@/ui/assets/styles/main.scss";

export const AppRoute = () => {
  return (
    <BrowserRouter>
      <Header />
      <Categories />
      <div className="container-principal">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
};
