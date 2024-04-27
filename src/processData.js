export function processData(data) {
  const weather = {
    location: {
      country: data.location.country,
      name: data.location.name,
      region: data.location.region,
    },
    temperature: {
      temp_c: [
        data.forecast.forecastday[0].day.avgtemp_c,
        data.forecast.forecastday[1].day.avgtemp_c,
        data.forecast.forecastday[2].day.avgtemp_c,
      ],
    },
    condition: {
      text: [
        data.forecast.forecastday[0].day.condition.text,
        data.forecast.forecastday[1].day.condition.text,
        data.forecast.forecastday[2].day.condition.text,
      ],
      icon: [
        data.forecast.forecastday[0].day.condition.icon,
        data.forecast.forecastday[1].day.condition.icon,
        data.forecast.forecastday[2].day.condition.icon,
      ],
    },
  };
  return weather;
}
