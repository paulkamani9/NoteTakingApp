import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { Route, Routes, Navigate } from "react-router-dom";
import NewNote from "./pages/NewNote";

function App() {
  return (
    <Container className="my-4">
      <Routes>
        <Route path="/" element={<h2>Home</h2>} />
        <Route path="/new" element={<NewNote />} />
        <Route path="/:id">
          <Route index />
          <Route path="edit" />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Container>
  );
}

export default App;
