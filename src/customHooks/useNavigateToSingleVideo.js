import { useNavigate } from "react-router-dom";
const useNavigateToSingleVideo = () => {
  const navigate = useNavigate();

  const navigateToSingleVideo = (id) => {
    navigate(`/video/${id}`);
    console.log("hello");
  };

  return navigateToSingleVideo;
};

export { useNavigateToSingleVideo };
