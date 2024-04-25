export const searchCity = (city) =>
  `https://api.weatherapi.com/v1/search.json?key=abd836d2832740a9bde194419242404&q=${city}`;

export const cityDetail = (id) =>
  `https://api.weatherapi.com/v1/forecast.json?key=abd836d2832740a9bde194419242404&q=id:${id}&days=1&aqi=no&alerts=no`;
