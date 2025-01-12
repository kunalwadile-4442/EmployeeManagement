import React, { useEffect, useState } from 'react';

const Images = (props) => {
  const [imageSrc, setImageSrc] = useState(null);

  useEffect(() => {
    const img = new Image();
    if (!props.auth || window.location.hostname !== 'localhost') {
      img.src = props.src;

      img.onload = () => {
        setImageSrc(img.src);
      };
    }
    return () => {
      img.src = '';
    };
  }, [props.src]);


  const ImagePreview = () => {
    return (
      <picture className={`picture-opacity-1 ${props.imageClassName}`}>
        {imageSrc && <source type={props.type} srcSet={imageSrc} />}
        {imageSrc && (
          <img
            src={imageSrc}
            alt={props.alt}
            loading="eager"
            className={props.className}
            width={props.width}
            height={props.height}
          />
        )}
      </picture>
    );
  };

  return ImagePreview();
};

export default Images;
