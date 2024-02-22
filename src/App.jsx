import { BrowserRouter, Route, Routes } from "react-router-dom";
import Container from "./components/Container";

function App() {
  return (
    <div >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Container />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
