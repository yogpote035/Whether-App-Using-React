import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import LightModeIcon from "@mui/icons-material/LightMode";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import DownhillSkiingIcon from "@mui/icons-material/DownhillSkiing";
import "./infoBox.css";
export default function InfoBox({ info }) {
  const Hot_URl =
    "https://images.unsplash.com/photo-1572246538688-3f326dca3951?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDZ8fHN1bW1lcnxlbnwwfHwwfHx8MA%3D%3D";
  const Cold_URl =
    "https://plus.unsplash.com/premium_photo-1669991406391-aba0cd13a391?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fGNvbGQlMjBjbG91ZHxlbnwwfHwwfHx8MA%3D%3D";
  const Rain_URl =
    "https://images.unsplash.com/photo-1532203512255-3c9c9d666c50?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fHJhaW5pbmd8ZW58MHx8MHx8fDA%3D";
  return (
    <div className="infoBox">
      <h2>Whether Info</h2>
      <div className="cardContainer">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={
              info.humidity > 80
                ? Rain_URl
                : info.temp > 15
                ? Hot_URl
                : Cold_URl
            }
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.CityName}
              {info.humidity > 80 ? (
                <span style={{ color: "gray" }}>
                  <ThunderstormIcon />
                </span>
              ) : info.temp > 15 ? (
                <span style={{ color: "Black" }}>
                  <LightModeIcon />
                </span>
              ) : (
                <span style={{ color: "yellow" }}>
                  <DownhillSkiingIcon />
                </span>
              )}
            </Typography>
            <Typography
              variant="body2"
              component={"span"}
              sx={{ color: "text.secondary" }}
            >
              <p>Feels Like {info.feelsLike}&deg;C</p>
              <p>Humidity {info.humidity}</p>
              <p>Temperature {info.temp}&deg;C</p>
              <p>Minimum Temperature {info.tempMin}</p>
              <p>Maximum Temperature {info.tempMax}</p>
              <p>
                The Whether can be describe as <b>{info.weather}</b> and feels
                like {info.feelsLike}&deg;C
              </p>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
