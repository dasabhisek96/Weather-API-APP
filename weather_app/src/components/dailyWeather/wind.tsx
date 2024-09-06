"use client";

import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import { WindProps } from "../../../types";



const Wind :React.FC<WindProps> = ({Data}) => {
    return (
        <Box>
             {Data.map((data,i)=>{
                   
                   return(
               <li className="relative inline-block h-[50px] w-[120px] p-1 gap-10">
                   <Typography variant="h5" color="white" >{parseFloat(data.datetime)}:00 {i<=11?"Am":"Pm"}</Typography>
                   <Image src={ `/animated/wind.svg`}  alt="ss" width={70} height={70} />
                   <Typography variant="h6" color="white" className=" pt-1">{data.windspeed} km/h</Typography>
               </li>    
                   )
               })}
        </Box>
    )
}

export default Wind;