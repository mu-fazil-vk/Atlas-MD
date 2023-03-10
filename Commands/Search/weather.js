const axios = require("axios");

module.exports = {
  name: "weather",
  alias: ["weathersearch"],
  desc: "Get weather data of any place.",
  category: "Search",
  usage: `weather <search term>`,
  react: "š",
  start: async (Miku, m, { text, prefix, args }) => {
    if (!args[0])
      return Miku.sendMessage(
        m.from,
        { text: `Please provide a location name !` },
        { quoted: m }
      );
    var WeatherSearchTerm = args.join(" ");

    var myweather = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${WeatherSearchTerm}&units=metric&appid=e409825a497a0c894d2dd975542234b0&language=tr`
    );

    const weathertext = `           š¤ *Weather Report* š¤  \n\nš *Search Location:* ${myweather.data.name}\n*š® Country:* ${myweather.data.sys.country}\nš *Weather:* ${myweather.data.weather[0].description}\nš”ļø *Temperature:* ${myweather.data.main.temp}Ā°C\nāļø *Minimum Temperature:* ${myweather.data.main.temp_min}Ā°C\nš *Maximum Temperature:* ${myweather.data.main.temp_max}Ā°C\nš¦ *Humidity:* ${myweather.data.main.humidity}%\nš *Wind:* ${myweather.data.wind.speed} km/h\n`;

    await Miku.sendMessage(
      m.from,
      {
        video: {
          url: "https://media.tenor.com/bC57J4v11UcAAAPo/weather-sunny.mp4",
        },
        gifPlayback: true,
        caption: weathertext,
      },
      { quoted: m }
    );
  },
};