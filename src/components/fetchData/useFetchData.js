import axios from "axios";
import { useContext, useEffect, useState, useCallback } from "react";
import { LoadingContext } from "../context/LoadingProvider";

export const useFetchData = (apiURL) => {
  const [data, setData] = useState([]);
  const { enableLoading, disableLoading } = useContext(LoadingContext);

  const fetchData = useCallback(async () => {
    try {
      // console.log(apiURL);
      const response = await axios.get(apiURL);
      if (response.data) {
        setData((prevData) => [...prevData, ...response.data]);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }, [apiURL]); // Only recreate fetchData when apiURL changes

  useEffect(() => {
    const getRunGameOfThroneData = async () => {
      enableLoading();
      await fetchData();
      disableLoading();
    };

    getRunGameOfThroneData();
   
  }, [enableLoading, disableLoading, fetchData]); 

  return { data };
};
