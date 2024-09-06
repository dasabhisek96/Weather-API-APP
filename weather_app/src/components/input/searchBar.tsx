'use client'

import { useState } from "react";
import SearchInput from "./search";
import { Box, Button, styled } from "@mui/material";
import { Search } from "@mui/icons-material";
import { DataType, SearchBarProps } from "../../../types";
const StyledInput = styled(Box)(({ theme }) => ({
    display: "flex",
    height: "46px",
    backgroundColor: "transparent",
    borderRadius: 10,

    [theme.breakpoints.down('sm')]: {
        marginTop: 0,
        width: "100%"
    }

}))
const SearchBar:React.FC<SearchBarProps> = ({setData,setLocation}) => {

    return (
        <StyledInput >
            <SearchInput  setCity={setData} setLocation={setLocation} />
        </StyledInput>
    )
}

export default SearchBar