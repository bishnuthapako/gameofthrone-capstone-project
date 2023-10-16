import styles from "./App.module.css";
import AppRoute from "./routes/AppRoute";

function App ()
{
  return (
    <>
      <h3 className={styles.heading}>Guided Capstone Project</h3>
      <AppRoute />
    </>
  );
}

export default App;
