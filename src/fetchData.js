export async function fetchData(location) {
  try {
    if (!location) {
      throw new Error("Location is required!");
    }

    const response = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=MY_KEY_BRO&q=${location}&days=3`,
      { mode: "cors" },
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log(data);
    // - Uncomment when u want to see how to process more data
    return data;
  } catch (error) {
    console.error("Error: ", error);
    console.log("test");
    return null;
  }
}
