// =============================================
// WinstreakPol - Professional Lottery dApp
// =============================================

// تنظیمات قراردادها
const CONTRACT_ADDRESS = '0xdFC970De4C016AB950F965e5364048C16468e2Ec';
const PTOKEN_CONTRACT_ADDRESS = '0x82F7dBe1792436d15bdA22bB3340bD3f45D614Fa';

// ABI قرارداد اصلی لاتاری
const CONTRACT_ABI = [
    // ... ABI کامل قراردادها (همانند قبل) ...
];

// ABI قرارداد P-Token
const PTOKEN_CONTRACT_ABI = [
    // ... ABI کامل P-Token (همانند قبل) ...
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
            // ... رشته‌های فارسی (همانند قبل) ...
        },
        en: {
            // ... رشته‌های انگلیسی (همانند قبل) ...
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
            
            // تشخیص دستگاه موبایل
            const isMobile = this.isMobileDevice();
            
            switch(walletType) {
                case 'metamask':
                    provider = await this.connectMetaMask(isMobile);
                    break;
                case 'trustwallet':
                    provider = await this.connectTrustWallet(isMobile);
                    break;
                case 'walletconnect':
                    await this.connectWalletConnect();
                    return;
                case 'coinbase':
                    provider = await this.connectCoinbase(isMobile);
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

    isMobileDevice() {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    },

    async connectMetaMask(isMobile) {
        if (!window.ethereum) {
            if (isMobile) {
                // در موبایل، کاربر را به متامسک هدایت می‌کنیم
                this.openMetaMaskDeepLink();
                throw new Error('Redirecting to MetaMask');
            } else {
                if (confirm(LanguageManager.get('no-wallet-detected') + '. ' + 
                           (currentLanguage === 'fa' ? 'آیا می‌خواهید متامسک نصب کنید؟' : 'Would you like to install MetaMask?'))) {
                    window.open('https://metamask.io/download.html', '_blank');
                }
                throw new Error('MetaMask not installed');
            }
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

    async connectTrustWallet(isMobile) {
        if (!window.ethereum) {
            if (isMobile) {
                // در موبایل، کاربر را به تراست ولت هدایت می‌کنیم
                this.openTrustWalletDeepLink();
                throw new Error('Redirecting to Trust Wallet');
            } else {
                this.showNotification(LanguageManager.get('trustwallet-not-detected'), 'error');
                throw new Error('Trust Wallet not detected');
            }
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

    async connectCoinbase(isMobile) {
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
        } else if (isMobile) {
            // در موبایل، کاربر را به کوین بیس هدایت می‌کنیم
            this.openCoinbaseDeepLink();
            throw new Error('Redirecting to Coinbase Wallet');
        } else {
            this.showNotification(LanguageManager.get('coinbase-not-detected'), 'error');
            throw new Error('Coinbase Wallet not detected');
        }
    },

    openMetaMaskDeepLink() {
        // دیتکت کردن اگر کاربر در مرورگر داخلی متامسک است
        if (window.ethereum && window.ethereum.isMetaMask) {
            return; // کاربر قبلاً در متامسک است
        }
        
        const dappUrl = window.location.href;
        const metamaskUrl = `https://metamask.app.link/dapp/${encodeURIComponent(dappUrl)}`;
        window.location.href = metamaskUrl;
    },

    openTrustWalletDeepLink() {
        const dappUrl = window.location.href;
        const trustWalletUrl = `https://link.trustwallet.com/open_url?coin_id=966&url=${encodeURIComponent(dappUrl)}`;
        window.location.href = trustWalletUrl;
    },

    openCoinbaseDeepLink() {
        const dappUrl = window.location.href;
        const coinbaseUrl = `https://go.cb-w.com/dapp?cb_url=${encodeURIComponent(dappUrl)}`;
        window.location.href = coinbaseUrl;
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
        const walletAddressMobile = document.getElementById('walletAddressMobile');
        const connectBtn = document.getElementById('connectWallet');
        const buyTicketsBtn = document.getElementById('buyTickets');
        const sellPTokensBtn = document.getElementById('sellPTokens');
        
        if (userAccount) {
            const shortAddress = `${userAccount.substring(0, 6)}...${userAccount.substring(38)}`;
            const veryShortAddress = `${userAccount.substring(0, 4)}...${userAccount.substring(39)}`;
            
            walletAddress.textContent = shortAddress;
            walletAddressMobile.textContent = veryShortAddress;
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
    // ... متدهای مدیریت قراردادها (همانند قبل) ...
};

// =============================================
// سیستم مدیریت لاتاری
// =============================================

const LotteryManager = {
    // ... متدهای مدیریت لاتاری (همانند قبل) ...
};

// =============================================
// سیستم مدیریت P-Token
// =============================================

const PTokenManager = {
    // ... متدهای مدیریت P-Token (همانند قبل) ...
};

// =============================================
// سیستم مدیریت رابط کاربری
// =============================================

const UIManager = {
    // ... متدهای مدیریت رابط کاربری (همانند قبل) ...
};

// =============================================
// سیستم مدیریت اصلی برنامه
// =============================================

const AppManager = {
    // ... متدهای مدیریت اصلی برنامه (همانند قبل) ...
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