import { useTheme } from "../ThemeContext";

export default function Clicked({ clicked }) {
  const { state } = useTheme();

  return (
    <div
      className={` rounded-lg  fixed top-24 right-40 border-solid border-2 p-5 ${
        state.theme === "light"
          ? "bg-slate-100 border-slate-800"
          : "bg-slate-800 border-slate-100"
      }  ${clicked ? "block" : "hidden"}`}
    >
      <ul className="text-2xl">
        <li>
          <a> axel.kacou.thalin@gmail.com </a>
        </li>
        <li>
          <a> +46768918106 </a>
        </li>
        <li>
          <a> linkedIn </a>
        </li>
      </ul>
    </div>
  );
}
