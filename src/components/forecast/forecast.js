import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";
import './forecast.css'

const WEEK_DAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const Forecast = ({ data }) => {
  const dayinaweek = new Date().getDay();
  const forecastdays = WEEK_DAYS.slice(dayinaweek, WEEK_DAYS.length).concat(
    WEEK_DAYS.slice(0, dayinaweek)
  );

  return (
    <>
      <label className="title">Weekly Forecast</label>
      <Accordion allowZeroExpanded>
        {data.list.slice(0, 7).map((item, idx) => (
          <AccordionItem key={idx}>
            <AccordionItemHeading>
              <AccordionItemButton>
                <div className="daily-item">
                  <img
                    alt="weather"
                    className="icon-small"
                    src={`${process.env.PUBLIC_URL}/icons/${item.weather[0].icon}.png`}
                  />
                  <label className="day">{forecastdays[idx]}</label><br className="break"></br>
                  <label className="description">{item.weather[0].description}</label><br className="break"></br>
                  <label className="min-max">{Math.round(item.main.temp_min)}°C / {Math.round(item.main.temp_max)}°C</label><br className="break"></br>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
                <div className="daily-details-grid">
                    <div className="daily-details-grid-item">
                        <label>Pressure</label>
                        <label>{item.main.pressure} hPa</label>
                    </div>
                    <div className="daily-details-grid-item">
                        <label>Humidity</label>
                        <label>{item.main.humidity}%</label>
                    </div>
                    <div className="daily-details-grid-item">
                        <label>Clouds</label>
                        <label>{item.clouds.all} hPa</label>
                    </div>
                    <div className="daily-details-grid-item">
                        <label>Wind Speed</label>
                        <label>{item.wind.speed} m/s</label>
                    </div>
                    <div className="daily-details-grid-item">
                        <label>Sea level</label>
                        <label>{item.main.sea_level} m</label>
                    </div>
                    <div className="daily-details-grid-item">
                        <label>Feels Like</label>
                        <label>{item.main.feels_like} °C</label>
                    </div>
                    
                </div>
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
};

export default Forecast;
