import { useState } from "react";
import { Camera, CameraResultType, CameraSource } from "@capacitor/camera";

export function usePhotoGallery() {
  const [photo, setPhoto] = useState<string | undefined>(undefined);

  const takePhoto = async () => {
    const image = await Camera.getPhoto({
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Camera,
      quality: 100,
    });

    setPhoto(image.dataUrl);
  };

  return {
    photo,
    takePhoto,
  };
}
