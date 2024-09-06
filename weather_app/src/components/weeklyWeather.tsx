'use client'

import { Box, Grid, Stack, Typography } from "@mui/material"
import { motion } from "framer-motion"
import Image from "next/image"
import { WeeklyProps } from "../../types"

const WeeklyWeather: React.FC<WeeklyProps> = ({ weekData }) => {

    return (
        <Box className=" pt-12">
            <Typography variant="h4" className="weekly" pb={3}>Weekly Forecast</Typography>
            <Grid container gap={{ sm: 9.5 }} pr={{sm:2}} className="sm:hidden">
                {

                    weekData.map((data, i) => {

                        const monthDay: Intl.DateTimeFormatOptions = {
                            month: "long",
                            day: "numeric",
                        };

                        const weekDay: Intl.DateTimeFormatOptions = {
                            weekday: "short",
                        };

                        const d = new Date(data.datetime);
                        return (

                            i >= 1 && i <= 7 ? (
                                <Grid item key={i} sm={1} className="">
                                    <div className="w-[170px] h-[210px] rounded-2xl bg-gray-900 bg-opacity-60 p-3 week-item">
                                        <Stack direction="row" justifyContent="space-between">
                                            <Typography variant="h6" color="white" fontSize={17}>{d.toLocaleDateString("en-US", monthDay)}</Typography>
                                            <Typography variant="h6" color="white" fontSize={17}>{d.toLocaleDateString("en-US", weekDay)}</Typography>
                                        </Stack>
                                        <div className="flex items-end justify-center">
                                            <Image src={`/animated/${data.icon}.svg`} alt="wind" width={60} height={60} />
                                        </div>
                                        <Typography variant="h6" color="white">{data.temp}&#xb0;</Typography>
                                        <Typography variant="h6" color="white" fontSize="15px" fontWeight={700}>{data.conditions}</Typography>
                                        <Typography variant="h6" color="white" fontSize="12px" fontWeight={200}>wind:16km/h</Typography>
                                        <Typography variant="h6" color="white" fontSize="12px" fontWeight={200}>Humindity:77%</Typography>
                                    </div>
                                </Grid>
                            ) : (
                                null
                            )


                        )
                    })
                }

            </Grid>
            <Box pb={5} className="sm:block xl:hidden md:hidden">
                <motion.div onViewportEnter={() => { }}>
                    <div className=" h-[240px] min-w-full  overflow-x-auto overflow-y-hidden ">

                        <Grid container className="w-[800px] whitespace-nowrap gap-x-2">

                            {

                                weekData.map((data, i) => {

                                    const monthDay: Intl.DateTimeFormatOptions = {
                                        month: "long",
                                        day: "numeric",
                                    };

                                    const weekDay: Intl.DateTimeFormatOptions = {
                                        weekday: "short",
                                    };
                                    const d = new Date(data.datetime);
                                    return (

                                        i >= 1 && i <= 7 ? (
                                            <Grid item key={i} sm={1} className="">
                                                <div className="w-[150px] h-[210px] rounded-2xl bg-gray-900 bg-opacity-60 p-3 week-item">
                                                    <Stack direction="row" justifyContent="space-between">
                                                        <Typography variant="h6" color="white" fontSize={16}>{d.toLocaleDateString("en-US", monthDay)}</Typography>
                                                        <Typography variant="h6" color="white" fontSize={13}>{d.toLocaleDateString("en-US", weekDay)}</Typography>
                                                    </Stack>
                                                    <div className="flex items-end justify-center">
                                                        <Image src={`/animated/${data.icon}.svg`} alt="wind" width={60} height={60} />
                                                    </div>
                                                    <Typography variant="h6" color="white">{data.temp}&#xb0;</Typography>
                                                    <Typography variant="h6" color="white" fontSize="15px" fontWeight={700}>{data.conditions}</Typography>
                                                    <Typography variant="h6" color="white" fontSize="12px" fontWeight={200}>wind:16km/h</Typography>
                                                    <Typography variant="h6" color="white" fontSize="12px" fontWeight={200}>Humindity:77%</Typography>
                                                </div>
                                            </Grid>
                                        ) : (
                                            null
                                        )


                                    )
                                })
                            }
                        </Grid>

                    </div>
                </motion.div>
            </Box>
        </Box >
    )
}

export default WeeklyWeather