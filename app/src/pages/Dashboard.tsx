import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { Sword, Trophy, Coins, TrendingUp } from "lucide-react";
import { mockApi } from "../lib/mock-data";
import {
  StatCardProps,
  ActiveBattleCardProps,
  Battle,
  Player,
} from "../lib/types";

const StatCard = ({ icon: Icon, label, value, color }: StatCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className={`bg-gray-800 p-6 rounded-lg border-2 border-${color} shadow-lg`}
  >
    <div className="flex items-center space-x-4">
      <Icon className={`text-${color}`} size={24} />
      <div>
        <p className="text-gray-400">{label}</p>
        <p className="text-2xl font-bold">{value}</p>
      </div>
    </div>
  </motion.div>
);

const ActiveBattleCard = ({ battle }: ActiveBattleCardProps) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    className="bg-gray-800 p-4 rounded-lg border border-gray-700 hover:border-neon-green transition-colors"
  >
    <div className="flex justify-between items-center">
      <div className="flex items-center space-x-4">
        <div className="text-2xl">{battle.players[0].avatar}</div>
        <div className="text-xl font-bold">VS</div>
        <div className="text-2xl">{battle.players[1].avatar}</div>
      </div>
      <div className="flex items-center space-x-2">
        <Coins size={16} className="text-meme-yellow" />
        <span>{battle.stakes} tokens</span>
      </div>
    </div>
    <div className="mt-2 flex justify-between text-sm text-gray-400">
      <span>
        {battle.players[0].name} vs {battle.players[1].name}
      </span>
      <span>{new Date(battle.startTime).toLocaleTimeString()}</span>
    </div>
  </motion.div>
);

export default function Dashboard() {
  const { data: player } = useQuery<Player>({
    queryKey: ["currentPlayer"],
    queryFn: () => mockApi.getCurrentPlayer(),
  });

  const { data: battles } = useQuery<Battle[]>({
    queryKey: ["activeBattles"],
    queryFn: () => mockApi.getActiveBattles(),
  });

  const [selectedTimeRange, setSelectedTimeRange] = useState<
    "24h" | "7d" | "30d"
  >("24h");

  if (!player || !battles) return <div>Loading...</div>;

  const stats: StatCardProps[] = [
    {
      icon: Trophy,
      label: "Total Wins",
      value: player.wins,
      color: "meme-yellow",
    },
    {
      icon: Sword,
      label: "Win Rate",
      value: `${Math.round(
        (player.wins / (player.wins + player.losses)) * 100,
      )}%`,
      color: "neon-green",
    },
    {
      icon: Coins,
      label: `${player.memecoin} Balance`,
      value: player.tokenBalance.toLocaleString(),
      color: "cyber-pink",
    },
    {
      icon: TrendingUp,
      label: "Global Rank",
      value: `#${player.rank}`,
      color: "electric-blue",
    },
  ];

  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-gray-800 to-gray-900 p-8 rounded-lg"
      >
        <h1 className="text-3xl font-bold mb-2">
          Welcome back, <span className="text-neon-green">{player.name}</span>
        </h1>
        <p className="text-gray-400">Ready to battle? Your memes await!</p>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>

      {/* Active Battles */}
      <div>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Active Battles</h2>
          <select
            value={selectedTimeRange}
            onChange={(e) =>
              setSelectedTimeRange(e.target.value as "24h" | "7d" | "30d")
            }
            className="bg-gray-800 border border-gray-700 rounded-lg px-3 py-2"
          >
            <option value="24h">Last 24 hours</option>
            <option value="7d">Last 7 days</option>
            <option value="30d">Last 30 days</option>
          </select>
        </div>
        <div className="space-y-4">
          {battles.map((battle) => (
            <ActiveBattleCard key={battle.id} battle={battle} />
          ))}
        </div>
      </div>
    </div>
  );
}
