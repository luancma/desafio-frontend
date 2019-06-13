import React from "react";
import {
  WiHurricane,
  WiThunderstorm,
  WiDayThunderstorm,
  WiTornado,
  WiSnow,
  WiSleet,
  WiRainMix,
  WiRain,
  WiShowers,
  WiSnowWind,
  WiHail,
  WiDust,
  WiFog,
  WiDayHaze,
  WiSmoke,
  WiStormShowers,
  WiWindy,
  WiSnowflakeCold,
  WiCloudy,
  WiNightCloudy,
  WiDayCloudy,
  WiNightClear,
  WiDaySunny,
  WiHot,
  WiDayRain,
  WiCelsius,
  WiNightShowers,
  WiNightSnowWind
} from "react-icons/wi";
import gelo from "../utils/img/gelo.jpg";
import sol from "../utils/img/sol.jpg";
import chuva from "../utils/img/chuva.jpg";
import noiteNuvens from "../utils/img/nuvensNoite.jpg";
import diaNuvens from "../utils/img/nuvensDia.jpg";
import foggy from "../utils/img/foggy.jpg";
import tornado from "../utils/img/tornado.jpg";
import imagemDefault from "../utils/img/default.jpg";
export const changeBackground = code => {
  if (code === null) {
    return `url(${imagemDefault})`;
  } else if (
    code === 1 ||
    code === 3 ||
    code === 4 ||
    code === 6 ||
    code === 9 ||
    code === 11 ||
    code === 12 ||
    code === 35 ||
    code === 37 ||
    code === 37 ||
    code === 38 ||
    code === 39 ||
    code === 40 ||
    code === 45 ||
    code === 47
  ) {
    return `url(${chuva})`;
  } else if (code === 19) {
    return `url(${gelo})`;
  } else if (
    code === 5 ||
    code === 7 ||
    code === 8 ||
    code === 10 ||
    code === 13 ||
    code === 14 ||
    code === 15 ||
    code === 16 ||
    code === 17 ||
    code === 18 ||
    code === 41 ||
    code === 42 ||
    code === 43 ||
    code === 46
  ) {
    return `url(${sol})`;
  } else if (code === 27 || code === 29) {
    return `url(${noiteNuvens})`;
  } else if (code === 32 || code === 34 || code === 36) {
    return `url(${sol})`;
  } else if (code === 30 || code === 28) {
    return `url(${diaNuvens})`;
  } else if (code === 20 || code === 21) {
    return `url(${foggy})`;
  } else if (code === 0 || code === 2) {
    return `url(${tornado})`;
  }
};

export const GetDay = props => {
  const styleDay = {
    fontSize: `${props.size}`,
    marginLeft: `${props.marginLeft}`
  };
  if (props.day === "Sun") {
    return <span style={styleDay}>{"Domingo".toUpperCase()}</span>;
  } else if (props.day === "Mon") {
    return <span style={styleDay}>{"Segunda".toUpperCase()}</span>;
  } else if (props.day === "Tue") {
    return <span style={styleDay}>{"Terça".toUpperCase()}</span>;
  } else if (props.day === "Wed") {
    return <span style={styleDay}>{"Quarta".toUpperCase()}</span>;
  } else if (props.day === "Thu") {
    return <span style={styleDay}>{"Quinta".toUpperCase()}</span>;
  } else if (props.day === "Fri") {
    return <span style={styleDay}>{"Sexta".toUpperCase()}</span>;
  } else if (props.day === "Sat") {
    return <span style={styleDay}>{"Sábado".toUpperCase()}</span>;
  }
};

export const GetIcon = props => {
  const styleIcon = {
    fontSize: `${props.size}`,
    marginLeft: `${props.marginLeft}`
  };
  // ----------- tornado -----------
  if (props.icon === 0) {
    return <WiTornado style={styleIcon} />;
    // ----------- tempestade tropical -----------
  } else if (props.icon === 1) {
    return <WiDayThunderstorm style={styleIcon} />;
    // ----------- furacão -----------
  } else if (props.icon === 2) {
    return <WiHurricane style={styleIcon} />;
    // ----------- tempestade severa -----------
  } else if (props.icon === 3) {
    return <WiThunderstorm style={styleIcon} />;
    // ----------- tempestade -----------
  } else if (props.icon === 4) {
    return <WiThunderstorm style={styleIcon} />;
    // ----------- chuva com neve -----------
  } else if (props.icon === 5) {
    return <WiSnow style={styleIcon} />;
    // ----------- chuva de granizo -----------
  } else if (props.icon === 6) {
    return <WiSleet style={styleIcon} />;
    // ----------- chuva de granizo -----------
  } else if (props.icon === 7) {
    return <WiSleet style={styleIcon} />;
    // ----------- chuva leve e  fria -----------
  } else if (props.icon === 8) {
    // ----------- chuva leve -----------
    return <WiRainMix style={styleIcon} />;
    // ----------- chuva leve e  fria -----------
  } else if (props.icon === 9) {
    return <WiRainMix style={styleIcon} />;
    // ----------- chuva fria -----------
  } else if (props.icon === 10) {
    return <WiRain style={styleIcon} />;
    // ----------- shower -----------
  } else if (props.icon === 11) {
    return <WiShowers style={styleIcon} />;
    // ----------- rain -----------
  } else if (props.icon === 12) {
    return <WiRain style={styleIcon} />;
    // ----------- snow  -----------
  } else if (props.icon === 13) {
    return <WiSnow style={styleIcon} />;
    // ----------- snow   -----------
  } else if (props.icon === 14) {
    return <WiSnow style={styleIcon} />;
    // ----------- snow   -----------
  } else if (props.icon === 15) {
    return <WiSnowWind style={styleIcon} />;
    // ----------- snow   -----------
  } else if (props.icon === 16) {
    return <WiSnowWind style={styleIcon} />;
    // ----------- granizo   -----------
  } else if (props.icon === 17) {
    return <WiHail style={styleIcon} />;
    // ----------- granizo   -----------
  } else if (props.icon === 18) {
    return <WiSleet style={styleIcon} />;
    // ----------- poeira   -----------
  } else if (props.icon === 19) {
    return <WiDust style={styleIcon} />;
    // ----------- nevoreiro   -----------
  } else if (props.icon === 20) {
    return <WiFog style={styleIcon} />;
    // ----------- Neblina   -----------
  } else if (props.icon === 21) {
    return <WiDayHaze style={styleIcon} />;
    // ----------- Smoke   -----------
  } else if (props.icon === 22) {
    return <WiSmoke style={styleIcon} />;
    // ----------- blustery = tempestade -----------
  } else if (props.icon === 23) {
    return <WiStormShowers style={styleIcon} />;
    // ----------- ventania -----------
  } else if (props.icon === 24) {
    return <WiWindy style={styleIcon} />;
    // ----------- dia frio -----------
  } else if (props.icon === 25) {
    return <WiSnowflakeCold style={styleIcon} />;
    // ----------- nublado -----------
  } else if (props.icon === 26) {
    return <WiCloudy style={styleIcon} />;
    // ----------- noite bem nublado -----------
  } else if (props.icon === 27) {
    return <WiNightCloudy style={styleIcon} />;
    // mostly cloudy (day)
  } else if (props.icon === 28) {
    return <WiDayCloudy style={styleIcon} />;
    // partly cloudy (night)
  } else if (props.icon === 29) {
    return <WiNightCloudy style={styleIcon} />;
    // partly cloudy (day)
  } else if (props.icon === 30) {
    return <WiDayCloudy style={styleIcon} />;
    // clear (night)
  } else if (props.icon === 31) {
    return <WiNightClear style={styleIcon} />;
    // sunny
  } else if (props.icon === 32) {
    return <WiDaySunny style={styleIcon} />;
    // fair (night)
  } else if (props.icon === 33) {
    return <WiNightClear style={styleIcon} />;
    // fair (day)
  } else if (props.icon === 34) {
    return <WiDaySunny style={styleIcon} />;
    // mixed rain and hail
  } else if (props.icon === 35) {
    return <WiRainMix style={styleIcon} />;
    // hot
  } else if (props.icon === 36) {
    return <WiHot style={styleIcon} />;
    // isolated thunderstorms
  } else if (props.icon === 37) {
    return <WiThunderstorm style={styleIcon} />;
    // scattered thunderstorms
  } else if (props.icon === 38) {
    return <WiThunderstorm style={styleIcon} />;
    // scattered showers (day)
  } else if (props.icon === 39) {
    return <WiDayThunderstorm style={styleIcon} />;
    // heavy rain
  } else if (props.icon === 40) {
    return <WiRain style={styleIcon} />;
    // scattered snow showers (day)
  } else if (props.icon === 41) {
    return <WiDayRain style={styleIcon} />;
    // heavy snow
  } else if (props.icon === 42) {
    return <WiSnowWind style={styleIcon} />;
    // blizzard
  } else if (props.icon === 43) {
    return <WiSnowWind style={styleIcon} />;
    // not available
  } else if (props.icon === 44) {
    return <WiCelsius style={styleIcon} />;
    // scattered showers (night)
  } else if (props.icon === 45) {
    return <WiNightShowers style={styleIcon} />;
    //scattered snow showers (night)
  } else if (props.icon === 46) {
    return <WiNightSnowWind style={styleIcon} />;
    // scattered thundershowers
  } else if (props.icon === 47) {
    return <WiRain style={styleIcon} />;
  }
};
