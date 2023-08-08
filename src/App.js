import "./App.css";
import Navbar from "./components/Navbar";
import Result from "./components/Result";
import SliderSelect from "./components/SliderSelect";
import TenureSelect from "./components/TenureSelect";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <SliderSelect></SliderSelect>
      <TenureSelect></TenureSelect>
      <Result></Result>
    </div>
  );
}

export default App;
