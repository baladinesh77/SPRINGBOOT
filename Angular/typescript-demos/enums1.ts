// Numeric enums
enum WeatherType{
    Sunny,
    Cloudy,
    Rainy
}

//String enums
enum SeasonType{
    Sunny = "About to Burn",
    Cloudy = 'About to burst!',
    Rainy = 'Already burst!'
}

let v1: WeatherType;
let v2: SeasonType;
v1=WeatherType.Sunny;
v2=SeasonType.Sunny;

console.log(v1);
console.log(v2);
