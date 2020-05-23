const add = (x: number, y: number) => {
  return x + y;
};

// use this way
const substract = (x: number, y: number): number => {
  return x - y;
};

function divide(x: number, y: number): number {
  return x / y;
}

const multiply = function (x: number, y: number): number {
  return x * y;
};

const logger = (message: string): void => {
  console.log(message);
};

const throwError1 = (meesgae: string): never => {
  throw new Error(meesgae);
};

const throwError2 = (meesgae: string): string => {
  if (!meesgae) {
    throw new Error(meesgae);
  }
  return meesgae;
};

const forecast = {
  date: new Date(),
  weather: "sunny",
};

const logWeather1 = (forecast: { date: Date; weather: string }): void => {
  console.log(forecast.date);
  console.log(forecast.weather);
};

// destructuring with annotations
const logWeather2 = ({
  date,
  weather,
}: {
  date: Date;
  weather: string;
}): void => {
  console.log(date);
  console.log(weather);
};
