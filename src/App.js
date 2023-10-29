<<<<<<< HEAD
import Textmagic from "./Components/Textmagic";

function App() {

  return (
   <>
    <Textmagic/>
   </>
=======
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
>>>>>>> f15401e (Navbar added)
  );
}

export default App;
