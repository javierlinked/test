// States
import { useEffect, useState } from "react";
// Import useFetch
import UseFetch from "./UseFetch";

const DisplayImage = () => {
  // const [image, setImage] = useState("");

  // const accessKey = process.env.REACT_APP_ACCESS_KEY;
  // const accessKey = import.meta.env.VITE_REACT_APP_ACCESS_KEY;
  const apiRoot = "https://api.unsplash.com/";
  const accessKey = "s9rQFfC38sp0xQJQiK4DOs-tAifpX2FEJL8BGaZQgXI";
  // const color = "blue";
  // const orientation = "landscape";
  const query = "river";

  let unsplashUrl = `${apiRoot}/search/photos/?query=${query}&client_id=${accessKey}&per_page=1`;
  // if (orientation) {
  //   unsplashUrl += `&orientation=${orientation}`;
  // }
  // if (color) {
  //   unsplashUrl += `&color=${color}`;
  // }

  const { data, loading, error, optionalWish } = UseFetch(unsplashUrl);

  if (loading) return <h1>Loadding...</h1>;
  if (error) console.log(error);

  // useEffect(() => {
  //   // if (query) {
  //   axios
  //     .get(unsplashUrl)
  //     .then((res) => {
  // setImage(res.data.results[0].urls.regular);
  //       setImage(res.data);
  //       console.log(res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  //   // }
  // }, []);
  // console.log(image);

  return (
    <div className="flex items-center justify-center h-screen">
      <img
        className=" max-h-[600px] object-contain rounded-xl "
        src={data?.results[0].urls.regular}
      ></img>
    </div>
  );
};

export default DisplayImage;
