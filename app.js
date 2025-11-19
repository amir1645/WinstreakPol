// =============================================
// WinstreakPol - Professional Lottery dApp
// سیستم اتصال ولت کاملاً حرفه‌ای و واقعی
// =============================================

// تنظیمات قراردادها
const CONTRACT_ADDRESS = '0xdFC970De4C016AB950F965e5364048C16468e2Ec';
const PTOKEN_CONTRACT_ADDRESS = '0x82F7dBe1792436d15bdA22bB3340bD3f45D614Fa';

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
// متغیرهای جهانی
// =============================================

let web3;
let userAccount = null;
let userMaticBalance = '0';
let currentLanguage = 'fa';
let isInitialized = false;

// =============================================
// سیستم مدیریت کیف پول حرفه‌ای
// =============================================

const WalletManager = {
    async init() {
        await this.initWeb3();
        this.setupEventListeners();
        await this.checkPreviousConnection();
        this.loadLanguagePreference();
    },

    async initWeb3() {
        try {
            if (window.ethereum) {
                web3 = new Web3(window.ethereum);
                console.log('Web3 initialized with Ethereum provider');
                
                // بررسی شبکه
                await this.checkNetwork();
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
                this.showNotification(
                    'لطفا به شبکه Polygon Mainnet متصل شوید',
                    'warning'
                );
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
                case 'safepal':
                    provider = await this.connectSafePal();
                    break;
                case 'phantom':
                    provider = await this.connectPhantom();
                    break;
                case 'rabby':
                    provider = await this.connectRabby();
                    break;
                case 'tokenpocket':
                    provider = await this.connectTokenPocket();
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
        } else if (window.coinbaseWalletExtension) {
            try {
                const accounts = await window.coinbaseWalletExtension.request({ 
                    method: 'eth_requestAccounts' 
                });
                
                if (!accounts || accounts.length === 0) {
                    throw new Error('No accounts found');
                }
                
                localStorage.setItem('winstreakpol-wallet-connected', 'coinbase');
                return window.coinbaseWalletExtension;
            } catch (error) {
                throw error;
            }
        } else {
            this.showNotification('Coinbase Wallet یافت نشد', 'error');
            throw new Error('Coinbase Wallet not detected');
        }
    },

    async connectSafePal() {
        if (window.ethereum && window.ethereum.isSafePal) {
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
        } else if (window.safepal && window.safepal.provider) {
            try {
                const accounts = await window.safepal.provider.request({ 
                    method: 'eth_requestAccounts' 
                });
                
                if (!accounts || accounts.length === 0) {
                    throw new Error('No accounts found');
                }
                
                localStorage.setItem('winstreakpol-wallet-connected', 'safepal');
                return window.safepal.provider;
            } catch (error) {
                throw error;
            }
        } else {
            this.showNotification('SafePal یافت نشد', 'error');
            throw new Error('SafePal not detected');
        }
    },

    async connectPhantom() {
        if (window.ethereum && window.ethereum.isPhantom) {
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
        } else if (window.phantom && window.phantom.ethereum) {
            try {
                const accounts = await window.phantom.ethereum.request({ 
                    method: 'eth_requestAccounts' 
                });
                
                if (!accounts || accounts.length === 0) {
                    throw new Error('No accounts found');
                }
                
                localStorage.setItem('winstreakpol-wallet-connected', 'phantom');
                return window.phantom.ethereum;
            } catch (error) {
                throw error;
            }
        } else {
            this.showNotification('Phantom یافت نشد', 'error');
            throw new Error('Phantom not detected');
        }
    },

    async connectRabby() {
        if (window.ethereum && window.ethereum.isRabby) {
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
            this.showNotification('Rabby Wallet یافت نشد', 'error');
            throw new Error('Rabby Wallet not detected');
        }
    },

    async connectTokenPocket() {
        if (window.ethereum && window.ethereum.isTokenPocket) {
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
        } else if (window.tokenpocket && window.tokenpocket.ethereum) {
            try {
                const accounts = await window.tokenpocket.ethereum.request({ 
                    method: 'eth_requestAccounts' 
                });
                
                if (!accounts || accounts.length === 0) {
                    throw new Error('No accounts found');
                }
                
                localStorage.setItem('winstreakpol-wallet-connected', 'tokenpocket');
                return window.tokenpocket.ethereum;
            } catch (error) {
                throw error;
            }
        } else {
            this.showNotification('TokenPocket یافت نشد', 'error');
            throw new Error('TokenPocket not detected');
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
        
        setTimeout(() => {
            window.location.reload();
        }, 1000);
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
        if (!web3) return;

        try {
            // شبیه‌سازی داده‌های قرارداد
            const ticketPrice = web3.utils.toWei('11', 'ether');
            document.getElementById('ticketPrice').textContent = `${web3.utils.fromWei(ticketPrice, 'ether')} MATIC`;
            document.getElementById('pricePerTicket').textContent = `${web3.utils.fromWei(ticketPrice, 'ether')} MATIC`;
            
            document.getElementById('totalTickets').textContent = '1,250';
            document.getElementById('totalPrizes').textContent = '5,500 MATIC';
            document.getElementById('contractBalance').textContent = '12,000 MATIC';

            // داده‌های استخرها
            document.getElementById('pool1Tickets').textContent = '85/125';
            document.getElementById('pool1Prize').textContent = '935 MATIC';
            document.getElementById('pool1Progress').style.width = '68%';

            document.getElementById('pool2Tickets').textContent = '320/500';
            document.getElementById('pool2Prize').textContent = '3,520 MATIC';
            document.getElementById('pool2Progress').style.width = '64%';

            document.getElementById('pool3Tickets').textContent = '1,500/2,500';
            document.getElementById('pool3Prize').textContent = '16,500 MATIC';
            document.getElementById('pool3Progress').style.width = '60%';

            // داده‌های کاربر
            document.getElementById('userPool1Tickets').textContent = '5 بلیط';
            document.getElementById('userPool2Tickets').textContent = '12 بلیط';
            document.getElementById('userPool3Tickets').textContent = '25 بلیط';

            // داده‌های P-Token
            document.getElementById('userPTokenBalance').textContent = '1,500 P-Token';
            document.getElementById('ptokenPrice').textContent = '0.005 MATIC';
            document.getElementById('totalPTokenValue').textContent = '7.5 MATIC';
            document.getElementById('maxPTokenAmount').textContent = '1500';

            // برندگان
            this.updateWinnersList();

        } catch (error) {
            console.error('Error loading contract data:', error);
        }
    },

    updateWinnersList() {
        const winners = [
            { address: '0x742E4C2F4C7F4C2F4C7F4C2F4C7F4C2F4C7F4C2F', prize: '125 MATIC', date: '2 روز پیش' },
            { address: '0x842E4C2F4C7F4C2F4C7F4C2F4C7F4C2F4C7F4C2F', prize: '85 MATIC', date: '4 روز پیش' },
            { address: '0x942E4C2F4C7F4C2F4C7F4C2F4C7F4C2F4C7F4C2F', prize: '210 MATIC', date: '6 روز پیش' },
            { address: '0xa42E4C2F4C7F4C2F4C7F4C2F4C7F4C2F4C7F4C2F', prize: '95 MATIC', date: '1 هفته پیش' },
            { address: '0xb42E4C2F4C7F4C2F4C7F4C2F4C7F4C2F4C7F4C2F', prize: '180 MATIC', date: '2 هفته پیش' }
        ];

        const winnersHTML = winners.map(winner => `
            <div class="winner-item">
                <div>
                    <div class="winner-address">${winner.address.substring(0, 6)}...${winner.address.substring(38)}</div>
                    <div style="font-size: 0.8rem; color: var(--gray); margin-top: 0.25rem;">${winner.date}</div>
                </div>
                <div class="winner-prize">${winner.prize}</div>
            </div>
        `).join('');

        document.getElementById('recentWinners').innerHTML = winnersHTML;
    },

    updateTotalPrice() {
        const ticketCount = document.getElementById('ticketCount').value;
        const totalPrice = ticketCount * 11;
        document.getElementById('totalPrice').textContent = `${totalPrice} MATIC`;
    },

    updateConversionSummary() {
        const pTokenAmount = document.getElementById('ptokenAmount').value;
        const totalValue = pTokenAmount * 0.005;
        document.getElementById('conversionPToken').textContent = pTokenAmount;
        document.getElementById('conversionPrice').textContent = '0.005 MATIC';
        document.getElementById('conversionTotal').textContent = `${totalValue.toFixed(4)} MATIC`;
    },

    async buyTickets() {
        if (!userAccount) {
            WalletManager.showNotification('لطفا اول ولت خود را متصل کنید', 'error');
            return;
        }

        const ticketCount = parseInt(document.getElementById('ticketCount').value);
        const totalPrice = ticketCount * 11;

        if (ticketCount < 1 || ticketCount > 1000) {
            WalletManager.showNotification('تعداد بلیط باید بین ۱ تا ۱۰۰۰ باشد', 'error');
            return;
        }

        if (parseFloat(userMaticBalance) < totalPrice) {
            WalletManager.showNotification('موجودی MATIC کافی نیست', 'error');
            return;
        }

        try {
            const buyBtn = document.getElementById('buyTickets');
            const originalText = buyBtn.innerHTML;
            buyBtn.innerHTML = '<div class="loading"></div> در حال پردازش...';
            buyBtn.disabled = true;

            // شبیه‌سازی تراکنش
            await new Promise(resolve => setTimeout(resolve, 2000));

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
        if (!userAccount) {
            WalletManager.showNotification('لطفا اول ولت خود را متصل کنید', 'error');
            return;
        }

        const pTokenAmount = parseInt(document.getElementById('ptokenAmount').value);

        if (pTokenAmount < 1 || pTokenAmount > 1500) {
            WalletManager.showNotification('مقدار P-Token نامعتبر است', 'error');
            return;
        }

        try {
            const sellBtn = document.getElementById('sellPTokens');
            const originalText = sellBtn.innerHTML;
            sellBtn.innerHTML = '<div class="loading"></div> در حال پردازش...';
            sellBtn.disabled = true;

            // شبیه‌سازی تراکنش
            await new Promise(resolve => setTimeout(resolve, 2000));

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
    const maxAmount = 1500;
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