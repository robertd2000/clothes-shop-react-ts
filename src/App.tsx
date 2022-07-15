import { AppRouter } from "./components/AppRouter";
import Navbar from "./components/Navbar";

import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <AppRouter />
    </div>
  );
}
