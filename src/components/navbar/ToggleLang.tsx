import { useEffect } from "react";
import { useToggleState } from "./ToggleState";

export const ToggleLanguage = () => {
  const { isOn, onText, handleClick } = useToggleState();

  useEffect(() => {
    console.log("Toggle language button now says: " + onText);
  }, [onText]);

  return (
    <div>
      <button onClick={() => handleClick(isOn)}>{onText}</button>
    </div>
  );
};
