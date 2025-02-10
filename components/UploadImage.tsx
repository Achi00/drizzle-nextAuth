"use client";
import { uploadUserImage } from "@/actions/imageActions";
import React from "react";

const UploadImage = ({ session }: any) => {
  const uploadImage = async () => {
    const res = await uploadUserImage(
      "https://res.cloudinary.com/dle6xv667/image/upload/v1737909558/superman_mv6hmz.jpg",
      session
    );
    console.log(res);
  };
  return (
    <div>
      <button onClick={() => uploadImage()}>upload image</button>
    </div>
  );
};

export default UploadImage;
