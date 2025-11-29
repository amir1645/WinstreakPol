// =============================================
// WinstreakPol - Professional Lottery dApp
// =============================================

// تنظیمات قراردادها
const CONTRACT_ADDRESS = '0xdFC970De4C016AB950F965e5364048C16468e2Ec';
const PTOKEN_CONTRACT_ADDRESS = '0x82F7dBe1792436d15bdA22bB3340bD3f45D614Fa';

// ABI قرارداد اصلی لاتاری
const CONTRACT_ABI = [{"inputs":[{"internalType":"address","name":"_developerWallet","type":"address"},{"internalType":"address","name":"_pTokenAddress","type":"address"},{"internalType":"address","name":"_minerPool","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"message","type":"string"},{"indexed":false,"internalType":"uint256","name":"value1","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"value2","type":"uint256"}],"name":"DebugInfo","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"DeveloperPaid","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousWallet","type":"address"},{"indexed":true,"internalType":"address","name":"newWallet","type":"address"}],"name":"DeveloperWalletUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"pool1","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"pool2","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"pool3","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"minerPool","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"dev","type":"uint256"}],"name":"FundsDistributed","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"poolId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"roundNumber","type":"uint256"},{"indexed":false,"internalType":"address[]","name":"winners","type":"address[]"},{"indexed":false,"internalType":"uint256[]","name":"prizes","type":"uint256[]"},{"indexed":false,"internalType":"uint256","name":"drawTime","type":"uint256"},{"indexed":false,"internalType":"bytes32","name":"randomness","type":"bytes32"}],"name":"LotteryDrawn","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"poolId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"roundNumber","type":"uint256"},{"indexed":false,"internalType":"address","name":"executedBy","type":"address"}],"name":"ManualDrawExecuted","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"string","name":"reason","type":"string"}],"name":"MinerContributionFailed","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"address","name":"minerPool","type":"address"}],"name":"MinerContributionSuccess","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousMinerPool","type":"address"},{"indexed":true,"internalType":"address","name":"newMinerPool","type":"address"}],"name":"MinerPoolAddressUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"MinerPoolContributed","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"timestamp","type":"uint256"}],"name":"MinerTokensBought","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"timestamp","type":"uint256"}],"name":"MinerTokensDistributed","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"winner","type":"address"},{"indexed":false,"internalType":"uint256","name":"poolId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"prize","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"timestamp","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"roundNumber","type":"uint256"}],"name":"NewWinner","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousPToken","type":"address"},{"indexed":true,"internalType":"address","name":"newPToken","type":"address"}],"name":"PTokenAddressUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"pTokensReceived","type":"uint256"}],"name":"PTokenPurchaseSuccess","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"PTokenTransferSuccess","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"winner","type":"address"},{"indexed":false,"internalType":"uint256","name":"maticAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"pTokenAmount","type":"uint256"}],"name":"PrizeConversionComplete","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"winner","type":"address"},{"indexed":false,"internalType":"uint256","name":"maticAmount","type":"uint256"}],"name":"PrizeConversionStarted","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"winner","type":"address"},{"indexed":false,"internalType":"uint256","name":"maticAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"pTokenAmount","type":"uint256"}],"name":"PrizeDistributionComplete","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"poolId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"fromRound","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"toRound","type":"uint256"},{"indexed":false,"internalType":"address","name":"triggeredBy","type":"address"}],"name":"RoundAdvanced","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint128","name":"previousPrice","type":"uint128"},{"indexed":false,"internalType":"uint128","name":"newPrice","type":"uint128"}],"name":"TicketPriceUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"ticketCount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"totalPrice","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"roundNumber","type":"uint256"}],"name":"TicketPurchased","type":"event"},{"inputs":[],"name":"DEVELOPER_SHARE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MINER_SHARE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"POOL1","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"POOL1_SHARE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"POOL2","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"POOL2_SHARE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"POOL3","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"POOL3_SHARE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"TOTAL_SHARES","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"ticketCount","type":"uint256"}],"name":"buyTicket","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"contributeToMinerPoolManually","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"developerWallet","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getAllPoolsSimplifiedStatus","outputs":[{"internalType":"uint256","name":"pool1Round","type":"uint256"},{"internalType":"uint256","name":"pool2Round","type":"uint256"},{"internalType":"uint256","name":"pool3Round","type":"uint256"},{"internalType":"uint256","name":"pool1Tickets","type":"uint256"},{"internalType":"uint256","name":"pool2Tickets","type":"uint256"},{"internalType":"uint256","name":"pool3Tickets","type":"uint256"},{"internalType":"uint256","name":"pool1Prize","type":"uint256"},{"internalType":"uint256","name":"pool2Prize","type":"uint256"},{"internalType":"uint256","name":"pool3Prize","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"poolId","type":"uint256"}],"name":"getPoolCurrentStatus","outputs":[{"internalType":"uint256[7]","name":"poolDetails","type":"uint256[7]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"poolId","type":"uint256"}],"name":"getPoolProgress","outputs":[{"internalType":"uint256","name":"currentTickets","type":"uint256"},{"internalType":"uint256","name":"maxParticipants","type":"uint256"},{"internalType":"uint256","name":"progressPercent","type":"uint256"},{"internalType":"bool","name":"isActive","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"poolId","type":"uint256"}],"name":"getPoolStatistics","outputs":[{"internalType":"uint256","name":"currentRound","type":"uint256"},{"internalType":"uint256","name":"totalTickets","type":"uint256"},{"internalType":"uint256","name":"maxParticipants","type":"uint256"},{"internalType":"uint256","name":"poolPrize","type":"uint256"},{"internalType":"uint256","name":"participantsCount","type":"uint256"},{"internalType":"uint256","name":"progressPercentage","type":"uint256"},{"internalType":"bool","name":"isActive","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"poolId","type":"uint256"}],"name":"getPoolStatus","outputs":[{"internalType":"uint256","name":"currentRound","type":"uint256"},{"internalType":"uint256","name":"currentTickets","type":"uint256"},{"internalType":"uint256","name":"maxParticipants","type":"uint256"},{"internalType":"uint256","name":"poolSize","type":"uint256"},{"internalType":"bool","name":"isReadyForDraw","type":"bool"},{"internalType":"uint256","name":"participantsCount","type":"uint256"},{"internalType":"uint256","name":"progressPercent","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"count","type":"uint256"}],"name":"getRecentWinners","outputs":[{"components":[{"internalType":"address","name":"winner","type":"address"},{"internalType":"uint96","name":"prize","type":"uint96"},{"internalType":"uint32","name":"timestamp","type":"uint32"},{"internalType":"uint8","name":"poolId","type":"uint8"},{"internalType":"uint32","name":"roundNumber","type":"uint32"},{"internalType":"bytes32","name":"randomnessProof","type":"bytes32"}],"internalType":"struct WinstreakPol.WinnerHistory[]","name":"recentWinners","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"poolId","type":"uint256"},{"internalType":"uint256","name":"roundNumber","type":"uint256"}],"name":"getRoundParticipantsWithTickets","outputs":[{"internalType":"address[]","name":"participants","type":"address[]"},{"internalType":"uint256[]","name":"tickets","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"poolId","type":"uint256"},{"internalType":"uint256","name":"roundNumber","type":"uint256"}],"name":"getRoundWinners","outputs":[{"components":[{"internalType":"address","name":"winner","type":"address"},{"internalType":"uint96","name":"prize","type":"uint96"},{"internalType":"uint32","name":"timestamp","type":"uint32"},{"internalType":"uint8","name":"poolId","type":"uint8"},{"internalType":"uint32","name":"roundNumber","type":"uint32"},{"internalType":"bytes32","name":"randomnessProof","type":"bytes32"}],"internalType":"struct WinstreakPol.WinnerHistory[]","name":"winners","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getSystemInfo","outputs":[{"internalType":"address","name":"currentOwner","type":"address"},{"internalType":"address","name":"currentPToken","type":"address"},{"internalType":"address","name":"currentMinerPool","type":"address"},{"internalType":"address","name":"currentDeveloper","type":"address"},{"internalType":"uint256","name":"currentTicketPrice","type":"uint256"},{"internalType":"uint256","name":"contractBalance","type":"uint256"},{"internalType":"uint256","name":"totalTickets","type":"uint256"},{"internalType":"uint256","name":"totalPrizes","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getSystemOverview","outputs":[{"internalType":"uint256","name":"totalTickets","type":"uint256"},{"internalType":"uint256","name":"totalPrizes","type":"uint256"},{"internalType":"uint256","name":"contractBalance","type":"uint256"},{"internalType":"uint256","name":"activePools","type":"uint256"},{"internalType":"uint256","name":"currentTicketPrice","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"getUserCurrentTickets","outputs":[{"internalType":"uint32","name":"pool1Tickets","type":"uint32"},{"internalType":"uint32","name":"pool2Tickets","type":"uint32"},{"internalType":"uint32","name":"pool3Tickets","type":"uint32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"getUserParticipationStats","outputs":[{"internalType":"uint256","name":"totalTicketsAllTime","type":"uint256"},{"internalType":"uint256","name":"totalRoundsParticipated","type":"uint256"},{"internalType":"uint256","name":"totalWins","type":"uint256"},{"internalType":"uint256","name":"totalPrizeWon","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"},{"internalType":"uint256","name":"page","type":"uint256"},{"internalType":"uint256","name":"pageSize","type":"uint256"}],"name":"getUserWinsPaginated","outputs":[{"components":[{"internalType":"address","name":"winner","type":"address"},{"internalType":"uint96","name":"prize","type":"uint96"},{"internalType":"uint32","name":"timestamp","type":"uint32"},{"internalType":"uint8","name":"poolId","type":"uint8"},{"internalType":"uint32","name":"roundNumber","type":"uint32"},{"internalType":"bytes32","name":"randomnessProof","type":"bytes32"}],"internalType":"struct WinstreakPol.WinnerHistory[]","name":"wins","type":"tuple[]"},{"internalType":"uint256","name":"totalWins","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"minerPool","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pTokenAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pool1MaxParticipants","outputs":[{"internalType":"uint32","name":"","type":"uint32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pool2MaxParticipants","outputs":[{"internalType":"uint32","name":"","type":"uint32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pool3MaxParticipants","outputs":[{"internalType":"uint32","name":"","type":"uint32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"pools","outputs":[{"internalType":"uint128","name":"poolSize","type":"uint128"},{"internalType":"uint32","name":"currentRound","type":"uint32"},{"internalType":"uint32","name":"maxParticipants","type":"uint32"},{"internalType":"uint32","name":"totalRounds","type":"uint32"},{"internalType":"uint64","name":"lastDrawTime","type":"uint64"},{"internalType":"bool","name":"isActive","type":"bool"},{"internalType":"bytes32","name":"randomnessSeed","type":"bytes32"},{"internalType":"uint256","name":"lastDrawBlock","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"prizeDistributions","outputs":[{"internalType":"uint8","name":"winnerCount","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"roundInfo","outputs":[{"internalType":"uint32","name":"totalTickets","type":"uint32"},{"internalType":"uint32","name":"startTime","type":"uint32"},{"internalType":"uint32","name":"endTime","type":"uint32"},{"internalType":"bool","name":"isCompleted","type":"bool"},{"internalType":"bytes32","name":"finalRandomness","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"roundParticipants","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"roundWinners","outputs":[{"internalType":"address","name":"winner","type":"address"},{"internalType":"uint96","name":"prize","type":"uint96"},{"internalType":"uint32","name":"timestamp","type":"uint32"},{"internalType":"uint8","name":"poolId","type":"uint8"},{"internalType":"uint32","name":"roundNumber","type":"uint32"},{"internalType":"bytes32","name":"randomnessProof","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newWallet","type":"address"}],"name":"setDeveloperWallet","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"isActive","type":"bool"}],"name":"setLotteryActive","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newMinerPool","type":"address"}],"name":"setMinerPool","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newPToken","type":"address"}],"name":"setPTokenAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"poolId","type":"uint256"},{"internalType":"uint32","name":"newMax","type":"uint32"}],"name":"setPoolMaxParticipants","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint128","name":"newPrice","type":"uint128"}],"name":"setTicketPrice","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"ticketPrice","outputs":[{"internalType":"uint128","name":"","type":"uint128"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalPrizesDistributed","outputs":[{"internalType":"uint128","name":"","type":"uint128"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalTicketsSold","outputs":[{"internalType":"uint32","name":"","type":"uint32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"triggerMinerTokenBuy","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"triggerMinerTokenDistribution","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"address","name":"","type":"address"}],"name":"userTickets","outputs":[{"internalType":"uint32","name":"","type":"uint32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"userWinningHistory","outputs":[{"internalType":"address","name":"winner","type":"address"},{"internalType":"uint96","name":"prize","type":"uint96"},{"internalType":"uint32","name":"timestamp","type":"uint32"},{"internalType":"uint8","name":"poolId","type":"uint8"},{"internalType":"uint32","name":"roundNumber","type":"uint32"},{"internalType":"bytes32","name":"randomnessProof","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"winnerHistory","outputs":[{"internalType":"address","name":"winner","type":"address"},{"internalType":"uint96","name":"prize","type":"uint96"},{"internalType":"uint32","name":"timestamp","type":"uint32"},{"internalType":"uint8","name":"poolId","type":"uint8"},{"internalType":"uint32","name":"roundNumber","type":"uint32"},{"internalType":"bytes32","name":"randomnessProof","type":"bytes32"}],"stateMutability":"view","type":"function"},{"stateMutability":"payable","type":"receive"}];

// ABI قرارداد P-Token
const PTOKEN_CONTRACT_ABI = [{"inputs":[{"internalType":"address","name":"_projectWallet","type":"address"}],"stateMutability":"payable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"maticAmount","type":"uint256"}],"name":"BackingIncreased","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"buyer","type":"address"},{"indexed":false,"internalType":"uint256","name":"maticAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"pTokenAmount","type":"uint256"}],"name":"BuyPToken","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"donor","type":"address"},{"indexed":false,"internalType":"uint256","name":"maticAmount","type":"uint256"}],"name":"DonationAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"seller","type":"address"},{"indexed":false,"internalType":"uint256","name":"pTokenAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"maticAmount","type":"uint256"}],"name":"SellPToken","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"BACKING_FEE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"FEE_DENOMINATOR","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"FEE_PERCENT","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"INITIAL_BACKING","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"INITIAL_SUPPLY","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"PROJECT_FEE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"buyPToken","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"donateToBacking","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"getContractMaticBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getPTokenPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getPTokenPriceInWei","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"lockedSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"minPTokenAmount","type":"uint256"}],"name":"safeBuyPToken","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"pTokenAmount","type":"uint256"}],"name":"sellPToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalBackingMatic","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}];

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
            // Preloader
            'preloader-text': 'در حال بارگذاری...',
            'slogan-text': 'جایی که برنده شدن به عادت تبدیل می‌شود',
            
            // Header
            'logo-text': 'WinstreakPol',
            'network-text': 'Polygon',
            'connect-text': 'اتصال ولت',
            'disconnect-text': 'قطع اتصال',
            
            // Tabs
            'tab-dashboard': 'داشبورد',
            'tab-lottery': 'خرید بلیط',
            'tab-winners': 'برندگان',
            'tab-ptoken': 'تبدیل P-Token',
            'tab-profile': 'پروفایل من',
            
            // Dashboard
            'dashboard-title': 'داشبورد لاتاری',
            'dashboard-subtitle': 'وضعیت زنده استخرهای لاتاری',
            'stat-ticket-price': 'قیمت بلیط',
            'stat-total-tickets': 'بلیط‌های فروخته شده',
            'stat-total-prizes': 'جوایز توزیع شده',
            'stat-contract-balance': 'موجودی قرارداد',
            'pools-title': 'استخرهای لاتاری',
            
            // Pool texts
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
            
            // Lottery Tab
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
            
            // Winners Tab
            'winners-title': 'گردونه برندگان',
            'winners-subtitle': 'برندگان خوش‌شانس لاتاری',
            'spin-wheel-text': 'چرخاندن گردونه',
            'recent-winners-title': 'برندگان اخیر',
            
            // P-Token Tab
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
            
            // Profile Tab
            'profile-title': 'پروفایل من',
            'profile-subtitle': 'اطلاعات و آمار شخصی شما',
            'profile-total-tickets': 'کل بلیط‌ها',
            'profile-rounds': 'راندهای شرکت کرده',
            'profile-wins': 'بردها',
            'profile-total-prize': 'جایزه کل',
            'winning-chance-title': 'شانس برنده شدن',
            'chance-pool1-label': 'استخر نقره',
            'chance-pool2-label': 'استخر طلا',
            'chance-pool3-label': 'استخر الماس',
            
            // Notifications
            'no-wallet-detected': 'هیچ کیف پولی تشخیص داده نشد',
            'notification-wallet-connected': 'اتصال کیف پول با موفقیت انجام شد',
            'notification-wallet-disconnected': 'اتصال کیف پول قطع شد',
            'notification-account-changed': 'حساب کیف پول تغییر کرد',
            'notification-network-error': 'لطفاً به شبکه Polygon متصل شوید',
            'notification-wallet-error': 'خطا در اتصال کیف پول'
        },
        en: {
            // English translations
            'preloader-text': 'Loading...',
            'slogan-text': 'Where winning becomes a habit',
            'connect-text': 'Connect Wallet',
            'disconnect-text': 'Disconnect',
            'tab-dashboard': 'Dashboard',
            'tab-lottery': 'Buy Tickets',
            'tab-winners': 'Winners',
            'tab-ptoken': 'Convert P-Token',
            'tab-profile': 'My Profile'
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
        await this.checkConnectedWallet();
    },

    async initWeb3() {
        try {
            if (window.ethereum) {
                web3 = new Web3(window.ethereum);
                console.log('Web3 initialized with MetaMask');
                
                // Initialize contracts
                await ContractManager.loadContracts();
                
            } else {
                this.showNotification(LanguageManager.get('no-wallet-detected'), 'warning');
                throw new Error('No Ethereum wallet detected');
            }
        } catch (error) {
            console.error('Error initializing Web3:', error);
            this.showNotification(LanguageManager.get('notification-wallet-error'), 'error');
        }
    },

    async checkConnectedWallet() {
        try {
            if (window.ethereum) {
                const accounts = await window.ethereum.request({ method: 'eth_accounts' });
                if (accounts.length > 0) {
                    userAccount = accounts[0];
                    await this.updateWalletInfo();
                    await AppManager.refreshAllData();
                }
            }
        } catch (error) {
            console.error('Error checking connected wallet:', error);
        }
    },

    setupEventListeners() {
        // تغییر زبان
        document.getElementById('languageSelect').addEventListener('change', (e) => {
            LanguageManager.setLanguage(e.target.value);
        });

        // اتصال/قطع اتصال ولت
        document.getElementById('connectWallet').addEventListener('click', () => {
            if (userAccount) {
                this.disconnectWallet();
            } else {
                this.connectWallet();
            }
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

    async connectWallet() {
        try {
            if (!window.ethereum) {
                this.showNotification(LanguageManager.get('no-wallet-detected'), 'warning');
                return;
            }

            const accounts = await window.ethereum.request({ 
                method: 'eth_requestAccounts' 
            });
            
            userAccount = accounts[0];
            await this.updateWalletInfo();
            this.showNotification(LanguageManager.get('notification-wallet-connected'), 'success');
            
            await AppManager.refreshAllData();
            
        } catch (error) {
            console.error('Error connecting wallet:', error);
            if (error.code === 4001) {
                this.showNotification('User rejected connection', 'error');
            } else {
                this.showNotification(LanguageManager.get('notification-wallet-error'), 'error');
            }
        }
    },

    disconnectWallet() {
        userAccount = null;
        this.updateWalletInfo();
        this.showNotification(LanguageManager.get('notification-wallet-disconnected'), 'info');
        
        // Reset UI
        AppManager.resetUI();
    },

    async updateWalletInfo() {
        const walletInfo = document.getElementById('walletInfo');
        const walletAddress = document.getElementById('walletAddress');
        const walletAddressMobile = document.getElementById('walletAddressMobile');
        const connectBtn = document.getElementById('connectWallet');
        
        if (userAccount) {
            const shortAddress = `${userAccount.substring(0, 6)}...${userAccount.substring(38)}`;
            const veryShortAddress = `${userAccount.substring(0, 4)}...${userAccount.substring(39)}`;
            
            walletAddress.textContent = shortAddress;
            walletAddressMobile.textContent = veryShortAddress;
            walletInfo.style.display = 'flex';
            connectBtn.innerHTML = `<i class="fas fa-power-off"></i> ${LanguageManager.get('disconnect-text')}`;
            
            await this.updateUserBalance();
        } else {
            walletInfo.style.display = 'none';
            connectBtn.innerHTML = `<i class="fas fa-plug"></i> ${LanguageManager.get('connect-text')}`;
        }
    },

    async updateUserBalance() {
        if (!userAccount || !web3) return;
        
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
            AppManager.resetUI();
        }
    },

    handleChainChanged(chainId) {
        // Reload the page when network changes
        window.location.reload();
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
        try {
            if (!web3) return;
            
            // Load main contract
            contract = new web3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS);
            console.log('Main contract loaded');
            
            // Load P-Token contract
            pTokenContract = new web3.eth.Contract(PTOKEN_CONTRACT_ABI, PTOKEN_CONTRACT_ADDRESS);
            console.log('P-Token contract loaded');
            
        } catch (error) {
            console.error('Error loading contracts:', error);
        }
    },

    async getTicketPrice() {
        try {
            if (!contract) return '0';
            const price = await contract.methods.ticketPrice().call();
            return web3.utils.fromWei(price, 'ether');
        } catch (error) {
            console.error('Error getting ticket price:', error);
            return '0';
        }
    },

    async getSystemOverview() {
        try {
            if (!contract) return null;
            return await contract.methods.getSystemOverview().call();
        } catch (error) {
            console.error('Error getting system overview:', error);
            return null;
        }
    },

    async buyTickets(ticketCount) {
        try {
            if (!contract || !userAccount) return null;
            
            const ticketPrice = await this.getTicketPrice();
            const totalPrice = web3.utils.toWei((parseFloat(ticketPrice) * ticketCount).toString(), 'ether');
            
            return await contract.methods.buyTicket(ticketCount).send({
                from: userAccount,
                value: totalPrice,
                gas: 300000
            });
        } catch (error) {
            console.error('Error buying tickets:', error);
            throw error;
        }
    }
};

// =============================================
// سیستم مدیریت لاتاری
// =============================================

const LotteryManager = {
    changeTicketCount(change) {
        const input = document.getElementById('ticketCount');
        let currentValue = parseInt(input.value) || 1;
        let newValue = currentValue + change;
        
        if (newValue < 1) newValue = 1;
        if (newValue > 1000) newValue = 1000;
        
        input.value = newValue;
        this.updateTicketPrice();
    },

    async updateTicketPrice() {
        try {
            const ticketCount = parseInt(document.getElementById('ticketCount').value) || 1;
            const ticketPrice = await ContractManager.getTicketPrice();
            const totalPrice = (parseFloat(ticketPrice) * ticketCount).toFixed(4);
            
            document.getElementById('currentTicketPrice').textContent = `${ticketPrice} MATIC`;
            document.getElementById('totalPrice').textContent = `${totalPrice} MATIC`;
            
        } catch (error) {
            console.error('Error updating ticket price:', error);
        }
    },

    setupEventListeners() {
        // خرید بلیط
        document.getElementById('buyTickets').addEventListener('click', async () => {
            await this.buyTickets();
        });

        // تغییر تعداد بلیط
        const ticketInput = document.getElementById('ticketCount');
        if (ticketInput) {
            ticketInput.addEventListener('input', () => {
                this.updateTicketPrice();
            });
        }
    },

    async buyTickets() {
        try {
            if (!userAccount) {
                WalletManager.showNotification('لطفا ابتدا کیف پول خود را متصل کنید', 'error');
                return;
            }

            const ticketCount = parseInt(document.getElementById('ticketCount').value) || 1;
            const buyBtn = document.getElementById('buyTickets');
            
            // Disable button during transaction
            buyBtn.disabled = true;
            buyBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> در حال پردازش...';
            
            const result = await ContractManager.buyTickets(ticketCount);
            
            WalletManager.showNotification(`خرید ${ticketCount} بلیط با موفقیت انجام شد`, 'success');
            
            // Refresh data
            await AppManager.refreshAllData();
            
        } catch (error) {
            console.error('Error in buyTickets:', error);
            WalletManager.showNotification('خطا در خرید بلیط', 'error');
        } finally {
            // Re-enable button
            const buyBtn = document.getElementById('buyTickets');
            buyBtn.disabled = false;
            buyBtn.innerHTML = '<i class="fas fa-shopping-cart"></i> خرید بلیط';
        }
    }
};

// =============================================
// سیستم مدیریت P-Token
// =============================================

const PTokenManager = {
    changePTokenAmount(change) {
        const input = document.getElementById('ptokenAmount');
        let currentValue = parseInt(input.value) || 1;
        let newValue = currentValue + change;
        
        if (newValue < 1) newValue = 1;
        
        input.value = newValue;
        this.updateConversion();
    },

    updateConversion() {
        // Placeholder for conversion logic
        const amount = parseInt(document.getElementById('ptokenAmount').value) || 1;
        document.getElementById('conversionPToken').textContent = amount;
        // Add actual conversion logic here
    }
};

// =============================================
// سیستم مدیریت رابط کاربری
// =============================================

const UIManager = {
    init() {
        this.setupTabNavigation();
        this.setupPreloader();
        this.setupWheelAnimation();
    },

    setupTabNavigation() {
        const tabBtns = document.querySelectorAll('.tab-btn');
        const tabContents = document.querySelectorAll('.tab-content');

        tabBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const tabId = btn.getAttribute('data-tab');
                
                // Remove active class from all buttons and contents
                tabBtns.forEach(b => b.classList.remove('active'));
                tabContents.forEach(c => c.classList.remove('active'));
                
                // Add active class to current button and content
                btn.classList.add('active');
                document.getElementById(tabId).classList.add('active');
            });
        });
    },

    setupPreloader() {
        const preloader = document.getElementById('preloader');
        
        // Simulate loading process
        setTimeout(() => {
            preloader.classList.add('fade-out');
            setTimeout(() => {
                preloader.style.display = 'none';
                document.getElementById('headerSlogan').style.display = 'block';
            }, 500);
        }, 2000);
    },

    setupWheelAnimation() {
        const spinBtn = document.getElementById('spinWheel');
        const wheel = document.getElementById('wheel');
        
        if (spinBtn && wheel) {
            spinBtn.addEventListener('click', () => {
                wheel.classList.add('spinning');
                setTimeout(() => {
                    wheel.classList.remove('spinning');
                }, 4000);
            });
        }
    },

    updateDashboard(data) {
        if (!data) return;
        
        // Update quick stats
        if (data.currentTicketPrice) {
            document.getElementById('ticketPrice').textContent = `${data.currentTicketPrice} MATIC`;
        }
        if (data.totalTickets) {
            document.getElementById('totalTickets').textContent = data.totalTickets;
        }
        if (data.totalPrizes) {
            document.getElementById('totalPrizes').textContent = `${data.totalPrizes} MATIC`;
        }
        if (data.contractBalance) {
            document.getElementById('contractBalance').textContent = `${data.contractBalance} MATIC`;
        }
        
        // Update pool progress
        this.updatePoolProgress();
    },

    updatePoolProgress() {
        // Placeholder progress updates - in real app, fetch from contract
        const pools = [
            { id: 1, tickets: 75, max: 125 },
            { id: 2, tickets: 250, max: 500 },
            { id: 3, tickets: 1250, max: 2500 }
        ];
        
        pools.forEach(pool => {
            const progress = (pool.tickets / pool.max) * 100;
            const progressElement = document.getElementById(`pool${pool.id}Progress`);
            const ticketsElement = document.getElementById(`pool${pool.id}Tickets`);
            const prizeElement = document.getElementById(`pool${pool.id}Prize`);
            
            if (progressElement) progressElement.style.width = `${progress}%`;
            if (ticketsElement) ticketsElement.textContent = `${pool.tickets}/${pool.max}`;
            if (prizeElement) prizeElement.textContent = `${(pool.tickets * 0.01).toFixed(2)} MATIC`;
        });
    },

    resetUI() {
        // Reset all user-specific data when disconnected
        document.getElementById('ticketPrice').textContent = '0 MATIC';
        document.getElementById('totalTickets').textContent = '0';
        document.getElementById('totalPrizes').textContent = '0 MATIC';
        document.getElementById('contractBalance').textContent = '0 MATIC';
        
        // Reset pool progress
        [1, 2, 3].forEach(poolId => {
            const progressElement = document.getElementById(`pool${poolId}Progress`);
            const ticketsElement = document.getElementById(`pool${poolId}Tickets`);
            const prizeElement = document.getElementById(`pool${poolId}Prize`);
            
            if (progressElement) progressElement.style.width = '0%';
            if (ticketsElement) ticketsElement.textContent = '0/' + (poolId === 1 ? '125' : poolId === 2 ? '500' : '2500');
            if (prizeElement) prizeElement.textContent = '0 MATIC';
        });
    }
};

// =============================================
// سیستم مدیریت اصلی برنامه
// =============================================

const AppManager = {
    async init() {
        console.log('Initializing WinstreakPol dApp...');
        
        // Initialize language system
        LanguageManager.init();
        
        // Initialize UI
        UIManager.init();
        
        // Initialize wallet system
        await WalletManager.init();
        
        // Setup lottery event listeners
        LotteryManager.setupEventListeners();
        
        // Set up global functions
        window.changeTicketCount = (change) => LotteryManager.changeTicketCount(change);
        window.changePTokenAmount = (change) => PTokenManager.changePTokenAmount(change);
        
        // Mark as initialized
        isInitialized = true;
        console.log('WinstreakPol dApp initialized successfully');
        
        // Start auto-refresh
        this.startAutoRefresh();
    },

    async refreshAllData() {
        if (!isInitialized) return;
        
        try {
            // Refresh system data
            const systemData = await ContractManager.getSystemOverview();
            UIManager.updateDashboard(systemData);
            
            // Refresh ticket price
            await LotteryManager.updateTicketPrice();
            
            // Refresh user balance
            await WalletManager.updateUserBalance();
            
        } catch (error) {
            console.error('Error refreshing data:', error);
        }
    },

    resetUI() {
        UIManager.resetUI();
    },

    startAutoRefresh() {
        // Refresh data every 30 seconds
        refreshInterval = setInterval(() => {
            if (userAccount) {
                this.refreshAllData();
            }
        }, 30000);
    },

    stopAutoRefresh() {
        if (refreshInterval) {
            clearInterval(refreshInterval);
        }
    }
};

// =============================================
// راه‌اندازی برنامه
// =============================================

window.addEventListener('load', () => {
    AppManager.init();
});

// Cleanup on page unload
window.addEventListener('beforeunload', () => {
    AppManager.stopAutoRefresh();
});