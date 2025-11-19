// =============================================
// WinstreakPol - Professional Lottery dApp
// سیستم اتصال ولت کاملاً حرفه‌ای و واقعی
// =============================================

// تنظیمات قراردادها - آدرس‌های واقعی
const LOTTERY_CONTRACT_ADDRESS = '0xdFC970De4C016AB950F965e5364048C16468e2Ec';
const PTOKEN_CONTRACT_ADDRESS = '0x82F7dBe1792436d15bdA22bB3340bD3f45D614Fa';

// ABI قرارداد اصلی P-Token
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

// ABI ساده‌شده برای قرارداد لاتری
const LOTTERY_CONTRACT_ABI = [
    {
        "inputs": [],
        "name": "getTicketPrice",
        "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getTotalTickets",
        "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getTotalPrizes",
        "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getContractBalance",
        "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{"internalType": "uint256", "name": "poolId", "type": "uint256"}],
        "name": "getPoolInfo",
        "outputs": [
            {"internalType": "uint256", "name": "totalTickets", "type": "uint256"},
            {"internalType": "uint256", "name": "soldTickets", "type": "uint256"},
            {"internalType": "uint256", "name": "prizeAmount", "type": "uint256"}
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{"internalType": "address", "name": "user", "type": "address"}],
        "name": "getUserTickets",
        "outputs": [
            {"internalType": "uint256", "name": "pool1", "type": "uint256"},
            {"internalType": "uint256", "name": "pool2", "type": "uint256"},
            {"internalType": "uint256", "name": "pool3", "type": "uint256"}
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{"internalType": "uint256", "name": "ticketCount", "type": "uint256"}],
        "name": "buyTickets",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
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

// قراردادها
let lotteryContract;
let pTokenContract;

// =============================================
// سیستم مدیریت کیف پول حرفه‌ای
// =============================================

const WalletManager = {
    async init() {
        await this.initWeb3();
        this.setupEventListeners();
        await this.checkPreviousConnection();
        this.loadLanguagePreference();
        
        // مقداردهی اولیه قراردادها
        if (web3) {
            lotteryContract = new web3.eth.Contract(LOTTERY_CONTRACT_ABI, LOTTERY_CONTRACT_ADDRESS);
            pTokenContract = new web3.eth.Contract(PTOKEN_CONTRACT_ABI, PTOKEN_CONTRACT_ADDRESS);
        }
    },

    async initWeb3() {
        try {
            if (window.ethereum) {
                web3 = new Web3(window.ethereum);
                console.log('Web3 initialized with Ethereum provider');
                
                // بررسی شبکه
                await this.checkNetwork();
                
                // مقداردهی قراردادها
                lotteryContract = new web3.eth.Contract(LOTTERY_CONTRACT_ABI, LOTTERY_CONTRACT_ADDRESS);
                pTokenContract = new web3.eth.Contract(PTOKEN_CONTRACT_ABI, PTOKEN_CONTRACT_ADDRESS);
                
            } else {
                console.log('No Ethereum wallet detected');
                this.showNotification('هیچ کیف پولی شناسایی نشد', 'warning');
            }
        } catch (error) {
            console.error('Error initializing Web3:', error);
            this.showNotification('خطا در راه‌اندازی Web3', 'error');
        }
    },

    async checkNetwork() {
        try {
            const chainId = await web3.eth.getChainId();
            
            // فقط شبکه Polygon (137) پشتیبانی می‌شود
            if (chainId !== 137) {
                this.showNotification('لطفا به شبکه Polygon Mainnet متصل شوید', 'warning');
                return false;
            }
            
            return true;
        } catch (error) {
            console.error('Error checking network:', error);
            return false;
        }
    },

    setupEventListeners() {
        // تغییر زبان
        document.getElementById('languageSelect').addEventListener('change', (e) => {
            currentLanguage = e.target.value;
            this.updateUI();
        });

        // اتصال ولت
        document.getElementById('connectWallet').addEventListener('click', () => {
            this.showWalletModal();
        });

        // مدیریت مودال ولت
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

        // مدیریت تغییرات حساب
        if (window.ethereum) {
            window.ethereum.on('accountsChanged', (accounts) => {
                this.handleAccountsChanged(accounts);
            });
            
            window.ethereum.on('chainChanged', (chainId) => {
                this.handleChainChanged(chainId);
            });
        }
    },

    loadLanguagePreference() {
        const savedLanguage = localStorage.getItem('winstreakpol-language');
        if (savedLanguage) {
            currentLanguage = savedLanguage;
            document.getElementById('languageSelect').value = savedLanguage;
            this.updateUI();
        }
    },

    async checkPreviousConnection() {
        const savedConnection = localStorage.getItem('winstreakpol-wallet-connected');
        if (savedConnection === 'injected' && window.ethereum) {
            try {
                const accounts = await window.ethereum.request({ method: 'eth_accounts' });
                if (accounts.length > 0) {
                    userAccount = accounts[0];
                    await this.finalizeConnection();
                }
            } catch (error) {
                console.error('Error reconnecting:', error);
                localStorage.removeItem('winstreakpol-wallet-connected');
            }
        }
    },

    showWalletModal() {
        document.getElementById('walletModal').style.display = 'block';
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
                case 'coinbase':
                    provider = await this.connectCoinbase();
                    break;
                case 'walletconnect':
                    await this.connectWalletConnect();
                    return;
                default:
                    throw new Error('Unsupported wallet');
            }

            if (provider) {
                await this.finalizeConnection();
            }

        } catch (error) {
            console.error('Error connecting wallet:', error);
            this.showNotification(this.getErrorMessage(error), 'error');
        }
    },

    getErrorMessage(error) {
        if (error.code === 4001) {
            return currentLanguage === 'fa' ? 'کاربر اتصال را رد کرد' : 'User rejected connection';
        }
        if (error.message.includes('MetaMask') || error.code === -32002) {
            return currentLanguage === 'fa' ? 'ولت در حال حاضر در حال پردازش درخواست است' : 'Wallet is already processing a request';
        }
        if (error.message.includes('not installed')) {
            return currentLanguage === 'fa' ? 'کیف پول نصب نیست' : 'Wallet is not installed';
        }
        return error.message || (currentLanguage === 'fa' ? 'خطا در اتصال ولت' : 'Error connecting wallet');
    },

    async connectMetaMask() {
        if (!window.ethereum) {
            this.promptInstallWallet('MetaMask', 'https://metamask.io/download.html');
            throw new Error('MetaMask not installed');
        }

        try {
            const accounts = await window.ethereum.request({ 
                method: 'eth_requestAccounts' 
            });
            
            if (!accounts || accounts.length === 0) {
                throw new Error('No accounts found');
            }
            
            localStorage.setItem('winstreakpol-wallet-connected', 'injected');
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
            this.showNotification('Trust Wallet یافت نشد', 'error');
            throw new Error('Trust Wallet not detected');
        }

        try {
            const accounts = await window.ethereum.request({ 
                method: 'eth_requestAccounts' 
            });
            
            if (!accounts || accounts.length === 0) {
                throw new Error('No accounts found');
            }
            
            localStorage.setItem('winstreakpol-wallet-connected', 'injected');
            return window.ethereum;
        } catch (error) {
            throw error;
        }
    },

    async connectCoinbase() {
        if (window.ethereum && window.ethereum.isCoinbaseWallet) {
            try {
                const accounts = await window.ethereum.request({ 
                    method: 'eth_requestAccounts' 
                });
                
                if (!accounts || accounts.length === 0) {
                    throw new Error('No accounts found');
                }
                
                localStorage.setItem('winstreakpol-wallet-connected', 'injected');
                return window.ethereum;
            } catch (error) {
                throw error;
            }
        } else {
            this.showNotification('Coinbase Wallet یافت نشد', 'error');
            throw new Error('Coinbase Wallet not detected');
        }
    },

    async connectWalletConnect() {
        this.showNotification('WalletConnect به زودی فعال خواهد شد', 'info');
    },

    promptInstallWallet(walletName, downloadUrl) {
        const message = currentLanguage === 'fa' 
            ? `${walletName} نصب نیست. آیا می‌خواهید نصب کنید؟`
            : `${walletName} is not installed. Would you like to install it?`;
        
        if (confirm(message)) {
            window.open(downloadUrl, '_blank');
        }
    },

    async finalizeConnection() {
        try {
            if (!web3) {
                await this.initWeb3();
            }

            const accounts = await web3.eth.getAccounts();
            userAccount = accounts[0];
            
            if (userAccount) {
                const networkValid = await this.checkNetwork();
                if (!networkValid) {
                    this.showNotification('لطفا به شبکه Polygon متصل شوید', 'warning');
                    return;
                }

                await this.updateWalletInfo();
                this.showNotification('ولت با موفقیت متصل شد', 'success');
                document.getElementById('walletModal').style.display = 'none';
                
                await AppManager.refreshAllData();
            }

        } catch (error) {
            console.error('Error finalizing connection:', error);
            this.showNotification('خطا در اتصال ولت', 'error');
        }
    },

    async disconnectWallet() {
        try {
            localStorage.removeItem('winstreakpol-wallet-connected');
            userAccount = null;
            web3 = null;
            lotteryContract = null;
            pTokenContract = null;
            
            await this.updateWalletInfo();
            this.showNotification('ولت قطع شد', 'info');

        } catch (error) {
            console.error('Error disconnecting wallet:', error);
        }
    },

    async updateWalletInfo() {
        const walletInfo = document.getElementById('walletInfo');
        const walletAddress = document.getElementById('walletAddress');
        const connectBtn = document.getElementById('connectWallet');
        const maticBalance = document.getElementById('maticBalance');
        
        if (userAccount && web3) {
            const shortAddress = `${userAccount.substring(0, 6)}...${userAccount.substring(38)}`;
            walletAddress.textContent = shortAddress;
            
            try {
                const balance = await web3.eth.getBalance(userAccount);
                const balanceInMatic = web3.utils.fromWei(balance, 'ether');
                userMaticBalance = parseFloat(balanceInMatic).toFixed(4);
                maticBalance.textContent = `${userMaticBalance} MATIC`;
            } catch (error) {
                console.error('Error fetching balance:', error);
                maticBalance.textContent = '0 MATIC';
                userMaticBalance = '0';
            }
            
            walletInfo.style.display = 'flex';
            connectBtn.innerHTML = `<i class="fas fa-power-off"></i> قطع اتصال`;
            connectBtn.classList.add('connected');
            connectBtn.onclick = () => this.disconnectWallet();
            
            AppManager.enableWalletActions();
        } else {
            walletInfo.style.display = 'none';
            connectBtn.innerHTML = `<i class="fas fa-plug"></i> اتصال ولت`;
            connectBtn.classList.remove('connected');
            connectBtn.onclick = () => this.showWalletModal();
            
            AppManager.disableWalletActions();
        }
    },

    handleAccountsChanged(accounts) {
        userAccount = accounts[0] || null;
        this.updateWalletInfo();
        
        if (userAccount) {
            this.showNotification('حساب کاربری تغییر کرد', 'info');
            AppManager.refreshAllData();
        } else {
            this.disconnectWallet();
        }
    },

    handleChainChanged(chainId) {
        const networkId = parseInt(chainId, 16);
        
        // فقط شبکه Polygon (137) پشتیبانی می‌شود
        if (networkId !== 137) {
            this.showNotification('لطفا به شبکه Polygon متصل شوید', 'warning');
        } else {
            this.showNotification('اتصال به شبکه Polygon برقرار شد', 'success');
            AppManager.refreshAllData();
        }
    },

    updateUI() {
        const strings = {
            fa: {
                'preloader-text': 'در حال بارگذاری...',
                'logo-text': 'WinstreakPol',
                'network-text': 'Polygon',
                'connect-text': 'اتصال ولت',
                'tab-dashboard': 'داشبورد',
                'tab-lottery': 'خرید بلیط',
                'tab-ptoken': 'تبدیل P-Token',
                'tab-winners': 'برندگان',
                'dashboard-title': 'داشبورد لاتری',
                'dashboard-subtitle': 'وضعیت زنده استخرهای لاتری',
                'stat-ticket-price': 'قیمت بلیط',
                'stat-total-tickets': 'بلیط‌های فروخته شده',
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
                'tab-lottery': 'Buy Tickets',
                'tab-ptoken': 'Convert P-Token',
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

        const langStrings = strings[currentLanguage];
        for (const [key, value] of Object.entries(langStrings)) {
            const element = document.getElementById(key);
            if (element) {
                element.textContent = value;
            }
        }
        
        document.body.dir = currentLanguage === 'fa' ? 'rtl' : 'ltr';
        localStorage.setItem('winstreakpol-language', currentLanguage);
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
// سیستم مدیریت برنامه
// =============================================

const AppManager = {
    async init() {
        try {
            await WalletManager.init();
            this.setupEventListeners();
            await this.refreshAllData();
            this.hidePreloader();
            isInitialized = true;
        } catch (error) {
            console.error('Error initializing app:', error);
            this.hidePreloader();
        }
    },

    setupEventListeners() {
        // تب‌ها
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

        // خرید بلیط
        const buyTicketsBtn = document.getElementById('buyTickets');
        if (buyTicketsBtn) {
            buyTicketsBtn.addEventListener('click', () => {
                this.buyTickets();
            });
        }

        // فروش P-Token
        const sellPTokensBtn = document.getElementById('sellPTokens');
        if (sellPTokensBtn) {
            sellPTokensBtn.addEventListener('click', () => {
                this.sellPTokens();
            });
        }

        // تغییر تعداد بلیط
        const ticketCountInput = document.getElementById('ticketCount');
        if (ticketCountInput) {
            ticketCountInput.addEventListener('input', () => {
                this.updateTotalPrice();
            });
            ticketCountInput.addEventListener('change', () => {
                this.validateTicketCount();
            });
        }

        // تغییر مقدار P-Token
        const pTokenAmountInput = document.getElementById('ptokenAmount');
        if (pTokenAmountInput) {
            pTokenAmountInput.addEventListener('input', () => {
                this.updateConversionSummary();
            });
            pTokenAmountInput.addEventListener('change', () => {
                this.validatePTokenAmount();
            });
        }
    },

    validateTicketCount() {
        const input = document.getElementById('ticketCount');
        let value = parseInt(input.value);
        
        if (isNaN(value) || value < 1) {
            value = 1;
        } else if (value > 1000) {
            value = 1000;
        }
        
        input.value = value;
        this.updateTotalPrice();
    },

    validatePTokenAmount() {
        const input = document.getElementById('ptokenAmount');
        let value = parseInt(input.value);
        const maxAmount = 1500;
        
        if (isNaN(value) || value < 1) {
            value = 1;
        } else if (value > maxAmount) {
            value = maxAmount;
        }
        
        input.value = value;
        this.updateConversionSummary();
    },

    async refreshAllData() {
        if (!userAccount) {
            this.disableWalletActions();
            return;
        }

        try {
            this.enableWalletActions();
            await this.loadContractData();
            await WalletManager.updateWalletInfo();
        } catch (error) {
            console.error('Error refreshing data:', error);
        }
    },

    async loadContractData() {
        if (!web3 || !lotteryContract || !pTokenContract) return;

        try {
            // خواندن اطلاعات واقعی از قراردادها
            await this.loadLotteryData();
            await this.loadPTokenData();
            await this.loadUserData();

        } catch (error) {
            console.error('Error loading contract data:', error);
            WalletManager.showNotification('خطا در بارگذاری اطلاعات قرارداد', 'error');
        }
    },

    async loadLotteryData() {
        try {
            // قیمت بلیط
            const ticketPriceWei = await lotteryContract.methods.getTicketPrice().call();
            const ticketPriceMatic = web3.utils.fromWei(ticketPriceWei, 'ether');
            document.getElementById('ticketPrice').textContent = `${parseFloat(ticketPriceMatic).toFixed(2)} MATIC`;
            document.getElementById('pricePerTicket').textContent = `${parseFloat(ticketPriceMatic).toFixed(2)} MATIC`;

            // آمار کلی
            const totalTickets = await lotteryContract.methods.getTotalTickets().call();
            document.getElementById('totalTickets').textContent = parseInt(totalTickets).toLocaleString();

            const totalPrizesWei = await lotteryContract.methods.getTotalPrizes().call();
            const totalPrizesMatic = web3.utils.fromWei(totalPrizesWei, 'ether');
            document.getElementById('totalPrizes').textContent = `${parseFloat(totalPrizesMatic).toFixed(0)} MATIC`;

            const contractBalanceWei = await lotteryContract.methods.getContractBalance().call();
            const contractBalanceMatic = web3.utils.fromWei(contractBalanceWei, 'ether');
            document.getElementById('contractBalance').textContent = `${parseFloat(contractBalanceMatic).toFixed(0)} MATIC`;

            // اطلاعات استخرها
            await this.loadPoolData();

        } catch (error) {
            console.error('Error loading lottery data:', error);
            // در صورت خطا، مقادیر پیش‌فرض نمایش داده نمی‌شوند
        }
    },

    async loadPoolData() {
        try {
            // استخر 1
            const pool1Info = await lotteryContract.methods.getPoolInfo(1).call();
            document.getElementById('pool1Tickets').textContent = `${pool1Info.soldTickets}/${pool1Info.totalTickets}`;
            const pool1PrizeMatic = web3.utils.fromWei(pool1Info.prizeAmount, 'ether');
            document.getElementById('pool1Prize').textContent = `${parseFloat(pool1PrizeMatic).toFixed(0)} MATIC`;
            const pool1Progress = (pool1Info.soldTickets / pool1Info.totalTickets) * 100;
            document.getElementById('pool1Progress').style.width = `${pool1Progress}%`;

            // استخر 2
            const pool2Info = await lotteryContract.methods.getPoolInfo(2).call();
            document.getElementById('pool2Tickets').textContent = `${pool2Info.soldTickets}/${pool2Info.totalTickets}`;
            const pool2PrizeMatic = web3.utils.fromWei(pool2Info.prizeAmount, 'ether');
            document.getElementById('pool2Prize').textContent = `${parseFloat(pool2PrizeMatic).toFixed(0)} MATIC`;
            const pool2Progress = (pool2Info.soldTickets / pool2Info.totalTickets) * 100;
            document.getElementById('pool2Progress').style.width = `${pool2Progress}%`;

            // استخر 3
            const pool3Info = await lotteryContract.methods.getPoolInfo(3).call();
            document.getElementById('pool3Tickets').textContent = `${pool3Info.soldTickets}/${pool3Info.totalTickets}`;
            const pool3PrizeMatic = web3.utils.fromWei(pool3Info.prizeAmount, 'ether');
            document.getElementById('pool3Prize').textContent = `${parseFloat(pool3PrizeMatic).toFixed(0)} MATIC`;
            const pool3Progress = (pool3Info.soldTickets / pool3Info.totalTickets) * 100;
            document.getElementById('pool3Progress').style.width = `${pool3Progress}%`;

        } catch (error) {
            console.error('Error loading pool data:', error);
        }
    },

    async loadPTokenData() {
        try {
            // موجودی P-Token کاربر
            const pTokenBalance = await pTokenContract.methods.balanceOf(userAccount).call();
            document.getElementById('userPTokenBalance').textContent = `${parseInt(pTokenBalance).toLocaleString()} P-Token`;
            document.getElementById('maxPTokenAmount').textContent = parseInt(pTokenBalance);

            // قیمت P-Token
            const pTokenPriceWei = await pTokenContract.methods.getPTokenPriceInWei().call();
            const pTokenPriceMatic = web3.utils.fromWei(pTokenPriceWei, 'ether');
            document.getElementById('ptokenPrice').textContent = `${parseFloat(pTokenPriceMatic).toFixed(6)} MATIC`;

            // ارزش کل
            const totalValue = parseInt(pTokenBalance) * parseFloat(pTokenPriceMatic);
            document.getElementById('totalPTokenValue').textContent = `${totalValue.toFixed(4)} MATIC`;

        } catch (error) {
            console.error('Error loading P-Token data:', error);
        }
    },

    async loadUserData() {
        try {
            // بلیط‌های کاربر
            const userTickets = await lotteryContract.methods.getUserTickets(userAccount).call();
            document.getElementById('userPool1Tickets').textContent = `${userTickets.pool1} بلیط`;
            document.getElementById('userPool2Tickets').textContent = `${userTickets.pool2} بلیط`;
            document.getElementById('userPool3Tickets').textContent = `${userTickets.pool3} بلیط`;

        } catch (error) {
            console.error('Error loading user data:', error);
        }
    },

    updateWinnersList() {
        // در نسخه واقعی، این اطلاعات از قرارداد خوانده می‌شود
        const winnersHTML = `
            <div class="winner-item">
                <div>
                    <div class="winner-address">اطلاعات از قرارداد...</div>
                    <div style="font-size: 0.8rem; color: var(--gray); margin-top: 0.25rem;">در حال بارگذاری</div>
                </div>
                <div class="winner-prize">0 MATIC</div>
            </div>
        `;
        document.getElementById('recentWinners').innerHTML = winnersHTML;
    },

    updateTotalPrice() {
        const ticketCount = document.getElementById('ticketCount').value;
        const ticketPriceElement = document.getElementById('pricePerTicket');
        const ticketPriceText = ticketPriceElement.textContent;
        const ticketPrice = parseFloat(ticketPriceText.split(' ')[0]);
        
        const totalPrice = ticketCount * ticketPrice;
        document.getElementById('totalPrice').textContent = `${totalPrice.toFixed(2)} MATIC`;
    },

    updateConversionSummary() {
        const pTokenAmount = document.getElementById('ptokenAmount').value;
        const pTokenPriceElement = document.getElementById('ptokenPrice');
        const pTokenPriceText = pTokenPriceElement.textContent;
        const pTokenPrice = parseFloat(pTokenPriceText.split(' ')[0]);
        
        const totalValue = pTokenAmount * pTokenPrice;
        document.getElementById('conversionPToken').textContent = pTokenAmount;
        document.getElementById('conversionPrice').textContent = `${pTokenPrice.toFixed(6)} MATIC`;
        document.getElementById('conversionTotal').textContent = `${totalValue.toFixed(4)} MATIC`;
    },

    async buyTickets() {
        if (!userAccount || !lotteryContract) {
            WalletManager.showNotification('لطفا اول ولت خود را متصل کنید', 'error');
            return;
        }

        const ticketCount = parseInt(document.getElementById('ticketCount').value);
        const totalPriceWei = web3.utils.toWei(document.getElementById('totalPrice').textContent.split(' ')[0], 'ether');

        if (ticketCount < 1 || ticketCount > 1000) {
            WalletManager.showNotification('تعداد بلیط باید بین ۱ تا ۱۰۰۰ باشد', 'error');
            return;
        }

        if (parseFloat(userMaticBalance) < parseFloat(document.getElementById('totalPrice').textContent.split(' ')[0])) {
            WalletManager.showNotification('موجودی MATIC کافی نیست', 'error');
            return;
        }

        try {
            const buyBtn = document.getElementById('buyTickets');
            buyBtn.innerHTML = '<div class="loading"></div> در حال پردازش...';
            buyBtn.disabled = true;

            // فراخوانی واقعی قرارداد
            const tx = await lotteryContract.methods.buyTickets(ticketCount).send({
                from: userAccount,
                value: totalPriceWei,
                gas: 300000
            });

            WalletManager.showNotification('بلیط با موفقیت خریداری شد', 'success');
            await this.refreshAllData();

        } catch (error) {
            console.error('Error buying tickets:', error);
            WalletManager.showNotification('خطا در خرید بلیط', 'error');
        } finally {
            const buyBtn = document.getElementById('buyTickets');
            if (buyBtn) {
                buyBtn.innerHTML = `<i class="fas fa-shopping-cart"></i> خرید بلیط`;
                buyBtn.disabled = false;
            }
        }
    },

    async sellPTokens() {
        if (!userAccount || !pTokenContract) {
            WalletManager.showNotification('لطفا اول ولت خود را متصل کنید', 'error');
            return;
        }

        const pTokenAmount = document.getElementById('ptokenAmount').value;

        if (pTokenAmount < 1) {
            WalletManager.showNotification('مقدار P-Token نامعتبر است', 'error');
            return;
        }

        try {
            const sellBtn = document.getElementById('sellPTokens');
            sellBtn.innerHTML = '<div class="loading"></div> در حال پردازش...';
            sellBtn.disabled = true;

            // فراخوانی واقعی قرارداد
            const tx = await pTokenContract.methods.sellPToken(pTokenAmount).send({
                from: userAccount,
                gas: 300000
            });

            WalletManager.showNotification('P-Token با موفقیت به MATIC تبدیل شد', 'success');
            await this.refreshAllData();

        } catch (error) {
            console.error('Error selling P-Tokens:', error);
            WalletManager.showNotification('خطا در تبدیل P-Token', 'error');
        } finally {
            const sellBtn = document.getElementById('sellPTokens');
            if (sellBtn) {
                sellBtn.innerHTML = `<i class="fas fa-exchange-alt"></i> فروش P-Token و دریافت MATIC`;
                sellBtn.disabled = false;
            }
        }
    },

    disableWalletActions() {
        ['buyTickets', 'sellPTokens'].forEach(id => {
            const element = document.getElementById(id);
            if (element) element.disabled = true;
        });
    },

    enableWalletActions() {
        ['buyTickets', 'sellPTokens'].forEach(id => {
            const element = document.getElementById(id);
            if (element) element.disabled = false;
        });
    },

    hidePreloader() {
        setTimeout(() => {
            const preloader = document.getElementById('preloader');
            if (preloader) {
                preloader.classList.add('fade-out');
                setTimeout(() => {
                    preloader.style.display = 'none';
                }, 500);
            }
        }, 1000);
    }
};

// =============================================
// توابع جهانی
// =============================================

function changeTicketCount(change) {
    const input = document.getElementById('ticketCount');
    let value = parseInt(input.value) + change;
    value = Math.max(1, Math.min(1000, value));
    input.value = value;
    AppManager.updateTotalPrice();
}

function changePTokenAmount(change) {
    const input = document.getElementById('ptokenAmount');
    const maxAmount = parseInt(document.getElementById('maxPTokenAmount').textContent) || 1500;
    let value = parseInt(input.value) + change;
    value = Math.max(1, Math.min(maxAmount, value));
    input.value = value;
    AppManager.updateConversionSummary();
}

// =============================================
// راه‌اندازی برنامه
// =============================================

window.addEventListener('load', () => {
    AppManager.init();
});