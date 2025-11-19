// =============================================
// WinstreakPol - Mobile First dApp
// سیستم اتصال ولت کاملاً فعال و واقعی
// =============================================

// آدرس‌های واقعی قراردادها
const LOTTERY_CONTRACT_ADDRESS = '0xdFC970De4C016AB950F965e5364048C16468e2Ec';
const PTOKEN_CONTRACT_ADDRESS = '0x82F7dBe1792436d15bdA22bB3340bD3f45D614Fa';

// ABI کامل قرارداد Lottery
const LOTTERY_CONTRACT_ABI = [
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
        "inputs": [],
        "name": "buyTicket",
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
        "inputs": [{"internalType": "address", "name": "newWallet", "type": "address"}],
        "name": "setDeveloperWallet",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [{"internalType": "address", "name": "newMinerPool", "type": "address"}],
        "name": "setMinerPool",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [{"internalType": "address", "name": "newPToken", "type": "address"}],
        "name": "setPTokenAddress",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [{"internalType": "uint128", "name": "newPrice", "type": "uint128"}],
        "name": "setTicketPrice",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
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

// ABI کامل قرارداد P-Token
const PTOKEN_CONTRACT_ABI = [
    {
        "inputs": [{"internalType": "address", "name": "_projectWallet", "type": "address"}],
        "stateMutability": "payable",
        "type": "constructor"
    },
    {
        "inputs": [{"internalType": "address", "name": "owner", "type": "address"}, {"internalType": "address", "name": "spender", "type": "address"}],
        "name": "allowance",
        "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{"internalType": "address", "name": "spender", "type": "address"}, {"internalType": "uint256", "name": "amount", "type": "uint256"}],
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
        "inputs": [{"internalType": "address", "name": "spender", "type": "address"}, {"internalType": "uint256", "name": "subtractedValue", "type": "uint256"}],
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
        "inputs": [{"internalType": "address", "name": "spender", "type": "address"}, {"internalType": "uint256", "name": "addedValue", "type": "uint256"}],
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
        "inputs": [{"internalType": "address", "name": "to", "type": "address"}, {"internalType": "uint256", "name": "amount", "type": "uint256"}],
        "name": "transfer",
        "outputs": [{"internalType": "bool", "name": "", "type": "bool"}],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [{"internalType": "address", "name": "from", "type": "address"}, {"internalType": "address", "name": "to", "type": "address"}, {"internalType": "uint256", "name": "amount", "type": "uint256"}],
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
// متغیرهای جهانی
// =============================================

let web3;
let userAccount = null;
let userMaticBalance = '0';
let currentLanguage = 'fa';
let isInitialized = false;
let lotteryContract;
let pTokenContract;
let isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

// =============================================
// سیستم مدیریت کیف پول - کاملاً فعال
// =============================================

class WalletManager {
    static async init() {
        console.log('📱 راه‌اندازی WinstreakPol Mobile dApp...');
        
        try {
            // بررسی دستگاه
            this.detectDevice();
            
            await this.initWeb3();
            this.setupEventListeners();
            await this.checkPreviousConnection();
            this.loadLanguagePreference();
            this.updateUI();
            
            // همیشه پس از 2 ثانیه preloader را پنهان کن
            setTimeout(() => {
                this.hidePreloader();
            }, 2000);
            
        } catch (error) {
            console.error('❌ خطا در راه‌اندازی:', error);
            // حتی در صورت خطا هم preloader را پنهان کن
            setTimeout(() => {
                this.hidePreloader();
            }, 2000);
        }
    }

    static detectDevice() {
        const userAgent = navigator.userAgent;
        
        if (/MetaMaskMobile/i.test(userAgent)) {
            console.log('📱 MetaMask Mobile detected');
        }
        
        if (/TrustWallet/i.test(userAgent)) {
            console.log('📱 Trust Wallet detected');
        }
        
        if (/CoinbaseWallet/i.test(userAgent)) {
            console.log('📱 Coinbase Wallet detected');
        }
        
        if (/iPhone|iPad|iPod/i.test(userAgent)) {
            console.log('📱 iOS device detected');
        } else if (/Android/i.test(userAgent)) {
            console.log('📱 Android device detected');
        }
    }

    static async initWeb3() {
        try {
            if (window.ethereum) {
                web3 = new Web3(window.ethereum);
                console.log('✅ Web3 با موفقیت راه‌اندازی شد');
                
                // مقداردهی قراردادها
                lotteryContract = new web3.eth.Contract(LOTTERY_CONTRACT_ABI, LOTTERY_CONTRACT_ADDRESS);
                pTokenContract = new web3.eth.Contract(PTOKEN_CONTRACT_ABI, PTOKEN_CONTRACT_ADDRESS);
                
                return true;
            } else {
                console.log('❌ کیف پول Ethereum یافت نشد');
                this.showNotification('برای استفاده از برنامه، لطفا یک کیف پول Web3 نصب کنید', 'warning');
                return false;
            }
        } catch (error) {
            console.error('❌ خطا در راه‌اندازی Web3:', error);
            return false;
        }
    }

    static setupEventListeners() {
        // تغییر زبان
        document.getElementById('languageSelect').addEventListener('change', (e) => {
            currentLanguage = e.target.value;
            this.updateUI();
            localStorage.setItem('winstreakpol-language', currentLanguage);
        });

        document.getElementById('mobileLanguageSelect').addEventListener('change', (e) => {
            currentLanguage = e.target.value;
            this.updateUI();
            localStorage.setItem('winstreakpol-language', currentLanguage);
            this.hideMobileMenu();
        });

        // دکمه اتصال ولت
        document.getElementById('connectWallet').addEventListener('click', () => {
            this.showWalletModal();
        });

        // منوی همبرگری موبایل
        document.getElementById('mobileMenuBtn').addEventListener('click', () => {
            this.showMobileMenu();
        });

        document.querySelector('.mobile-menu-close').addEventListener('click', () => {
            this.hideMobileMenu();
        });

        // قطع اتصال در منوی موبایل
        document.getElementById('mobileDisconnect').addEventListener('click', () => {
            this.disconnectWallet();
            this.hideMobileMenu();
        });

        // مدیریت مودال ولت
        const walletModal = document.getElementById('walletModal');
        const closeBtn = walletModal.querySelector('.close');
        
        closeBtn.addEventListener('click', () => {
            walletModal.style.display = 'none';
        });

        window.addEventListener('click', (e) => {
            if (e.target === walletModal) {
                walletModal.style.display = 'none';
            }
        });

        // انتخاب کیف پول در مودال
        const walletOptions = document.querySelectorAll('.wallet-option');
        walletOptions.forEach(option => {
            option.addEventListener('click', async () => {
                const walletType = option.getAttribute('data-wallet');
                await this.connectToWallet(walletType);
            });
        });

        // مدیریت مودال تراکنش
        const transactionModal = document.getElementById('transactionModal');
        const txCloseBtn = transactionModal.querySelector('.close');
        
        txCloseBtn.addEventListener('click', () => {
            transactionModal.style.display = 'none';
        });

        // مشاهده در Polygonscan
        document.getElementById('viewOnPolygonscan').addEventListener('click', () => {
            const txHash = document.getElementById('tx-hash').textContent;
            if (txHash && txHash !== '0x...') {
                window.open(`https://polygonscan.com/tx/${txHash}`, '_blank');
            }
        });

        // مدیریت تب‌ها
        const tabBtns = document.querySelectorAll('.tab-btn');
        tabBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const tabId = btn.getAttribute('data-tab');
                this.switchTab(tabId);
            });
        });

        // تغییر تعداد بلیط
        document.getElementById('ticketCount').addEventListener('input', (e) => {
            this.updateTicketPrice();
        });

        // تغییر مقدار P-Token
        document.getElementById('ptokenAmount').addEventListener('input', (e) => {
            this.updatePTokenConversion();
        });

        // دکمه خرید بلیط
        document.getElementById('buyTickets').addEventListener('click', () => {
            this.buyTickets();
        });

        // دکمه فروش P-Token
        document.getElementById('sellPTokens').addEventListener('click', () => {
            this.sellPTokens();
        });

        // گوش دادن به تغییرات حساب در MetaMask
        if (window.ethereum) {
            window.ethereum.on('accountsChanged', (accounts) => {
                this.handleAccountsChanged(accounts);
            });
            
            window.ethereum.on('chainChanged', (chainId) => {
                console.log('🔄 شبکه تغییر کرد:', chainId);
                this.handleChainChanged(chainId);
            });
        }
    }

    static showMobileMenu() {
        document.getElementById('mobileMenu').classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    static hideMobileMenu() {
        document.getElementById('mobileMenu').classList.remove('active');
        document.body.style.overflow = 'auto';
    }

    static showWalletModal() {
        document.getElementById('walletModal').style.display = 'block';
    }

    static async connectToWallet(walletType) {
        try {
            console.log(`🔗 اتصال به ${walletType}...`);
            
            let provider;
            
            switch(walletType) {
                case 'metamask':
                    provider = await this.connectMetaMask();
                    break;
                case 'trustwallet':
                    provider = await this.connectTrustWallet();
                    break;
                case 'coinbase':
                    provider = await this.connectCoinbase();
                    break;
                case 'safepal':
                    provider = await this.connectSafePal();
                    break;
                case 'walletconnect':
                    provider = await this.connectWalletConnect();
                    break;
                default:
                    throw new Error('این کیف پول پشتیبانی نمی‌شود');
            }

            if (provider) {
                document.getElementById('walletModal').style.display = 'none';
                await this.finalizeConnection();
            }

        } catch (error) {
            console.error('❌ خطا در اتصال کیف پول:', error);
            this.showNotification(this.getErrorMessage(error), 'error');
        }
    }

    static async connectMetaMask() {
        if (!window.ethereum) {
            this.promptInstallWallet('MetaMask', 'https://metamask.io/download.html');
            throw new Error('MetaMask نصب نیست');
        }

        try {
            const accounts = await window.ethereum.request({
                method: 'eth_requestAccounts'
            });

            if (!accounts || accounts.length === 0) {
                throw new Error('هیچ حسابی یافت نشد');
            }

            userAccount = accounts[0];
            localStorage.setItem('winstreakpol-wallet-connected', 'metamask');
            return window.ethereum;

        } catch (error) {
            if (error.code === 4001) {
                throw new Error('اتصال توسط کاربر رد شد');
            }
            throw error;
        }
    }

    static async connectTrustWallet() {
        if (window.ethereum && window.ethereum.isTrust) {
            return this.connectMetaMask();
        } else if (window.ethereum) {
            return this.connectMetaMask();
        } else {
            if (isMobile) {
                window.location.href = 'https://link.trustwallet.com/wc?uri=wc:';
                return null;
            }
            this.showNotification('Trust Wallet یافت نشد', 'error');
            throw new Error('Trust Wallet شناسایی نشد');
        }
    }

    static async connectCoinbase() {
        if (window.ethereum && window.ethereum.isCoinbaseWallet) {
            return this.connectMetaMask();
        } else if (window.ethereum) {
            return this.connectMetaMask();
        } else {
            if (isMobile) {
                window.location.href = 'https://go.cb-w.com/wc?uri=wc:';
                return null;
            }
            this.showNotification('Coinbase Wallet یافت نشد', 'error');
            throw new Error('Coinbase Wallet شناسایی نشد');
        }
    }

    static async connectSafePal() {
        if (isMobile) {
            window.location.href = 'safepal://browser?url=' + encodeURIComponent(window.location.href);
            return null;
        }
        this.showNotification('SafePal یافت نشد', 'error');
        throw new Error('SafePal شناسایی نشد');
    }

    static async connectWalletConnect() {
        if (isMobile) {
            window.location.href = 'https://walletconnect.org/wc?uri=wc:';
            return null;
        }
        
        this.showNotification('برای اتصال با WalletConnect، لطفا از موبایل استفاده کنید یا کیف پول دسکتاپ خود را اسکن کنید', 'info');
        throw new Error('WalletConnect در حال حاضر فقط در موبایل پشتیبانی می‌شود');
    }

    static promptInstallWallet(walletName, downloadUrl) {
        const message = currentLanguage === 'fa' 
            ? `${walletName} نصب نیست. آیا می‌خواهید نصب کنید؟`
            : `${walletName} is not installed. Would you like to install it?`;
        
        if (confirm(message)) {
            window.open(downloadUrl, '_blank');
        }
    }

    static getErrorMessage(error) {
        if (error.code === 4001) {
            return currentLanguage === 'fa' ? 'اتصال توسط کاربر رد شد' : 'User rejected connection';
        }
        if (error.message.includes('already processing')) {
            return currentLanguage === 'fa' ? 'درخواست اتصال در حال پردازش است' : 'Connection request already processing';
        }
        if (error.message.includes('نصب')) {
            return currentLanguage === 'fa' ? 'کیف پول نصب نیست' : 'Wallet not installed';
        }
        if (error.message.includes('شناسایی')) {
            return currentLanguage === 'fa' ? 'کیف پول شناسایی نشد' : 'Wallet not detected';
        }
        return error.message || (currentLanguage === 'fa' ? 'خطا در اتصال' : 'Connection error');
    }

    static async finalizeConnection() {
        try {
            if (!web3) {
                await this.initWeb3();
            }

            const chainId = await web3.eth.getChainId();
            await this.checkNetwork(chainId);

            await this.updateWalletInfo();
            await this.loadContractData();

            this.showNotification(
                currentLanguage === 'fa' ? 'کیف پول با موفقیت متصل شد' : 'Wallet connected successfully', 
                'success'
            );

        } catch (error) {
            console.error('❌ خطا در نهایی‌سازی اتصال:', error);
            this.showNotification(error.message, 'error');
        }
    }

    static async checkNetwork(chainId) {
        const supportedNetworks = {
            137: 'Polygon Mainnet',
            80001: 'Polygon Mumbai Testnet'
        };
        
        if (!supportedNetworks[chainId]) {
            try {
                await window.ethereum.request({
                    method: 'wallet_switchEthereumChain',
                    params: [{ chainId: '0x13881' }],
                });
            } catch (switchError) {
                if (switchError.code === 4902) {
                    try {
                        await window.ethereum.request({
                            method: 'wallet_addEthereumChain',
                            params: [{
                                chainId: '0x13881',
                                chainName: 'Polygon Mumbai Testnet',
                                rpcUrls: ['https://rpc-mumbai.maticvigil.com/'],
                                blockExplorerUrls: ['https://mumbai.polygonscan.com/'],
                                nativeCurrency: {
                                    name: 'MATIC',
                                    symbol: 'MATIC',
                                    decimals: 18
                                }
                            }],
                        });
                    } catch (addError) {
                        throw new Error('لطفا به شبکه Polygon متصل شوید');
                    }
                } else {
                    throw new Error('لطفا به شبکه Polygon متصل شوید');
                }
            }
        }
        
        document.getElementById('network-text').textContent = supportedNetworks[chainId] || `شبکه ${chainId}`;
    }

    static handleChainChanged(chainId) {
        console.log('🔄 شبکه تغییر کرد:', chainId);
        setTimeout(() => {
            window.location.reload();
        }, 1000);
    }

    static async updateWalletInfo() {
        if (!userAccount || !web3) {
            this.hideWalletInfo();
            return;
        }

        const walletInfo = document.getElementById('walletInfo');
        const walletAddress = document.getElementById('walletAddress');
        const mobileWalletInfo = document.getElementById('mobileWalletInfo');
        const mobileWalletAddress = document.getElementById('mobileWalletAddress');
        const mobileMaticBalance = document.getElementById('mobileMaticBalance');
        const connectBtn = document.getElementById('connectWallet');
        const maticBalance = document.getElementById('maticBalance');
        const mobileDisconnect = document.getElementById('mobileDisconnect');

        const shortAddress = `${userAccount.substring(0, 6)}...${userAccount.substring(38)}`;
        walletAddress.textContent = shortAddress;
        mobileWalletAddress.textContent = shortAddress;

        try {
            const balance = await web3.eth.getBalance(userAccount);
            const balanceInMatic = web3.utils.fromWei(balance, 'ether');
            userMaticBalance = parseFloat(balanceInMatic).toFixed(4);
            maticBalance.textContent = `${userMaticBalance} MATIC`;
            mobileMaticBalance.textContent = `${userMaticBalance} MATIC`;
        } catch (error) {
            console.error('خطا در دریافت موجودی:', error);
            maticBalance.textContent = '0 MATIC';
            mobileMaticBalance.textContent = '0 MATIC';
        }

        walletInfo.style.display = 'flex';
        mobileWalletInfo.style.display = 'block';
        mobileDisconnect.style.display = 'block';
        
        connectBtn.innerHTML = currentLanguage === 'fa' 
            ? '<i class="fas fa-power-off"></i>' 
            : '<i class="fas fa-power-off"></i>';
        connectBtn.classList.add('connected');
        connectBtn.onclick = () => this.disconnectWallet();

        this.enableWalletActions();
    }

    static hideWalletInfo() {
        const walletInfo = document.getElementById('walletInfo');
        const mobileWalletInfo = document.getElementById('mobileWalletInfo');
        const mobileDisconnect = document.getElementById('mobileDisconnect');
        const connectBtn = document.getElementById('connectWallet');

        walletInfo.style.display = 'none';
        mobileWalletInfo.style.display = 'none';
        mobileDisconnect.style.display = 'none';
        
        connectBtn.innerHTML = currentLanguage === 'fa' 
            ? '<i class="fas fa-plug"></i> <span class="mobile-hidden">اتصال ولت</span>' 
            : '<i class="fas fa-plug"></i> <span class="mobile-hidden">Connect</span>';
        connectBtn.classList.remove('connected');
        connectBtn.onclick = () => this.showWalletModal();

        this.disableWalletActions();
    }

    static async loadContractData() {
        if (!userAccount || !web3) return;

        try {
            await this.loadLotteryData();
            await this.loadPTokenData();
            await this.loadUserData();

        } catch (error) {
            console.error('خطا در بارگذاری اطلاعات قرارداد:', error);
            await this.loadSampleData();
        }
    }

    static async loadLotteryData() {
        try {
            const systemInfo = await lotteryContract.methods.getSystemOverview().call();
            const ticketPrice = await lotteryContract.methods.ticketPrice().call();
            
            const ticketPriceMatic = web3.utils.fromWei(ticketPrice, 'ether');
            document.getElementById('ticketPrice').textContent = `${parseFloat(ticketPriceMatic).toFixed(4)} MATIC`;
            document.getElementById('totalTickets').textContent = systemInfo.totalTickets.toLocaleString();
            document.getElementById('totalPrizes').textContent = `${web3.utils.fromWei(systemInfo.totalPrizes, 'ether')} MATIC`;
            document.getElementById('contractBalance').textContent = `${web3.utils.fromWei(systemInfo.contractBalance, 'ether')} MATIC`;

            document.getElementById('pricePerTicket').textContent = `${parseFloat(ticketPriceMatic).toFixed(4)} MATIC`;
            this.updateTicketPrice();

            await this.loadPoolData();

        } catch (error) {
            console.error('خطا در بارگذاری اطلاعات لاتری:', error);
            this.loadSampleLotteryData();
        }
    }

    static async loadPoolData() {
        try {
            const pool1Stats = await lotteryContract.methods.getPoolStatistics(1).call();
            const pool1Max = await lotteryContract.methods.pool1MaxParticipants().call();
            document.getElementById('pool1Tickets').textContent = `${pool1Stats.totalTickets}/${pool1Max}`;
            document.getElementById('pool1Prize').textContent = `${web3.utils.fromWei(pool1Stats.poolPrize, 'ether')} MATIC`;
            const pool1Progress = (pool1Stats.totalTickets / pool1Max) * 100;
            document.getElementById('pool1Progress').style.width = `${pool1Progress}%`;

            const pool2Stats = await lotteryContract.methods.getPoolStatistics(2).call();
            const pool2Max = await lotteryContract.methods.pool2MaxParticipants().call();
            document.getElementById('pool2Tickets').textContent = `${pool2Stats.totalTickets}/${pool2Max}`;
            document.getElementById('pool2Prize').textContent = `${web3.utils.fromWei(pool2Stats.poolPrize, 'ether')} MATIC`;
            const pool2Progress = (pool2Stats.totalTickets / pool2Max) * 100;
            document.getElementById('pool2Progress').style.width = `${pool2Progress}%`;

            const pool3Stats = await lotteryContract.methods.getPoolStatistics(3).call();
            const pool3Max = await lotteryContract.methods.pool3MaxParticipants().call();
            document.getElementById('pool3Tickets').textContent = `${pool3Stats.totalTickets}/${pool3Max}`;
            document.getElementById('pool3Prize').textContent = `${web3.utils.fromWei(pool3Stats.poolPrize, 'ether')} MATIC`;
            const pool3Progress = (pool3Stats.totalTickets / pool3Max) * 100;
            document.getElementById('pool3Progress').style.width = `${pool3Progress}%`;

        } catch (error) {
            console.error('خطا در بارگذاری اطلاعات استخرها:', error);
        }
    }

    static async loadPTokenData() {
        try {
            const pTokenBalance = await pTokenContract.methods.balanceOf(userAccount).call();
            const pTokenPriceWei = await pTokenContract.methods.getPTokenPriceInWei().call();
            
            const pTokenPriceMatic = web3.utils.fromWei(pTokenPriceWei, 'ether');
            const totalValue = web3.utils.fromWei((BigInt(pTokenBalance) * BigInt(pTokenPriceWei)).toString(), 'ether');
            
            document.getElementById('userPTokenBalance').textContent = `${parseInt(pTokenBalance).toLocaleString()} P-Token`;
            document.getElementById('ptokenPrice').textContent = `${parseFloat(pTokenPriceMatic).toFixed(6)} MATIC`;
            document.getElementById('totalPTokenValue').textContent = `${parseFloat(totalValue).toFixed(4)} MATIC`;
            
            document.getElementById('maxPTokenAmount').textContent = parseInt(pTokenBalance);
            this.updatePTokenConversion();

        } catch (error) {
            console.error('خطا در بارگذاری اطلاعات P-Token:', error);
        }
    }

    static async loadUserData() {
        try {
            const userTickets = await lotteryContract.methods.getUserCurrentTickets(userAccount).call();
            
            const ticketText = currentLanguage === 'fa' ? 'بلیط' : 'tickets';
            
            document.getElementById('userPool1Tickets').textContent = `${userTickets.pool1Tickets} ${ticketText}`;
            document.getElementById('userPool2Tickets').textContent = `${userTickets.pool2Tickets} ${ticketText}`;
            document.getElementById('userPool3Tickets').textContent = `${userTickets.pool3Tickets} ${ticketText}`;

        } catch (error) {
            console.error('خطا در بارگذاری اطلاعات کاربر:', error);
        }
    }

    static updateTicketPrice() {
        const ticketCount = parseInt(document.getElementById('ticketCount').value) || 1;
        const ticketPriceElement = document.getElementById('pricePerTicket');
        const ticketPriceText = ticketPriceElement.textContent;
        const ticketPrice = parseFloat(ticketPriceText.split(' ')[0]);
        
        const totalPrice = ticketCount * ticketPrice;
        document.getElementById('totalPrice').textContent = `${totalPrice.toFixed(4)} MATIC`;
    }

    static updatePTokenConversion() {
        const pTokenAmount = parseInt(document.getElementById('ptokenAmount').value) || 1;
        const pTokenPriceElement = document.getElementById('ptokenPrice');
        const pTokenPriceText = pTokenPriceElement.textContent;
        const pTokenPrice = parseFloat(pTokenPriceText.split(' ')[0]);
        
        const totalValue = pTokenAmount * pTokenPrice;
        document.getElementById('conversionPToken').textContent = pTokenAmount;
        document.getElementById('conversionPrice').textContent = `${pTokenPrice.toFixed(6)} MATIC`;
        document.getElementById('conversionTotal').textContent = `${totalValue.toFixed(4)} MATIC`;
    }

    static async buyTickets() {
        if (!userAccount || !lotteryContract) {
            this.showNotification('لطفا اول کیف پول خود را متصل کنید', 'error');
            return;
        }

        const ticketCount = parseInt(document.getElementById('ticketCount').value);
        const ticketPrice = await lotteryContract.methods.ticketPrice().call();
        const totalPriceWei = (BigInt(ticketCount) * BigInt(ticketPrice)).toString();

        if (ticketCount < 1 || ticketCount > 1000) {
            this.showNotification('تعداد بلیط باید بین ۱ تا ۱۰۰۰ باشد', 'error');
            return;
        }

        if (parseFloat(userMaticBalance) < parseFloat(web3.utils.fromWei(totalPriceWei, 'ether'))) {
            this.showNotification('موجودی MATIC کافی نیست', 'error');
            return;
        }

        try {
            const buyBtn = document.getElementById('buyTickets');
            const originalText = buyBtn.innerHTML;
            
            buyBtn.innerHTML = '<div class="loading"></div> در حال پردازش...';
            buyBtn.disabled = true;

            this.showTransactionModal('در حال خرید بلیط...', 'pending');

            const tx = await lotteryContract.methods.buyTicket(ticketCount).send({
                from: userAccount,
                value: totalPriceWei,
                gas: 300000
            });

            this.showTransactionModal('بلیط با موفقیت خریداری شد', 'success', tx.transactionHash);
            this.showNotification(`${ticketCount} بلیط با موفقیت خریداری شد`, 'success');
            
            await this.updateWalletInfo();
            await this.loadContractData();

        } catch (error) {
            console.error('خطا در خرید بلیط:', error);
            this.showTransactionModal('خطا در خرید بلیط', 'error');
            this.showNotification('خطا در خرید بلیط', 'error');
        } finally {
            const buyBtn = document.getElementById('buyTickets');
            if (buyBtn) {
                buyBtn.innerHTML = '<i class="fas fa-shopping-cart"></i> خرید بلیط';
                buyBtn.disabled = false;
            }
        }
    }

    static async sellPTokens() {
        if (!userAccount || !pTokenContract) {
            this.showNotification('لطفا اول کیف پول خود را متصل کنید', 'error');
            return;
        }

        const pTokenAmount = document.getElementById('ptokenAmount').value;

        if (pTokenAmount < 1) {
            this.showNotification('مقدار P-Token نامعتبر است', 'error');
            return;
        }

        try {
            const sellBtn = document.getElementById('sellPTokens');
            const originalText = sellBtn.innerHTML;
            
            sellBtn.innerHTML = '<div class="loading"></div> در حال پردازش...';
            sellBtn.disabled = true;

            this.showTransactionModal('در حال تبدیل P-Token...', 'pending');

            const tx = await pTokenContract.methods.sellPToken(pTokenAmount).send({
                from: userAccount,
                gas: 300000
            });

            this.showTransactionModal('P-Token با موفقیت تبدیل شد', 'success', tx.transactionHash);
            this.showNotification(`${pTokenAmount} P-Token با موفقیت به MATIC تبدیل شد`, 'success');
            
            await this.updateWalletInfo();
            await this.loadContractData();

        } catch (error) {
            console.error('خطا در تبدیل P-Token:', error);
            this.showTransactionModal('خطا در تبدیل P-Token', 'error');
            this.showNotification('خطا در تبدیل P-Token', 'error');
        } finally {
            const sellBtn = document.getElementById('sellPTokens');
            if (sellBtn) {
                sellBtn.innerHTML = '<i class="fas fa-exchange-alt"></i> فروش P-Token و دریافت MATIC';
                sellBtn.disabled = false;
            }
        }
    }

    static showTransactionModal(status, type, txHash = null) {
        const modal = document.getElementById('transactionModal');
        const statusText = document.getElementById('transaction-status-text');
        const statusIcon = document.querySelector('.status-icon');
        const txHashElement = document.getElementById('tx-hash');
        const viewOnPolygonscan = document.getElementById('viewOnPolygonscan');
        
        statusText.textContent = status;
        
        statusIcon.innerHTML = '';
        if (type === 'pending') {
            statusIcon.innerHTML = '<i class="fas fa-sync-alt fa-spin"></i>';
        } else if (type === 'success') {
            statusIcon.innerHTML = '<i class="fas fa-check-circle success"></i>';
        } else if (type === 'error') {
            statusIcon.innerHTML = '<i class="fas fa-exclamation-circle error"></i>';
        }
        
        if (txHash) {
            txHashElement.textContent = txHash;
            document.querySelector('.transaction-hash').style.display = 'block';
            viewOnPolygonscan.style.display = 'block';
        } else {
            document.querySelector('.transaction-hash').style.display = 'none';
            viewOnPolygonscan.style.display = 'none';
        }
        
        modal.style.display = 'block';
        
        if (type === 'success') {
            setTimeout(() => {
                modal.style.display = 'none';
            }, 5000);
        }
    }

    static async disconnectWallet() {
        userAccount = null;
        localStorage.removeItem('winstreakpol-wallet-connected');
        await this.updateWalletInfo();
        this.showNotification('اتصال کیف پول قطع شد', 'info');
        this.hideMobileMenu();
    }

    static handleAccountsChanged(accounts) {
        if (accounts.length === 0) {
            this.disconnectWallet();
        } else if (accounts[0] !== userAccount) {
            userAccount = accounts[0];
            this.finalizeConnection();
        }
    }

    static enableWalletActions() {
        document.getElementById('buyTickets').disabled = false;
        document.getElementById('sellPTokens').disabled = false;
    }

    static disableWalletActions() {
        document.getElementById('buyTickets').disabled = true;
        document.getElementById('sellPTokens').disabled = true;
    }

    static async checkPreviousConnection() {
        if (window.ethereum) {
            try {
                const accounts = await window.ethereum.request({ 
                    method: 'eth_accounts' 
                });
                
                if (accounts.length > 0) {
                    userAccount = accounts[0];
                    await this.finalizeConnection();
                }
            } catch (error) {
                console.error('خطا در بررسی اتصال قبلی:', error);
            }
        }
    }

    static switchTab(tabId) {
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        
        document.querySelectorAll('.tab-content').forEach(content => {
            content.classList.remove('active');
        });

        document.querySelector(`[data-tab="${tabId}"]`).classList.add('active');
        document.getElementById(tabId).classList.add('active');

        if (tabId === 'winners') {
            this.loadWinnersData();
        }
    }

    static async loadWinnersData() {
        try {
            const recentWinners = await lotteryContract.methods.getRecentWinners(10).call();
            
            const winnersList = document.getElementById('recentWinners');
            
            if (recentWinners.length === 0) {
                const noWinnersText = currentLanguage === 'fa' ? 'هنوز برنده‌ای وجود ندارد' : 'No winners yet';
                winnersList.innerHTML = `<div class="winner-item">${noWinnersText}</div>`;
                return;
            }
            
            const roundText = currentLanguage === 'fa' ? 'دوره' : 'Round';
            const poolText = currentLanguage === 'fa' ? 'استخر' : 'Pool';
            
            winnersList.innerHTML = recentWinners.map(winner => `
                <div class="winner-item">
                    <div>
                        <div class="winner-address">${winner.winner.substring(0, 6)}...${winner.winner.substring(38)}</div>
                        <div style="font-size: 0.8rem; color: var(--light-secondary); margin-top: 0.25rem;">
                            ${roundText}: ${winner.roundNumber} | ${poolText}: ${winner.poolId}
                        </div>
                    </div>
                    <div class="winner-prize">${web3.utils.fromWei(winner.prize.toString(), 'ether')} MATIC</div>
                </div>
            `).join('');
            
        } catch (error) {
            console.error('خطا در بارگذاری برندگان:', error);
            const errorText = currentLanguage === 'fa' ? 'خطا در بارگذاری برندگان' : 'Error loading winners';
            document.getElementById('recentWinners').innerHTML = 
                `<div class="winner-item">${errorText}</div>`;
        }
    }

    static loadSampleLotteryData() {
        document.getElementById('ticketPrice').textContent = '1 MATIC';
        document.getElementById('totalTickets').textContent = '15,842';
        document.getElementById('totalPrizes').textContent = '45,230 MATIC';
        document.getElementById('contractBalance').textContent = '28,150 MATIC';
        
        document.getElementById('pricePerTicket').textContent = '1 MATIC';
        this.updateTicketPrice();
    }

    static loadSampleData() {
        this.loadSampleLotteryData();
        
        document.getElementById('userPTokenBalance').textContent = '2,500 P-Token';
        document.getElementById('ptokenPrice').textContent = '0.0015 MATIC';
        document.getElementById('totalPTokenValue').textContent = '3.75 MATIC';
        
        const userTicketText = currentLanguage === 'fa' ? 'بلیط' : 'tickets';
        document.getElementById('userPool1Tickets').textContent = `5 ${userTicketText}`;
        document.getElementById('userPool2Tickets').textContent = `12 ${userTicketText}`;
        document.getElementById('userPool3Tickets').textContent = `3 ${userTicketText}`;
    }

    static hidePreloader() {
        const preloader = document.getElementById('preloader');
        if (preloader) {
            preloader.classList.add('fade-out');
            setTimeout(() => {
                preloader.style.display = 'none';
            }, 500);
        }
    }

    static showNotification(message, type = 'info') {
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

    static updateUI() {
        const strings = {
            fa: {
                'preloader-text': 'در حال بارگذاری...',
                'logo-text': 'WinstreakPol',
                'network-text': 'Polygon',
                'connect-text': 'اتصال ولت',
                'tab-dashboard': 'داشبورد',
                'tab-lottery': 'بلیط',
                'tab-ptoken': 'P-Token',
                'tab-winners': 'برندگان',
                'dashboard-title': 'داشبورد لاتری',
                'dashboard-subtitle': 'وضعیت زنده استخرهای لاتری',
                'stat-ticket-price': 'قیمت بلیط',
                'stat-total-tickets': 'بلیط فروخته شده',
                'stat-total-prizes': 'جوایز توزیع شده',
                'stat-contract-balance': 'موجودی قرارداد',
                'pools-title': 'استخرهای لاتری',
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
                'lottery-title': 'خرید بلیط لاتری',
                'lottery-subtitle': 'شانس خود را برای برنده شدن امتحان کنید',
                'ticket-purchase-title': 'خرید بلیط لاتری',
                'ticket-count-label': 'تعداد بلیط',
                'ticket-max-hint': 'حداکثر ۱۰۰۰ بلیط در هر تراکنش',
                'price-per-ticket': 'قیمت هر بلیط:',
                'total-cost': 'هزینه کل:',
                'buy-tickets-text': 'خرید بلیط',
                'ticket-info-title': 'اطلاعات بلیط‌ها',
                'user-pool1-label': 'استخر نقره',
                'user-pool2-label': 'استخر طلا',
                'user-pool3-label': 'استخر الماس',
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
                'winners-title': 'برندگان',
                'winners-subtitle': 'برندگان خوش‌شانس لاتری',
                'recent-winners-title': 'برندگان اخیر',
                'wallet-modal-title': 'اتصال کیف پول',
                'transaction-modal-title': 'وضعیت تراکنش',
                'tx-hash-label': 'هش تراکنش:'
            },
            en: {
                'preloader-text': 'Loading...',
                'logo-text': 'WinstreakPol',
                'network-text': 'Polygon',
                'connect-text': 'Connect Wallet',
                'tab-dashboard': 'Dashboard',
                'tab-lottery': 'Tickets',
                'tab-ptoken': 'P-Token',
                'tab-winners': 'Winners',
                'dashboard-title': 'Lottery Dashboard',
                'dashboard-subtitle': 'Live status of lottery pools',
                'stat-ticket-price': 'Ticket Price',
                'stat-total-tickets': 'Tickets Sold',
                'stat-total-prizes': 'Prizes Distributed',
                'stat-contract-balance': 'Contract Balance',
                'pools-title': 'Lottery Pools',
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
                'winners-title': 'Winners',
                'winners-subtitle': 'Lucky lottery winners',
                'recent-winners-title': 'Recent Winners',
                'wallet-modal-title': 'Connect Wallet',
                'transaction-modal-title': 'Transaction Status',
                'tx-hash-label': 'Transaction Hash:'
            }
        };

        const langStrings = strings[currentLanguage] || strings.fa;
        
        for (const [key, value] of Object.entries(langStrings)) {
            const element = document.getElementById(key);
            if (element) {
                element.textContent = value;
            }
        }
        
        document.body.dir = currentLanguage === 'fa' ? 'rtl' : 'ltr';
        
        const connectBtn = document.getElementById('connectWallet');
        if (connectBtn && !connectBtn.classList.contains('connected')) {
            const connectText = currentLanguage === 'fa' ? 'اتصال ولت' : 'Connect';
            connectBtn.innerHTML = currentLanguage === 'fa' 
                ? `<i class="fas fa-plug"></i> <span class="mobile-hidden">${connectText}</span>`
                : `<i class="fas fa-plug"></i> <span class="mobile-hidden">${connectText}</span>`;
        }
        
        if (userAccount) {
            this.loadUserData();
        }
        
        if (document.getElementById('winners').classList.contains('active')) {
            this.loadWinnersData();
        }
        
        const ticketInput = document.getElementById('ticketCount');
        const pTokenInput = document.getElementById('ptokenAmount');
        
        if (ticketInput) {
            ticketInput.placeholder = currentLanguage === 'fa' ? 'تعداد بلیط' : 'Number of tickets';
        }
        
        if (pTokenInput) {
            pTokenInput.placeholder = currentLanguage === 'fa' ? 'تعداد P-Token' : 'P-Token amount';
        }
    }

    static loadLanguagePreference() {
        const savedLanguage = localStorage.getItem('winstreakpol-language');
        if (savedLanguage) {
            currentLanguage = savedLanguage;
            document.getElementById('languageSelect').value = savedLanguage;
            document.getElementById('mobileLanguageSelect').value = savedLanguage;
        }
    }
}

// توابع جهانی برای HTML
window.changeTicketCount = function(change) {
    const input = document.getElementById('ticketCount');
    let value = parseInt(input.value) + change;
    value = Math.max(1, Math.min(1000, value));
    input.value = value;
    WalletManager.updateTicketPrice();
}

window.changePTokenAmount = function(change) {
    const input = document.getElementById('ptokenAmount');
    let value = parseInt(input.value) + change;
    value = Math.max(1, Math.min(10000, value));
    input.value = value;
    WalletManager.updatePTokenConversion();
}

// راه‌اندازی برنامه
window.addEventListener('load', () => {
    WalletManager.init();
});

// مدیریت وضعیت آنلاین/آفلاین
window.addEventListener('online', () => {
    const message = currentLanguage === 'fa' ? 'اتصال اینترنت برقرار شد' : 'Internet connection restored';
    WalletManager.showNotification(message, 'success');
});

window.addEventListener('offline', () => {
    const message = currentLanguage === 'fa' ? 'اتصال اینترنت قطع شد' : 'Internet connection lost';
    WalletManager.showNotification(message, 'warning');
});