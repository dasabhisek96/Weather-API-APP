export interface CurrentConditions{
    cloudcover:number;
    conditions:string;
    datetime:string;
    datetimeEpoch:Date;
    dew:number;
    feelslike:number;
    humidity:number;
    icon:string;
    moonphase:number;
    precip:number | null;
    preciptype:number | null;
    precipprob:number;
    pressure:number;
    snow:number;
    snowdepth:number;
    solarenergy:number;
    solarradiation:number;
    source:string;
    sunrise:string;
    sunriseEpoch:Date;
    sunsetEpoch:Date;
    sunset:string;
    temp:number;
    uvindex:number;
    visibility:number;
    winddir:number;
    windgust:number | null;
    windspeed:number;
    stations:string[]
}

export interface HoursCondetion{
    cloudcover:number;
    conditions:string;
    datetime:string;
    datetimeEpoch:Date;
    description:string;
    dew:number;
    feelslike:number;
    humidity:number;
    precip:number;
    precipcover:number;
    precipprob:number;
    preciptype:number | null;
    pressure:number;
    icon:string;
    severerisk:number;
    snow:number;
    snowdepth:number;
    solarenergy:number;
    solarradiation:number;
    source:string;
    temp:number;
    uvindex:number;
    visibility:number;
    winddir:number;
    windgust:number | null;
    windspeed:number;   
    stations:string[]
}

export interface DaysCondetion{
    cloudcover:number;
    conditions:string;
    datetime:string;
    datetimeEpoch:Date;
    description:string;
    dew:number;
    feelslike:number;
    feelslikemax:number;
    feelslikemin:number;
    hours:HoursCondetion[];
    humidity:number;
    precip:number;
    precipcover:number;
    precipprob:number;
    preciptype:number | null;
    pressure:number;
    icon:string;
    severerisk:number;
    snow:number;
    snowdepth:number;
    solarenergy:number;
    solarradiation:number;
    source:string;
    sunrise:string;
    sunriseEpoch:Date;
    sunsetEpoch:Date;
    sunset:string;
    temp:number;
    tempmax:number;
    tempmin:number;
    uvindex:number;
    visibility:number;
    winddir:number;
    windgust:number | null;
    windspeed:number;
    stations:string[]
}

export interface DataType {
    address:string;
    currentConditions:CurrentConditions;
    latitude:number;
    longitude:number;
    queryCost:number;
    resolvedAddress:string;
    timezone:string;
    tzoffset:number;
    description:string;
    days:DaysCondetion[]
}

export type SearchProps={
    setCity:(value:DataType)=> void;
    setLocation:(value:DataType)=> void;
}

export type SearchBarProps={
    setData : (value:DataType) =>void;
    setLocation : (value:DataType) =>void;
}

export interface HeaderProps {
    setData :(value:DataType) =>void;   
}

export interface FormValues {
    city: string;
};

export interface CurrentWeatherProps{
    currentData:CurrentConditions ;
    data :DataType;
}

export interface DailyProps{
    hourlyData :HoursCondetion[] ;
}

export interface WeeklyProps{
    weekData:DaysCondetion[];
}

export interface TempretureProps{
    Data:HoursCondetion[];
}

export interface WindProps{
    Data:HoursCondetion[];
}

export interface HumindityProps{
    Data:HoursCondetion[];
}
