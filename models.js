const mongoose = require('mongoose');

// User Profile Schema
const UserSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    passwordHash: { type: String, required: true },
    balance: { type: Number, default: 1000 }, // Virtual starting chips
    xp: { type: Number, default: 0 }
});

// Game History Schema to track updates safely
const GameHistorySchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    gameType: { type: String, enum: ['blackjack', 'roulette', 'craps'], required: true },
    betAmount: { type: Number, required: true },
    payout: { type: Number, required: true },
    timestamp: { type: Date, default: Date.now }
});

// Atomic Transaction Function Helper
// TODO: Implement an atomic balance updater using Mongoose $inc to completely eliminate double-spending exploits

module.exports = {
    User: mongoose.model('User', UserSchema),
    GameHistory: mongoose.model('GameHistory', GameHistorySchema)
};
