import { Grid } from "@material-ui/core";
import Header from '../Header';
import MainData from "./HomeLandingPage";
import ImagesVideos from "./ImagesVideos";
import { createMuiTheme , ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette : {
    primary : 
    {
      main : "#1faf05",
    },
  },
 
})
function App() {
  return (
    < >
    <ThemeProvider theme = {theme}>
    <Grid container direction = "column">
        <Grid item>
            <Header/>
        </Grid>
        <Grid item > 
            <MainData/>
        </Grid>
        <Grid item > 
            <ImagesVideos/>
        </Grid>
      </Grid>
    </ThemeProvider>
    </>
  );
}

export default App;
