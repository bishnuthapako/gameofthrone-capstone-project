import axios from "axios";
import { useEffect, useState } from "react";

export const useFetchData = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(process.env.REACT_APP_Characters);
      if (response.data) {
        setData((prevData) => [...prevData, ...response.data]);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []); // This empty dependency array ensures the effect runs only once when the component mounts.

  return { data, setData };
};
