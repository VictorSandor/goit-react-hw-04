import ImageCard from "./ImageCard";
import css from "./ImageGallery.module.css";

export default function ImageGallery({ gallery, onImageClick }) {
  return (
    <ul className={css.gallery}>
      {gallery.map((image) => (
        <li key={image.id} onClick={() => onImageClick(image)}>
          <ImageCard img={image.urls.small} alt={image.alt_description} />
        </li>
      ))}
    </ul>
  );
}