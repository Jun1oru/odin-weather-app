export function processData(data) {
  const dataNow = {
    country: data.location.country,
    name: data.location.name,
    region: data.location.region,
    temp_c: data.current.temp_c,
    temp_f: data.current.temp_f,
    last_updated: data.current.last_updated,
  };
  return dataNow;
}
