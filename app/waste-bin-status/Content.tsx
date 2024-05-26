import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface BinData {
  node_id: string; // note that this is node_id not MongoDB objectId
  temperature: number;
  humidity: number;
  gas_concentration: number; // gas_concentration
  distance_level : number;
  type : string;
  timestamp : Date;
  lastEmptied : Date;
  location : String;
}

const Content: React.FC = () => {
  const [bins, setBins] = useState<BinData[]>([]);

  // Need API to Take Latest Value of Each Bin Sensors
  // Need API to check all available Bin (REGISTERED)

  // Combine API that do both V
  const getAllBinData = async () => {
    try {
      const response = await axios.get('/api/bin/getAllBinData'); // Replace with your API endpoint
      // will return bin with its node_id location and type, lastEmptied Date if not empty
      // Also return sensors related data
      const dataArray = await response.data.payload; 
      setBins(dataArray);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const [showDashboard, setShowDashboard] = useState<boolean>(false);

  const toggleDashboard = () => {
    setShowDashboard(!showDashboard);
  };

  useEffect(() => {
    getAllBinData(); 
  }, []);

  const sortedBins = bins.slice().sort((a, b) => {
    const valueA = a.distance_level / 15 * 100;
    const valueB = b.distance_level / 15 * 100;
    return valueB - valueA;
  });

  const GRAFANA_DASHBOARD_URL = "http://localhost:3030";
  const dashboardName = "zerowastify-sensors-data";
  const GRAFANA_ID = "cb34267c-4cfd-40f9-ad35-d18faa10cead";


  const currentTime = new Date();
  const timeTo = new Date(currentTime.getTime() + 8 * 60 * 60 * 1000);
  const timeFrom = Math.floor(currentTime.getTime() + (8 * 60 * 60 * 1000) - (5 * 60 * 1000));


  return (
    <>
      <div className="text-center">
        <h1 className="text-4xl font-medium tracking-wide">Bin Status Tracker</h1>
      </div>
      <div className="flex flex-col gap-y-6 lg:grid lg:grid-cols-2 lg:gap-x-14 lg:gap-y-14 lg:pt-9 lg:px-32 ">
        {bins.map((bin) => (
          <div key={bin.node_id} className="rounded-lg bg-[#FAF4DA] p-6 flex flex-col lg:justify-between text-center font-medium w-full">
            <h3 className="text-[#1E3E5A] text-2xl lg:text-3xl">Bin {bin.type}</h3>
            <p className="pt-3 text-[#68859E] text-lg lg:text-xl">Latest Reading</p>
            <div className="pt-4 lg:py-8 flex justify-between">
              <p className="text-[#002B52] text-xl lg:text-2xl">Temperature: <span>{bin.temperature}°C</span></p>
              <p className="text-[#002B52] text-xl lg:text-2xl">Humidity: <span>{bin.humidity}%</span></p>
              <p className="text-[#002B52] text-xl lg:text-2xl">Odor Status: <span>{bin.gas_concentration <= 1000 ? ("Neutral") : ("Moderate")}</span></p>
              <p className="text-[#002B52] text-xl lg:text-2xl">Waste Level: <span>{(bin.distance_level/15.2*100).toFixed(2)}</span></p>
            </div> 
          </div>
        ))}
      </div>
      <div className="text-center lg:pt-20">
        
        {
          showDashboard && (
            <iframe
              className="self-center"
              src={`${GRAFANA_DASHBOARD_URL}/d/${GRAFANA_ID}/${dashboardName}?orgId=1&from=${timeFrom}&to=${timeTo}&panelId=1`}
              width="1750"
              height="500"
            >
            </iframe>
          )
        }
        
        <button
          onClick={toggleDashboard}
          className="mt-6 lg:px-16 lg:py-4 rounded-lg bg-[#517697] text-[#FAF4DA] font-semibold text-xl"
        >
          {showDashboard ? 'Hide Dashboard' : 'View Dashboard'}
        </button>
      </div>
      <div className="text-center lg:pt-32 lg:px-52">
        <h1 className="text-4xl font-medium lg:pb-20">Best Collection Schedule & Route</h1>
        <div className="lg:gap-x-20 lg:grid lg:grid-cols-2 lg:gap-y-20 flex lg:pt-18">
        {sortedBins.length > 0 && (
          sortedBins.map((bin, index) => (
            <div className="w-full rounded-lg bg-[#FAF4DA] p-16" key={bin.node_id}>
              <h1 className="font-medium text-4xl">Bin {bin.type}</h1>
              <p className="pt-3 text-[18px] text-[#68859E]">Last Collection Date </p>
              <h2 className="text-[20px] pt-1 font-medium">{new Date(bin.lastEmptied).toLocaleString("en-US", {
                weekday: "long",
                day: "numeric",
                month: "short",
                year: "numeric",
                hour: "numeric",
                minute: "numeric",
              })}</h2>
              <p className="text-[18px] text-[#68859E] pt-3">Collection Priority Number</p>
              <p className="text-[20px] font-medium">{index + 1}</p>
              <p className="text-[18px] text-[#68859E] pt-3">Location</p>
              <p className="text-[20px] font-medium">{bin.location}</p>
            </div>       
          ))
        )
        }
      </div>
    </div>
  </>
  );
};

export default Content;