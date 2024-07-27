import React, { useState, useEffect } from "react";
import { LeaderBoardConatiner, Heading } from "./LeaderBoardStyle";
import profile from "../../assets/profile-icon-upload.png";
import Player from "../Player/Player";

interface PlayerData {
  userID: string;
  displayName: string;
  picture: string;
  score: number;
}

const initialPlayers: PlayerData[] = [
  { userID: "u-1", displayName: "Jone", picture: profile, score: 46200 },
  { userID: "u-2", displayName: "Victoria", picture: profile, score: 46200 },
  { userID: "u-3", displayName: "Joy", picture: profile, score: 46200 },
  { userID: "u-4", displayName: "Quinn", picture: profile, score: 33400 },
  { userID: "u-5", displayName: "Sheenalo", picture: profile, score: 46200 },
  { userID: "u-6", displayName: "Charlene", picture: profile, score: 30800 },
  { userID: "u-7", displayName: "LeonaBaby", picture: profile, score: 22300 },
  { userID: "u-8", displayName: "Sunny", picture: profile, score: 17800 },
  { userID: "u-9", displayName: "ImWord", picture: profile, score: 17300 },
  { userID: "u-10", displayName: "Dophine", picture: profile, score: 15400 },
];

const LeaderBoard: React.FC = () => {
  const [players, setPlayers] = useState<PlayerData[]>(initialPlayers);
  console.log(players);

  useEffect(() => {
    setInterval(() => {
      setPlayers((prevPlayers) =>
        prevPlayers.map((player) => ({
          ...player,
          score: player.score + Math.floor(Math.random() * 100),
        }))
      );
    }, 1000);
  }, []);

  const sortedPlayers = [...players].sort((a, b) => b.score - a.score);

  return (
    <LeaderBoardConatiner>
      <Heading>LeaderBoard</Heading>
      {sortedPlayers?.map((player, idx) => (
        <Player
          key={player.userID}
          displayName={player.displayName}
          picture={player.picture || profile}
          score={player.score}
        />
      ))}
    </LeaderBoardConatiner>
  );
};

export default LeaderBoard;
