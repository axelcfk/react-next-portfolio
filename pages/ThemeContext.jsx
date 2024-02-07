import React, { createContext, useContext, useReducer } from "react";

const ThemeContext = createContext();

const initialTheme = {
  theme: "light",
  userPreferences: {
    fontSize: "medium",
    reduceAnimations: false,
  },
};
//action  bara input till en funktion
function themeReducer(state, action) {
  //v   if action.type == "TOGGLE_THEME" return {...state, theme: action.theme};
  switch (action.type) {
    case "TOGGLE_THEME": {
      //   const newTheme = state.theme === "light" ? "dark" : "light";
      return { ...state, theme: action.theme };
    }
    case "TOGGLE_SIZE": {
      //   const newFontSize =
      // state.userPreferences.fontSize === "medium" ? "large" : "medium";
      return {
        ...state,
        userPreferences: {
          ...state.userPreferences,
          fontSize: action.fontSize,
        },
      };
    }
    default:
      return state;
  }
}

export function ThemeProvider({ children }) {
  const [state, dispatch] = useReducer(themeReducer, initialTheme);
  //en variabel som håller objektet ovan state, dispatch
  // const dataForComponent = { state, dispatch };

  return (
    <ThemeContext.Provider value={{ state, dispatch }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Create and use your own hook instead of using useContext in the components
export const useTheme = () => useContext(ThemeContext);
