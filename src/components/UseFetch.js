import React, { useEffect, useState } from "react";
import axios from "axios";

function UseFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [optionalWish, setOptionalWish] = useState({
    color: [
      "black_and_white",
      "black",
      "white",
      "yellow",
      "orange",
      "red",
      "purple",
      "magenta",
      "green",
      "teal",
      "blue",
    ],
    orientation: ["landscape", "portrait", "squarish"],
    query: "",
  });

  useEffect(() => {
    setLoading(true);
    axios
      .get(url)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [url]);

  return {
    data,
    loading,
    error,
    optionalWish,
  };
}

export default UseFetch;
