import css from "./Loader.module.css";

import { ThreeDots } from "react-loader-spinner";

export default function Loader() {
  return (
    <div className={css.container_loader}>
      <ThreeDots wrapperClass={css.loader} color="rgb(19, 136, 231)" />
    </div>
  );
}