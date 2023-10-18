import styles from "./App.module.css";
import AppRoute from "./routes/AppRoute";
import { useFetchData } from "./components/fetchData/useFetchData";
import NavigationBar from "./components/NavigationBar/NavigationBar";

function App ()
{

const {data, setData} = useFetchData();

console.log(data, 'data')

  return (
    <>
    <NavigationBar />
      <AppRoute />
    </>
  );
}

export default App;
