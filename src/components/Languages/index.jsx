import { useState } from "react";
import i18next from "i18next";
import { MainContainer, LanguagesList } from "./style";
import * as BsIcons from "react-icons/bs";
import ReactCountryFlag from "react-country-flag";
import Button from "../Button";

const Languages = () => {
  const [list, setList] = useState(false);

  const languagesObj = [
    {
      code: "pt",
      name: "Português",
      country_code: "BR",
    },
    {
      code: "en",
      name: "English",
      country_code: "US",
    },
  ];

  const handleList = () => {
    setList(!list);
  };

  return (
    <>
      <MainContainer>
        <Button
          onClick={() => handleList()}
          colorSchema={"--second"}
          type="default"
        >
          <BsIcons.BsTranslate />
        </Button>
      </MainContainer>
      {!!list ? (
        <LanguagesList>
          {languagesObj.map((item) => (
            <li
              key={item.country_code}
              onClick={() => i18next.changeLanguage(item.code) && handleList()}
            >
              <ReactCountryFlag countryCode={item.country_code} />
              <h2>{item.name}</h2>
            </li>
          ))}
        </LanguagesList>
      ) : null}
    </>
  );
};
export default Languages;
