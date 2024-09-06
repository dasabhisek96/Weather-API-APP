'use client';

import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import { HumindityProps } from "../../../types";

const Humindity: React.FC<HumindityProps> = ({ Data }) => {
    return (
        <Box>
            {Data.map((data, i) => (

                <li className="relative inline-block h-[50px] w-[120px] p-1">
                    <Typography variant="h5" color="white" >{parseFloat(data.datetime)}:00 {i <= 11 ? "Am" : "Pm"}</Typography>
                    <Image src={`/animated/humidity.svg`} alt="ss" width={70} height={70} />
                    <Typography variant="h6" color="white" className=" pt-1">{data.humidity}%</Typography>
                </li>
            ))}
        </Box>
    )
}

export default Humindity;