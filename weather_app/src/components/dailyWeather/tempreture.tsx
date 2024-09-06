'use client'

import { Box, Typography, Grid } from "@mui/material"
import Image from "next/image"
import { TempretureProps } from "../../../types"

const Tempreture:React.FC<TempretureProps> = ({Data}) => {
    return (
        <Box>
            {Data.map((data,i)=>{  
                return(
            <li className="relative inline-block h-[50px] w-[120px] p-1" key={data.datetime}>
                <Typography variant="h5" color="white" >{parseFloat(data.datetime)}:00 {i<= 11?"Am":"Pm"}</Typography>
                <Image src={ `/animated/${data.icon}.svg`}  alt="ss" width={50} height={70} />
                <Typography variant="h5" color="white" className="ml-4 pt-1">{data.temp}&#xb0;</Typography>
            </li>    
                )
            })}
        </Box>
    )
}

export default Tempreture