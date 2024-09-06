'use client'

import { LocationOn, Search } from "@mui/icons-material";
import { Box, Button, Grid, TextField, Typography, styled } from "@mui/material";
import SearchBar from "./input/searchBar";
import { DataType, HeaderProps } from "../../types";
import { useState } from "react";



const Header: React.FC<HeaderProps> = ({ setData }) => {

  const [location, setLoacation] = useState<DataType>()

  return (
    <>
      <div className="xl:flex relative sm:justify-between">
        <div className="flex-none xl:w-32 sm:py-1 sm:w-full">
          <Typography variant="h5" className="weather">Weather.</Typography>
        </div>
        <div className="xl:flex-initial  sm:hidden xl:w-32 ">
          {
            location?.resolvedAddress ? (
              <div className="flex mt-3 gap-2">
                <LocationOn sx={{ color: "white", fontSize: "20px" }} />
                <Typography variant="h5" color="white" fontSize={15} whiteSpace="nowrap" > {location?.resolvedAddress}</Typography>
              </div>
            ) : (
              <Typography variant="h5" color="white" fontSize={15} whiteSpace="nowrap" >Search your location</Typography>
            )
          }
        </div>
        <div className="xl:flex-initial  xl:absolute sm:py-1 sm:w-full xl:left-[400px]">
          <SearchBar setData={setData} setLocation={setLoacation} />
        </div>
        <div className="xl:hidden sm:w-full py-1">
          {
            location?.resolvedAddress ? (
              <div className="flex mt-3 gap-2">
                <LocationOn sx={{ color: "white", fontSize: "20px" }} />
                <Typography variant="h5" color="white" fontSize={15} whiteSpace="nowrap" > {location?.resolvedAddress}</Typography>
              </div>
            ) : (
              <Typography variant="h5" color="white" fontSize={15} whiteSpace="nowrap" >Search your location</Typography>
            )
          }
        </div>
      </div>
    </>
  )
}

export default Header;