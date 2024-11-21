import { Player, Battle } from "./types";

export const mockPlayers: Player[] = [
  {
    id: "1",
    name: "DogeWarrior",
    avatar: "🐕",
    rank: 1,
    wins: 150,
    losses: 45,
    memecoin: "DOGE",
    tokenBalance: 5000,
  },
  {
    id: "2",
    name: "ShibaLegend",
    avatar: "🐶",
    rank: 2,
    wins: 130,
    losses: 50,
    memecoin: "SHIB",
    tokenBalance: 10000000,
  },
  // Add more mock players...
];

export const mockBattles: Battle[] = [
  {
    id: "1",
    players: [mockPlayers[0], mockPlayers[1]],
    status: "in-progress",
    stakes: 1000,
    startTime: new Date(),
  },
  // Add more mock battles...
];

// Mock API functions
export const mockApi = {
  async getCurrentPlayer(): Promise<Player> {
    return mockPlayers[0];
  },

  async getActiveBattles(): Promise<Battle[]> {
    return mockBattles.filter((b) => b.status !== "completed");
  },

  async joinBattle(battleId: string): Promise<Battle> {
    const battle = mockBattles.find((b) => b.id === battleId);
    if (!battle) throw new Error("Battle not found");
    return battle;
  },

  async createBattle(stakes: number): Promise<Battle> {
    const newBattle: Battle = {
      id: String(mockBattles.length + 1),
      players: [mockPlayers[0], mockPlayers[1]],
      status: "waiting",
      stakes,
      startTime: new Date(),
    };
    mockBattles.push(newBattle);
    return newBattle;
  },
};
