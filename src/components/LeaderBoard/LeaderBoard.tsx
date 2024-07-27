import React, { useState, useEffect } from "react";
import { LeaderBoardConatiner, Heading } from "./LeaderBoardStyle";
import profile from "../../assets/profile-icon-upload.png";
import Player from "../Player/Player";
import Joy from "../../assets/Joy.png";
import Jone from "../../assets/Jone.png";
import Quinn from "../../assets/Quinn.png";
import Victoria from "../../assets/Victoria.png";
import Sheena from "../../assets/Sheena.png";
import Charlene from "../../assets/Charlene.png";
import Leonababy from "../../assets/Leonababy.png";
import Sunny from "../../assets/Sunny.png";
import InWord from "../../assets/Inword.png";
import Dophine from "../../assets/Dophine.png";

interface PlayerData {
  userID: string;
  displayName: string;
  picture: string;
  score: number;
}

const initialPlayers: PlayerData[] = [
  { userID: "u-1", displayName: "Jone", picture: Jone, score: 46200 },
  { userID: "u-2", displayName: "Victoria", picture: Victoria, score: 46200 },
  { userID: "u-3", displayName: "Joy", picture: Joy, score: 46200 },
  { userID: "u-4", displayName: "Quinn", picture: Quinn, score: 33400 },
  { userID: "u-5", displayName: "Sheenalo", picture: Sheena, score: 46200 },
  { userID: "u-6", displayName: "Charlene", picture: Charlene, score: 30800 },
  { userID: "u-7", displayName: "LeonaBaby", picture: Leonababy, score: 22300 },
  { userID: "u-8", displayName: "Sunny", picture: Sunny, score: 17800 },
  { userID: "u-9", displayName: "ImWord", picture: InWord, score: 17300 },
  { userID: "u-10", displayName: "Dophine", picture: Dophine, score: 19400 },
];

const LeaderBoard: React.FC = () => {
  const [players, setPlayers] = useState<PlayerData[]>(initialPlayers);
  console.log(players);

  useEffect(() => {
    const interval = setInterval(() => {
      setPlayers((prevPlayers) =>
        prevPlayers?.map((player) => ({
          ...player,
          score: player.score + Math.floor(Math.random() * 100),
        }))
      );
    }, 1000);

    return () => clearInterval(interval);
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
          position={idx}
        />
      ))}
    </LeaderBoardConatiner>
  );
};

export default LeaderBoard;
