import styled from "styled-components";

export const PlayerContainer = styled.div`
 display: flex;
 align-items: center;
 justify-content: space-between;
 background-color: #f8f8f8;
 margin: 20px 0;
 border-radius: 20px;
 padding: 10px;
 &:hover {
    background-color: #e0e0e0;
    cursor: pointer;
 }
`;

export const WarpperImage = styled.div`
 display: flex;
 align-items: center;
 gap: 7px;
`;

export const Picture = styled.img`
 width: 50px;
 height: 50px;
 border-radius: 50%;
`;

export const Score = styled.span`
  font-size: normal;
  font-weight: 700;
`;
