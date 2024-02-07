import { useState } from "react";
import { useTheme } from "../ThemeContext";

export default function Card({ positioning, imgUrl }) {
  const { state } = useTheme();

  //state for when the card is hoveres. it should darken and show the project description
  const [hovered, setHovered] = useState(false);

  function handleMouseOver() {
    setHovered(true);
  }

  function handleMouseOut() {
    setHovered(false);
  }

  const theme = ` h-96  border-2 rounded-lg ${
    state.theme === "light"
      ? "bg-slate-100 border-slate-800"
      : "bg-slate-800 border-slate-100"
  }`;

  //   const theme2 = ` h-60 border-2 rounded-lg ${
  //     state.theme === "light"
  //       ? "bg-slate-800 border-slate-100"
  //       : "bg-slate-100 border-slate-800"
  //   }`;

  return (
    <div className={`flex  ${positioning}`}>
      <div
        onMouseEnter={handleMouseOver}
        onMouseLeave={handleMouseOut}
        id="card-container"
        className={`${
          hovered ? "bg-black rounded-lg " : ""
        } flex flex-col mr-40 ml-40 w-2/6 cursor-pointer`}
      >
        {hovered ? (
          <div className={`flex flex-col bg-slate-900 p-9 ${theme}`}>
            <h2 className="text-3xl my-5 text-slate-100">Title</h2>
            <p className="text-slate-100">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime
              non possimus accusantium impedit atque quidem fuga similique dicta
              repudiandae odit ipsa adipisci accusamus ut, hic minus mollitia
              inventore tempora magnam dolor voluptates. Saepe accusantium
              alias, et porro libero earum ea.
            </p>
            <div className="flex mt-5">
              <p
                className=" mr-3 text-slate-100"
                href="https://github.com/axelcfk"
              >
                Check it out 👉
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.5rem"
                height="1.5rem"
                viewBox="0 0 24 24"
                href="https://github.com/axelcfk"
              >
                <title>Github</title>

                <g fill="rgb(241 245 249">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
                </g>
              </svg>
            </div>
          </div>
        ) : (
          <img src={imgUrl} alt="placeholder" className={theme} />
        )}
      </div>
    </div>
  );
}
