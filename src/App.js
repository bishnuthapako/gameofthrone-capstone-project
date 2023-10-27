// import styles from "./App.module.css";
import AppRoute from "./routes/AppRoute";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import Loading from "./components/Loading/Loading";
import { useContext } from "react";
import { LoadingContext } from "./components/context/LoadingProvider";
import { BrowserRouter } from "react-router-dom";
import Footer from "./components/footer/Footer"

function App() {
  const { isLoading } = useContext(LoadingContext);


  return (
    <>
      {
        <BrowserRouter>
          <NavigationBar />
          <div> 
          <AppRoute/>
          </div>
          <div className="footer">
          <Footer />
          </div>
        </BrowserRouter>
        
      }
      {
        // todo render Loading based on its condition
        isLoading && <Loading />
      }
    </>
  );
}

export default App;
