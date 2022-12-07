import { useScale } from 'src/hooks/useScale';
import { getImageUrl } from 'src/services/blog.service';

const PortableImage = ({ value: { alt, asset, position = 'center' } }: any) => {
  const { onRemoveScale, onSetScale, scaled, ref } = useScale();

  return (
    <div className={`nb-portable-image ${scaled ? 'nb-portable-image--preview' : ''}`}>
      <div className='nb-portable-image__overlay' onClick={onRemoveScale}></div>
      <div className='nb-portable-image__wrapper'>
        <img
          onClick={onSetScale}
          ref={ref}
          alt={alt}
          src={getImageUrl(asset).url()}
          style={{ maxWidth: '100%', maxHeight: 350 }}
        />
        {alt &&
          <p>{alt}</p>
        }
      </div>
    </div>
  );
};

export default PortableImage;
