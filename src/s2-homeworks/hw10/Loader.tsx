import s from "./Loader.module.css";

// export const Loader = () => <div className={s.loader} />;

export const Loader = ({ secondaryStyle = false }) => {
  return <div className={`${s.loaderPrimary} ${secondaryStyle ? s.loaderSecondary : ""}`}></div>;
};
