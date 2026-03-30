
import React, { useEffect, useState } from 'react'
import { boardData } from '../utils/mockData'
import { collection, getDocs } from "firebase/firestore";
import { db } from '../utils/firebase';

interface RankInterface {
  id: string,
  rank: number,
  name: string,
  score: number

}

const Leaderboard = () => {

  const [ranks, setRanks] = useState<RankInterface[]>();

  const getRanks = async () => {
    const data = await getDocs(collection(db, "ranks"));

    const rank = data.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));

    console.log(rank);
    return rank;
  };

  useEffect(() => {
    getRanks()
  },[])

  return (
    <div className='min-h-[80vh] flex flex-col items-center justify-center'>
      <div>
        <h1>Leaderboard</h1>
      </div>

      <div>
        <table>
          <thead>
            <tr>
              <th>Rank</th>
              <th>Name</th>
              <th>Score</th>
            </tr>
          </thead>

          <tbody>
            {
              boardData.map((data, ind) => (

                <tr>
                  <td>{data.rank}</td>
                  <td>{data.name}</td>
                  <td>{data.score}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Leaderboard
