import { Box } from "@mui/material";
import { styled } from "@mui/system";

const DashboardBox = styled(Box)(({ theme }) => ({
  overflow: "hidden",
  backgroundColor: theme.palette.background.light,
  borderRadius: "0.5rem",
  boxShadow: "0.15rem 0.2rem 0.15rem 0.1rem rgba(0,0,0,.8)",
  //aspectRatio: "1/2"
  maxHeight: "20rem",

}));




export default DashboardBox;