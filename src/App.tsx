import { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Footer, Header } from "./layouts";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Subscribe = lazy(() => import("./pages/Subscribe"));

function App() {
  return (
    <div className="w-screen pb-[72px]">
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route
          path="/home"
          element={
            <Suspense>
              <Home />
            </Suspense>
          }
        />
        <Route
          path="/about"
          element={
            <Suspense>
              <About />
            </Suspense>
          }
        />
        <Route
          path="subscribe"
          element={
            <Suspense>
              <Subscribe />
            </Suspense>
          }
        />
      </Routes>
      <div className="px-6 w-full mt-[120px]">
        <Footer />
      </div>
    </div>
  );
}

export default App;
