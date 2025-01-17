import React from "react";
import { PlayerContainer, WarpperImage, Picture, Score } from "./PlayerStyle";
import profile from "../../assets/profile-icon-upload.png";

interface PlayerProps {
  displayName: string;
  picture: string;
  score: number;
  position: number;
}

const Player: React.FC<PlayerProps> = ({
  displayName,
  picture,
  position,
  score,
}) => {
  return (
    <PlayerContainer position={position}>
      <WarpperImage>
        <Picture src={picture || profile} alt={displayName} />
        {displayName}
      </WarpperImage>
      <Score>{score}</Score>
    </PlayerContainer>
  );
};

export default Player;
