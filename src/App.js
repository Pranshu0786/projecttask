import {
  BrowserRouter as Router,
  Routes,
  Route,
  useParams,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
import Aboutpage from "./pages/Aboutpage";
import Singlepage from "./pages/Singlepage";
import ShowTicketForm from "./components/ShowTicketForm";

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<Aboutpage />} />
          <Route path="/singleshow/:id" element={<Singlepage />} />
          <Route exact path="/booking/:id" component={ShowTicketForm} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
