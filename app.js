// =============================================
// WinstreakPol - Professional Lottery dApp
// =============================================

// تنظیمات قراردادها
const CONTRACT_ADDRESS = '0xdFC970De4C016AB950F965e5364048C16468e2Ec';
const PTOKEN_CONTRACT_ADDRESS = '0x82F7dBe1792436d15bdA22bB3340bD3f45D614Fa';

// ABI قرارداد اصلی لاتاری
const CONTRACT_ABI = [
    {
        "inputs": [
            {"internalType": "address", "name": "_developerWallet", "type": "address"},
            {"internalType": "address", "name": "_pTokenAddress", "type": "address"},
            {"internalType": "address", "name": "_minerPool", "type": "address"}
        ],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "anonymous": false,
        "inputs": [
            {"indexed": false, "internalType": "string", "name": "message", "type": "string"},
            {"indexed": false, "internalType": "uint256", "name": "value1", "type": "uint256"},
            {"indexed": false, "internalType": "uint256", "name": "value2", "type": "uint256"}
        ],
        "name": "DebugInfo",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {"indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256"}
        ],
        "name": "DeveloperPaid",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {"indexed": true, "internalType": "address", "name": "previousWallet", "type": "address"},
            {"indexed": true, "internalType": "address", "name": "newWallet", "type": "address"}
        ],
        "name": "DeveloperWalletUpdated",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {"indexed": false, "internalType": "uint256", "name": "pool1", "type": "uint256"},
            {"indexed": false, "internalType": "uint256", "name": "pool2", "type": "uint256"},
            {"indexed": false, "internalType": "uint256", "name": "pool3", "type": "uint256"},
            {"indexed": false, "internalType": "uint256", "name": "minerPool", "type": "uint256"},
            {"indexed": false, "internalType": "uint256", "name": "dev", "type": "uint256"}
        ],
        "name": "FundsDistributed",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {"indexed": false, "internalType": "uint256", "name": "poolId", "type": "uint256"},
            {"indexed": false, "internalType": "uint256", "name": "roundNumber", "type": "uint256"},
            {"indexed": false, "internalType": "address[]", "name": "winners", "type": "address[]"},
            {"indexed": false, "internalType": "uint256[]", "name": "prizes", "type": "uint256[]"},
            {"indexed": false, "internalType": "uint256", "name": "drawTime", "type": "uint256"},
            {"indexed": false, "internalType": "bytes32", "name": "randomness", "type": "bytes32"}
        ],
        "name": "LotteryDrawn",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {"indexed": false, "internalType": "uint256", "name": "poolId", "type": "uint256"},
            {"indexed": false, "internalType": "uint256", "name": "roundNumber", "type": "uint256"},
            {"indexed": false, "internalType": "address", "name": "executedBy", "type": "address"}
        ],
        "name": "ManualDrawExecuted",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {"indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256"},
            {"indexed": false, "internalType": "string", "name": "reason", "type": "string"}
        ],
        "name": "MinerContributionFailed",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {"indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256"},
            {"indexed": false, "internalType": "address", "name": "minerPool", "type": "address"}
        ],
        "name": "MinerContributionSuccess",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {"indexed": true, "internalType": "address", "name": "previousMinerPool", "type": "address"},
            {"indexed": true, "internalType": "address", "name": "newMinerPool", "type": "address"}
        ],
        "name": "MinerPoolAddressUpdated",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {"indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256"}
        ],
        "name": "MinerPoolContributed",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {"indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256"},
            {"indexed": false, "internalType": "uint256", "name": "timestamp", "type": "uint256"}
        ],
        "name": "MinerTokensBought",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {"indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256"},
            {"indexed": false, "internalType": "uint256", "name": "timestamp", "type": "uint256"}
        ],
        "name": "MinerTokensDistributed",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {"indexed": true, "internalType": "address", "name": "winner", "type": "address"},
            {"indexed": false, "internalType": "uint256", "name": "poolId", "type": "uint256"},
            {"indexed": false, "internalType": "uint256", "name": "prize", "type": "uint256"},
            {"indexed": false, "internalType": "uint256", "name": "timestamp", "type": "uint256"},
            {"indexed": false, "internalType": "uint256", "name": "roundNumber", "type": "uint256"}
        ],
        "name": "NewWinner",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {"indexed": true, "internalType": "address", "name": "previousOwner", "type": "address"},
            {"indexed": true, "internalType": "address", "name": "newOwner", "type": "address"}
        ],
        "name": "OwnershipTransferred",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {"indexed": true, "internalType": "address", "name": "previousPToken", "type": "address"},
            {"indexed": true, "internalType": "address", "name": "newPToken", "type": "address"}
        ],
        "name": "PTokenAddressUpdated",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {"indexed": false, "internalType": "uint256", "name": "pTokensReceived", "type": "uint256"}
        ],
        "name": "PTokenPurchaseSuccess",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {"indexed": false, "internalType": "address", "name": "to", "type": "address"},
            {"indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256"}
        ],
        "name": "PTokenTransferSuccess",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {"indexed": false, "internalType": "address", "name": "winner", "type": "address"},
            {"indexed": false, "internalType": "uint256", "name": "maticAmount", "type": "uint256"},
            {"indexed": false, "internalType": "uint256", "name": "pTokenAmount", "type": "uint256"}
        ],
        "name": "PrizeConversionComplete",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {"indexed": false, "internalType": "address", "name": "winner", "type": "address"},
            {"indexed": false, "internalType": "uint256", "name": "maticAmount", "type": "uint256"}
        ],
        "name": "PrizeConversionStarted",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {"indexed": false, "internalType": "address", "name": "winner", "type": "address"},
            {"indexed": false, "internalType": "uint256", "name": "maticAmount", "type": "uint256"},
            {"indexed": false, "internalType": "uint256", "name": "pTokenAmount", "type": "uint256"}
        ],
        "name": "PrizeDistributionComplete",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {"indexed": false, "internalType": "uint256", "name": "poolId", "type": "uint256"},
            {"indexed": false, "internalType": "uint256", "name": "fromRound", "type": "uint256"},
            {"indexed": false, "internalType": "uint256", "name": "toRound", "type": "uint256"},
            {"indexed": false, "internalType": "address", "name": "triggeredBy", "type": "address"}
        ],
        "name": "RoundAdvanced",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {"indexed": false, "internalType": "uint128", "name": "previousPrice", "type": "uint128"},
            {"indexed": false, "internalType": "uint128", "name": "newPrice", "type": "uint128"}
        ],
        "name": "TicketPriceUpdated",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {"indexed": true, "internalType": "address", "name": "user", "type": "address"},
            {"indexed": false, "internalType": "uint256", "name": "ticketCount", "type": "uint256"},
            {"indexed": false, "internalType": "uint256", "name": "totalPrice", "type": "uint256"},
            {"indexed": false, "internalType": "uint256", "name": "roundNumber", "type": "uint256"}
        ],
        "name": "TicketPurchased",
        "type": "event"
    },
    {
        "inputs": [],
        "name": "DEVELOPER_SHARE",
        "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "MINER_SHARE",
        "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "POOL1",
        "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "POOL1_SHARE",
        "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "POOL2",
        "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "POOL2_SHARE",
        "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "POOL3",
        "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "POOL3_SHARE",
        "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "TOTAL_SHARES",
        "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{"internalType": "uint256", "name": "ticketCount", "type": "uint256"}],
        "name": "buyTicket",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "contributeToMinerPoolManually",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "developerWallet",
        "outputs": [{"internalType": "address", "name": "", "type": "address"}],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getAllPoolsSimplifiedStatus",
        "outputs": [
            {"internalType": "uint256", "name": "pool1Round", "type": "uint256"},
            {"internalType": "uint256", "name": "pool2Round", "type": "uint256"},
            {"internalType": "uint256", "name": "pool3Round", "type": "uint256"},
            {"internalType": "uint256", "name": "pool1Tickets", "type": "uint256"},
            {"internalType": "uint256", "name": "pool2Tickets", "type": "uint256"},
            {"internalType": "uint256", "name": "pool3Tickets", "type": "uint256"},
            {"internalType": "uint256", "name": "pool1Prize", "type": "uint256"},
            {"internalType": "uint256", "name": "pool2Prize", "type": "uint256"},
            {"internalType": "uint256", "name": "pool3Prize", "type": "uint256"}
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{"internalType": "uint256", "name": "poolId", "type": "uint256"}],
        "name": "getPoolCurrentStatus",
        "outputs": [{"internalType": "uint256[7]", "name": "poolDetails", "type": "uint256[7]"}],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{"internalType": "uint256", "name": "poolId", "type": "uint256"}],
        "name": "getPoolProgress",
        "outputs": [
            {"internalType": "uint256", "name": "currentTickets", "type": "uint256"},
            {"internalType": "uint256", "name": "maxParticipants", "type": "uint256"},
            {"internalType": "uint256", "name": "progressPercent", "type": "uint256"},
            {"internalType": "bool", "name": "isActive", "type": "bool"}
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{"internalType": "uint256", "name": "poolId", "type": "uint256"}],
        "name": "getPoolStatistics",
        "outputs": [
            {"internalType": "uint256", "name": "currentRound", "type": "uint256"},
            {"internalType": "uint256", "name": "totalTickets", "type": "uint256"},
            {"internalType": "uint256", "name": "maxParticipants", "type": "uint256"},
            {"internalType": "uint256", "name": "poolPrize", "type": "uint256"},
            {"internalType": "uint256", "name": "participantsCount", "type": "uint256"},
            {"internalType": "uint256", "name": "progressPercentage", "type": "uint256"},
            {"internalType": "bool", "name": "isActive", "type": "bool"}
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{"internalType": "uint256", "name": "poolId", "type": "uint256"}],
        "name": "getPoolStatus",
        "outputs": [
            {"internalType": "uint256", "name": "currentRound", "type": "uint256"},
            {"internalType": "uint256", "name": "currentTickets", "type": "uint256"},
            {"internalType": "uint256", "name": "maxParticipants", "type": "uint256"},
            {"internalType": "uint256", "name": "poolSize", "type": "uint256"},
            {"internalType": "bool", "name": "isReadyForDraw", "type": "bool"},
            {"internalType": "uint256", "name": "participantsCount", "type": "uint256"},
            {"internalType": "uint256", "name": "progressPercent", "type": "uint256"}
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{"internalType": "uint256", "name": "count", "type": "uint256"}],
        "name": "getRecentWinners",
        "outputs": [
            {
                "components": [
                    {"internalType": "address", "name": "winner", "type": "address"},
                    {"internalType": "uint96", "name": "prize", "type": "uint96"},
                    {"internalType": "uint32", "name": "timestamp", "type": "uint32"},
                    {"internalType": "uint8", "name": "poolId", "type": "uint8"},
                    {"internalType": "uint32", "name": "roundNumber", "type": "uint32"},
                    {"internalType": "bytes32", "name": "randomnessProof", "type": "bytes32"}
                ],
                "internalType": "struct WinstreakPol.WinnerHistory[]",
                "name": "recentWinners",
                "type": "tuple[]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{"internalType": "uint256", "name": "poolId", "type": "uint256"}],
        "name": "getRoundParticipantsWithTickets",
        "outputs": [
            {"internalType": "address[]", "name": "participants", "type": "address[]"},
            {"internalType": "uint256[]", "name": "tickets", "type": "uint256[]"}
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{"internalType": "uint256", "name": "poolId", "type": "uint256"}],
        "name": "getRoundWinners",
        "outputs": [
            {
                "components": [
                    {"internalType": "address", "name": "winner", "type": "address"},
                    {"internalType": "uint96", "name": "prize", "type": "uint96"},
                    {"internalType": "uint32", "name": "timestamp", "type": "uint32"},
                    {"internalType": "uint8", "name": "poolId", "type": "uint8"},
                    {"internalType": "uint32", "name": "roundNumber", "type": "uint32"},
                    {"internalType": "bytes32", "name": "randomnessProof", "type": "bytes32"}
                ],
                "internalType": "struct WinstreakPol.WinnerHistory[]",
                "name": "winners",
                "type": "tuple[]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getSystemInfo",
        "outputs": [
            {"internalType": "address", "name": "currentOwner", "type": "address"},
            {"internalType": "address", "name": "currentPToken", "type": "address"},
            {"internalType": "address", "name": "currentMinerPool", "type": "address"},
            {"internalType": "address", "name": "currentDeveloper", "type": "address"},
            {"internalType": "uint256", "name": "currentTicketPrice", "type": "uint256"},
            {"internalType": "uint256", "name": "contractBalance", "type": "uint256"},
            {"internalType": "uint256", "name": "totalTickets", "type": "uint256"},
            {"internalType": "uint256", "name": "totalPrizes", "type": "uint256"}
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getSystemOverview",
        "outputs": [
            {"internalType": "uint256", "name": "totalTickets", "type": "uint256"},
            {"internalType": "uint256", "name": "totalPrizes", "type": "uint256"},
            {"internalType": "uint256", "name": "contractBalance", "type": "uint256"},
            {"internalType": "uint256", "name": "activePools", "type": "uint256"},
            {"internalType": "uint256", "name": "currentTicketPrice", "type": "uint256"}
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{"internalType": "address", "name": "user", "type": "address"}],
        "name": "getUserCurrentTickets",
        "outputs": [
            {"internalType": "uint32", "name": "pool1Tickets", "type": "uint32"},
            {"internalType": "uint32", "name": "pool2Tickets", "type": "uint32"},
            {"internalType": "uint32", "name": "pool3Tickets", "type": "uint32"}
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{"internalType": "address", "name": "user", "type": "address"}],
        "name": "getUserParticipationStats",
        "outputs": [
            {"internalType": "uint256", "name": "totalTicketsAllTime", "type": "uint256"},
            {"internalType": "uint256", "name": "totalRoundsParticipated", "type": "uint256"},
            {"internalType": "uint256", "name": "totalWins", "type": "uint256"},
            {"internalType": "uint256", "name": "totalPrizeWon", "type": "uint256"}
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {"internalType": "address", "name": "user", "type": "address"},
            {"internalType": "uint256", "name": "page", "type": "uint256"},
            {"internalType": "uint256", "name": "pageSize", "type": "uint256"}
        ],
        "name": "getUserWinsPaginated",
        "outputs": [
            {
                "components": [
                    {"internalType": "address", "name": "winner", "type": "address"},
                    {"internalType": "uint96", "name": "prize", "type": "uint96"},
                    {"internalType": "uint32", "name": "timestamp", "type": "uint32"},
                    {"internalType": "uint8", "name": "poolId", "type": "uint8"},
                    {"internalType": "uint32", "name": "roundNumber", "type": "uint32"},
                    {"internalType": "bytes32", "name": "randomnessProof", "type": "bytes32"}
                ],
                "internalType": "struct WinstreakPol.WinnerHistory[]",
                "name": "wins",
                "type": "tuple[]"
            },
            {"internalType": "uint256", "name": "totalWins", "type": "uint256"}
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "minerPool",
        "outputs": [{"internalType": "address", "name": "", "type": "address"}],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "owner",
        "outputs": [{"internalType": "address", "name": "", "type": "address"}],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "pTokenAddress",
        "outputs": [{"internalType": "address", "name": "", "type": "address"}],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "pool1MaxParticipants",
        "outputs": [{"internalType": "uint32", "name": "", "type": "uint32"}],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "pool2MaxParticipants",
        "outputs": [{"internalType": "uint32", "name": "", "type": "uint32"}],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "pool3MaxParticipants",
        "outputs": [{"internalType": "uint32", "name": "", "type": "uint32"}],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
        "name": "pools",
        "outputs": [
            {"internalType": "uint128", "name": "poolSize", "type": "uint128"},
            {"internalType": "uint32", "name": "currentRound", "type": "uint32"},
            {"internalType": "uint32", "name": "maxParticipants", "type": "uint32"},
            {"internalType": "uint32", "name": "totalRounds", "type": "uint32"},
            {"internalType": "uint64", "name": "lastDrawTime", "type": "uint64"},
            {"internalType": "bool", "name": "isActive", "type": "bool"},
            {"internalType": "bytes32", "name": "randomnessSeed", "type": "bytes32"},
            {"internalType": "uint256", "name": "lastDrawBlock", "type": "uint256"}
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
        "name": "prizeDistributions",
        "outputs": [{"internalType": "uint8", "name": "winnerCount", "type": "uint8"}],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
        "name": "roundInfo",
        "outputs": [
            {"internalType": "uint32", "name": "totalTickets", "type": "uint32"},
            {"internalType": "uint32", "name": "startTime", "type": "uint32"},
            {"internalType": "uint32", "name": "endTime", "type": "uint32"},
            {"internalType": "bool", "name": "isCompleted", "type": "bool"},
            {"internalType": "bytes32", "name": "finalRandomness", "type": "bytes32"}
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
        "name": "ticketPrice",
        "outputs": [{"internalType": "uint128", "name": "", "type": "uint128"}],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "totalPrizesDistributed",
        "outputs": [{"internalType": "uint128", "name": "", "type": "uint128"}],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "totalTicketsSold",
        "outputs": [{"internalType": "uint32", "name": "", "type": "uint32"}],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{"internalType": "address", "name": "newOwner", "type": "address"}],
        "name": "transferOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "stateMutability": "payable",
        "type": "receive"
    }
];

// ABI قرارداد P-Token
const PTOKEN_CONTRACT_ABI = [
    {
        "inputs": [{"internalType": "address", "name": "_projectWallet", "type": "address"}],
        "stateMutability": "payable",
        "type": "constructor"
    },
    {
        "anonymous": false,
        "inputs": [
            {"indexed": true, "internalType": "address", "name": "owner", "type": "address"},
            {"indexed": true, "internalType": "address", "name": "spender", "type": "address"},
            {"indexed": false, "internalType": "uint256", "name": "value", "type": "uint256"}
        ],
        "name": "Approval",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [{"indexed": false, "internalType": "uint256", "name": "maticAmount", "type": "uint256"}],
        "name": "BackingIncreased",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {"indexed": true, "internalType": "address", "name": "buyer", "type": "address"},
            {"indexed": false, "internalType": "uint256", "name": "maticAmount", "type": "uint256"},
            {"indexed": false, "internalType": "uint256", "name": "pTokenAmount", "type": "uint256"}
        ],
        "name": "BuyPToken",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {"indexed": true, "internalType": "address", "name": "donor", "type": "address"},
            {"indexed": false, "internalType": "uint256", "name": "maticAmount", "type": "uint256"}
        ],
        "name": "DonationAdded",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {"indexed": true, "internalType": "address", "name": "previousOwner", "type": "address"},
            {"indexed": true, "internalType": "address", "name": "newOwner", "type": "address"}
        ],
        "name": "OwnershipTransferred",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {"indexed": true, "internalType": "address", "name": "seller", "type": "address"},
            {"indexed": false, "internalType": "uint256", "name": "pTokenAmount", "type": "uint256"},
            {"indexed": false, "internalType": "uint256", "name": "maticAmount", "type": "uint256"}
        ],
        "name": "SellPToken",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {"indexed": true, "internalType": "address", "name": "from", "type": "address"},
            {"indexed": true, "internalType": "address", "name": "to", "type": "address"},
            {"indexed": false, "internalType": "uint256", "name": "value", "type": "uint256"}
        ],
        "name": "Transfer",
        "type": "event"
    },
    {
        "inputs": [],
        "name": "BACKING_FEE",
        "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "FEE_DENOMINATOR",
        "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "FEE_PERCENT",
        "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "INITIAL_BACKING",
        "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "INITIAL_SUPPLY",
        "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "PROJECT_FEE",
        "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {"internalType": "address", "name": "owner", "type": "address"},
            {"internalType": "address", "name": "spender", "type": "address"}
        ],
        "name": "allowance",
        "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {"internalType": "address", "name": "spender", "type": "address"},
            {"internalType": "uint256", "name": "amount", "type": "uint256"}
        ],
        "name": "approve",
        "outputs": [{"internalType": "bool", "name": "", "type": "bool"}],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [{"internalType": "address", "name": "account", "type": "address"}],
        "name": "balanceOf",
        "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "buyPToken",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "decimals",
        "outputs": [{"internalType": "uint8", "name": "", "type": "uint8"}],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {"internalType": "address", "name": "spender", "type": "address"},
            {"internalType": "uint256", "name": "subtractedValue", "type": "uint256"}
        ],
        "name": "decreaseAllowance",
        "outputs": [{"internalType": "bool", "name": "", "type": "bool"}],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "donateToBacking",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getContractMaticBalance",
        "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getPTokenPrice",
        "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getPTokenPriceInWei",
        "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {"internalType": "address", "name": "spender", "type": "address"},
            {"internalType": "uint256", "name": "addedValue", "type": "uint256"}
        ],
        "name": "increaseAllowance",
        "outputs": [{"internalType": "bool", "name": "", "type": "bool"}],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "lockedSupply",
        "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "name",
        "outputs": [{"internalType": "string", "name": "", "type": "string"}],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "owner",
        "outputs": [{"internalType": "address", "name": "", "type": "address"}],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "renounceOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [{"internalType": "uint256", "name": "minPTokenAmount", "type": "uint256"}],
        "name": "safeBuyPToken",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [{"internalType": "uint256", "name": "pTokenAmount", "type": "uint256"}],
        "name": "sellPToken",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "symbol",
        "outputs": [{"internalType": "string", "name": "", "type": "string"}],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "totalBackingMatic",
        "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "totalSupply",
        "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {"internalType": "address", "name": "to", "type": "address"},
            {"internalType": "uint256", "name": "amount", "type": "uint256"}
        ],
        "name": "transfer",
        "outputs": [{"internalType": "bool", "name": "", "type": "bool"}],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {"internalType": "address", "name": "from", "type": "address"},
            {"internalType": "address", "name": "to", "type": "address"},
            {"internalType": "uint256", "name": "amount", "type": "uint256"}
        ],
        "name": "transferFrom",
        "outputs": [{"internalType": "bool", "name": "", "type": "bool"}],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [{"internalType": "address", "name": "newOwner", "type": "address"}],
        "name": "transferOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "stateMutability": "payable",
        "type": "receive"
    }
];

// =============================================
// متغیرهای جهانی و تنظیمات
// =============================================

let web3;
let contract;
let pTokenContract;
let userAccount = null;
let userMaticBalance = '0';
let currentLanguage = 'fa';
let isInitialized = false;
let refreshInterval;

// =============================================
// سیستم مدیریت زبان
// =============================================

const LanguageManager = {
    strings: {
        fa: {
            // عمومی
            'preloader-text': 'در حال بارگذاری...',
            'logo-text': 'WinstreakPol',
            'network-text': 'Polygon',
            'connect-text': 'اتصال ولت',
            'disconnect-text': 'قطع اتصال',
            
            // تب‌ها
            'tab-dashboard': 'داشبورد',
            'tab-lottery': 'خرید بلیط',
            'tab-winners': 'برندگان',
            'tab-ptoken': 'تبدیل P-Token',
            'tab-profile': 'پروفایل من',
            
            // داشبورد
            'dashboard-title': 'داشبورد لاتاری',
            'dashboard-subtitle': 'وضعیت زنده استخرهای لاتاری',
            'stat-ticket-price': 'قیمت بلیط',
            'stat-total-tickets': 'بلیط‌های فروخته شده',
            'stat-total-prizes': 'جوایز توزیع شده',
            'stat-contract-balance': 'موجودی قرارداد',
            'pools-title': 'استخرهای لاتاری',
            
            // استخرها
            'pool1-badge': 'استخر نقره',
            'pool1-title': 'استخر ۱',
            'pool1-participants': '۱۲۵ شرکت‌کننده',
            'pool1-winners': '۱ برنده - ۱۰۰% جایزه',
            'pool1-progress-text': 'پیشرفت:',
            
            'pool2-badge': 'استخر طلا',
            'pool2-title': 'استخر ۲',
            'pool2-participants': '۵۰۰ شرکت‌کننده',
            'pool2-winners': '۲ برنده - ۸۰% / ۲۰%',
            'pool2-progress-text': 'پیشرفت:',
            
            'pool3-badge': 'استخر الماس',
            'pool3-title': 'استخر ۳',
            'pool3-participants': '۲۵۰۰ شرکت‌کننده',
            'pool3-winners': '۳ برنده - ۷۰% / ۲۰% / ۱۰%',
            'pool3-progress-text': 'پیشرفت:',
            
            // خرید بلیط
            'lottery-title': 'خرید بلیط لاتاری',
            'lottery-subtitle': 'شانس خود را برای برنده شدن امتحان کنید',
            'ticket-purchase-title': 'خرید بلیط لاتاری',
            'ticket-count-label': 'تعداد بلیط',
            'ticket-max-hint': 'حداکثر ۱۰۰۰ بلیط در هر تراکنش',
            'price-per-ticket': 'قیمت هر بلیط:',
            'total-cost': 'هزینه کل:',
            'buy-tickets-text': 'خرید بلیط',
            'ticket-info-title': 'اطلاعات بلیط‌ها',
            'user-pool1-label': 'استخر نقره',
            'user-pool2-label': 'استخر طلا',
            'user-pool3-label': 'استخر الماس',
            'tickets-text': 'بلیط',
            'processing-purchase': 'در حال پردازش خرید...',
            
            // برندگان
            'winners-title': 'گردونه برندگان',
            'winners-subtitle': 'برندگان خوش‌شانس لاتاری',
            'spin-wheel-text': 'چرخاندن گردونه',
            'recent-winners-title': 'برندگان اخیر',
            'spinning-text': 'در حال چرخش...',
            'demo-winner-selected': 'برنده نمایشی انتخاب شد!',
            
            // P-Token
            'ptoken-title': 'تبدیل P-Token',
            'ptoken-subtitle': 'تبدیل توکن‌های P-Token به MATIC',
            'ptoken-info-title': 'اطلاعات P-Token',
            'ptoken-balance-label': 'موجودی P-Token شما',
            'ptoken-price-label': 'قیمت فعلی هر P-Token',
            'ptoken-value-label': 'ارزش کل P-Token شما',
            'convert-title': 'تبدیل به MATIC',
            'ptoken-amount-label': 'تعداد P-Token برای فروش',
            'ptoken-max-hint': 'حداکثر موجودی شما:',
            'conversion-amount-label': 'تعداد P-Token:',
            'conversion-price-label': 'قیمت هر توکن:',
            'conversion-total-label': 'دریافتی شما:',
            'sell-ptoken-text': 'فروش P-Token و دریافت MATIC',
            
            // پروفایل
            'profile-title': 'پروفایل من',
            'profile-subtitle': 'اطلاعات و آمار شخصی شما',
            'profile-network': 'شبکه: Polygon Mainnet',
            'profile-total-tickets': 'کل بلیط‌ها',
            'profile-rounds': 'راندهای شرکت کرده',
            'profile-wins': 'بردها',
            'profile-total-prize': 'جایزه کل',
            'winning-chance-title': 'شانس برنده شدن',
            'chance-pool1-label': 'استخر نقره',
            'chance-pool2-label': 'استخر طلا',
            'chance-pool3-label': 'استخر الماس',
            
            // مودال ولت
            'wallet-modal-title': 'انتخاب کیف پول',
            'transaction-modal-title': 'وضعیت تراکنش',
            'tx-hash-label': 'هش تراکنش:',
            
            // نوتیفیکیشن‌ها
            'notification-wallet-connected': 'ولت با موفقیت متصل شد',
            'notification-wallet-error': 'خطا در اتصال ولت',
            'notification-tickets-purchased': 'بلیط با موفقیت خریداری شد',
            'notification-tickets-error': 'خطا در خرید بلیط',
            'notification-ptoken-sold': 'P-Token با موفقیت به MATIC تبدیل شد',
            'notification-ptoken-error': 'خطا در تبدیل P-Token',
            'notification-insufficient-balance': 'موجودی MATIC کافی نیست',
            'notification-connect-first': 'لطفا اول ولت خود را متصل کنید',
            'notification-network-error': 'لطفا به شبکه Polygon متصل شوید',
            'notification-account-changed': 'حساب کاربری تغییر کرد',
            'notification-wallet-disconnected': 'ولت قطع شد',
            'notification-no-winners': 'هنوز برنده‌ای وجود ندارد',
            'notification-transaction-pending': 'تراکنش در حال پردازش...',
            'notification-transaction-success': 'تراکنش با موفقیت انجام شد',
            'notification-transaction-failed': 'تراکنش ناموفق بود',
            
            // وضعیت‌ها
            'processing-text': 'در حال پردازش...',
            'no-wallet-detected': 'هیچ کیف پولی شناسایی نشد',
            'trustwallet-not-detected': 'Trust Wallet شناسایی نشد',
            'coinbase-not-detected': 'Coinbase Wallet شناسایی نشد',
            'walletconnect-coming-soon': 'WalletConnect به زودی',
            'transaction-confirming': 'تراکنش در حال تایید در بلاک چین است'
        },
        en: {
            // General
            'preloader-text': 'Loading...',
            'logo-text': 'WinstreakPol',
            'network-text': 'Polygon',
            'connect-text': 'Connect Wallet',
            'disconnect-text': 'Disconnect',
            
            // Tabs
            'tab-dashboard': 'Dashboard',
            'tab-lottery': 'Buy Tickets',
            'tab-winners': 'Winners',
            'tab-ptoken': 'Convert P-Token',
            'tab-profile': 'My Profile',
            
            // Dashboard
            'dashboard-title': 'Lottery Dashboard',
            'dashboard-subtitle': 'Live status of lottery pools',
            'stat-ticket-price': 'Ticket Price',
            'stat-total-tickets': 'Tickets Sold',
            'stat-total-prizes': 'Prizes Distributed',
            'stat-contract-balance': 'Contract Balance',
            'pools-title': 'Lottery Pools',
            
            // Pools
            'pool1-badge': 'Silver Pool',
            'pool1-title': 'Pool 1',
            'pool1-participants': '125 Participants',
            'pool1-winners': '1 Winner - 100% Prize',
            'pool1-progress-text': 'Progress:',
            
            'pool2-badge': 'Gold Pool',
            'pool2-title': 'Pool 2',
            'pool2-participants': '500 Participants',
            'pool2-winners': '2 Winners - 80% / 20%',
            'pool2-progress-text': 'Progress:',
            
            'pool3-badge': 'Diamond Pool',
            'pool3-title': 'Pool 3',
            'pool3-participants': '2500 Participants',
            'pool3-winners': '3 Winners - 70% / 20% / 10%',
            'pool3-progress-text': 'Progress:',
            
            // Buy Tickets
            'lottery-title': 'Buy Lottery Tickets',
            'lottery-subtitle': 'Try your chance to win',
            'ticket-purchase-title': 'Buy Lottery Tickets',
            'ticket-count-label': 'Number of Tickets',
            'ticket-max-hint': 'Maximum 1000 tickets per transaction',
            'price-per-ticket': 'Price per ticket:',
            'total-cost': 'Total Cost:',
            'buy-tickets-text': 'Buy Tickets',
            'ticket-info-title': 'Ticket Information',
            'user-pool1-label': 'Silver Pool',
            'user-pool2-label': 'Gold Pool',
            'user-pool3-label': 'Diamond Pool',
            'tickets-text': 'tickets',
            'processing-purchase': 'Processing purchase...',
            
            // Winners
            'winners-title': 'Winners Wheel',
            'winners-subtitle': 'Lucky lottery winners',
            'spin-wheel-text': 'Spin Wheel',
            'recent-winners-title': 'Recent Winners',
            'spinning-text': 'Spinning...',
            'demo-winner-selected': 'Demo winner selected!',
            
            // P-Token
            'ptoken-title': 'Convert P-Token',
            'ptoken-subtitle': 'Convert P-Token to MATIC',
            'ptoken-info-title': 'P-Token Information',
            'ptoken-balance-label': 'Your P-Token Balance',
            'ptoken-price-label': 'Current P-Token Price',
            'ptoken-value-label': 'Total P-Token Value',
            'convert-title': 'Convert to MATIC',
            'ptoken-amount-label': 'P-Token Amount to Sell',
            'ptoken-max-hint': 'Your maximum:',
            'conversion-amount-label': 'P-Token Amount:',
            'conversion-price-label': 'Price per token:',
            'conversion-total-label': 'You will receive:',
            'sell-ptoken-text': 'Sell P-Token and Receive MATIC',
            
            // Profile
            'profile-title': 'My Profile',
            'profile-subtitle': 'Your personal information and statistics',
            'profile-network': 'Network: Polygon Mainnet',
            'profile-total-tickets': 'Total Tickets',
            'profile-rounds': 'Rounds Participated',
            'profile-wins': 'Wins',
            'profile-total-prize': 'Total Prize',
            'winning-chance-title': 'Winning Chance',
            'chance-pool1-label': 'Silver Pool',
            'chance-pool2-label': 'Gold Pool',
            'chance-pool3-label': 'Diamond Pool',
            
            // Wallet Modal
            'wallet-modal-title': 'Select Wallet',
            'transaction-modal-title': 'Transaction Status',
            'tx-hash-label': 'Transaction Hash:',
            
            // Notifications
            'notification-wallet-connected': 'Wallet connected successfully',
            'notification-wallet-error': 'Error connecting wallet',
            'notification-tickets-purchased': 'Tickets purchased successfully',
            'notification-tickets-error': 'Error purchasing tickets',
            'notification-ptoken-sold': 'P-Token converted to MATIC successfully',
            'notification-ptoken-error': 'Error converting P-Token',
            'notification-insufficient-balance': 'Insufficient MATIC balance',
            'notification-connect-first': 'Please connect your wallet first',
            'notification-network-error': 'Please connect to Polygon network',
            'notification-account-changed': 'Account changed',
            'notification-wallet-disconnected': 'Wallet disconnected',
            'notification-no-winners': 'No winners yet',
            'notification-transaction-pending': 'Transaction processing...',
            'notification-transaction-success': 'Transaction completed successfully',
            'notification-transaction-failed': 'Transaction failed',
            
            // Status
            'processing-text': 'Processing...',
            'no-wallet-detected': 'No wallet detected',
            'trustwallet-not-detected': 'Trust Wallet not detected',
            'coinbase-not-detected': 'Coinbase Wallet not detected',
            'walletconnect-coming-soon': 'WalletConnect coming soon',
            'transaction-confirming': 'Transaction is being confirmed on the blockchain'
        }
    },

    init() {
        const savedLanguage = localStorage.getItem('winstreakpol-language');
        if (savedLanguage) {
            currentLanguage = savedLanguage;
        }
        document.getElementById('languageSelect').value = currentLanguage;
        this.update();
    },

    update() {
        const strings = this.strings[currentLanguage];
        
        for (const [key, value] of Object.entries(strings)) {
            const element = document.getElementById(key);
            if (element) {
                element.textContent = value;
            }
        }
        
        document.body.dir = currentLanguage === 'fa' ? 'rtl' : 'ltr';
        localStorage.setItem('winstreakpol-language', currentLanguage);
    },

    get(key) {
        return this.strings[currentLanguage][key] || key;
    },

    setLanguage(lang) {
        currentLanguage = lang;
        this.update();
        if (isInitialized) {
            AppManager.refreshAllData();
        }
    }
};

// =============================================
// سیستم مدیریت کیف پول
// =============================================

const WalletManager = {
    async init() {
        await this.initWeb3();
        this.setupEventListeners();
    },

    async initWeb3() {
        try {
            if (window.ethereum) {
                web3 = new Web3(window.ethereum);
                console.log('Web3 initialized with MetaMask');
            } else if (window.web3) {
                web3 = new Web3(window.web3.currentProvider);
                console.log('Web3 initialized with legacy provider');
            } else {
                web3 = new Web3('https://polygon-rpc.com');
                console.log('Web3 initialized with fallback provider');
                this.showNotification(LanguageManager.get('no-wallet-detected'), 'warning');
            }
        } catch (error) {
            console.error('Error initializing Web3:', error);
            this.showNotification(LanguageManager.get('notification-wallet-error'), 'error');
        }
    },

    setupEventListeners() {
        // تغییر زبان
        document.getElementById('languageSelect').addEventListener('change', (e) => {
            LanguageManager.setLanguage(e.target.value);
        });

        // اتصال ولت
        document.getElementById('connectWallet').addEventListener('click', () => {
            this.showWalletModal();
        });

        // مودال ولت
        const modal = document.getElementById('walletModal');
        const closeBtn = modal.querySelector('.close');
        
        closeBtn.addEventListener('click', () => {
            modal.style.display = 'none';
        });

        window.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });

        // انتخاب کیف پول
        const walletOptions = document.querySelectorAll('.wallet-option');
        walletOptions.forEach(option => {
            option.addEventListener('click', () => {
                const walletType = option.getAttribute('data-wallet');
                this.connectToWallet(walletType);
            });
        });

        // مدیریت تغییرات حساب و شبکه
        if (window.ethereum) {
            window.ethereum.on('accountsChanged', (accounts) => {
                this.handleAccountsChanged(accounts);
            });
            
            window.ethereum.on('chainChanged', (chainId) => {
                this.handleChainChanged(chainId);
            });
        }
    },

    async connectToWallet(walletType) {
        try {
            let provider;
            
            switch(walletType) {
                case 'metamask':
                    provider = await this.connectMetaMask();
                    break;
                case 'trustwallet':
                    provider = await this.connectTrustWallet();
                    break;
                case 'walletconnect':
                    await this.connectWalletConnect();
                    return;
                case 'coinbase':
                    provider = await this.connectCoinbase();
                    break;
                default:
                    throw new Error('Unsupported wallet type');
            }

            if (provider) {
                await this.finalizeConnection(provider);
            }

        } catch (error) {
            console.error('Error connecting wallet:', error);
            this.showNotification(LanguageManager.get('notification-wallet-error'), 'error');
        }
    },

    async connectMetaMask() {
        if (!window.ethereum) {
            if (confirm(LanguageManager.get('no-wallet-detected') + '. ' + 
                       (currentLanguage === 'fa' ? 'آیا می‌خواهید متامسک نصب کنید؟' : 'Would you like to install MetaMask?'))) {
                window.open('https://metamask.io/download.html', '_blank');
            }
            throw new Error('MetaMask not installed');
        }

        try {
            await window.ethereum.request({ method: 'eth_requestAccounts' });
            return window.ethereum;
        } catch (error) {
            if (error.code === 4001) {
                throw new Error('User rejected connection');
            }
            throw error;
        }
    },

    async connectTrustWallet() {
        if (!window.ethereum) {
            this.showNotification(LanguageManager.get('trustwallet-not-detected'), 'error');
            throw new Error('Trust Wallet not detected');
        }

        try {
            await window.ethereum.request({ method: 'eth_requestAccounts' });
            return window.ethereum;
        } catch (error) {
            if (error.code === 4001) {
                throw new Error('User rejected connection');
            }
            throw error;
        }
    },

    async connectWalletConnect() {
        try {
            this.showNotification('WalletConnect: ' + (currentLanguage === 'fa' ? 'در حال اتصال...' : 'Connecting...'), 'info');
            
            // شبیه‌سازی اتصال WalletConnect
            setTimeout(() => {
                if (confirm(currentLanguage === 'fa' ? 
                    'برای اتصال با WalletConnect، لطفا اپ موبایل WalletConnect را باز کرده و QR code را اسکن کنید. آیا می‌خواهید ادامه دهید؟' : 
                    'To connect with WalletConnect, please open the WalletConnect mobile app and scan the QR code. Would you like to proceed?')) {
                    
                    setTimeout(() => {
                        userAccount = '0x' + Math.random().toString(16).substr(2, 40);
                        web3 = new Web3('https://polygon-rpc.com');
                        
                        this.updateWalletInfo();
                        this.showNotification(LanguageManager.get('notification-wallet-connected'), 'success');
                        document.getElementById('walletModal').style.display = 'none';
                        
                        AppManager.refreshAllData();
                    }, 2000);
                }
            }, 1000);
        } catch (error) {
            throw new Error('WalletConnect connection failed');
        }
    },

    async connectCoinbase() {
        if (window.ethereum) {
            try {
                await window.ethereum.request({ method: 'eth_requestAccounts' });
                return window.ethereum;
            } catch (error) {
                if (error.code === 4001) {
                    throw new Error('User rejected connection');
                }
                throw error;
            }
        } else if (window.coinbaseWalletExtension) {
            return window.coinbaseWalletExtension;
        } else {
            this.showNotification(LanguageManager.get('coinbase-not-detected'), 'error');
            throw new Error('Coinbase Wallet not detected');
        }
    },

    async finalizeConnection(provider) {
        web3 = new Web3(provider);
        await this.switchToPolygon();
        await ContractManager.loadContracts();
        
        const accounts = await web3.eth.getAccounts();
        userAccount = accounts[0];
        
        if (userAccount) {
            await this.updateWalletInfo();
            this.showNotification(LanguageManager.get('notification-wallet-connected'), 'success');
            document.getElementById('walletModal').style.display = 'none';
            
            await AppManager.refreshAllData();
        }
    },

    async switchToPolygon() {
        try {
            if (window.ethereum) {
                await window.ethereum.request({
                    method: 'wallet_switchEthereumChain',
                    params: [{ chainId: '0x89' }],
                });
            }
        } catch (switchError) {
            if (switchError.code === 4902) {
                try {
                    await window.ethereum.request({
                        method: 'wallet_addEthereumChain',
                        params: [{
                            chainId: '0x89',
                            chainName: 'Polygon Mainnet',
                            rpcUrls: ['https://polygon-rpc.com'],
                            nativeCurrency: {
                                name: 'MATIC',
                                symbol: 'MATIC',
                                decimals: 18
                            },
                            blockExplorerUrls: ['https://polygonscan.com/']
                        }],
                    });
                } catch (addError) {
                    this.showNotification(LanguageManager.get('notification-network-error'), 'error');
                }
            }
        }
    },

    async updateWalletInfo() {
        const walletInfo = document.getElementById('walletInfo');
        const walletAddress = document.getElementById('walletAddress');
        const connectBtn = document.getElementById('connectWallet');
        const buyTicketsBtn = document.getElementById('buyTickets');
        const sellPTokensBtn = document.getElementById('sellPTokens');
        
        if (userAccount) {
            const shortAddress = `${userAccount.substring(0, 6)}...${userAccount.substring(38)}`;
            walletAddress.textContent = shortAddress;
            walletInfo.style.display = 'flex';
            connectBtn.innerHTML = `<i class="fas fa-check"></i> ${LanguageManager.get('disconnect-text')}`;
            
            // فعال کردن دکمه‌های خرید و فروش
            if (buyTicketsBtn) buyTicketsBtn.disabled = false;
            if (sellPTokensBtn) sellPTokensBtn.disabled = false;
            
            await this.updateUserBalance();
        } else {
            walletInfo.style.display = 'none';
            connectBtn.innerHTML = `<i class="fas fa-plug"></i> ${LanguageManager.get('connect-text')}`;
            
            // غیرفعال کردن دکمه‌های خرید و فروش
            if (buyTicketsBtn) buyTicketsBtn.disabled = true;
            if (sellPTokensBtn) sellPTokensBtn.disabled = true;
        }
    },

    async updateUserBalance() {
        if (!userAccount) return;
        
        try {
            const balance = await web3.eth.getBalance(userAccount);
            userMaticBalance = web3.utils.fromWei(balance, 'ether');
            
            const balanceElement = document.getElementById('maticBalance');
            if (balanceElement) {
                balanceElement.textContent = `${parseFloat(userMaticBalance).toFixed(4)} MATIC`;
            }
        } catch (error) {
            console.error('Error updating user balance:', error);
        }
    },

    handleAccountsChanged(accounts) {
        userAccount = accounts[0] || null;
        this.updateWalletInfo();
        
        if (userAccount) {
            this.showNotification(LanguageManager.get('notification-account-changed'), 'info');
            AppManager.refreshAllData();
        } else {
            this.showNotification(LanguageManager.get('notification-wallet-disconnected'), 'warning');
        }
    },

    handleChainChanged(chainId) {
        if (chainId !== '0x89') {
            this.showNotification(LanguageManager.get('notification-network-error'), 'error');
        } else {
            AppManager.refreshAllData();
        }
    },

    showWalletModal() {
        document.getElementById('walletModal').style.display = 'block';
    },

    showNotification(message, type = 'info') {
        const container = document.getElementById('notifications');
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        
        let icon = 'fas fa-info-circle';
        if (type === 'success') icon = 'fas fa-check-circle';
        if (type === 'error') icon = 'fas fa-exclamation-circle';
        if (type === 'warning') icon = 'fas fa-exclamation-triangle';
        
        notification.innerHTML = `
            <i class="${icon}"></i>
            <span>${message}</span>
        `;
        
        container.appendChild(notification);
        
        setTimeout(() => {
            notification.style.animation = 'slideInRight 0.3s ease reverse';
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.remove();
                }
            }, 300);
        }, 5000);
    }
};

// =============================================
// سیستم مدیریت قراردادها
// =============================================

const ContractManager = {
    async loadContracts() {
        if (!web3) return;

        try {
            // قرارداد اصلی لاتاری
            contract = new web3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS);
            
            // قرارداد P-Token
            pTokenContract = new web3.eth.Contract(PTOKEN_CONTRACT_ABI, PTOKEN_CONTRACT_ADDRESS);
            
            console.log('Contracts loaded successfully');
            
            // به‌روزرسانی قیمت بلیط پس از لود قرارداد
            await LotteryManager.updateTotalPrice();
        } catch (error) {
            console.error('Error loading contracts:', error);
            WalletManager.showNotification(LanguageManager.get('notification-wallet-error'), 'error');
        }
    },

    async getContractData() {
        if (!contract) return null;

        try {
            const overview = await contract.methods.getSystemOverview().call();
            const ticketPriceWei = await contract.methods.ticketPrice().call();
            
            return {
                ticketPrice: ticketPriceWei,
                totalTickets: overview[0],
                totalPrizes: overview[1],
                contractBalance: overview[2]
            };
        } catch (error) {
            console.error('Error getting contract data:', error);
            return null;
        }
    },

    async getPoolsData() {
        if (!contract) return null;

        try {
            // دریافت داده‌های واقعی از قرارداد
            const pool1Status = await contract.methods.getPoolStatus(1).call();
            const pool2Status = await contract.methods.getPoolStatus(2).call();
            const pool3Status = await contract.methods.getPoolStatus(3).call();

            return {
                pool1Tickets: pool1Status[1],
                pool1Prize: pool1Status[3],
                pool2Tickets: pool2Status[1],
                pool2Prize: pool2Status[3],
                pool3Tickets: pool3Status[1],
                pool3Prize: pool3Status[3]
            };
        } catch (error) {
            console.error('Error getting pools data:', error);
            return null;
        }
    },

    async getUserTickets() {
        if (!userAccount || !contract) return null;

        try {
            const userTickets = await contract.methods.getUserCurrentTickets(userAccount).call();
            
            return {
                pool1Tickets: userTickets[0],
                pool2Tickets: userTickets[1],
                pool3Tickets: userTickets[2]
            };
        } catch (error) {
            console.error('Error getting user tickets:', error);
            return null;
        }
    },

    async getUserStats() {
        if (!userAccount || !contract) return null;

        try {
            const userStats = await contract.methods.getUserParticipationStats(userAccount).call();
            
            return {
                totalTicketsAllTime: userStats[0],
                totalRoundsParticipated: userStats[1],
                totalWins: userStats[2],
                totalPrizeWon: userStats[3]
            };
        } catch (error) {
            console.error('Error getting user stats:', error);
            return null;
        }
    },

    async getRecentWinners() {
        if (!contract) return [];

        try {
            const winners = await contract.methods.getRecentWinners(10).call();
            return winners;
        } catch (error) {
            console.error('Error getting recent winners:', error);
            return [];
        }
    }
};

// =============================================
// سیستم مدیریت لاتاری
// =============================================

const LotteryManager = {
    init() {
        this.setupEventListeners();
    },

    setupEventListeners() {
        // خرید بلیط
        const buyTicketsBtn = document.getElementById('buyTickets');
        if (buyTicketsBtn) {
            buyTicketsBtn.addEventListener('click', () => {
                this.buyTickets();
            });
        }

        // تغییر تعداد بلیط
        const ticketCountInput = document.getElementById('ticketCount');
        if (ticketCountInput) {
            ticketCountInput.addEventListener('input', () => {
                this.updateTotalPrice();
            });
        }
    },

    changeTicketCount(change) {
        const input = document.getElementById('ticketCount');
        let value = parseInt(input.value) + change;
        value = Math.max(1, value);
        input.value = value;
        this.updateTotalPrice();
    },

    async updateTotalPrice() {
        try {
            if (!contract) {
                this.clearPriceData();
                return;
            }
            
            // دریافت قیمت بلیط از قرارداد
            const ticketPriceWei = await contract.methods.ticketPrice().call();
            const ticketPrice = web3.utils.fromWei(ticketPriceWei, 'ether');
            
            const ticketCount = document.getElementById('ticketCount').value;
            const totalPrice = ticketCount * parseFloat(ticketPrice);
            
            document.getElementById('totalPrice').textContent = `${totalPrice.toFixed(4)} MATIC`;
            document.getElementById('currentTicketPrice').textContent = `${parseFloat(ticketPrice).toFixed(4)} MATIC`;
        } catch (error) {
            console.error('Error updating total price:', error);
            this.clearPriceData();
        }
    },

    clearPriceData() {
        document.getElementById('totalPrice').textContent = '0 MATIC';
        document.getElementById('currentTicketPrice').textContent = '0 MATIC';
    },

    async buyTickets() {
        const ticketCount = parseInt(document.getElementById('ticketCount').value);
        
        if (!userAccount) {
            WalletManager.showNotification(LanguageManager.get('notification-connect-first'), 'error');
            return;
        }

        if (!contract) {
            WalletManager.showNotification(LanguageManager.get('notification-wallet-error'), 'error');
            return;
        }

        if (ticketCount <= 0) {
            WalletManager.showNotification(currentLanguage === 'fa' ? 'لطفا تعداد معتبری وارد کنید' : 'Please enter a valid amount', 'error');
            return;
        }

        try {
            const buyBtn = document.getElementById('buyTickets');
            const originalText = buyBtn.innerHTML;
            buyBtn.innerHTML = '<div class="loading"></div> ' + LanguageManager.get('processing-purchase');
            buyBtn.disabled = true;

            // دریافت قیمت بلیط از قرارداد
            const ticketPriceWei = await contract.methods.ticketPrice().call();
            const totalPriceWei = BigInt(ticketPriceWei) * BigInt(ticketCount);

            // بررسی موجودی کاربر
            const userBalance = await web3.eth.getBalance(userAccount);
            if (BigInt(userBalance) < totalPriceWei) {
                WalletManager.showNotification(LanguageManager.get('notification-insufficient-balance'), 'error');
                return;
            }

            // فراخوانی تابع خرید بلیط در قرارداد
            const transaction = await contract.methods.buyTicket(ticketCount).send({
                from: userAccount,
                value: totalPriceWei.toString(),
                gas: 300000
            });

            // نمایش وضعیت تراکنش
            UIManager.showTransactionModal('success', transaction.transactionHash);
            
            WalletManager.showNotification(LanguageManager.get('notification-tickets-purchased'), 'success');
            await AppManager.refreshAllData();

        } catch (error) {
            console.error('Error buying tickets:', error);
            
            if (error.code === 4001) {
                WalletManager.showNotification(currentLanguage === 'fa' ? 'کاربر تراکنش را رد کرد' : 'User rejected the transaction', 'error');
            } else {
                WalletManager.showNotification(LanguageManager.get('notification-tickets-error'), 'error');
            }
        } finally {
            const buyBtn = document.getElementById('buyTickets');
            if (buyBtn) {
                buyBtn.innerHTML = `<i class="fas fa-shopping-cart"></i> ${LanguageManager.get('buy-tickets-text')}`;
                buyBtn.disabled = false;
            }
        }
    },

    spinWheel() {
        const wheel = document.getElementById('wheel');
        const spinBtn = document.getElementById('spinWheel');

        if (!wheel || wheel.classList.contains('spinning')) return;

        spinBtn.disabled = true;
        spinBtn.innerHTML = `<i class="fas fa-sync-alt fa-spin"></i> ${LanguageManager.get('spinning-text')}`;

        wheel.classList.add('spinning');

        setTimeout(() => {
            wheel.classList.remove('spinning');
            spinBtn.disabled = false;
            spinBtn.innerHTML = `<i class="fas fa-play"></i> ${LanguageManager.get('spin-wheel-text')}`;
            this.showRandomWinner();
        }, 4000);
    },

    showRandomWinner() {
        const winners = document.querySelectorAll('.winner-item');
        if (winners.length > 0) {
            const randomIndex = Math.floor(Math.random() * winners.length);
            const randomWinner = winners[randomIndex];

            randomWinner.style.background = 'rgba(245, 158, 11, 0.2)';
            randomWinner.style.borderLeftColor = 'var(--accent)';
            randomWinner.style.transform = 'scale(1.05)';

            randomWinner.scrollIntoView({ behavior: 'smooth', block: 'center' });

            setTimeout(() => {
                randomWinner.style.background = '';
                randomWinner.style.borderLeftColor = '';
                randomWinner.style.transform = '';
            }, 3000);

            WalletManager.showNotification('🎉 ' + LanguageManager.get('demo-winner-selected'), 'success');
        }
    }
};

// =============================================
// سیستم مدیریت P-Token
// =============================================

const PTokenManager = {
    init() {
        this.setupEventListeners();
    },

    setupEventListeners() {
        // فروش P-Token
        const sellPTokensBtn = document.getElementById('sellPTokens');
        if (sellPTokensBtn) {
            sellPTokensBtn.addEventListener('click', () => {
                this.sellPTokens();
            });
        }

        // تغییر مقدار P-Token
        const pTokenAmountInput = document.getElementById('ptokenAmount');
        if (pTokenAmountInput) {
            pTokenAmountInput.addEventListener('input', () => {
                this.updateConversionSummary();
            });
        }
    },

    changePTokenAmount(change) {
        const input = document.getElementById('ptokenAmount');
        let value = parseInt(input.value) + change;
        value = Math.max(1, value);
        input.value = value;
        this.updateConversionSummary();
    },

    async updateConversionSummary() {
        try {
            if (!pTokenContract || !userAccount) {
                this.clearConversionData();
                return;
            }

            const pTokenAmount = document.getElementById('ptokenAmount').value;
            
            // دریافت قیمت P-Token از قرارداد
            const pTokenPriceWei = await pTokenContract.methods.getPTokenPriceInWei().call();
            const pTokenPrice = web3.utils.fromWei(pTokenPriceWei, 'ether');

            document.getElementById('conversionPToken').textContent = pTokenAmount;
            document.getElementById('conversionPrice').textContent = `${parseFloat(pTokenPrice).toFixed(6)} MATIC`;

            const totalValue = pTokenAmount * parseFloat(pTokenPrice);
            document.getElementById('conversionTotal').textContent = `${totalValue.toFixed(4)} MATIC`;

        } catch (error) {
            console.error('Error updating conversion summary:', error);
            this.clearConversionData();
        }
    },

    clearConversionData() {
        document.getElementById('conversionPToken').textContent = '0';
        document.getElementById('conversionPrice').textContent = '0 MATIC';
        document.getElementById('conversionTotal').textContent = '0 MATIC';
    },

    async sellPTokens() {
        const pTokenAmount = document.getElementById('ptokenAmount').value;

        if (!userAccount) {
            WalletManager.showNotification(LanguageManager.get('notification-connect-first'), 'error');
            return;
        }

        if (!pTokenContract) {
            WalletManager.showNotification(currentLanguage === 'fa' ? 'قرارداد P-Token لود نشده است' : 'P-Token contract not loaded', 'error');
            return;
        }

        if (pTokenAmount <= 0) {
            WalletManager.showNotification(currentLanguage === 'fa' ? 'لطفا مقدار معتبری وارد کنید' : 'Please enter a valid amount', 'error');
            return;
        }

        try {
            const sellBtn = document.getElementById('sellPTokens');
            const originalText = sellBtn.innerHTML;
            sellBtn.innerHTML = '<div class="loading"></div> ' + LanguageManager.get('processing-text');
            sellBtn.disabled = true;

            // تبدیل مقدار به Wei
            const pTokenAmountWei = web3.utils.toWei(pTokenAmount.toString(), 'ether');

            // بررسی موجودی کاربر
            const userBalanceWei = await pTokenContract.methods.balanceOf(userAccount).call();
            if (BigInt(pTokenAmountWei) > BigInt(userBalanceWei)) {
                WalletManager.showNotification(currentLanguage === 'fa' ? 'موجودی P-Token کافی نیست' : 'Insufficient P-Token balance', 'error');
                return;
            }

            // فراخوانی تابع sellPToken در قرارداد
            const transaction = await pTokenContract.methods.sellPToken(pTokenAmountWei).send({
                from: userAccount,
                gas: 300000
            });

            // نمایش وضعیت تراکنش
            UIManager.showTransactionModal('success', transaction.transactionHash);
            
            WalletManager.showNotification(LanguageManager.get('notification-ptoken-sold'), 'success');
            await this.updatePTokenData();
            await WalletManager.updateUserBalance();

        } catch (error) {
            console.error('Error selling P-Tokens:', error);
            
            if (error.code === 4001) {
                WalletManager.showNotification(currentLanguage === 'fa' ? 'کاربر تراکنش را رد کرد' : 'User rejected the transaction', 'error');
            } else if (error.message.includes('insufficient balance')) {
                WalletManager.showNotification(currentLanguage === 'fa' ? 'موجودی P-Token کافی نیست' : 'Insufficient P-Token balance', 'error');
            } else {
                WalletManager.showNotification(LanguageManager.get('notification-ptoken-error'), 'error');
            }
        } finally {
            const sellBtn = document.getElementById('sellPTokens');
            if (sellBtn) {
                sellBtn.innerHTML = `<i class="fas fa-exchange-alt"></i> ${LanguageManager.get('sell-ptoken-text')}`;
                sellBtn.disabled = false;
            }
        }
    },

    async updatePTokenData() {
        if (!userAccount || !pTokenContract) {
            this.clearPTokenData();
            return;
        }

        try {
            // دریافت موجودی P-Token کاربر
            const pTokenBalanceWei = await pTokenContract.methods.balanceOf(userAccount).call();
            const pTokenBalance = web3.utils.fromWei(pTokenBalanceWei, 'ether');

            document.getElementById('userPTokenBalance').textContent = `${parseFloat(pTokenBalance).toFixed(2)} P-Token`;
            document.getElementById('maxPTokenAmount').textContent = parseFloat(pTokenBalance).toFixed(2);

            // دریافت قیمت P-Token
            const pTokenPriceWei = await pTokenContract.methods.getPTokenPriceInWei().call();
            const pTokenPrice = web3.utils.fromWei(pTokenPriceWei, 'ether');

            document.getElementById('ptokenPrice').textContent = `${parseFloat(pTokenPrice).toFixed(6)} MATIC`;

            // محاسبه ارزش کل
            const totalValue = parseFloat(pTokenBalance) * parseFloat(pTokenPrice);
            document.getElementById('totalPTokenValue').textContent = `${totalValue.toFixed(4)} MATIC`;

            this.updateConversionSummary();

        } catch (error) {
            console.error('Error updating P-Token data:', error);
            this.clearPTokenData();
        }
    },

    clearPTokenData() {
        document.getElementById('userPTokenBalance').textContent = '0 P-Token';
        document.getElementById('maxPTokenAmount').textContent = '0';
        document.getElementById('ptokenPrice').textContent = '0 MATIC';
        document.getElementById('totalPTokenValue').textContent = '0 MATIC';
        this.clearConversionData();
    }
};

// =============================================
// سیستم مدیریت رابط کاربری
// =============================================

const UIManager = {
    init() {
        this.setupTabNavigation();
        this.setupModals();
        this.setupWheelEvents();
    },

    setupTabNavigation() {
        const tabBtns = document.querySelectorAll('.tab-btn');
        const tabContents = document.querySelectorAll('.tab-content');

        tabBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const tabId = btn.getAttribute('data-tab');

                tabBtns.forEach(b => b.classList.remove('active'));
                tabContents.forEach(content => content.classList.remove('active'));

                btn.classList.add('active');
                document.getElementById(tabId).classList.add('active');
            });
        });
    },

    setupModals() {
        // مودال وضعیت تراکنش
        const transactionModal = document.getElementById('transactionModal');
        const closeBtn = transactionModal.querySelector('.close');

        closeBtn.addEventListener('click', () => {
            transactionModal.style.display = 'none';
        });

        window.addEventListener('click', (e) => {
            if (e.target === transactionModal) {
                transactionModal.style.display = 'none';
            }
        });
    },

    setupWheelEvents() {
        const spinBtn = document.getElementById('spinWheel');
        if (spinBtn) {
            spinBtn.addEventListener('click', () => {
                LotteryManager.spinWheel();
            });
        }
    },

    updateDashboard(data) {
        if (!data) {
            this.clearDashboardData();
            return;
        }

        document.getElementById('ticketPrice').textContent = `${web3.utils.fromWei(data.ticketPrice, 'ether')} MATIC`;
        document.getElementById('totalTickets').textContent = data.totalTickets.toLocaleString();
        document.getElementById('totalPrizes').textContent = `${web3.utils.fromWei(data.totalPrizes, 'ether')} MATIC`;
        document.getElementById('contractBalance').textContent = `${web3.utils.fromWei(data.contractBalance, 'ether')} MATIC`;
    },

    clearDashboardData() {
        document.getElementById('ticketPrice').textContent = '0 MATIC';
        document.getElementById('totalTickets').textContent = '0';
        document.getElementById('totalPrizes').textContent = '0 MATIC';
        document.getElementById('contractBalance').textContent = '0 MATIC';
    },

    updatePools(poolsData, userTickets) {
        if (!poolsData) {
            this.clearPoolsData();
            return;
        }

        // استخر 1 - نقره
        document.getElementById('pool1Tickets').textContent = `${poolsData.pool1Tickets}/125`;
        document.getElementById('pool1Prize').textContent = `${web3.utils.fromWei(poolsData.pool1Prize, 'ether')} MATIC`;
        document.getElementById('pool1Progress').style.width = `${(poolsData.pool1Tickets / 125) * 100}%`;

        // استخر 2 - طلا
        document.getElementById('pool2Tickets').textContent = `${poolsData.pool2Tickets}/500`;
        document.getElementById('pool2Prize').textContent = `${web3.utils.fromWei(poolsData.pool2Prize, 'ether')} MATIC`;
        document.getElementById('pool2Progress').style.width = `${(poolsData.pool2Tickets / 500) * 100}%`;

        // استخر 3 - الماس
        document.getElementById('pool3Tickets').textContent = `${poolsData.pool3Tickets}/2500`;
        document.getElementById('pool3Prize').textContent = `${web3.utils.fromWei(poolsData.pool3Prize, 'ether')} MATIC`;
        document.getElementById('pool3Progress').style.width = `${(poolsData.pool3Tickets / 2500) * 100}%`;

        // بروزرسانی بلیط‌های کاربر
        if (userAccount && userTickets) {
            const ticketsText = LanguageManager.get('tickets-text');

            document.getElementById('userPool1Tickets').textContent = `${userTickets.pool1Tickets} ${ticketsText}`;
            document.getElementById('userPool2Tickets').textContent = `${userTickets.pool2Tickets} ${ticketsText}`;
            document.getElementById('userPool3Tickets').textContent = `${userTickets.pool3Tickets} ${ticketsText}`;

            this.updateWinningChance(userTickets, poolsData);
        } else {
            this.clearUserTicketsData();
        }
    },

    clearPoolsData() {
        document.getElementById('pool1Tickets').textContent = '0/125';
        document.getElementById('pool1Prize').textContent = '0 MATIC';
        document.getElementById('pool1Progress').style.width = '0%';
        
        document.getElementById('pool2Tickets').textContent = '0/500';
        document.getElementById('pool2Prize').textContent = '0 MATIC';
        document.getElementById('pool2Progress').style.width = '0%';
        
        document.getElementById('pool3Tickets').textContent = '0/2500';
        document.getElementById('pool3Prize').textContent = '0 MATIC';
        document.getElementById('pool3Progress').style.width = '0%';
    },

    clearUserTicketsData() {
        document.getElementById('userPool1Tickets').textContent = '0 ' + LanguageManager.get('tickets-text');
        document.getElementById('userPool2Tickets').textContent = '0 ' + LanguageManager.get('tickets-text');
        document.getElementById('userPool3Tickets').textContent = '0 ' + LanguageManager.get('tickets-text');
    },

    updateWinningChance(userTickets, poolsData) {
        const chance1 = poolsData.pool1Tickets > 0 ? (userTickets.pool1Tickets / poolsData.pool1Tickets) * 100 : 0;
        const chance2 = poolsData.pool2Tickets > 0 ? (userTickets.pool2Tickets / poolsData.pool2Tickets) * 100 : 0;
        const chance3 = poolsData.pool3Tickets > 0 ? (userTickets.pool3Tickets / poolsData.pool3Tickets) * 100 : 0;

        this.updateCircleProgress('chanceCircle1', chance1);
        this.updateCircleProgress('chanceCircle2', chance2);
        this.updateCircleProgress('chanceCircle3', chance3);
    },

    updateCircleProgress(circleId, percent) {
        const circle = document.getElementById(circleId);
        if (circle) {
            circle.style.background = `conic-gradient(var(--primary) ${percent}%, transparent 0%)`;
            const valueElement = circle.querySelector('.circle-value');
            if (valueElement) {
                valueElement.textContent = `${percent.toFixed(1)}%`;
            }
        }
    },

    updateUserStats(userStats) {
        if (!userAccount || !userStats) {
            this.clearUserStatsData();
            return;
        }

        const profileAddress = document.getElementById('profileAddress');
        if (profileAddress) {
            const shortAddress = `${userAccount.substring(0, 8)}...${userAccount.substring(36)}`;
            profileAddress.textContent = shortAddress;
        }

        document.getElementById('profileTotalTickets').textContent = userStats.totalTicketsAllTime.toLocaleString();
        document.getElementById('profileRounds').textContent = userStats.totalRoundsParticipated.toLocaleString();
        document.getElementById('profileWins').textContent = userStats.totalWins.toLocaleString();
        document.getElementById('profileTotalPrize').textContent = `${web3.utils.fromWei(userStats.totalPrizeWon, 'ether')} MATIC`;
    },

    clearUserStatsData() {
        document.getElementById('profileAddress').textContent = currentLanguage === 'fa' ? 'ولت متصل نشده' : 'Wallet not connected';
        document.getElementById('profileTotalTickets').textContent = '0';
        document.getElementById('profileRounds').textContent = '0';
        document.getElementById('profileWins').textContent = '0';
        document.getElementById('profileTotalPrize').textContent = '0 MATIC';
        
        // ریست کردن دایره‌های شانس برنده شدن
        this.updateCircleProgress('chanceCircle1', 0);
        this.updateCircleProgress('chanceCircle2', 0);
        this.updateCircleProgress('chanceCircle3', 0);
    },

    updateRecentWinners(winners) {
        let winnersHTML = '';

        if (winners.length > 0) {
            winners.forEach(winner => {
                const shortAddress = `${winner.winner.substring(0, 6)}...${winner.winner.substring(38)}`;
                const prize = parseFloat(web3.utils.fromWei(winner.prize.toString(), 'ether')).toFixed(2);
                const date = new Date(winner.timestamp * 1000).toLocaleDateString(currentLanguage === 'fa' ? 'fa-IR' : 'en-US');

                winnersHTML += `
                    <div class="winner-item">
                        <div>
                            <div class="winner-address">${shortAddress}</div>
                            <div style="font-size: 0.8rem; color: var(--gray); margin-top: 0.25rem;">${date}</div>
                        </div>
                        <div class="winner-prize">${prize} MATIC</div>
                    </div>
                `;
            });
        } else {
            winnersHTML = `<div class="winner-item">${LanguageManager.get('notification-no-winners')}</div>`;
        }

        document.getElementById('recentWinners').innerHTML = winnersHTML;
    },

    showTransactionModal(status, hash) {
        const modal = document.getElementById('transactionModal');
        const statusIcon = modal.querySelector('.status-icon');
        const statusText = modal.querySelector('#transaction-status-text');
        const details = modal.querySelector('#transaction-details');
        const hashElement = modal.querySelector('#tx-hash');

        statusIcon.className = 'status-icon';
        statusIcon.innerHTML = '<i class="fas fa-sync-alt fa-spin"></i>';

        if (status === 'pending') {
            statusText.textContent = LanguageManager.get('notification-transaction-pending');
            details.textContent = LanguageManager.get('transaction-confirming');
        } else if (status === 'success') {
            statusIcon.className = 'status-icon success';
            statusIcon.innerHTML = '<i class="fas fa-check-circle"></i>';
            statusText.textContent = LanguageManager.get('notification-transaction-success');
            details.textContent = currentLanguage === 'fa' ? 'تراکنش با موفقیت انجام شد' : 'Transaction completed successfully';
        } else if (status === 'error') {
            statusIcon.className = 'status-icon error';
            statusIcon.innerHTML = '<i class="fas fa-exclamation-circle"></i>';
            statusText.textContent = LanguageManager.get('notification-transaction-failed');
            details.textContent = currentLanguage === 'fa' ? 'تراکنش ناموفق بود' : 'Transaction failed';
        }

        hashElement.textContent = hash;
        modal.style.display = 'block';
    }
};

// =============================================
// سیستم مدیریت اصلی برنامه
// =============================================

const AppManager = {
    async init() {
        try {
            // مقداردهی اولیه سیستم‌ها
            LanguageManager.init();
            await WalletManager.init();
            UIManager.init();
            LotteryManager.init();
            PTokenManager.init();

            // راه‌اندازی قراردادها
            await ContractManager.loadContracts();

            // بروزرسانی اولیه داده‌ها
            await this.refreshAllData();

            // تنظیم رفرش خودکار
            this.setupAutoRefresh();

            // مخفی کردن preloader
            this.hidePreloader();

            isInitialized = true;
            console.log('App initialized successfully');

        } catch (error) {
            console.error('Error initializing app:', error);
            this.hidePreloader();
        }
    },

    async refreshAllData() {
        try {
            const [
                contractData,
                poolsData,
                userTickets,
                userStats,
                recentWinners
            ] = await Promise.all([
                ContractManager.getContractData(),
                ContractManager.getPoolsData(),
                ContractManager.getUserTickets(),
                ContractManager.getUserStats(),
                ContractManager.getRecentWinners()
            ]);

            UIManager.updateDashboard(contractData);
            UIManager.updatePools(poolsData, userTickets);
            UIManager.updateUserStats(userStats);
            UIManager.updateRecentWinners(recentWinners);

            await PTokenManager.updatePTokenData();
            await WalletManager.updateUserBalance();

        } catch (error) {
            console.error('Error refreshing data:', error);
        }
    },

    setupAutoRefresh() {
        // پاک کردن interval قبلی اگر وجود دارد
        if (refreshInterval) {
            clearInterval(refreshInterval);
        }

        // تنظیم رفرش هر 30 ثانیه
        refreshInterval = setInterval(() => {
            if (userAccount) {
                this.refreshAllData();
            }
        }, 30000);
    },

    hidePreloader() {
        setTimeout(() => {
            const preloader = document.getElementById('preloader');
            preloader.classList.add('fade-out');
            setTimeout(() => {
                preloader.style.display = 'none';
                // نمایش شعار در هدر پس از مخفی شدن preloader
                this.showHeaderSlogan();
            }, 500);
        }, 1000);
    },

    showHeaderSlogan() {
        const headerSlogan = document.getElementById('headerSlogan');
        if (headerSlogan) {
            headerSlogan.style.display = 'block';
        }
    }
};

// =============================================
// راه‌اندازی برنامه
// =============================================

window.addEventListener('load', () => {
    AppManager.init();
});

// توابع global برای دسترسی از HTML
window.changeTicketCount = (change) => LotteryManager.changeTicketCount(change);
window.changePTokenAmount = (change) => PTokenManager.changePTokenAmount(change);