import style from "../styles/skills.module.css";

export default function ({ imgSrc, label }: { imgSrc: string; label: string }) {
  return (
    <div className={style.item}>
      <div className={style.itemImg}>
        <img src={imgSrc} alt={`${label} icon`} />
      </div>
      <div className={style.itemTag}>{label}</div>
    </div>
  );
}
