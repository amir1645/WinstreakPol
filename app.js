// تنظیمات قرارداد
const CONTRACT_ADDRESS = '0xdFC970De4C016AB950F965e5364048C16468e2Ec';
const CONTRACT_ABI = [
    // ABI کامل قرارداد اصلی
    {
        "inputs": [],
        "name": "buyTicket",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getTicketPrice",
        "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{"internalType": "address", "name": "", "type": "address"}],
        "name": "userTickets",
        "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "totalTickets",
        "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "contractBalance",
        "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
        "stateMutability": "view",
        "type": "function"
    }
];

// P-Token Contract Configuration
const PTOKEN_CONTRACT_ADDRESS = '0x82F7dBe1792436d15bdA22bB3340bD3f45D614Fa';
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
        "inputs": [
            {"indexed": false, "internalType": "uint256", "name": "maticAmount", "type": "uint256"}
        ],
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
        "inputs": [
            {"internalType": "address", "name": "account", "type": "address"}
        ],
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
        "inputs": [
            {"internalType": "uint256", "name": "minPTokenAmount", "type": "uint256"}
        ],
        "name": "safeBuyPToken",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [
            {"internalType": "uint256", "name": "pTokenAmount", "type": "uint256"}
        ],
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
        "inputs": [
            {"internalType": "address", "name": "newOwner", "type": "address"}
        ],
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

// متغیرهای جهانی
let web3;
let contract;
let pTokenContract;
let userAccount;
let userMaticBalance;
let currentLanguage = 'en';

// ترجمه‌ها
const translations = {
    en: {
        // پیش‌لودر
        loading: "Loading...",
        
        // برند
        brandTitle: "WinstreakPol",
        brandSlogan: "Your Gateway to Fortune",
        
        // شبکه
        network: "Polygon",
        
        // دکمه‌ها
        connectWallet: "Connect Wallet",
        connected: "Connected",
        buyTickets: "Buy Tickets",
        spinWheel: "Spin Wheel",
        spinning: "Spinning...",
        
        // تب‌ها
        dashboard: "Dashboard",
        lottery: "Buy Tickets",
        winners: "Winners",
        profile: "My Profile",
        stats: "System Stats",
        
        // عناوین
        dashboardTitle: "Lottery Dashboard",
        dashboardSubtitle: "Live status of lottery pools",
        lotteryTitle: "Buy Lottery Tickets",
        lotterySubtitle: "Try your chance to win",
        winnersTitle: "Winners Wheel",
        winnersSubtitle: "Lucky lottery winners",
        profileTitle: "My Profile",
        profileSubtitle: "Your personal information and statistics",
        statsTitle: "System Statistics",
        statsSubtitle: "Comprehensive lottery information",
        
        // استخرها
        poolsTitle: "Lottery Pools",
        pool1: "Pool 1",
        pool2: "Pool 2",
        pool3: "Pool 3",
        silver: "Silver",
        gold: "Gold",
        diamond: "Diamond",
        
        // کارت‌های اطلاعاتی
        ticketInfo: "Ticket Information",
        winningChance: "Winning Chance",
        recentActivity: "Recent Activity",
        systemInfo: "System Information",
        
        // فرم‌ها
        ticketCount: "Ticket Count",
        maxTickets: "Maximum 1000 tickets per transaction",
        ticketPrice: "Ticket Price:",
        totalCost: "Total Cost:",
        
        // آمار
        ticketPriceStat: "Ticket Price",
        ticketsSold: "Tickets Sold",
        prizesDistributed: "Prizes Distributed",
        contractBalance: "Contract Balance",
        totalTickets: "Total Tickets",
        roundsParticipated: "Rounds Participated",
        wins: "Wins",
        totalPrize: "Total Prize",
        
        // سیستم
        contractAddress: "Contract Address:",
        gasFee: "Gas Fee:",
        optimized: "Optimized",
        chartText: "Activity Chart",
        
        // نوتیفیکیشن‌ها
        walletConnected: "Wallet connected successfully",
        walletError: "Error connecting wallet",
        connectFirst: "Please connect your wallet first",
        insufficientBalance: "Insufficient MATIC balance",
        ticketsPurchased: "tickets purchased successfully!",
        purchaseError: "Error purchasing tickets",
        accountChanged: "Account changed",
        walletDisconnected: "Wallet disconnected",
        switchNetwork: "Please connect to Polygon network",
        demoWinner: "Demo winner selected!",
        
        // وضعیت‌ها
        notConnected: "Wallet not connected",
        noWinners: "No winners yet",
        
        // P-Token
        pTokenConverter: "P-Token Converter",
        currentPrice: "Current P-Token Price:",
        yourBalance: "Your P-Token Balance:",
        amountToSell: "P-Token Amount to Sell",
        youWillReceive: "You will receive:",
        sellPTokens: "Sell P-Tokens",
        refreshBalance: "Refresh Balance",
        selling: "Selling P-Tokens...",
        soldSuccess: "P-Tokens sold successfully!",
        sellError: "Error selling P-Tokens"
    },
    fa: {
        // پیش‌لودر
        loading: "در حال بارگذاری...",
        
        // برند
        brandTitle: "WinstreakPol",
        brandSlogan: "Your Gateway to Fortune",
        
        // شبکه
        network: "Polygon",
        
        // دکمه‌ها
        connectWallet: "اتصال ولت",
        connected: "متصل",
        buyTickets: "خرید بلیط",
        spinWheel: "چرخاندن گردونه",
        spinning: "در حال چرخش...",
        
        // تب‌ها
        dashboard: "داشبورد",
        lottery: "خرید بلیط",
        winners: "برندگان",
        profile: "پروفایل من",
        stats: "آمار سیستم",
        
        // عناوین
        dashboardTitle: "داشبورد لاتری",
        dashboardSubtitle: "وضعیت زنده استخرهای لاتری",
        lotteryTitle: "خرید بلیط لاتری",
        lotterySubtitle: "شانس خود را برای برنده شدن امتحان کنید",
        winnersTitle: "گردونه برندگان",
        winnersSubtitle: "برندگان خوش‌شانس لاتری",
        profileTitle: "پروفایل من",
        profileSubtitle: "اطلاعات و آمار شخصی شما",
        statsTitle: "آمار سیستم",
        statsSubtitle: "اطلاعات جامع لاتری",
        
        // استخرها
        poolsTitle: "استخرهای لاتری",
        pool1: "استخر ۱",
        pool2: "استخر ۲",
        pool3: "استخر ۳",
        silver: "نقره‌ای",
        gold: "طلایی",
        diamond: "الماسی",
        
        // کارت‌های اطلاعاتی
        ticketInfo: "اطلاعات بلیط‌ها",
        winningChance: "شانس برنده شدن",
        recentActivity: "فعالیت اخیر",
        systemInfo: "اطلاعات سیستم",
        
        // فرم‌ها
        ticketCount: "تعداد بلیط",
        maxTickets: "حداکثر ۱۰۰۰ بلیط در هر تراکنش",
        ticketPrice: "قیمت هر بلیط:",
        totalCost: "هزینه کل:",
        
        // آمار
        ticketPriceStat: "قیمت بلیط",
        ticketsSold: "بلیط‌های فروخته شده",
        prizesDistributed: "جوایز توزیع شده",
        contractBalance: "موجودی قرارداد",
        totalTickets: "کل بلیط‌ها",
        roundsParticipated: "راندهای شرکت کرده",
        wins: "بردها",
        totalPrize: "جایزه کل",
        
        // سیستم
        contractAddress: "آدرس قرارداد:",
        gasFee: "هزینه گس:",
        optimized: "بهینه‌شده",
        chartText: "نمودار فعالیت",
        
        // نوتیفیکیشن‌ها
        walletConnected: "ولت با موفقیت متصل شد",
        walletError: "خطا در اتصال ولت",
        connectFirst: "لطفا اول ولت خود را متصل کنید",
        insufficientBalance: "موجودی MATIC کافی نیست",
        ticketsPurchased: "بلیط با موفقیت خریداری شد!",
        purchaseError: "خطا در خرید بلیط",
        accountChanged: "حساب کاربری تغییر کرد",
        walletDisconnected: "ولت قطع شد",
        switchNetwork: "لطفا به شبکه Polygon متصل شوید",
        demoWinner: "برنده نمایشی انتخاب شد!",
        
        // وضعیت‌ها
        notConnected: "ولت متصل نشده",
        noWinners: "هنوز برنده‌ای وجود ندارد",
        
        // P-Token
        pTokenConverter: "مبدل P-Token",
        currentPrice: "قیمت فعلی P-Token:",
        yourBalance: "موجودی P-Token شما:",
        amountToSell: "تعداد P-Token برای فروش",
        youWillReceive: "دریافت خواهید کرد:",
        sellPTokens: "فروش P-Token ها",
        refreshBalance: "بروزرسانی موجودی",
        selling: "در حال فروش P-Token ها...",
        soldSuccess: "P-Token ها با موفقیت فروخته شد!",
        sellError: "خطا در فروش P-Token ها"
    }
};

// مقداردهی اولیه
window.addEventListener('load', async () => {
    await initApp();
    setupLanguageSelector();
});

// راه‌اندازی برنامه
async function initApp() {
    await initWeb3();
    setupWalletConnection();
    setupEventListeners();
    setupTabNavigation();
    hidePreloader();
    
    // Check for existing connection
    handleWalletReturn();
}

// تنظیم انتخابگر زبان
function setupLanguageSelector() {
    const languageSelect = document.getElementById('languageSelect');
    if (!languageSelect) return;
    
    languageSelect.value = currentLanguage;
    
    languageSelect.addEventListener('change', (e) => {
        currentLanguage = e.target.value;
        updateLanguage();
        
        // تغییر جهت صفحه
        document.documentElement.dir = currentLanguage === 'fa' ? 'rtl' : 'ltr';
        document.documentElement.lang = currentLanguage;
    });
}

// بروزرسانی زبان
function updateLanguage() {
    const t = translations[currentLanguage];
    
    // بروزرسانی متون اصلی
    const loadingText = document.querySelector('.loading-text');
    if (loadingText) loadingText.textContent = t.loading;
    
    const brandTitle = document.querySelector('.brand-title');
    if (brandTitle) brandTitle.textContent = t.brandTitle;
    
    const brandSlogan = document.querySelector('.brand-slogan');
    if (brandSlogan) brandSlogan.textContent = t.brandSlogan;
    
    const networkText = document.querySelector('.network-text');
    if (networkText) networkText.textContent = t.network;
    
    const connectBtn = document.getElementById('connectWallet');
    if (connectBtn) {
        const connectText = connectBtn.querySelector('.connect-text');
        if (connectText) {
            connectText.textContent = userAccount ? t.connected : t.connectWallet;
        }
    }
    
    // بروزرسانی سایر عناصر
    updateAllTextElements(t);
}

// بروزرسانی تمام عناصر متنی
function updateAllTextElements(t) {
    // تب‌ها
    document.querySelectorAll('.tab-text').forEach((tab, index) => {
        const keys = ['dashboard', 'lottery', 'winners', 'profile', 'stats'];
        if (t[keys[index]]) {
            tab.textContent = t[keys[index]];
        }
    });
    
    // عناوین
    document.querySelectorAll('.tab-title').forEach((title, index) => {
        const keys = ['dashboardTitle', 'lotteryTitle', 'winnersTitle', 'profileTitle', 'statsTitle'];
        if (t[keys[index]]) {
            title.textContent = t[keys[index]];
        }
    });
    
    document.querySelectorAll('.tab-subtitle').forEach((subtitle, index) => {
        const keys = ['dashboardSubtitle', 'lotterySubtitle', 'winnersSubtitle', 'profileSubtitle', 'statsSubtitle'];
        if (t[keys[index]]) {
            subtitle.textContent = t[keys[index]];
        }
    });
    
    // استخرها
    const sectionTitle = document.querySelector('.section-title-text');
    if (sectionTitle) {
        sectionTitle.textContent = t.poolsTitle;
    }
    
    document.querySelectorAll('.pool-name').forEach((name, index) => {
        const keys = ['pool1', 'pool2', 'pool3'];
        if (t[keys[index]]) {
            name.textContent = t[keys[index]];
        }
    });
    
    document.querySelectorAll('.pool-badge-text').forEach((badge, index) => {
        const keys = ['silver', 'gold', 'diamond'];
        if (t[keys[index]]) {
            badge.textContent = t[keys[index]];
        }
    });
    
    // آمار
    document.querySelectorAll('.stat-name').forEach((stat, index) => {
        const keys = ['ticketPriceStat', 'ticketsSold', 'prizesDistributed', 'contractBalance'];
        if (t[keys[index]]) {
            stat.textContent = t[keys[index]];
        }
    });
    
    // پروفایل
    document.querySelectorAll('.stat-label').forEach((label, index) => {
        const keys = ['totalTickets', 'roundsParticipated', 'wins', 'totalPrize'];
        if (t[keys[index]]) {
            label.textContent = t[keys[index]];
        }
    });
    
    if (!userAccount) {
        const profileAddress = document.getElementById('profileAddress');
        if (profileAddress) {
            profileAddress.textContent = t.notConnected;
        }
    }
}

// مخفی کردن preloader
function hidePreloader() {
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

// مقداردهی Web3 - بهبود یافته
async function initWeb3() {
    if (window.ethereum) {
        web3 = new Web3(window.ethereum);
        console.log('Web3 initialized successfully');
        
        // Initialize contracts
        initContracts();
        
        // Check if already connected
        try {
            const accounts = await web3.eth.getAccounts();
            if (accounts.length > 0) {
                userAccount = accounts[0];
                await initializeAfterConnection();
            }
        } catch (error) {
            console.error('Error checking existing connection:', error);
        }
    } else {
        console.error('No Ethereum provider found');
        showNotification('Please install MetaMask or another Web3 wallet', 'error');
    }
}

// Initialize contracts
function initContracts() {
    if (web3) {
        try {
            contract = new web3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS);
            pTokenContract = new web3.eth.Contract(PTOKEN_CONTRACT_ABI, PTOKEN_CONTRACT_ADDRESS);
            console.log('Contracts initialized successfully');
        } catch (error) {
            console.error('Error initializing contracts:', error);
        }
    }
}

// Enhanced Wallet Connection System با Deep Link برای موبایل
function setupWalletConnection() {
    const connectBtn = document.getElementById('connectWallet');
    const walletModal = document.getElementById('walletModal');
    const closeModal = document.querySelector('.close-modal');
    const walletOptions = document.querySelectorAll('.wallet-option');

    if (!connectBtn || !walletModal) return;

    // Open modal when connect button is clicked
    connectBtn.addEventListener('click', () => {
        walletModal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    });

    // Close modal
    if (closeModal) {
        closeModal.addEventListener('click', () => {
            walletModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        });
    }

    // Close modal when clicking outside
    walletModal.addEventListener('click', (e) => {
        if (e.target === walletModal) {
            walletModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });

    // Handle wallet selection با Deep Link برای موبایل
    walletOptions.forEach(option => {
        option.addEventListener('click', async () => {
            const walletType = option.getAttribute('data-wallet');
            const deepLink = option.getAttribute('data-deeplink');
            
            await connectToWallet(walletType, deepLink);
            walletModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        });
    });
}

// Enhanced wallet connection با Deep Link
async function connectToWallet(walletType, deepLink) {
    const t = translations[currentLanguage];
    
    try {
        showNotification(`Connecting to ${walletType}...`, 'info');
        
        // Check if we're on mobile
        const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
        
        if (isMobile && deepLink) {
            // استفاده از Deep Link برای موبایل
            await connectWithDeepLink(walletType, deepLink);
        } else {
            // اتصال معمولی برای دسکتاپ
            await connectWithProvider(walletType);
        }
        
    } catch (error) {
        console.error(`Error connecting to ${walletType}:`, error);
        showNotification(`Failed to connect to ${walletType}`, 'error');
    }
}

// اتصال با Deep Link برای موبایل
async function connectWithDeepLink(walletType, deepLink) {
    const currentUrl = encodeURIComponent(window.location.href);
    let finalDeepLink = '';
    
    switch (walletType) {
        case 'metamask':
            finalDeepLink = `https://metamask.app.link/dapp/${window.location.hostname}${window.location.pathname}`;
            break;
        case 'trustwallet':
            finalDeepLink = `https://link.trustwallet.com/open_url?coin_id=966&url=${currentUrl}`;
            break;
        case 'coinbase':
            finalDeepLink = `https://go.cb-w.com/dapp?url=${currentUrl}`;
            break;
        case 'safepal':
            finalDeepLink = `https://link.safepal.io/dapp?url=${currentUrl}`;
            break;
        case 'tokenpocket':
            finalDeepLink = `https://tp-lab.github.io/dapp-docs/dapp-dispatch.html?url=${currentUrl}`;
            break;
        default:
            finalDeepLink = deepLink + currentUrl;
    }
    
    // باز کردن Deep Link
    window.location.href = finalDeepLink;
    showNotification(`Opening ${walletType} app...`, 'info');
    
    // Fallback: اگر بعد از 3 ثانیه اتصال برقرار نشد، پیام نشان دهد
    setTimeout(() => {
        if (!userAccount) {
            showNotification(`Please make sure ${walletType} is installed and try again`, 'info');
        }
    }, 3000);
}

// اتصال با Provider برای دسکتاپ
async function connectWithProvider(walletType) {
    if (window.ethereum) {
        try {
            // Request account access
            const accounts = await window.ethereum.request({ 
                method: 'eth_requestAccounts' 
            });
            
            userAccount = accounts[0];
            
            // Switch to Polygon network
            await switchToPolygon();
            
            // Re-initialize Web3 with connected provider
            web3 = new Web3(window.ethereum);
            initContracts();
            
            await initializeAfterConnection();
            showNotification(`Connected with ${walletType}!`, 'success');
            
        } catch (error) {
            if (error.code === 4001) {
                showNotification('Connection rejected by user', 'error');
            } else {
                throw error;
            }
        }
    } else {
        showNotification(`${walletType} not detected. Please install it first.`, 'error');
    }
}

// تغییر به شبکه پالیگان
async function switchToPolygon() {
    try {
        await window.ethereum.request({
            method: 'wallet_switchEthereumChain',
            params: [{ chainId: '0x89' }], // Polygon Mainnet
        });
        console.log('Switched to Polygon network');
    } catch (switchError) {
        if (switchError.code === 4902) {
            try {
                await window.ethereum.request({
                    method: 'wallet_addEthereumChain',
                    params: [{
                        chainId: '0x89',
                        chainName: 'Polygon Mainnet',
                        rpcUrls: ['https://polygon-rpc.com/'],
                        nativeCurrency: {
                            name: 'MATIC',
                            symbol: 'MATIC',
                            decimals: 18
                        },
                        blockExplorerUrls: ['https://polygonscan.com/']
                    }],
                });
                console.log('Polygon network added');
            } catch (addError) {
                console.error('Error adding Polygon network:', addError);
                showNotification('Error adding Polygon network', 'error');
            }
        } else {
            console.error('Error switching to Polygon:', switchError);
        }
    }
}

// Handle returning from wallet app
function handleWalletReturn() {
    if (window.ethereum && window.ethereum.selectedAddress) {
        userAccount = window.ethereum.selectedAddress;
        initializeAfterConnection();
    }
}

// Initialize after successful connection
async function initializeAfterConnection() {
    if (!userAccount) return;
    
    try {
        await updateUserBalance();
        updateWalletInfo();
        await updateAllData();
        await updatePTokenInfo();
        
        // Update connect button
        const connectBtn = document.getElementById('connectWallet');
        const t = translations[currentLanguage];
        if (connectBtn) {
            connectBtn.innerHTML = `<i class="fas fa-check"></i> ${t.connected}`;
            connectBtn.disabled = true;
        }
        
        console.log('Wallet connected successfully:', userAccount);
        
    } catch (error) {
        console.error('Error in initializeAfterConnection:', error);
        showNotification('Error initializing connection', 'error');
    }
}

// بروزرسانی موجودی کاربر
async function updateUserBalance() {
    if (!userAccount || !web3) return;
    
    try {
        const balance = await web3.eth.getBalance(userAccount);
        userMaticBalance = web3.utils.fromWei(balance, 'ether');
        
        const balanceElement = document.getElementById('maticBalance');
        if (balanceElement) {
            balanceElement.textContent = `${parseFloat(userMaticBalance).toFixed(2)} MATIC`;
        }
    } catch (error) {
        console.error('Error updating user balance:', error);
    }
}

// بروزرسانی اطلاعات ولت
function updateWalletInfo() {
    const walletInfo = document.getElementById('walletInfo');
    const walletAddress = document.getElementById('walletAddress');
    const profileAddress = document.getElementById('profileAddress');
    
    if (userAccount) {
        const shortAddress = `${userAccount.substring(0, 6)}...${userAccount.substring(38)}`;
        
        if (walletAddress) {
            walletAddress.textContent = shortAddress;
        }
        
        if (profileAddress) {
            profileAddress.textContent = shortAddress;
        }
        
        if (walletInfo) {
            walletInfo.style.display = 'flex';
        }
    }
}

// P-Token Functions - بازگشت به حالت قبلی
async function updatePTokenInfo() {
    if (!pTokenContract || !userAccount) return;
    
    try {
        // Get P-Token price
        const priceInWei = await pTokenContract.methods.getPTokenPriceInWei().call();
        const priceInMatic = web3.utils.fromWei(priceInWei, 'ether');
        
        const priceElement = document.getElementById('pTokenPrice');
        if (priceElement) {
            priceElement.textContent = `${parseFloat(priceInMatic).toFixed(6)} MATIC`;
        }
        
        // Get user's P-Token balance
        const balance = await pTokenContract.methods.balanceOf(userAccount).call();
        const balanceFormatted = web3.utils.fromWei(balance, 'ether');
        
        const balanceElement = document.getElementById('pTokenBalance');
        if (balanceElement) {
            balanceElement.textContent = `${parseFloat(balanceFormatted).toFixed(2)} P-Token`;
        }
        
        // Update sell button state
        const sellBtn = document.getElementById('sellPTokens');
        if (sellBtn) {
            sellBtn.disabled = parseFloat(balanceFormatted) <= 0;
        }
        
        // Update estimated MATIC
        updateEstimatedMatic();
        
    } catch (error) {
        console.error('Error updating P-Token info:', error);
    }
}

// Update estimated MATIC when P-Token amount changes
function updateEstimatedMatic() {
    const pTokenAmountInput = document.getElementById('pTokenAmount');
    const pTokenPriceElement = document.getElementById('pTokenPrice');
    
    if (!pTokenAmountInput || !pTokenPriceElement) return;
    
    const pTokenAmount = parseFloat(pTokenAmountInput.value) || 0;
    const priceText = pTokenPriceElement.textContent;
    const price = parseFloat(priceText.split(' ')[0]) || 0;
    
    const estimatedMatic = (pTokenAmount * price).toFixed(6);
    const estimatedElement = document.getElementById('estimatedMatic');
    
    if (estimatedElement) {
        estimatedElement.textContent = estimatedMatic;
    }
}

// Change P-Token amount
function changePTokenAmount(change) {
    const input = document.getElementById('pTokenAmount');
    if (!input) return;
    
    let value = parseInt(input.value) + change;
    value = Math.max(1, value);
    input.value = value;
    updateEstimatedMatic();
}

// Sell P-Tokens - ساده‌سازی شده
async function sellPTokens() {
    if (!pTokenContract || !userAccount || !web3) {
        showNotification('Please connect your wallet first', 'error');
        return;
    }
    
    const pTokenAmountInput = document.getElementById('pTokenAmount');
    if (!pTokenAmountInput) return;
    
    const pTokenAmount = pTokenAmountInput.value;
    if (!pTokenAmount || pTokenAmount <= 0) {
        showNotification('Please enter a valid amount', 'error');
        return;
    }
    
    const pTokenAmountWei = web3.utils.toWei(pTokenAmount.toString(), 'ether');
    const t = translations[currentLanguage];
    
    try {
        const sellBtn = document.getElementById('sellPTokens');
        if (!sellBtn) return;
        
        // ذخیره متن اصلی
        const originalText = sellBtn.innerHTML;
        
        // نمایش وضعیت در حال پردازش
        sellBtn.innerHTML = '<div class="loading"></div> ' + t.selling;
        sellBtn.disabled = true;
        
        console.log('Selling P-Tokens:', {
            amount: pTokenAmount,
            amountWei: pTokenAmountWei,
            user: userAccount
        });
        
        // اجرای تراکنش فروش
        const receipt = await pTokenContract.methods.sellPToken(pTokenAmountWei).send({
            from: userAccount,
            gas: 300000,
            gasPrice: await web3.eth.getGasPrice()
        });
        
        console.log('Transaction receipt:', receipt);
        
        showNotification(t.soldSuccess, 'success');
        
        // بروزرسانی موجودی‌ها
        await updatePTokenInfo();
        await updateUserBalance();
        
    } catch (error) {
        console.error('Error selling P-Tokens:', error);
        
        let errorMessage = t.sellError;
        if (error.message) {
            if (error.message.includes('insufficient')) {
                errorMessage = 'Insufficient P-Token balance';
            } else if (error.message.includes('rejected')) {
                errorMessage = 'Transaction rejected by user';
            } else if (error.message.includes('gas')) {
                errorMessage = 'Gas estimation failed';
            }
        }
        
        showNotification(errorMessage, 'error');
    } finally {
        const sellBtn = document.getElementById('sellPTokens');
        if (sellBtn) {
            sellBtn.innerHTML = '<i class="fas fa-money-bill-wave"></i><span class="sell-text">Sell P-Tokens</span>';
            sellBtn.disabled = false;
        }
    }
}

// Setup P-Token event listeners
function setupPTokenEvents() {
    // P-Token amount input
    const pTokenInput = document.getElementById('pTokenAmount');
    if (pTokenInput) {
        pTokenInput.addEventListener('input', updateEstimatedMatic);
    }
    
    // Sell button
    const sellBtn = document.getElementById('sellPTokens');
    if (sellBtn) {
        sellBtn.addEventListener('click', sellPTokens);
    }
    
    // Refresh button
    const refreshBtn = document.getElementById('refreshBalance');
    if (refreshBtn) {
        refreshBtn.addEventListener('click', async () => {
            await updatePTokenInfo();
            showNotification('Balance refreshed', 'success');
        });
    }
}

// تنظیم event listeners
function setupEventListeners() {
    // خرید بلیط
    const buyTicketsBtn = document.getElementById('buyTickets');
    if (buyTicketsBtn) {
        buyTicketsBtn.addEventListener('click', buyTickets);
    }
    
    // چرخاندن گردونه
    const spinWheelBtn = document.getElementById('spinWheel');
    if (spinWheelBtn) {
        spinWheelBtn.addEventListener('click', spinWheel);
    }
    
    // بروزرسانی قیمت
    const ticketCountInput = document.getElementById('ticketCount');
    if (ticketCountInput) {
        ticketCountInput.addEventListener('input', updateTotalPrice);
    }
    
    // P-Token events
    setupPTokenEvents();
}

// تغییر تعداد بلیط
function changeTicketCount(change) {
    const input = document.getElementById('ticketCount');
    if (!input) return;
    
    let value = parseInt(input.value) + change;
    value = Math.max(1, Math.min(1000, value));
    input.value = value;
    updateTotalPrice();
}

// بروزرسانی قیمت کل
function updateTotalPrice() {
    const ticketCountInput = document.getElementById('ticketCount');
    const totalPriceElement = document.getElementById('totalPrice');
    
    if (!ticketCountInput || !totalPriceElement) return;
    
    const ticketCount = parseInt(ticketCountInput.value) || 0;
    const totalPrice = ticketCount * 11;
    totalPriceElement.textContent = `${totalPrice} MATIC`;
}

// خرید بلیط
async function buyTickets() {
    if (!userAccount || !web3) {
        const t = translations[currentLanguage];
        showNotification(t.connectFirst, 'error');
        return;
    }
    
    const ticketCountInput = document.getElementById('ticketCount');
    if (!ticketCountInput) return;
    
    const ticketCount = ticketCountInput.value;
    const totalPrice = web3.utils.toWei((ticketCount * 11).toString(), 'ether');
    const t = translations[currentLanguage];
    
    if (parseFloat(userMaticBalance) < (ticketCount * 11)) {
        showNotification(t.insufficientBalance, 'error');
        return;
    }
    
    try {
        const buyBtn = document.getElementById('buyTickets');
        if (!buyBtn) return;
        
        const originalText = buyBtn.innerHTML;
        buyBtn.innerHTML = '<div class="loading"></div> Processing...';
        buyBtn.disabled = true;
        
        // شبیه‌سازی تراکنش
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        showNotification(`✅ ${ticketCount} ` + t.ticketsPurchased, 'success');
        
        // بروزرسانی داده‌ها
        await updateAllData();
        
    } catch (error) {
        console.error('Error buying tickets:', error);
        showNotification(t.purchaseError, 'error');
    } finally {
        const buyBtn = document.getElementById('buyTickets');
        if (buyBtn) {
            buyBtn.innerHTML = `<i class="fas fa-shopping-cart"></i><span class="purchase-text">Buy Tickets</span>`;
            buyBtn.disabled = false;
        }
    }
}

// چرخاندن گردونه
function spinWheel() {
    const wheel = document.getElementById('wheel');
    const spinBtn = document.getElementById('spinWheel');
    const t = translations[currentLanguage];
    
    if (!wheel || wheel.classList.contains('spinning')) return;
    
    // غیرفعال کردن دکمه در حین چرخش
    if (spinBtn) {
        spinBtn.disabled = true;
        spinBtn.innerHTML = `<i class="fas fa-sync-alt fa-spin"></i> ${t.spinning}`;
    }
    
    // افزودن کلاس چرخش
    wheel.classList.add('spinning');
    
    // شبیه‌سازی چرخش
    setTimeout(() => {
        wheel.classList.remove('spinning');
        if (spinBtn) {
            spinBtn.disabled = false;
            spinBtn.innerHTML = `<i class="fas fa-play"></i><span class="spin-text">Spin Wheel</span>`;
        }
        
        // نمایش برنده تصادفی
        showRandomWinner();
    }, 4000);
}

// نمایش برنده تصادفی
function showRandomWinner() {
    const winners = document.querySelectorAll('.winner-item');
    const t = translations[currentLanguage];
    
    if (winners.length > 0) {
        const randomIndex = Math.floor(Math.random() * winners.length);
        const randomWinner = winners[randomIndex];
        
        // هایلایت کردن برنده
        randomWinner.style.background = 'rgba(245, 158, 11, 0.2)';
        randomWinner.style.borderLeftColor = 'var(--accent)';
        randomWinner.style.transform = 'scale(1.05)';
        
        // اسکرول به برنده
        randomWinner.scrollIntoView({ behavior: 'smooth', block: 'center' });
        
        setTimeout(() => {
            randomWinner.style.background = '';
            randomWinner.style.borderLeftColor = '';
            randomWinner.style.transform = '';
        }, 3000);
        
        showNotification('🎉 ' + t.demoWinner, 'success');
    }
}

// نمایش نوتیفیکیشن
function showNotification(message, type = 'info') {
    const container = document.getElementById('notifications');
    if (!container) return;
    
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
    
    // حذف خودکار بعد از 5 ثانیه
    setTimeout(() => {
        notification.style.animation = 'slideInRight 0.3s ease reverse';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.remove();
            }
        }, 300);
    }, 5000);
}

// بروزرسانی تمام داده‌ها
async function updateAllData() {
    await updateDashboard();
    await updatePools();
    await updateUserStats();
    await updateRecentWinners();
    await updateUserBalance();
}

// بروزرسانی داشبورد
async function updateDashboard() {
    try {
        // This would be replaced with actual contract calls
        const ticketPriceElement = document.getElementById('ticketPrice');
        const totalTicketsElement = document.getElementById('totalTickets');
        const totalPrizesElement = document.getElementById('totalPrizes');
        const contractBalanceElement = document.getElementById('contractBalance');
        
        if (ticketPriceElement) ticketPriceElement.textContent = `11 MATIC`;
        if (totalTicketsElement) totalTicketsElement.textContent = '0';
        if (totalPrizesElement) totalPrizesElement.textContent = `0 MATIC`;
        if (contractBalanceElement) contractBalanceElement.textContent = `0 MATIC`;
    } catch (error) {
        console.error('Error updating dashboard:', error);
    }
}

// بروزرسانی استخرها
async function updatePools() {
    try {
        // Mock data - replace with actual contract calls
        const pool1Tickets = document.getElementById('pool1Tickets');
        const pool1Progress = document.getElementById('pool1Progress');
        const pool1Prize = document.getElementById('pool1Prize');
        
        const pool2Tickets = document.getElementById('pool2Tickets');
        const pool2Progress = document.getElementById('pool2Progress');
        const pool2Prize = document.getElementById('pool2Prize');
        
        const pool3Tickets = document.getElementById('pool3Tickets');
        const pool3Progress = document.getElementById('pool3Progress');
        const pool3Prize = document.getElementById('pool3Prize');
        
        if (pool1Tickets) pool1Tickets.textContent = `0/125`;
        if (pool1Progress) pool1Progress.style.width = `0%`;
        if (pool1Prize) pool1Prize.textContent = `0 MATIC`;
        
        if (pool2Tickets) pool2Tickets.textContent = `0/500`;
        if (pool2Progress) pool2Progress.style.width = `0%`;
        if (pool2Prize) pool2Prize.textContent = `0 MATIC`;
        
        if (pool3Tickets) pool3Tickets.textContent = `0/2500`;
        if (pool3Progress) pool3Progress.style.width = `0%`;
        if (pool3Prize) pool3Prize.textContent = `0 MATIC`;
        
    } catch (error) {
        console.error('Error updating pools:', error);
    }
}

// بروزرسانی آمار کاربر
async function updateUserStats() {
    if (!userAccount) return;
    
    try {
        // Mock data - replace with actual contract calls
        const profileTotalTickets = document.getElementById('profileTotalTickets');
        const profileRounds = document.getElementById('profileRounds');
        const profileWins = document.getElementById('profileWins');
        const profileTotalPrize = document.getElementById('profileTotalPrize');
        
        if (profileTotalTickets) profileTotalTickets.textContent = '0';
        if (profileRounds) profileRounds.textContent = '0';
        if (profileWins) profileWins.textContent = '0';
        if (profileTotalPrize) profileTotalPrize.textContent = `0 MATIC`;
        
    } catch (error) {
        console.error('Error updating user stats:', error);
    }
}

// بروزرسانی برندگان اخیر
async function updateRecentWinners() {
    try {
        const t = translations[currentLanguage];
        const recentWinners = document.getElementById('recentWinners');
        if (!recentWinners) return;
        
        let winnersHTML = '';
        
        // Mock data - replace with actual contract calls
        winnersHTML = `<div class="winner-item">${t.noWinners}</div>`;
        
        recentWinners.innerHTML = winnersHTML;
    } catch (error) {
        console.error('Error updating recent winners:', error);
    }
}

// تنظیم navigation تب‌ها
function setupTabNavigation() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const tabId = btn.getAttribute('data-tab');
            
            // غیرفعال کردن همه تب‌ها
            tabBtns.forEach(b => b.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            // فعال کردن تب انتخاب شده
            btn.classList.add('active');
            const targetTab = document.getElementById(tabId);
            if (targetTab) {
                targetTab.classList.add('active');
            }
        });
    });
}

// مدیریت تغییر حساب در متامسک
if (window.ethereum) {
    window.ethereum.on('accountsChanged', async (accounts) => {
        userAccount = accounts[0];
        const t = translations[currentLanguage];
        
        if (userAccount) {
            await updateUserBalance();
            updateWalletInfo();
            await updateAllData();
            await updatePTokenInfo();
            showNotification(t.accountChanged, 'info');
        } else {
            // User disconnected wallet
            userAccount = null;
            const connectBtn = document.getElementById('connectWallet');
            if (connectBtn) {
                connectBtn.innerHTML = `<i class="fas fa-plug"></i><span class="connect-text">Connect Wallet</span>`;
                connectBtn.disabled = false;
            }
            
            const walletInfo = document.getElementById('walletInfo');
            if (walletInfo) {
                walletInfo.style.display = 'none';
            }
            
            showNotification(t.walletDisconnected, 'error');
        }
    });
    
    window.ethereum.on('chainChanged', (chainId) => {
        const t = translations[currentLanguage];
        if (chainId !== '0x89') {
            showNotification(t.switchNetwork, 'error');
        } else {
            // Re-initialize when switched to correct network
            initContracts();
            if (userAccount) {
                initializeAfterConnection();
            }
        }
    });
}