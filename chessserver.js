const express = require("express");
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io")(server, {'pingInterval': 2000, 'pingTimeout': 600000});

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/chess.html");
});

app.use(express.static(__dirname));

const rooms = {};

io.on("connection", (socket) => {
    socket.on("new game", (game) => {
        socket.join(game);
        rooms[game] = {
            [socket.id]: "black"
        }
        console.log(rooms);
        socket.on("join game", (input) => {
            if (JSON.stringify(rooms).slice(JSON.stringify(rooms).indexOf(input),
            JSON.stringify(rooms).indexOf(input) + 84).includes("white")) {
                return socket.emit("full room");
            }
            if (input != game && Object.keys(rooms).includes(input)) {
                socket.join(input);
                io.to(input).emit("joined game", {
                   "black": Object.keys(rooms[input])[0],
                   "white": socket.id,
                   "code": input
                });
                delete rooms[game][socket.id];
                rooms[input] = {
                    [Object.keys(rooms[input])[0]]: "black",
                    [socket.id]: "white"
                }
                console.log(rooms);
                socket.on("start game", () => {
                    io.to(input).emit("started game");
                });
                socket.on("white", (piece) => {
                    io.to(input).emit("moveWhite", piece);
                    return true;
                });
                socket.on("whiteHit", (piece) => {
                    io.to(input).emit("moveWhiteHit", piece);
                    return true;
                });
                socket.on("whiteWinner", () => {
                    io.to(input).emit("whiteWinnerBoth");
                    return true;
                });
                socket.on("disconnect", () => {
                    delete rooms[input][socket.id];
                    socket.leave(game);
                    io.to(input).emit("disconnected");
                    console.log(rooms);
                });
            }
        });
        socket.on("black", (piece) => {
            io.to(game).emit("moveBlack", piece);
            return true;
        });
        socket.on("blackHit", (piece) => {
            io.to(game).emit("moveBlackHit", piece);
            return true;
        });
        socket.on("blackWinner", () => {
            io.to(game).emit("blackWinnerBoth");
            return true;
        });
        socket.on("start game", () => {
            io.to(game).emit("started game");
        });
    socket.on("disconnect", () => {
        delete rooms[game][socket.id];
        socket.leave(game);
        io.to(game).emit("disconnected");
        console.log(rooms);
    });
});
});

server.listen(process.env.PORT || 5500, "0.0.0.0", () => {
    console.log("listening on server");
});