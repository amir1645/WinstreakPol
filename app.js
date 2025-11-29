// =============================================
// WinstreakPol - Professional Lottery dApp
// =============================================

// تنظیمات قراردادها
const CONTRACT_ADDRESS = '0xdFC970De4C016AB950F965e5364048C16468e2Ec';
const PTOKEN_CONTRACT_ADDRESS = '0x82F7dBe1792436d15bdA22bB3340bD3f45D614Fa';

// ABI کامل قرارداد اصلی لاتاری
const CONTRACT_ABI = [{"inputs":[{"internalType":"address","name":"_developerWallet","type":"address"},{"internalType":"address","name":"_pTokenAddress","type":"address"},{"internalType":"address","name":"_minerPool","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"message","type":"string"},{"indexed":false,"internalType":"uint256","name":"value1","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"value2","type":"uint256"}],"name":"DebugInfo","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"DeveloperPaid","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousWallet","type":"address"},{"indexed":true,"internalType":"address","name":"newWallet","type":"address"}],"name":"DeveloperWalletUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"pool1","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"pool2","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"pool3","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"minerPool","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"dev","type":"uint256"}],"name":"FundsDistributed","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"poolId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"roundNumber","type":"uint256"},{"indexed":false,"internalType":"address[]","name":"winners","type":"address[]"},{"indexed":false,"internalType":"uint256[]","name":"prizes","type":"uint256[]"},{"indexed":false,"internalType":"uint256","name":"drawTime","type":"uint256"},{"indexed":false,"internalType":"bytes32","name":"randomness","type":"bytes32"}],"name":"LotteryDrawn","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"poolId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"roundNumber","type":"uint256"},{"indexed":false,"internalType":"address","name":"executedBy","type":"address"}],"name":"ManualDrawExecuted","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"string","name":"reason","type":"string"}],"name":"MinerContributionFailed","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"address","name":"minerPool","type":"address"}],"name":"MinerContributionSuccess","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousMinerPool","type":"address"},{"indexed":true,"internalType":"address","name":"newMinerPool","type":"address"}],"name":"MinerPoolAddressUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"MinerPoolContributed","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"timestamp","type":"uint256"}],"name":"MinerTokensBought","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"timestamp","type":"uint256"}],"name":"MinerTokensDistributed","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"winner","type":"address"},{"indexed":false,"internalType":"uint256","name":"poolId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"prize","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"timestamp","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"roundNumber","type":"uint256"}],"name":"NewWinner","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousPToken","type":"address"},{"indexed":true,"internalType":"address","name":"newPToken","type":"address"}],"name":"PTokenAddressUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"pTokensReceived","type":"uint256"}],"name":"PTokenPurchaseSuccess","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"PTokenTransferSuccess","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"winner","type":"address"},{"indexed":false,"internalType":"uint256","name":"maticAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"pTokenAmount","type":"uint256"}],"name":"PrizeConversionComplete","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"winner","type":"address"},{"indexed":false,"internalType":"uint256","name":"maticAmount","type":"uint256"}],"name":"PrizeConversionStarted","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"winner","type":"address"},{"indexed":false,"internalType":"uint256","name":"maticAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"pTokenAmount","type":"uint256"}],"name":"PrizeDistributionComplete","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"poolId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"fromRound","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"toRound","type":"uint256"},{"indexed":false,"internalType":"address","name":"triggeredBy","type":"address"}],"name":"RoundAdvanced","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint128","name":"previousPrice","type":"uint128"},{"indexed":false,"internalType":"uint128","name":"newPrice","type":"uint128"}],"name":"TicketPriceUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"ticketCount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"totalPrice","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"roundNumber","type":"uint256"}],"name":"TicketPurchased","type":"event"},{"inputs":[],"name":"DEVELOPER_SHARE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MINER_SHARE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"POOL1","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"POOL1_SHARE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"POOL2","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"POOL2_SHARE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"POOL3","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"POOL3_SHARE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"TOTAL_SHARES","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"ticketCount","type":"uint256"}],"name":"buyTicket","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"contributeToMinerPoolManually","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"developerWallet","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getAllPoolsSimplifiedStatus","outputs":[{"internalType":"uint256","name":"pool1Round","type":"uint256"},{"internalType":"uint256","name":"pool2Round","type":"uint256"},{"internalType":"uint256","name":"pool3Round","type":"uint256"},{"internalType":"uint256","name":"pool1Tickets","type":"uint256"},{"internalType":"uint256","name":"pool2Tickets","type":"uint256"},{"internalType":"uint256","name":"pool3Tickets","type":"uint256"},{"internalType":"uint256","name":"pool1Prize","type":"uint256"},{"internalType":"uint256","name":"pool2Prize","type":"uint256"},{"internalType":"uint256","name":"pool3Prize","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"poolId","type":"uint256"}],"name":"getPoolCurrentStatus","outputs":[{"internalType":"uint256[7]","name":"poolDetails","type":"uint256[7]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"poolId","type":"uint256"}],"name":"getPoolProgress","outputs":[{"internalType":"uint256","name":"currentTickets","type":"uint256"},{"internalType":"uint256","name":"maxParticipants","type":"uint256"},{"internalType":"uint256","name":"progressPercent","type":"uint256"},{"internalType":"bool","name":"isActive","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"poolId","type":"uint256"}],"name":"getPoolStatistics","outputs":[{"internalType":"uint256","name":"currentRound","type":"uint256"},{"internalType":"uint256","name":"totalTickets","type":"uint256"},{"internalType":"uint256","name":"maxParticipants","type":"uint256"},{"internalType":"uint256","name":"poolPrize","type":"uint256"},{"internalType":"uint256","name":"participantsCount","type":"uint256"},{"internalType":"uint256","name":"progressPercentage","type":"uint256"},{"internalType":"bool","name":"isActive","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"poolId","type":"uint256"}],"name":"getPoolStatus","outputs":[{"internalType":"uint256","name":"currentRound","type":"uint256"},{"internalType":"uint256","name":"currentTickets","type":"uint256"},{"internalType":"uint256","name":"maxParticipants","type":"uint256"},{"internalType":"uint256","name":"poolSize","type":"uint256"},{"internalType":"bool","name":"isReadyForDraw","type":"bool"},{"internalType":"uint256","name":"participantsCount","type":"uint256"},{"internalType":"uint256","name":"progressPercent","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"count","type":"uint256"}],"name":"getRecentWinners","outputs":[{"components":[{"internalType":"address","name":"winner","type":"address"},{"internalType":"uint96","name":"prize","type":"uint96"},{"internalType":"uint32","name":"timestamp","type":"uint32"},{"internalType":"uint8","name":"poolId","type":"uint8"},{"internalType":"uint32","name":"roundNumber","type":"uint32"},{"internalType":"bytes32","name":"randomnessProof","type":"bytes32"}],"internalType":"struct WinstreakPol.WinnerHistory[]","name":"recentWinners","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"poolId","type":"uint256"},{"internalType":"uint256","name":"roundNumber","type":"uint256"}],"name":"getRoundParticipantsWithTickets","outputs":[{"internalType":"address[]","name":"participants","type":"address[]"},{"internalType":"uint256[]","name":"tickets","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"poolId","type":"uint256"},{"internalType":"uint256","name":"roundNumber","type":"uint256"}],"name":"getRoundWinners","outputs":[{"components":[{"internalType":"address","name":"winner","type":"address"},{"internalType":"uint96","name":"prize","type":"uint96"},{"internalType":"uint32","name":"timestamp","type":"uint32"},{"internalType":"uint8","name":"poolId","type":"uint8"},{"internalType":"uint32","name":"roundNumber","type":"uint32"},{"internalType":"bytes32","name":"randomnessProof","type":"bytes32"}],"internalType":"struct WinstreakPol.WinnerHistory[]","name":"winners","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getSystemInfo","outputs":[{"internalType":"address","name":"currentOwner","type":"address"},{"internalType":"address","name":"currentPToken","type":"address"},{"internalType":"address","name":"currentMinerPool","type":"address"},{"internalType":"address","name":"currentDeveloper","type":"address"},{"internalType":"uint256","name":"currentTicketPrice","type":"uint256"},{"internalType":"uint256","name":"contractBalance","type":"uint256"},{"internalType":"uint256","name":"totalTickets","type":"uint256"},{"internalType":"uint256","name":"totalPrizes","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getSystemOverview","outputs":[{"internalType":"uint256","name":"totalTickets","type":"uint256"},{"internalType":"uint256","name":"totalPrizes","type":"uint256"},{"internalType":"uint256","name":"contractBalance","type":"uint256"},{"internalType":"uint256","name":"activePools","type":"uint256"},{"internalType":"uint256","name":"currentTicketPrice","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"getUserCurrentTickets","outputs":[{"internalType":"uint32","name":"pool1Tickets","type":"uint32"},{"internalType":"uint32","name":"pool2Tickets","type":"uint32"},{"internalType":"uint32","name":"pool3Tickets","type":"uint32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"getUserParticipationStats","outputs":[{"internalType":"uint256","name":"totalTicketsAllTime","type":"uint256"},{"internalType":"uint256","name":"totalRoundsParticipated","type":"uint256"},{"internalType":"uint256","name":"totalWins","type":"uint256"},{"internalType":"uint256","name":"totalPrizeWon","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"},{"internalType":"uint256","name":"page","type":"uint256"},{"internalType":"uint256","name":"pageSize","type":"uint256"}],"name":"getUserWinsPaginated","outputs":[{"components":[{"internalType":"address","name":"winner","type":"address"},{"internalType":"uint96","name":"prize","type":"uint96"},{"internalType":"uint32","name":"timestamp","type":"uint32"},{"internalType":"uint8","name":"poolId","type":"uint8"},{"internalType":"uint32","name":"roundNumber","type":"uint32"},{"internalType":"bytes32","name":"randomnessProof","type":"bytes32"}],"internalType":"struct WinstreakPol.WinnerHistory[]","name":"wins","type":"tuple[]"},{"internalType":"uint256","name":"totalWins","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"minerPool","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pTokenAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pool1MaxParticipants","outputs":[{"internalType":"uint32","name":"","type":"uint32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pool2MaxParticipants","outputs":[{"internalType":"uint32","name":"","type":"uint32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pool3MaxParticipants","outputs":[{"internalType":"uint32","name":"","type":"uint32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"pools","outputs":[{"internalType":"uint128","name":"poolSize","type":"uint128"},{"internalType":"uint32","name":"currentRound","type":"uint32"},{"internalType":"uint32","name":"maxParticipants","type":"uint32"},{"internalType":"uint32","name":"totalRounds","type":"uint32"},{"internalType":"uint64","name":"lastDrawTime","type":"uint64"},{"internalType":"bool","name":"isActive","type":"bool"},{"internalType":"bytes32","name":"randomnessSeed","type":"bytes32"},{"internalType":"uint256","name":"lastDrawBlock","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"prizeDistributions","outputs":[{"internalType":"uint8","name":"winnerCount","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"roundInfo","outputs":[{"internalType":"uint32","name":"totalTickets","type":"uint32"},{"internalType":"uint32","name":"startTime","type":"uint32"},{"internalType":"uint32","name":"endTime","type":"uint32"},{"internalType":"bool","name":"isCompleted","type":"bool"},{"internalType":"bytes32","name":"finalRandomness","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"roundParticipants","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"roundWinners","outputs":[{"internalType":"address","name":"winner","type":"address"},{"internalType":"uint96","name":"prize","type":"uint96"},{"internalType":"uint32","name":"timestamp","type":"uint32"},{"internalType":"uint8","name":"poolId","type":"uint8"},{"internalType":"uint32","name":"roundNumber","type":"uint32"},{"internalType":"bytes32","name":"randomnessProof","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newWallet","type":"address"}],"name":"setDeveloperWallet","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"isActive","type":"bool"}],"name":"setLotteryActive","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newMinerPool","type":"address"}],"name":"setMinerPool","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newPToken","type":"address"}],"name":"setPTokenAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"poolId","type":"uint256"},{"internalType":"uint32","name":"newMax","type":"uint32"}],"name":"setPoolMaxParticipants","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint128","name":"newPrice","type":"uint128"}],"name":"setTicketPrice","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"ticketPrice","outputs":[{"internalType":"uint128","name":"","type":"uint128"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalPrizesDistributed","outputs":[{"internalType":"uint128","name":"","type":"uint128"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalTicketsSold","outputs":[{"internalType":"uint32","name":"","type":"uint32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"triggerMinerTokenBuy","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"triggerMinerTokenDistribution","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"address","name":"","type":"address"}],"name":"userTickets","outputs":[{"internalType":"uint32","name":"","type":"uint32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"userWinningHistory","outputs":[{"internalType":"address","name":"winner","type":"address"},{"internalType":"uint96","name":"prize","type":"uint96"},{"internalType":"uint32","name":"timestamp","type":"uint32"},{"internalType":"uint8","name":"poolId","type":"uint8"},{"internalType":"uint32","name":"roundNumber","type":"uint32"},{"internalType":"bytes32","name":"randomnessProof","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"winnerHistory","outputs":[{"internalType":"address","name":"winner","type":"address"},{"internalType":"uint96","name":"prize","type":"uint96"},{"internalType":"uint32","name":"timestamp","type":"uint32"},{"internalType":"uint8","name":"poolId","type":"uint8"},{"internalType":"uint32","name":"roundNumber","type":"uint32"},{"internalType":"bytes32","name":"randomnessProof","type":"bytes32"}],"stateMutability":"view","type":"function"},{"stateMutability":"payable","type":"receive"}];

// ABI کامل قرارداد P-Token
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
let cachedTicketPrice = null;
let cachedPTokenPrice = null;

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
            'ticket-info-title': 'اطلاعات بلیط',
            'user-pool1-label': 'استخر نقره',
            'user-pool2-label': 'استخر طلا', 
            'user-pool3-label': 'استخر الماس',
            'tickets-text': 'بلیط',
            
            // Winners Tab
            'winners-title': 'گردونه برندگان',
            'winners-subtitle': 'برندگان خوش‌شانس لاتاری',
            'spin-wheel-text': 'چرخاندن گردونه',
            'recent-winners-title': 'برندگان اخیر',
            'no-winners-text': 'هنوز برنده‌ای وجود ندارد',
            
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
            'profile-total-tickets-label': 'کل بلیط‌ها',
            'profile-rounds-label': 'دورهای شرکت کرده',
            'profile-wins-label': 'بردها',
            'profile-total-prize-label': 'جایزه کل',
            
            // Modal Titles
            'wallet-modal-title': 'انتخاب کیف پول',
            'transaction-modal-title': 'وضعیت تراکنش',
            
            // Notifications
            'no-wallet-detected': 'هیچ کیف پولی یافت نشد',
            'notification-wallet-connected': 'اتصال کیف پول با موفقیت انجام شد',
            'notification-wallet-disconnected': 'اتصال کیف پول قطع شد',
            'notification-account-changed': 'حساب کیف پول تغییر کرد',
            'notification-network-error': 'لطفاً به شبکه Polygon متصل شوید',
            'notification-wallet-error': 'خطا در اتصال کیف پول',
            'notification-ticket-purchased': 'خرید بلیط با موفقیت انجام شد',
            'notification-ptoken-sold': 'فروش P-Token با موفقیت انجام شد',
            'notification-insufficient-balance': 'موجودی شما کافی نیست',
            'notification-transaction-failed': 'تراکنش ناموفق بود'
        },
        en: {
            // Preloader
            'preloader-text': 'Loading...',
            'slogan-text': 'Where winning becomes a habit',
            
            // Header
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
            
            // Pool texts
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
            
            // Lottery Tab
            'lottery-title': 'Buy Lottery Tickets',
            'lottery-subtitle': 'Try your chance to win',
            'ticket-purchase-title': 'Buy Lottery Tickets',
            'ticket-count-label': 'Number of Tickets',
            'ticket-max-hint': 'Maximum 1000 tickets per transaction',
            'price-per-ticket': 'Price per ticket:',
            'total-cost': 'Total cost:',
            'buy-tickets-text': 'Buy Tickets',
            'ticket-info-title': 'Ticket Information',
            'user-pool1-label': 'Silver Pool',
            'user-pool2-label': 'Gold Pool',
            'user-pool3-label': 'Diamond Pool',
            'tickets-text': 'tickets',
            
            // Winners Tab
            'winners-title': 'Winners Wheel',
            'winners-subtitle': 'Lucky lottery winners',
            'spin-wheel-text': 'Spin Wheel',
            'recent-winners-title': 'Recent Winners',
            'no-winners-text': 'No winners yet',
            
            // P-Token Tab
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
            
            // Profile Tab
            'profile-title': 'My Profile',
            'profile-subtitle': 'Your personal information and statistics',
            'profile-total-tickets-label': 'Total Tickets',
            'profile-rounds-label': 'Rounds Participated',
            'profile-wins-label': 'Wins',
            'profile-total-prize-label': 'Total Prize',
            
            // Modal Titles
            'wallet-modal-title': 'Select Wallet',
            'transaction-modal-title': 'Transaction Status',
            
            // Notifications
            'no-wallet-detected': 'No wallet found',
            'notification-wallet-connected': 'Wallet connected successfully',
            'notification-wallet-disconnected': 'Wallet disconnected',
            'notification-account-changed': 'Wallet account changed',
            'notification-network-error': 'Please connect to Polygon network',
            'notification-wallet-error': 'Wallet connection error',
            'notification-ticket-purchased': 'Tickets purchased successfully',
            'notification-ptoken-sold': 'P-Token sold successfully',
            'notification-insufficient-balance': 'Insufficient balance',
            'notification-transaction-failed': 'Transaction failed'
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
        
        // Update dynamic elements that don't have IDs
        this.updateDynamicElements();
        
        document.body.dir = currentLanguage === 'fa' ? 'rtl' : 'ltr';
        document.documentElement.lang = currentLanguage;
        localStorage.setItem('winstreakpol-language', currentLanguage);
    },

    updateDynamicElements() {
        // Update elements that don't have specific IDs
        const elementsToUpdate = [
            // Pool progress texts
            { selector: '.pool-progress .progress-info span:first-child', fa: 'پیشرفت:', en: 'Progress:' },
            // User ticket stats
            { selector: '.user-tickets-info .stat-label', fa: ['استخر نقره', 'استخر طلا', 'استخر الماس'], en: ['Silver Pool', 'Gold Pool', 'Diamond Pool'] },
            // P-Token conversion
            { selector: '.conversion-summary .conversion-label', fa: ['تعداد P-Token:', 'قیمت هر توکن:', 'دریافتی شما:'], en: ['P-Token Amount:', 'Price per token:', 'You will receive:'] },
            // Profile stats
            { selector: '.profile-stats .stat-label', fa: ['کل بلیط‌ها', 'دورهای شرکت کرده', 'بردها', 'جایزه کل'], en: ['Total Tickets', 'Rounds Participated', 'Wins', 'Total Prize'] }
        ];

        elementsToUpdate.forEach(item => {
            const elements = document.querySelectorAll(item.selector);
            elements.forEach((element, index) => {
                if (currentLanguage === 'fa' && Array.isArray(item.fa)) {
                    element.textContent = item.fa[index] || element.textContent;
                } else if (currentLanguage === 'en' && Array.isArray(item.en)) {
                    element.textContent = item.en[index] || element.textContent;
                } else if (typeof item.fa === 'string') {
                    element.textContent = currentLanguage === 'fa' ? item.fa : item.en;
                }
            });
        });

        // Update profile network text
        const profileNetwork = document.getElementById('profile-network');
        if (profileNetwork) {
            profileNetwork.textContent = currentLanguage === 'fa' ? 'شبکه: Polygon Mainnet' : 'Network: Polygon Mainnet';
        }

        // Update profile address when wallet not connected
        const profileAddress = document.getElementById('profileAddress');
        if (profileAddress && !userAccount) {
            profileAddress.textContent = currentLanguage === 'fa' ? 'ولت متصل نشده' : 'Wallet not connected';
        }

        // Update transaction modal texts
        const transactionStatus = document.getElementById('transaction-status-text');
        if (transactionStatus) {
            transactionStatus.textContent = currentLanguage === 'fa' ? 'در حال پردازش...' : 'Processing...';
        }

        const transactionDetails = document.getElementById('transaction-details');
        if (transactionDetails) {
            transactionDetails.textContent = currentLanguage === 'fa' ? 'تراکنش در حال تایید در بلاک چین است' : 'Transaction is being confirmed on the blockchain';
        }

        const txHashLabel = document.getElementById('tx-hash-label');
        if (txHashLabel) {
            txHashLabel.textContent = currentLanguage === 'fa' ? 'هش تراکنش:' : 'Transaction Hash:';
        }

        // Update no winners message
        const noWinnersText = document.getElementById('no-winners-text');
        if (noWinnersText) {
            noWinnersText.textContent = this.get('no-winners-text');
        }

        // Update user tickets text
        this.updateUserTicketsText();
    },

    updateUserTicketsText() {
        const ticketsText = this.get('tickets-text');
        const userTickets = [
            document.getElementById('userPool1Tickets'),
            document.getElementById('userPool2Tickets'), 
            document.getElementById('userPool3Tickets')
        ];
        
        userTickets.forEach(element => {
            if (element) {
                const currentValue = element.textContent.split(' ')[0];
                element.textContent = `${currentValue} ${ticketsText}`;
            }
        });
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
        const buyTicketsBtn = document.getElementById('buyTickets');
        const sellPTokensBtn = document.getElementById('sellPTokens');
        const profileAddress = document.getElementById('profileAddress');
        
        if (userAccount) {
            const shortAddress = `${userAccount.substring(0, 6)}...${userAccount.substring(38)}`;
            const veryShortAddress = `${userAccount.substring(0, 4)}...${userAccount.substring(39)}`;
            
            walletAddress.textContent = shortAddress;
            walletAddressMobile.textContent = veryShortAddress;
            
            // بروزرسانی آدرس در پروفایل
            if (profileAddress) {
                profileAddress.textContent = shortAddress;
            }
            
            walletInfo.style.display = 'flex';
            connectBtn.innerHTML = `<i class="fas fa-power-off"></i> ${LanguageManager.get('disconnect-text')}`;
            
            // فعال کردن دکمه‌ها
            if (buyTicketsBtn) buyTicketsBtn.disabled = false;
            if (sellPTokensBtn) sellPTokensBtn.disabled = false;
            
            await this.updateUserBalance();
        } else {
            walletInfo.style.display = 'none';
            connectBtn.innerHTML = `<i class="fas fa-plug"></i> ${LanguageManager.get('connect-text')}`;
            
            // بازنشانی آدرس در پروفایل با توجه به زبان
            if (profileAddress) {
                profileAddress.textContent = currentLanguage === 'fa' ? 'ولت متصل نشده' : 'Wallet not connected';
            }
            
            // غیرفعال کردن دکمه‌ها
            if (buyTicketsBtn) buyTicketsBtn.disabled = true;
            if (sellPTokensBtn) sellPTokensBtn.disabled = true;
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
            if (cachedTicketPrice) return cachedTicketPrice;
            
            if (!contract) return '0';
            const price = await contract.methods.ticketPrice().call();
            cachedTicketPrice = web3.utils.fromWei(price, 'ether');
            return cachedTicketPrice;
        } catch (error) {
            console.error('Error getting ticket price:', error);
            return '0';
        }
    },

    async getSystemOverview() {
        try {
            if (!contract) return null;
            const data = await contract.methods.getSystemOverview().call();
            return {
                totalTickets: data[0]?.toString() || '0',
                totalPrizes: web3.utils.fromWei(data[1]?.toString() || '0', 'ether'),
                contractBalance: web3.utils.fromWei(data[2]?.toString() || '0', 'ether'),
                activePools: data[3]?.toString() || '0',
                currentTicketPrice: web3.utils.fromWei(data[4]?.toString() || '0', 'ether')
            };
        } catch (error) {
            console.error('Error getting system overview:', error);
            return null;
        }
    },

    async getPoolProgress(poolId) {
        try {
            if (!contract) return null;
            const progress = await contract.methods.getPoolProgress(poolId).call();
            return {
                currentTickets: progress[0]?.toString() || '0',
                maxParticipants: progress[1]?.toString() || '0',
                progressPercent: progress[2]?.toString() || '0',
                isActive: progress[3] || false
            };
        } catch (error) {
            console.error('Error getting pool progress:', error);
            return null;
        }
    },

    async getAllPoolsStatus() {
        try {
            if (!contract) return null;
            const status = await contract.methods.getAllPoolsSimplifiedStatus().call();
            return {
                pool1Tickets: status[3]?.toString() || '0',
                pool2Tickets: status[4]?.toString() || '0',
                pool3Tickets: status[5]?.toString() || '0',
                pool1Prize: web3.utils.fromWei(status[6]?.toString() || '0', 'ether'),
                pool2Prize: web3.utils.fromWei(status[7]?.toString() || '0', 'ether'),
                pool3Prize: web3.utils.fromWei(status[8]?.toString() || '0', 'ether')
            };
        } catch (error) {
            console.error('Error getting all pools status:', error);
            return null;
        }
    },

    async buyTickets(ticketCount) {
        try {
            if (!contract || !userAccount) {
                throw new Error('Contract or user account not available');
            }
            
            // محاسبه قیمت کل
            const ticketPriceWei = await contract.methods.ticketPrice().call();
            const totalPriceWei = (BigInt(ticketPriceWei) * BigInt(ticketCount)).toString();
            
            console.log(`Buying ${ticketCount} tickets for ${totalPriceWei} wei`);
            
            // استفاده از گس فی High + 50% برای اطمینان کامل
            const baseHighGasPrice = web3.utils.toWei('50', 'gwei'); // مقدار High پایه
            const safeGasPrice = (BigInt(baseHighGasPrice) * 150n / 100n).toString(); // +50%
            
            // تخمین گس لیمیت
            const gasEstimate = await contract.methods.buyTicket(ticketCount).estimateGas({
                from: userAccount,
                value: totalPriceWei
            });
            // اضافه کردن 50% برای اطمینان بیشتر
            const safeGasLimit = Math.floor(gasEstimate * 1.5);
            
            console.log(`Gas Limit: ${gasEstimate} -> ${safeGasLimit} (50% safety margin)`);
            console.log(`Gas Price: High (50 Gwei) + 50% = ${web3.utils.fromWei(safeGasPrice, 'gwei')} Gwei`);
            
            // ارسال تراکنش با گس فی High + 50%
            return await contract.methods.buyTicket(ticketCount).send({
                from: userAccount,
                value: totalPriceWei,
                gas: safeGasLimit,
                gasPrice: safeGasPrice
            });
        } catch (error) {
            console.error('Error in buyTickets:', error);
            throw error;
        }
    },

    async getUserTickets(userAddress) {
        try {
            if (!contract || !userAddress) {
                return { pool1Tickets: '0', pool2Tickets: '0', pool3Tickets: '0' };
            }
            
            const tickets = await contract.methods.getUserCurrentTickets(userAddress).call();
            return {
                pool1Tickets: tickets[0]?.toString() || '0',
                pool2Tickets: tickets[1]?.toString() || '0',
                pool3Tickets: tickets[2]?.toString() || '0'
            };
        } catch (error) {
            console.error('Error getting user tickets:', error);
            return { pool1Tickets: '0', pool2Tickets: '0', pool3Tickets: '0' };
        }
    },

    async getUserStats(userAddress) {
        try {
            if (!contract || !userAddress) {
                return {
                    totalTicketsAllTime: '0',
                    totalRoundsParticipated: '0',
                    totalWins: '0',
                    totalPrizeWon: '0'
                };
            }
            
            const stats = await contract.methods.getUserParticipationStats(userAddress).call();
            return {
                totalTicketsAllTime: stats[0]?.toString() || '0',
                totalRoundsParticipated: stats[1]?.toString() || '0',
                totalWins: stats[2]?.toString() || '0',
                totalPrizeWon: web3.utils.fromWei(stats[3]?.toString() || '0', 'ether')
            };
        } catch (error) {
            console.error('Error getting user stats:', error);
            return {
                totalTicketsAllTime: '0',
                totalRoundsParticipated: '0',
                totalWins: '0',
                totalPrizeWon: '0'
            };
        }
    },

    async getRecentWinners(count = 10) {
        try {
            if (!contract) return [];
            const winners = await contract.methods.getRecentWinners(count).call();
            return winners.filter(winner => 
                winner && 
                winner.winner !== '0x0000000000000000000000000000000000000000' &&
                parseInt(winner.prize) > 0
            );
        } catch (error) {
            console.error('Error getting recent winners:', error);
            return [];
        }
    }
};

// =============================================
// سیستم مدیریت P-Token
// =============================================

const PTokenManager = {
    async init() {
        this.setupEventListeners();
    },

    setupEventListeners() {
        // فروش P-Token
        const sellBtn = document.getElementById('sellPTokens');
        if (sellBtn) {
            sellBtn.addEventListener('click', () => {
                this.sellPTokens();
            });
        }

        // تغییر مقدار P-Token
        const pTokenInput = document.getElementById('ptokenAmount');
        if (pTokenInput) {
            pTokenInput.addEventListener('input', () => {
                this.updateConversion();
            });
        }
    },

    changePTokenAmount(change) {
        const input = document.getElementById('ptokenAmount');
        let currentValue = parseInt(input.value) || 1;
        let newValue = currentValue + change;
        
        if (newValue < 1) newValue = 1;
        
        // بررسی حداکثر مقدار
        const maxPToken = document.getElementById('maxPTokenAmount');
        const maxValue = parseInt(maxPToken.textContent) || 0;
        if (newValue > maxValue && maxValue > 0) {
            newValue = maxValue;
        }
        
        input.value = newValue;
        this.updateConversion();
    },

    async updateConversion() {
        try {
            const amount = parseInt(document.getElementById('ptokenAmount').value) || 1;
            const price = await this.getPTokenPrice();
            const totalValue = (parseFloat(price) * amount).toFixed(6);
            
            document.getElementById('conversionPToken').textContent = amount;
            document.getElementById('conversionPrice').textContent = `${price} MATIC`;
            document.getElementById('conversionTotal').textContent = `${totalValue} MATIC`;
            
        } catch (error) {
            console.error('Error updating conversion:', error);
        }
    },

    async getPTokenPrice() {
        try {
            if (cachedPTokenPrice) return cachedPTokenPrice;
            
            if (!pTokenContract) return '0';
            const priceWei = await pTokenContract.methods.getPTokenPrice().call();
            cachedPTokenPrice = web3.utils.fromWei(priceWei, 'ether');
            return cachedPTokenPrice;
        } catch (error) {
            console.error('Error getting P-Token price:', error);
            return '0';
        }
    },

    async getPTokenBalance() {
        try {
            if (!pTokenContract || !userAccount) return '0';
            const balance = await pTokenContract.methods.balanceOf(userAccount).call();
            return web3.utils.fromWei(balance, 'ether');
        } catch (error) {
            console.error('Error getting P-Token balance:', error);
            return '0';
        }
    },

    async sellPTokens() {
        try {
            if (!userAccount) {
                WalletManager.showNotification(LanguageManager.get('no-wallet-detected'), 'error');
                return;
            }

            const pTokenAmount = parseInt(document.getElementById('ptokenAmount').value) || 1;
            const sellBtn = document.getElementById('sellPTokens');
            
            // بررسی موجودی
            const balance = await this.getPTokenBalance();
            if (parseFloat(balance) < pTokenAmount) {
                WalletManager.showNotification(LanguageManager.get('notification-insufficient-balance'), 'error');
                return;
            }
            
            // غیرفعال کردن دکمه هنگام تراکنش
            sellBtn.disabled = true;
            const processingText = currentLanguage === 'fa' ? 'در حال پردازش...' : 'Processing...';
            sellBtn.innerHTML = `<i class="fas fa-spinner fa-spin"></i> ${processingText}`;
            
            // استفاده از گس فی High + 50% برای اطمینان کامل
            const baseHighGasPrice = web3.utils.toWei('50', 'gwei');
            const safeGasPrice = (BigInt(baseHighGasPrice) * 150n / 100n).toString();
            
            // تبدیل مقدار به وی
            const pTokenAmountWei = web3.utils.toWei(pTokenAmount.toString(), 'ether');
            
            console.log(`Selling ${pTokenAmount} P-Tokens (${pTokenAmountWei} wei)`);
            console.log(`Gas Price: High (50 Gwei) + 50% = ${web3.utils.fromWei(safeGasPrice, 'gwei')} Gwei`);
            
            // فراخوانی تابع فروش با گس فی High + 50%
            const result = await pTokenContract.methods.sellPToken(pTokenAmountWei).send({
                from: userAccount,
                gas: 400000,
                gasPrice: safeGasPrice
            });
            
            WalletManager.showNotification(LanguageManager.get('notification-ptoken-sold'), 'success');
            
            // بروزرسانی داده‌ها
            await AppManager.refreshAllData();
            
        } catch (error) {
            console.error('Error selling P-Tokens:', error);
            WalletManager.showNotification(LanguageManager.get('notification-transaction-failed'), 'error');
        } finally {
            // فعال کردن مجدد دکمه
            const sellBtn = document.getElementById('sellPTokens');
            if (sellBtn) {
                sellBtn.disabled = false;
                sellBtn.innerHTML = `<i class="fas fa-exchange-alt"></i> ${LanguageManager.get('sell-ptoken-text')}`;
            }
        }
    },

    async refreshPTokenData() {
        try {
            const balance = await this.getPTokenBalance();
            const price = await this.getPTokenPrice();
            const totalValue = (parseFloat(balance) * parseFloat(price)).toFixed(6);
            
            document.getElementById('userPTokenBalance').textContent = `${parseFloat(balance).toFixed(4)} P-Token`;
            document.getElementById('ptokenPrice').textContent = `${price} MATIC`;
            document.getElementById('totalPTokenValue').textContent = `${totalValue} MATIC`;
            document.getElementById('maxPTokenAmount').textContent = Math.floor(parseFloat(balance));
            
            // بروزرسانی فرم تبدیل
            this.updateConversion();
            
        } catch (error) {
            console.error('Error refreshing P-Token data:', error);
        }
    }
};

// =============================================
// سیستم مدیریت لاتاری
// =============================================

const LotteryManager = {
    async init() {
        this.setupEventListeners();
        // بارگذاری سریع قیمت بلیط
        setTimeout(() => this.updateTicketPrice(), 100);
    },

    setupEventListeners() {
        // خرید بلیط
        const buyBtn = document.getElementById('buyTickets');
        if (buyBtn) {
            buyBtn.addEventListener('click', async () => {
                await this.buyTickets();
            });
        }

        // تغییر تعداد بلیط
        const ticketInput = document.getElementById('ticketCount');
        if (ticketInput) {
            ticketInput.addEventListener('input', () => {
                this.updateTicketPrice();
            });
            
            // تغییر real-time با تغییر تعداد بلیط
            ticketInput.addEventListener('change', () => {
                this.updateTicketPrice();
            });
        }

        // دکمه‌های کم و زیاد
        const minusBtn = document.querySelector('.quantity-btn:nth-child(1)');
        const plusBtn = document.querySelector('.quantity-btn:nth-child(3)');
        
        if (minusBtn) {
            minusBtn.addEventListener('click', () => {
                this.changeTicketCount(-1);
                setTimeout(() => this.updateTicketPrice(), 50);
            });
        }
        if (plusBtn) {
            plusBtn.addEventListener('click', () => {
                this.changeTicketCount(1);
                setTimeout(() => this.updateTicketPrice(), 50);
            });
        }
    },

    changeTicketCount(change) {
        const input = document.getElementById('ticketCount');
        let currentValue = parseInt(input.value) || 1;
        let newValue = currentValue + change;
        
        if (newValue < 1) newValue = 1;
        if (newValue > 1000) newValue = 1000;
        
        input.value = newValue;
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

    async buyTickets() {
        try {
            if (!userAccount) {
                WalletManager.showNotification(LanguageManager.get('no-wallet-detected'), 'error');
                return;
            }

            const ticketCount = parseInt(document.getElementById('ticketCount').value) || 1;
            const buyBtn = document.getElementById('buyTickets');
            
            // بررسی موجودی با درنظرگیری گس فی High + 50%
            const ticketPrice = await ContractManager.getTicketPrice();
            const totalCost = parseFloat(ticketPrice) * ticketCount;
            
            // محاسبه هزینه گس فی High + 50% برای 300,000 گس
            const baseHighGasPrice = web3.utils.toWei('50', 'gwei');
            const safeGasPrice = (BigInt(baseHighGasPrice) * 150n / 100n).toString();
            const gasCostWei = BigInt('300000') * BigInt(safeGasPrice);
            const gasCostMatic = parseFloat(web3.utils.fromWei(gasCostWei.toString(), 'ether'));
            
            const totalRequired = totalCost + gasCostMatic + 0.01; // + 0.01 برای حاشیه اطمینان
            
            if (parseFloat(userMaticBalance) < totalRequired) {
                WalletManager.showNotification(
                    currentLanguage === 'fa' 
                        ? `موجودی ناکافی. نیاز: ${totalRequired.toFixed(6)} MATIC (شامل گس فی)`
                        : `Insufficient balance. Required: ${totalRequired.toFixed(6)} MATIC (including gas fee)`,
                    'error'
                );
                return;
            }
            
            // غیرفعال کردن دکمه هنگام تراکنش
            buyBtn.disabled = true;
            const processingText = currentLanguage === 'fa' ? 'در حال پردازش...' : 'Processing...';
            buyBtn.innerHTML = `<i class="fas fa-spinner fa-spin"></i> ${processingText}`;
            
            const result = await ContractManager.buyTickets(ticketCount);
            
            WalletManager.showNotification(LanguageManager.get('notification-ticket-purchased'), 'success');
            
            // Refresh data
            await AppManager.refreshAllData();
            
        } catch (error) {
            console.error('Error in buyTickets:', error);
            
            if (error.message.includes('gas') || error.message.includes('Gas')) {
                WalletManager.showNotification(
                    currentLanguage === 'fa' ? 'خطا در گس فی. لطفاً دوباره تلاش کنید' : 'Gas fee error. Please try again',
                    'error'
                );
            } else if (error.message.includes('insufficient') || error.message.includes('balance')) {
                WalletManager.showNotification(
                    currentLanguage === 'fa' ? 'موجودی ناکافی برای پرداخت هزینه تراکنش' : 'Insufficient balance for transaction fee',
                    'error'
                );
            } else if (error.message.includes('rejected') || error.code === 4001) {
                WalletManager.showNotification(
                    currentLanguage === 'fa' ? 'تراکنش توسط کاربر لغو شد' : 'Transaction cancelled by user',
                    'warning'
                );
            } else {
                WalletManager.showNotification(LanguageManager.get('notification-transaction-failed'), 'error');
            }
        } finally {
            // فعال کردن مجدد دکمه
            const buyBtn = document.getElementById('buyTickets');
            if (buyBtn) {
                buyBtn.disabled = false;
                buyBtn.innerHTML = `<i class="fas fa-shopping-cart"></i> ${LanguageManager.get('buy-tickets-text')}`;
            }
        }
    },

    async refreshUserTickets() {
        try {
            if (!userAccount) return;
            
            const userTickets = await ContractManager.getUserTickets(userAccount);
            const ticketsText = LanguageManager.get('tickets-text');
            
            document.getElementById('userPool1Tickets').textContent = `${userTickets.pool1Tickets} ${ticketsText}`;
            document.getElementById('userPool2Tickets').textContent = `${userTickets.pool2Tickets} ${ticketsText}`;
            document.getElementById('userPool3Tickets').textContent = `${userTickets.pool3Tickets} ${ticketsText}`;
            
        } catch (error) {
            console.error('Error refreshing user tickets:', error);
        }
    },

    async refreshUserStats() {
        try {
            if (!userAccount) return;
            
            const userStats = await ContractManager.getUserStats(userAccount);
            
            document.getElementById('profileTotalTickets').textContent = userStats.totalTicketsAllTime;
            document.getElementById('profileRounds').textContent = userStats.totalRoundsParticipated;
            document.getElementById('profileWins').textContent = userStats.totalWins;
            document.getElementById('profileTotalPrize').textContent = `${userStats.totalPrizeWon} MATIC`;
            
        } catch (error) {
            console.error('Error refreshing user stats:', error);
        }
    }
};

// =============================================
// سیستم مدیریت برندگان
// =============================================

const WinnersManager = {
    async init() {
        this.setupEventListeners();
        await this.loadRecentWinners();
    },

    setupEventListeners() {
        const spinBtn = document.getElementById('spinWheel');
        if (spinBtn) {
            spinBtn.addEventListener('click', () => {
                this.spinWheel();
            });
        }
    },

    async loadRecentWinners() {
        try {
            if (!contract) {
                this.showNoWinnersMessage();
                return;
            }

            const recentWinners = await ContractManager.getRecentWinners(10);
            
            if (recentWinners.length === 0) {
                this.showNoWinnersMessage();
                return;
            }

            this.displayWinners(recentWinners);
            
        } catch (error) {
            console.error('Error loading recent winners:', error);
            this.showNoWinnersMessage();
        }
    },

    displayWinners(winners) {
        const winnersContainer = document.getElementById('recentWinners');
        winnersContainer.innerHTML = '';

        winners.forEach(winner => {
            if (winner && winner.winner !== '0x0000000000000000000000000000000000000000') {
                const winnerItem = document.createElement('div');
                winnerItem.className = 'winner-item';
                
                const shortAddress = `${winner.winner.substring(0, 6)}...${winner.winner.substring(38)}`;
                const prizeAmount = web3.utils.fromWei(winner.prize.toString(), 'ether');
                
                winnerItem.innerHTML = `
                    <span class="winner-address">${shortAddress}</span>
                    <span class="winner-prize">${parseFloat(prizeAmount).toFixed(2)} MATIC</span>
                `;
                
                winnersContainer.appendChild(winnerItem);
            }
        });

        // اگر هیچ برنده معتبری نبود، پیام نشان بده
        if (winnersContainer.children.length === 0) {
            this.showNoWinnersMessage();
        }
    },

    showNoWinnersMessage() {
        const winnersContainer = document.getElementById('recentWinners');
        winnersContainer.innerHTML = `
            <div class="no-winners-message">
                <i class="fas fa-info-circle"></i>
                <span id="no-winners-text">${LanguageManager.get('no-winners-text')}</span>
            </div>
        `;
    },

    spinWheel() {
        const wheel = document.getElementById('wheel');
        const spinBtn = document.getElementById('spinWheel');
        
        if (!wheel || !spinBtn) return;

        // غیرفعال کردن دکمه هنگام چرخش
        spinBtn.disabled = true;
        const originalText = spinBtn.innerHTML;
        spinBtn.innerHTML = `<i class="fas fa-spinner fa-spin"></i> ${LanguageManager.get('spin-wheel-text')}`;

        // افزودن کلاس چرخش
        wheel.classList.add('spinning');
        
        // شبیه‌سازی چرخش
        setTimeout(() => {
            wheel.classList.remove('spinning');
            spinBtn.disabled = false;
            spinBtn.innerHTML = originalText;
            
            // نمایش پیام
            WalletManager.showNotification(
                currentLanguage === 'fa' 
                    ? 'گردونه چرخید! برندگان از بلاکچین بارگذاری می‌شوند.'
                    : 'Wheel spun! Winners are being loaded from blockchain.',
                'info'
            );
            
            // بارگذاری مجدد برندگان
            this.loadRecentWinners();
        }, 4000);
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
        WinnersManager.init();
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
                const headerSlogan = document.getElementById('headerSlogan');
                if (headerSlogan) headerSlogan.style.display = 'block';
            }, 500);
        }, 2000);
    },

    setupWheelAnimation() {
        const spinBtn = document.getElementById('spinWheel');
        const wheel = document.getElementById('wheel');
        
        if (spinBtn && wheel) {
            spinBtn.addEventListener('click', () => {
                WinnersManager.spinWheel();
            });
        }
    },

    async updateDashboard(data) {
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
        await this.updatePoolProgress();
    },

    async updatePoolProgress() {
        try {
            // دریافت وضعیت تمام استخرها
            const poolsStatus = await ContractManager.getAllPoolsStatus();
            
            if (!poolsStatus) {
                this.updatePoolProgressWithDefaults();
                return;
            }
            
            // بروزرسانی استخر 1
            const pool1Progress = poolsStatus.pool1Tickets > 0 ? (parseInt(poolsStatus.pool1Tickets) / 125) * 100 : 0;
            document.getElementById('pool1Progress').style.width = `${pool1Progress}%`;
            document.getElementById('pool1Tickets').textContent = `${poolsStatus.pool1Tickets}/125`;
            document.getElementById('pool1Prize').textContent = `${poolsStatus.pool1Prize} MATIC`;
            
            // بروزرسانی استخر 2
            const pool2Progress = poolsStatus.pool2Tickets > 0 ? (parseInt(poolsStatus.pool2Tickets) / 500) * 100 : 0;
            document.getElementById('pool2Progress').style.width = `${pool2Progress}%`;
            document.getElementById('pool2Tickets').textContent = `${poolsStatus.pool2Tickets}/500`;
            document.getElementById('pool2Prize').textContent = `${poolsStatus.pool2Prize} MATIC`;
            
            // بروزرسانی استخر 3
            const pool3Progress = poolsStatus.pool3Tickets > 0 ? (parseInt(poolsStatus.pool3Tickets) / 2500) * 100 : 0;
            document.getElementById('pool3Progress').style.width = `${pool3Progress}%`;
            document.getElementById('pool3Tickets').textContent = `${poolsStatus.pool3Tickets}/2500`;
            document.getElementById('pool3Prize').textContent = `${poolsStatus.pool3Prize} MATIC`;
            
        } catch (error) {
            console.error('Error updating pool progress:', error);
            // استفاده از داده‌های پیش‌فرض در صورت خطا
            this.updatePoolProgressWithDefaults();
        }
    },

    updatePoolProgressWithDefaults() {
        // داده‌های پیش‌فرض برای نمایش وقتی اطلاعات از بلاکچین در دسترس نیست
        const defaults = [
            { id: 1, tickets: 0, max: 125, prize: 0 },
            { id: 2, tickets: 0, max: 500, prize: 0 },
            { id: 3, tickets: 0, max: 2500, prize: 0 }
        ];
        
        defaults.forEach(pool => {
            const progressElement = document.getElementById(`pool${pool.id}Progress`);
            const ticketsElement = document.getElementById(`pool${pool.id}Tickets`);
            const prizeElement = document.getElementById(`pool${pool.id}Prize`);
            
            if (progressElement) progressElement.style.width = '0%';
            if (ticketsElement) ticketsElement.textContent = `${pool.tickets}/${pool.max}`;
            if (prizeElement) prizeElement.textContent = `${pool.prize} MATIC`;
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

        // Reset user tickets با توجه به زبان
        const ticketsText = LanguageManager.get('tickets-text');
        document.getElementById('userPool1Tickets').textContent = `0 ${ticketsText}`;
        document.getElementById('userPool2Tickets').textContent = `0 ${ticketsText}`;
        document.getElementById('userPool3Tickets').textContent = `0 ${ticketsText}`;

        // Reset P-Token data
        document.getElementById('userPTokenBalance').textContent = '0 P-Token';
        document.getElementById('ptokenPrice').textContent = '0 MATIC';
        document.getElementById('totalPTokenValue').textContent = '0 MATIC';
        document.getElementById('maxPTokenAmount').textContent = '0';

        // Reset user stats
        document.getElementById('profileTotalTickets').textContent = '0';
        document.getElementById('profileRounds').textContent = '0';
        document.getElementById('profileWins').textContent = '0';
        document.getElementById('profileTotalPrize').textContent = '0 MATIC';
        
        // Reset profile address با توجه به زبان
        const profileAddress = document.getElementById('profileAddress');
        if (profileAddress) {
            profileAddress.textContent = currentLanguage === 'fa' ? 'ولت متصل نشده' : 'Wallet not connected';
        }
        
        // Reset winners
        WinnersManager.showNoWinnersMessage();
        
        // Clear cache
        cachedTicketPrice = null;
        cachedPTokenPrice = null;
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
        
        // Setup lottery system
        await LotteryManager.init();
        
        // Initialize P-Token system
        await PTokenManager.init();
        
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
            await UIManager.updateDashboard(systemData);
            
            // Refresh ticket price (fast)
            setTimeout(() => LotteryManager.updateTicketPrice(), 50);
            
            // Refresh user balance
            await WalletManager.updateUserBalance();
            
            // Refresh P-Token data (fast)
            setTimeout(() => PTokenManager.refreshPTokenData(), 50);
            
            // Refresh user tickets
            await LotteryManager.refreshUserTickets();
            
            // Refresh user stats
            await LotteryManager.refreshUserStats();
            
            // Refresh winners
            await WinnersManager.loadRecentWinners();
            
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

// Global error handler
window.addEventListener('error', (event) => {
    console.error('Global error:', event.error);
});

window.addEventListener('unhandledrejection', (event) => {
    console.error('Unhandled promise rejection:', event.reason);
});