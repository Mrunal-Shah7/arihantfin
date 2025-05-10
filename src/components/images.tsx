import React from 'react';

interface ImageProps {
    url: string;
    alt?: string;
    className?: string;
    width?: string | number;
    height?: string | number;
}

const Image: React.FC<ImageProps> = ({
    url,
    alt = '',
    className = '',
    width,
    height,
}) => {
    console.log('Image URL:', url);
    return (
        <img
            src={url}
            alt={alt}
            className={className}
            width={width}
            height={height}
            loading="lazy"
        />
    );
    
};

export default Image;