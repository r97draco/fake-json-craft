import { Box, Typography } from "@mui/material";
import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Form from "./components/form/Form";

function App() {
  return (
    <>
      <Box className="h-[calc(100vh-76px)]">
        <Header />
        <Box
          sx={{
            flexGrow: 1,
            p: 3,
            bgcolor: "background.paper",
          }}
        >
          <Typography variant="h6">Fill in the form below : </Typography>
          <Form />
        </Box>
      </Box>
      <Footer />
    </>
  );
}

export default App;
