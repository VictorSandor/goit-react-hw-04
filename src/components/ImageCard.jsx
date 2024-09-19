import css from "./ImageCard.module.css";

export default function ImageCard({ img, alt }) {
  return (
    <div>
      <img className={css.image} src={img} alt={alt || "Image"} />
    </div>
  );
}