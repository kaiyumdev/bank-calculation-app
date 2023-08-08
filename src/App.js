import { Container, Grid } from "@mui/material";
import "./App.css";
import Navbar from "./components/Navbar";
import Result from "./components/Result";
import SliderSelect from "./components/SliderSelect";
import TenureSelect from "./components/TenureSelect";

function App() {
  return (
    <div>
      <Navbar> </Navbar>
      <Container maxWidth="xl" sx={{ mt: 4 }}>
        <Grid container spacing={5}>
          <Grid item xs={12} md={6}>
            <SliderSelect></SliderSelect>
            <TenureSelect></TenureSelect>
          </Grid>
          <Grid item xs={12} md={6}>
            <Result></Result>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
