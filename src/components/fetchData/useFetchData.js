import axios from "axios";
import { useEffect, useState } from "react";

export const useFetchData = (apiURL) => {
  const [data, setData] = useState([]);


 

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log(apiURL)
        const response = await axios.get(apiURL);
        if (response.data) {
          setData((prevData) => [...prevData, ...response.data]);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [apiURL]); // This empty dependency array ensures the effect runs only once when the component mounts.

  return { data };
};
