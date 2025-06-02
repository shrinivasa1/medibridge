import Layout from "../layout/Layout";
import { Link } from "react-router-dom";
import bckgrd from "../layout/bckgrd.jpg";
import { Box, Grid, Typography, Button } from "@mui/material";
import SpaIcon from "@mui/icons-material/Spa";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import "../../styles/HomeStyles.css";


const Home = () => {
  return (
    <Layout>
      <Box
        className="home"
        sx={{
          backgroundImage: `url(${bckgrd})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "100vh",
          position: "relative",
        }}
      >
        {/* Overlay */}
        <Box className="overlay" />

        {/* Ayurveda Corner */}
        <Box className="corner-text left hover-card">
          <SpaIcon className="icon" aria-label="Ayurveda icon" />
          <Box ml={1}>
            <Typography variant="subtitle1" fontWeight="bold">
              Ayurveda
            </Typography>
            <Typography variant="caption" className="small-text">
              Ancient healing through herbs & lifestyle
            </Typography>
          </Box>
        </Box>

        {/* Allopathy Corner */}
        <Box className="corner-text right hover-card">
          <Box mr={1} textAlign="right">
            <Typography variant="subtitle1" fontWeight="bold">
              Allopathy
            </Typography>
            <Typography variant="caption" className="small-text">
              Modern science for instant diagnosis
            </Typography>
          </Box>
          <LocalHospitalIcon className="icon" aria-label="Allopathy icon" />
        </Box>

        {/* Center Content */}
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          sx={{ minHeight: "110vh", position: "relative", zIndex: 2 }}
        >
          <Grid item sx={11} sm={8} md={6}>
            <Box className="glassBox fade-in" textAlign="center" height={'30%'}>
              <Typography variant="h3" className="title" color="black">
                <u>Health Care</u>
              </Typography>
              <Typography variant="h5" className="tagline" gutterBottom>
                MediBridge: Bridging Ayurveda and Allopathy <br />
                for Integrated Wellness
              </Typography>
              <Typography variant="body1" className="subtitle">
                Empowering patients with holistic diagnosing solutions
              </Typography>
              <Link to="/diseases">
                <Button className="actionBtn hover-scale" variant="contained">
                  Search Your Disease
                </Button>
              </Link>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Layout>
  );
};

export default Home;
