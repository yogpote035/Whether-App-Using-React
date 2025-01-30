import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";
export default function WhetherApp() {
  let [whetherInfo, setWhetherInfo] = useState({
    CityName: "Pune",
    feelsLike: 22.97,
    humidity: 60,
    temp: 23.04,
    tempMax: 23.04,
    tempMin: 23.04,
    weather: "scattered clouds",
  });

  let updateInfo = (res) => {
    setWhetherInfo(res);
  };
  return (
    <div style={{ textAlign: "center" }}>
      <h2>Whether App By Yogesh Pote</h2>
      <SearchBox updateInfo={updateInfo} />
      <InfoBox info={whetherInfo} />
    </div>
  );
}
