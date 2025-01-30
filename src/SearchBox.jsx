import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import "./SearchBox.css";
import { useState } from "react";
export default function SearchBox({ updateInfo }) {
  let [city, setCity] = useState("");
  let [errorCity, setErrorCity] = useState("");
  let [error, setError] = useState(false);

  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "39fa373b8b8ca5a12c25d82fbeab82c0";

  let getWhetherInformation = async () => {
    try {
      let response = await fetch(
        `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
      );
      let responseJson = await response.json();

      if (response.status !== 200) {
        throw new Error(responseJson.message);
      }
      let result = {
        CityName: responseJson.name,
        temp: responseJson.main.temp,
        tempMin: responseJson.main.temp_min,
        tempMax: responseJson.main.temp_max,
        humidity: responseJson.main.humidity,
        feelsLike: responseJson.main.feels_like,
        weather: responseJson.weather[0].description,
      };
      return result;
    } catch (error) {
      throw error;
    }
  };

  let handleChange = (e) => {
    setCity(e.target.value);
    setError(false);
    setErrorCity("");
  };

  let handleSubmit = async (e) => {
    try {
      e.preventDefault();
      setCity("");
      let info = await getWhetherInformation();
      await updateInfo(info);
    } catch (error) {
      setError(true);
      setErrorCity(city);
    }
  };
  return (
    <>
      <div className="SearchBox">
        <h3>Search Whether</h3>
        <form action="" onSubmit={handleSubmit} method="get">
          <TextField
            id="city"
            value={city}
            required
            label="City Name"
            variant="outlined"
            onChange={handleChange}
          />
          <br />
          <br />
          <Button
            variant="outlined"
            type="submit"
            startIcon={<SearchIcon />}
            color="success"
          >
            Search
          </Button>
          {error && (
            <p style={{ color: "red" }}>
              No Such Information Found! For
              <i style={{ fontWeight: "900" }}> {errorCity}</i>
            </p>
          )}
        </form>
      </div>
    </>
  );
}
