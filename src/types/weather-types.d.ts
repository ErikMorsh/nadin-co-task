export type IranData = {
  city: string;
  lat: string;
  lng: string;
};

export type RequestState = "not-set" | "loading" | "ok";

export type WeatherData = {
  requestState: RequestState;
  choosenCity: string;
  weather: any;
};
