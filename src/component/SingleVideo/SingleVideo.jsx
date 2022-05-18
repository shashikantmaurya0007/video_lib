import React, { useState } from "react";
import { useSingleVideo } from "./SingleVideoCustomHooks/useSingleVideo";
import { useParams } from "react-router-dom";
import Loader from "../../GeneralComponent/Loader/Loader";
const SingleVideo = () => {
  const { loading, videoDetails, error } = useSingleVideo();

  return (
    <>
      {loading && <Loader />}
      {!loading && (
        <main className="">
          <section>
            <iframe
              src={`https://www.youtube.com/embed/${videoDetails?._id}`}
              title="front end videoplayer"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </section>
          <section></section>
        </main>
      )}
    </>
  );
};

export { SingleVideo };
