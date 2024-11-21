export interface Player {
  id: string;
  name: string;
  avatar: string;
  rank: number;
  wins: number;
  losses: number;
  memecoin: string;
  tokenBalance: number;
}

export interface Battle {
  id: string;
  players: [Player, Player];
  status: "waiting" | "in-progress" | "completed";
  stakes: number;
  winner?: Player;
  startTime: Date;
}
