'use client'
import { Typography, Tooltip } from "@mui/material";

import { Cloud, WaterDrop, WindPower } from "@mui/icons-material";
import Image from "next/image";
import { CurrentWeatherProps } from "../../types";

const CurrentWeather = ({ currentData, data }: CurrentWeatherProps) => {
    const d = new Date();

    const options: Intl.DateTimeFormatOptions = {
        weekday: "long",
        month: "long",
        day: "numeric",

    };

    return (
        <div className="flex justify-between items-center xl:pt-12">
            <div className="flex-initial  sm:mt-5">
                <Typography variant="h4" className="todayWeather xl:text-2xl sm:text-3xl whitespace-nowrap pb-3 ">Todays Weather Forecast</Typography>
                <Typography variant="h5" mt={1} className="text-white text-sm ">{d.toLocaleDateString("en-US", options)}, {d.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" })}</Typography>
                <Typography variant="h4" color="white" className="text-xl xl:hidden">{currentData.conditions}</Typography>
                <Typography variant="h2" color="white">{currentData.temp}&#xb0;</Typography>
                <Typography variant="subtitle2" color="white">feels {currentData.feelslike}&#xb0;</Typography>
                <div className="xl:hidden sm:block sm:pb-2">
                    <Typography variant="subtitle1" color="white" ><WaterDrop fontSize="small" /> humidity :{currentData.humidity}</Typography>
                    <Typography variant="subtitle1" color="white"><WindPower fontSize="small" /> wind : {currentData.windspeed} km/h</Typography>
                </div>
            </div>
            <div className="xl:flex-initial xl:pr-10">
                <div className="xl:flex sm:block ">
                    <div className="">
                        <Tooltip title={data.description}>
                            <Image src={`/animated/${currentData.icon}.svg`} alt="sss"
                                width={200} height={200} className="mt-5 "
                            />
                        </Tooltip>
                    </div>

                    <div className="pt-20 sm:hidden">
                        <Typography variant="h4" color="white" >{currentData.conditions}</Typography>
                        <Typography variant="subtitle1" color="white" ><WaterDrop fontSize="small" /> humidity :{currentData.humidity}%</Typography>
                        <Typography variant="subtitle1" color="white"><WindPower fontSize="small" /> wind : {currentData.windspeed} km/h</Typography>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CurrentWeather;