import { Box, Typography } from "@mui/material";
import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

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
          {/* /* Content Starts */}
          <Typography variant="h5">Hello World</Typography>


          {/* /* Content Ends */}
        </Box>
      </Box>
      <Footer />
    </>
  );
}

export default App;
