import axios from 'axios'
import React, { useEffect, useState } from 'react'

interface userScore {
    name : string,
    total : number,
}


const Content = () => {

    const [userScoreList, setuserScoreList] = useState<userScore[]>([]);

    const getTop5User = async () => {
        try {
            const result = await axios.get("api/users/top-5");
            const newArray : userScore[] = [];
            if (result.data.payload && Array.isArray(result.data.payload)) {
                
                result.data.payload.forEach((user : any) => {
                    const userScore: userScore = {name : user.firstName + " " + user.lastName, total: user.total};
                    newArray.push(userScore);
                })
                setuserScoreList(newArray);                   
            }
        } catch (error) {
            console.error("Error fetching user data:", error);
        }
    };
 
    useEffect(() => {
        getTop5User();
    }, []);
    
    
  return (
    <div className="lg:py-[103px]">
        <div className="text-center">
            <h1 className="font-semibold lg:text-[36px] py-6">Your TOP Contributor Leaderboards</h1>
        </div>
        <div className="lg:pt-[22px] flex flex-col gap-y-[1px] lg:px-[132px] text-[#E1E1E1]">
            <div className="lg:py-[24px] flex flex-row justify-between text-[20px] font-bold lg:px-[57px] bg-[#101010] px-3 py-2">
                <h2>RANK</h2>
                <h2>NAME</h2>
                <h2>SCORE</h2>
            </div>
            <div className="flex flex-row justify-between text-[20px] lg:px-[65px] lg:py-[28px] bg-[#3A2F05] px-3 py-2">
                <h2>001</h2>
                {
                    userScoreList.length > 0 ? 
                    <>
                    <h2>{userScoreList[0].name}</h2>
                    <h2>{userScoreList[0].total}</h2>
                    </> : <>
                    <h2>N/A</h2>
                    <h2>N/A</h2>
                    </>
                }
                
            </div>
            <div className="flex flex-row justify-between text-[20px] lg:px-[65px] lg:py-[28px] bg-[#292E37] px-3 py-2">
                <h2>002</h2>
                {
                    userScoreList.length > 1 ? 
                    <>
                    <h2>{userScoreList[1].name}</h2>
                    <h2>{userScoreList[1].total}</h2>
                    </> : <>
                    <h2>N/A</h2>
                    <h2>N/A</h2>
                    </>
                }
            </div>
            <div className="flex flex-row justify-between text-[20px] lg:px-[65px] lg:py-[28px] bg-[#271304] px-3 py-2">
                <h2>003</h2>
                {
                    userScoreList.length > 2 ? 
                    <>
                    <h2>{userScoreList[2].name}</h2>
                    <h2>{userScoreList[2].total}</h2>
                    </> : <>
                    <h2>N/A</h2>
                    <h2>N/A</h2>
                    </>
                }
            </div>
            <div className="flex flex-row justify-between text-[20px] lg:px-[65px] lg:py-[28px] bg-[#0A0A0A] px-3 py-2">
                <h2>004</h2>
                {
                    userScoreList.length > 3 ? 
                    <>
                    <h2>{userScoreList[3].name}</h2>
                    <h2>{userScoreList[3].total}</h2>
                    </> : <>
                    <h2>N/A</h2>
                    <h2>N/A</h2>
                    </>
                }
            </div>
            <div className="flex flex-row justify-between text-[20px] lg:px-[65px] lg:py-[28px] bg-[#101010] px-3 py-2">
                <h2>005</h2>
                {
                    userScoreList.length > 4 ? 
                    <>
                    <h2>{userScoreList[4].name}</h2>
                    <h2>{userScoreList[4].total}</h2>
                    </> : <>
                    <h2>N/A</h2>
                    <h2>N/A</h2>
                    </>
                }
            </div>
        </div>
    </div>
  )
}

export default Content