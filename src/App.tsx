import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AllRoutes from "./Routes";

function App() {
  return (
    <div className="app bg-gray-20">
      <Router>
        <Routes>
          <Route path="/" element={<AllRoutes />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
