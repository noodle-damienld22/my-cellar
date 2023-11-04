import { useState } from 'react';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

export function usePhotoGallery() {
  const [image, setImage] = useState();

  const takePhoto = async () => {
    const image = await Camera.getPhoto({
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Camera,
      quality: 60,
    });

    setImage(image.dataUrl);
  };

  return {
    image,
    takePhoto,
  };
}
