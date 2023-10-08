import { useState } from "react";
import fetchEventsByCategories from "../../../services/api";

// Nos sirve como un cache, pero es muy limitado
const localCache = {};

// Si el request falla, no tenemos como hacer un retry
const useEventByCategoryList = () => {
  const [eventList, setState] = useState([]);
  const [status, setStatus] = useState("unloaded");

  const setEventList = (categoryId) => {
    setStatus("loading");

    if (localCache[categoryId]) {
      setState(localCache[categoryId]);
      setStatus("loaded");
    } else {
      // Falta manejo de error
      fetchEventsByCategories(categoryId).then((data) => {
        localCache[categoryId] = data || [];
        setState(localCache[categoryId]);
        setStatus("loaded");
      });
    }
  };

  return [eventList, status, setEventList];
};

export default useEventByCategoryList;
