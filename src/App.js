import styles from "./App.module.css";
import AppRoute from "./routes/AppRoute";
import { useFetchData } from "./components/fetchData/useFetchData";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import Loading from "./components/Loading/Loading";
import { useContext } from "react";
import { LoadingContext } from "./components/context/LoadingProvider";
import { BrowserRouter } from "react-router-dom";

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
