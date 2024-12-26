import { Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage/HomePage.tsx";
import SignInPage from "./pages/SignInPage/SignInPage.tsx";
import SignUpPage from "./pages/SignUpPage/SignUpPage.tsx";
import TrackerPage from "./pages/TrackerPage/TrackerPage.tsx";

import SharedLayout from "./components/SharedLayout/SharedLayout.tsx";

import css from "./App.module.css";

const App = () => {
  return (
    <main className={css.wrapper}>
      <Routes>
        <Route element={<SharedLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/signin" element={<SignInPage />} />
        </Route>

        <Route path="/tracker" element={<TrackerPage />} />
      </Routes>
    </main>
  );
};

export default App;
