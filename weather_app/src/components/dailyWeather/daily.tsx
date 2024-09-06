"use client";

import { Box, Typography, Tab, Tabs, Theme } from '@mui/material';
import { makeStyles, useTheme, } from "@material-ui/styles";
import { Thermostat, WindPower, Cloud, WaterDrop, BorderBottom } from '@mui/icons-material';
import { useState } from 'react';
import Tempreture from './tempreture';
import Wind from './wind';
import Humindity from './humindity';
import { motion } from 'framer-motion';
import { DailyProps } from '../../../types';


interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}



function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      className=''
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const Daily : React.FC<DailyProps> = ({hourlyData}) => {


  const [value, setValue] = useState<number>(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box className="xl:w-full h-[270px] bg-gray-800  xl:rounded-2xl sm:rounded-xl bg-opacity-80">
      <Box sx={{ borderTop: 0, borderColor: 'divider', ml: 1,}} >
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" sx={{height:"50px"}}>
          <Tab icon={<Thermostat fontSize='small' />} label="Tempreture" className='text-white' {...a11yProps(0)} sx={{ display: 'flex', alignItems: 'center', flexDirection: 'row', justifyContent: 'center',pl:2 }} />
          <Tab label="Wind" className='text-white'  {...a11yProps(1)} icon={<WindPower fontSize='small' />} sx={{ display: 'flex', alignItems: 'center', flexDirection: 'row', justifyContent: 'center',px:7 }} />
          <Tab label="Humidity" className='text-white' {...a11yProps(2)} icon={<WaterDrop fontSize='small' />} sx={{ display: 'flex', alignItems: 'center', flexDirection: 'row', justifyContent: 'center' }} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0} >
        <motion.div onViewportEnter={() => { }}>
         
          <div className=" h-[170px] w-full overflow-x-auto overflow-y-hidden">
            <ul className="w-[2400px] whitespace-nowrap ">
              <Tempreture Data={hourlyData} />
            </ul>
          </div>
        </motion.div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>

        <motion.div onViewportEnter={() => { }}>
          <div className=" h-[165px] w-full overflow-x-auto overflow-y-hidden">
            <ul className="w-[2400px] whitespace-nowrap ">
              <Wind Data={hourlyData}/>
            </ul>
          </div>
        </motion.div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <motion.div onViewportEnter={() => { }}>
          <div className=" h-[165px] w-full overflow-x-auto overflow-y-hidden">
            <ul className="w-[2400px] whitespace-nowrap ">
              <Humindity  Data={hourlyData}/>
            </ul>
          </div>
        </motion.div>
      </CustomTabPanel>
    </Box>
  )
}

export default Daily