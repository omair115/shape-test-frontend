import "./App.css";
import AppMainLayout from "./components/layouts/AppLayout";
import SurveyPage from "./pages/surveyForm/SurveyForm";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <AppMainLayout>
      <Routes>
        <Route path="/" element={<SurveyPage />} />
      </Routes>
    </AppMainLayout>
  );
}

export default App;
