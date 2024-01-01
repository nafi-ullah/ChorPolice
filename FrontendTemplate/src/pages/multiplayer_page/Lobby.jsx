import "./Lobby.css";
import avatars from "../../components/avatars";
import { Button } from "antd";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Lobby() {

    const userData = useLocation().state;
    const navigate = useNavigate();

    const [players , setPlayers] = useState([

        {avatar: 1, username: "mehraj", isHost: true},
        {avatar: 2, username: "amit", isHost: false},
        {avatar: 3, username: "sakib", isHost: false},
        {avatar: 4, username: "akib", isHost: false},

    ]);

    return <>
        <center className="lobby-code">LOBBY CODE</center>
        <center className="lobby-code">{userData.roomId}</center>
        <div className="lobby-container">
            {players.map((player) => {
                return <div className="lobby-card"><img src={avatars[player.avatar]} alt="" /> <span> {player.username} </span> {!player.isHost && (<Button onClick={() => {}}> Kick </Button>) }</div>;
            })}        
        </div>   
        <center><Button onClick={
            navigate("/multiplayer", {state : {
                ...userData,
                players: players,
            }})
        }> Start Game </Button></center>
    </>;

}