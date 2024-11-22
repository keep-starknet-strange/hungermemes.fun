# Hunger Memes: A Memecoin PVP Battle Arena on Starknet

## Table of Contents

1. [Introduction](#introduction)
2. [Game Concept](#game-concept)
3. [Game Mechanics](#game-mechanics)
4. [Battle Arena Details](#battle-arena-details)
5. [Technical Architecture](#technical-architecture)
6. [Artistic Direction and Brand Design](#artistic-direction-and-brand-design)
7. [ELI5](#eli5)

---

## Introduction

### Overview

**Hunger Memes** is an innovative, on-chain Player vs. Player (PVP) battle arena built on the Starknet blockchain. It allows players to engage in thrilling battles using their favorite memecoin tokens. By integrating popular memecoins into a competitive gaming environment, Hunger Memes offers a unique platform where cryptocurrency enthusiasts can stake their tokens, challenge others, and climb the leaderboards.

- **Platform**: Starknet
- **Smart Contracts**: Developed in Cairo
- **Frontend**: React, TypeScript, Vite, Tailwind CSS
- **Backend**: Go, PostgreSQL
- **Target Audience**: Degens and memecoin enthusiasts

### Objectives

- **Engagement**: Create a fun and interactive gaming experience for memecoin holders.
- **Utility**: Provide additional use cases for memecoins beyond trading.
- **Community Building**: Foster a vibrant community around competitive gameplay and memes.

---

## Game Concept

### Theme and Setting

Hunger Memes is set in a whimsical universe where various memecoin mascots come to life. Players embody these mascots, battling it out in arenas that reflect the humorous and unpredictable nature of meme culture.

### Product Features

- **Memecoin Integration**: Use any supported memecoin to participate, giving real utility to tokens.
- **On-Chain Battles**: Fully decentralized gameplay ensures transparency and fairness.
- **Community-Driven**: Emphasizes user engagement through social features and community events.

---

## Game Mechanics

### Choose Your Memecoin

- **Flexible Participation**: Players can select from a list of supported memecoins, such as Dogecoin, Shiba Inu, or others.
- **Unique Identity**: Each memecoin represents a different character with its own aesthetic and flair.
- **Staking Requirements**: Minimum staking amounts vary based on the memecoin's value and volatility.

### PVP Battles

#### Battle Types

1. **One-on-One Duels**: Classic head-to-head battles where the winner takes all.
2. **Group Skirmishes**: Multiple players compete in free-for-all or team-based matches.
3. **Tournaments**: Organized events with brackets, leading to a final championship match.

### Battle Arena Dynamics

- **Entry Fees**: Players stake a predefined amount of their chosen memecoin to enter a battle.
- **Matchmaking**: Automated system pairs players based on rank, skill level, or randomly for quick matches.
- **Real-Time Engagement**: Battles occur in real-time, with players making strategic decisions during combat.

### Combat Mechanics

- **Action Points (AP)**: Each player has a set amount of AP to perform actions like attack, defend, or use abilities.
- **Abilities and Power-Ups**: Special moves or items that can turn the tide of battle, purchasable or earnable.
- **Turn-Based System**: Players take turns to perform actions, adding a layer of strategy.

### Randomization and Fairness

- **On-Chain Randomness**: Utilizes secure, verifiable random functions (VRFs) to ensure unpredictable outcomes.
- **Skill Influence**: Player choices and strategies significantly impact the battle, reducing reliance on luck.
- **Transparent Outcomes**: All battle results are recorded on-chain, allowing for public verification.

### Staking and Rewards

- **Winner Takes All**: The victorious player claims the combined staked tokens from all participants.
- **Fair Distribution**: Smart contracts handle reward allocation automatically and securely.
- **Leaderboard Points**: Players earn points based on performance, contributing to their global ranking.

---

## Battle Arena Details

### Types of Battles

1. **Standard Matches**: Quick battles with minimal stakes for casual play.
2. **Ranked Matches**: Higher stakes and more competitive, affecting global rankings.
3. **Custom Matches**: Players set their own rules and stakes, inviting friends or rivals.

### Battle Phases

1. **Preparation Phase**:
   - **Token Staking**: Players commit their memecoin tokens to the battle.
   - **Loadout Selection**: Choose abilities, power-ups, or strategies.
   - **Matchmaking Confirmation**: Players are paired and confirm readiness.

2. **Combat Phase**:
   - **Turn-Based Actions**: Players alternate turns to perform actions.
   - **Strategic Decisions**: Choose between offensive moves, defensive tactics, or special abilities.
   - **AP Management**: Strategically spend Action Points for maximum efficiency.

3. **Resolution Phase**:
   - **Outcome Determination**: Winner is decided based on remaining health or other victory conditions.
   - **Reward Distribution**: Smart contracts transfer staked tokens to the winner.
   - **Data Recording**: Match results are recorded for leaderboard updates.

### Combat Outcomes

- **Victory Conditions**:
  - **Health Depletion**: Reduce the opponent's health to zero.
  - **Time Expiry**: Player with higher health when time runs out wins.
- **Defeat Penalties**:
  - **Token Loss**: Losers forfeit their staked tokens.
  - **Rank Reduction**: Potential drop in leaderboard rankings.
- **Draw Scenarios**:
  - **Token Return**: In case of a tie, staked tokens may be returned to players.
  - **Sudden Death**: Option for an immediate rematch with the same stakes.

### Leaderboards and Rankings

- **Global Leaderboard**: Displays top players based on points, wins, and tokens earned.
- **Seasonal Rankings**: Leaderboards reset every season, offering fresh competition.
- **Achievements and Badges**:
  - **Milestones**: Rewards for reaching a certain number of wins or participating in events.
  - **Special Titles**: Unique titles for top-ranking players or tournament winners.

---

## Technical Architecture

### Frontend (Folder: `app`)

- **Framework**: React with TypeScript for robust and type-safe development.
- **Bundler**: Vite for fast compilation and hot module replacement.
- **Styling**: Tailwind CSS for utility-first, responsive design.
- **Features**:
  - **Real-Time Updates**: WebSocket integration for live battle updates.
  - **Responsive UI**: Optimized for both desktop and mobile devices.
  - **User Dashboard**: Access to profiles, stats, and match history.

### Smart Contracts (Folder: `contracts`)

- **Language**: Cairo
- **Core Contracts**:
  - **BattleManager**: Handles battle creation, execution, and resolution.
  - **TokenStaking**: Manages staking and unstaking of memecoin tokens.
  - **RandomnessProvider**: Implements secure randomness for fair gameplay.
- **Security**:
  - **Audited Code**: Regular smart contract audits to ensure security.
  - **Fail-Safes**: Mechanisms to handle unexpected errors or disputes.

### Backend (Folder: `backend`)

- **Language**: Go, chosen for its performance and concurrency support.
- **Database**: PostgreSQL for reliable data storage and retrieval.
- **Services**:
  - **API Layer**: Facilitates communication between frontend and smart contracts.
  - **Matchmaking Engine**: Efficient pairing of players based on criteria.
  - **Leaderboard Service**: Calculates and updates player rankings in real-time.
  - **Notification System**: Sends alerts for battle invitations, results, and events.

---

## Artistic Direction and Brand Design

### Theme and Style

- **Vibrant and Playful**: Reflecting the energetic meme culture.
- **Retro-Futuristic Aesthetics**: Merging pixel art with modern UI elements.
- **Dynamic Animations**: Engaging visuals during battles and interactions.

### Logo and Branding

- **Iconic Mascot**: A fusion of popular meme characters, such as a winking Doge or a grinning Shiba Inu.
- **Bold Typography**: Chunky, eye-catching fonts that are easily readable.
- **Color Palette**:
  - **Primary Colors**: Neon greens, pinks, and blues.
  - **Accent Colors**: Vibrant yellows and purples for highlights.

### UI/UX Guidelines

- **User-Friendly Interface**:
  - **Intuitive Navigation**: Clear menus and accessible options.
  - **Consistent Design**: Uniform styling across all pages and components.
- **Responsive Design**:
  - **Mobile Optimization**: Touch-friendly buttons and scalable layouts.
  - **Cross-Browser Compatibility**: Ensuring functionality on all modern browsers.
- **Interactive Elements**:
  - **Hover Effects**: Visual feedback on interactive elements.
  - **Animations**: Smooth transitions and engaging battle effects.

---

## ELI5

Imagine you have a bunch of special digital coins with funny dog pictures on them (like Dogecoin). Now, instead of just keeping these coins in your digital piggy bank, you can use them to play an exciting game!

In Hunger Memes, you're like a player in a video game tournament, but with a twist - you're playing as your favorite meme characters (like the Doge dog or Shiba Inu). Here's how it works:

1. First, you pick your favorite meme character and put some of your coins in as your "entry ticket"
2. Then you can:
   - Fight one-on-one against another player
   - Join a big battle with lots of players
   - Enter special tournaments where lots of people compete to be the champion

During the battles:

- You and your opponent take turns, kind of like playing Pokémon
- You get special points called "Action Points" to do things like attack or defend
- You can use special moves or get power-ups to help you win
- The last player standing gets to keep all the coins that were put in!

The really cool part is that everything happens on a special computer system (called Starknet) that makes sure nobody can cheat. When you win battles, you:

- Get more coins
- Move up on a special scoreboard
- Can earn cool badges and titles
- Might even become the champion if you're really good!

It's like playing a video game, collecting trading cards, and having a piggy bank all rolled into one fun package! The better you play, the more coins you can win, and the higher you'll climb on the leaderboard.

---
