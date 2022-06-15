import { useEffect, useState } from "react";
import axios from "axios";

import { useParams } from "react-router-dom";

const useSingleVideo = () => {
  const { videoId } = useParams();
  const [loading, setLoading] = useState(false);
  const [videoDetails, setVideoDetails] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const {
          data: { video },
        } = await axios.get(`/api/video/${videoId}`);
        setVideoDetails(video);
        setTimeout(() => {
          setLoading(false);
        }, 600);
      } catch (error) {
        setError("something went wrong");
        setTimeout(() => {
          setLoading(false);
        }, 600);
      }
    })();
  }, [videoId]);

  return { loading, videoDetails, error };
};

export { useSingleVideo };
