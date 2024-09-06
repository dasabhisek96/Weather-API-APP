'use client'
import Image from 'next/image'
import getWeather from '../../utils'
import { CurrentWeather, Daily, Header } from '../components'
import WeeklyWeather from '@/components/weeklyWeather';
import { useState, useEffect, useMemo } from 'react'
import { DataType } from '../../types';
import { Typography } from '@mui/material';

export default function Home() {
  const [data, setData] = useState<DataType>();
  return (
    <>
      <Header setData={setData} />
      {data ? (
        <>
          <CurrentWeather currentData={data?.currentConditions!} data={data} />
          <Daily hourlyData={data?.days[0].hours!} />
          <WeeklyWeather weekData={data?.days!} />
        </>
      ) : (
        <div className=" w-full relative">
          <Typography variant='h4' className='xl:absolute xl:top-44 xl:left-64'fontSize={{xs:"20px",sm:30}} color="white">There's not any data Please enter city name</Typography>
        </div>
      )}

    </>
  )
}
