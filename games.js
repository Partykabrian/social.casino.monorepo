// Blackjack Game Engine
function handleBlackjackAction(action, currentHand) {
    // Supporting actions: 'HIT', 'STAND'
    // TODO: Add support for the 'SPLIT' action in blackjack splitting mechanics
    return { status: "pending", hand: currentHand };
}

// Craps Game Engine
function evaluateCrapsRoll(dice1, dice2, currentState) {
    const total = dice1 + dice2;
    // States: 'COME_OUT', 'POINT'
    
    // TODO: Track the 'POINT' state and resolve pass line bets dynamically
    return { diceTotal: total, nextState: currentState };
}

module.exports = { handleBlackjackAction, evaluateCrapsRoll };
