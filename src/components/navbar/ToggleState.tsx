import { useState } from "react";
import { useTranslation } from "react-i18next";

export const useToggleState = () => {
  const [isOn, setOn] = useState<boolean>(true);
  const [onText, setOnText] = useState<string>("Español");
  const { i18n } = useTranslation();

  const handleClick = (isOn: boolean) => {
    setOn(!isOn);
    if (isOn) {
      setOnText("English");
      i18n.changeLanguage("es");
    } else {
      setOnText("Español");
      i18n.changeLanguage("en");
    }
  };

  return {
    isOn,
    onText,
    handleClick,
  };
};
