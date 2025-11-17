// تنظیمات قرارداد
const CONTRACT_ADDRESS = '0xdFC970De4C016AB950F965e5364048C16468e2Ec';
const CONTRACT_ABI = [/* ABI کامل از قبل */];

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
    document.querySelector('.loading-text').textContent = t.loading;
    document.querySelector('.brand-title').textContent = t.brandTitle;
    document.querySelector('.brand-slogan').textContent = t.brandSlogan;
    document.querySelector('.network-text').textContent = t.network;
    
    const connectBtn = document.getElementById('connectWallet');
    if (connectBtn) {
        connectBtn.querySelector('.connect-text').textContent = userAccount ? t.connected : t.connectWallet;
    }
    
    const purchaseBtn = document.getElementById('buyTickets');
    if (purchaseBtn) {
        purchaseBtn.querySelector('.purchase-text').textContent = t.buyTickets;
    }
    
    const spinBtn = document.getElementById('spinWheel');
    if (spinBtn) {
        spinBtn.querySelector('.spin-text').textContent = t.spinWheel;
    }
    
    // بروزرسانی P-Token بخش
    const converterTitle = document.querySelector('.converter-card .card-title');
    if (converterTitle) {
        converterTitle.textContent = t.pTokenConverter;
    }
    
    const priceLabels = document.querySelectorAll('.price-display .price-label');
    if (priceLabels.length >= 2) {
        priceLabels[0].textContent = t.currentPrice;
        priceLabels[1].textContent = t.yourBalance;
    }
    
    const amountLabel = document.querySelector('.converter-form .label-text');
    if (amountLabel) {
        amountLabel.textContent = t.amountToSell;
    }
    
    const hintText = document.querySelector('.converter-form .hint-text');
    if (hintText) {
        const span = hintText.querySelector('span');
        hintText.innerHTML = `<i class="fas fa-info-circle"></i> ${t.youWillReceive} <span id="estimatedMatic">0</span> MATIC`;
    }
    
    const sellBtn = document.getElementById('sellPTokens');
    if (sellBtn) {
        sellBtn.querySelector('.sell-text').textContent = t.sellPTokens;
    }
    
    const refreshBtn = document.getElementById('refreshBalance');
    if (refreshBtn) {
        refreshBtn.querySelector('.refresh-text').textContent = t.refreshBalance;
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
        preloader.classList.add('fade-out');
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 500);
    }, 1000);
}

// مقداردهی Web3
async function initWeb3() {
    if (window.ethereum) {
        web3 = new Web3(window.ethereum);
        try {
            // Initialize contracts
            initPTokenContract();
        } catch (error) {
            console.error('Error initializing Web3:', error);
        }
    }
}

// Initialize P-Token Contract
function initPTokenContract() {
    if (web3) {
        pTokenContract = new web3.eth.Contract(PTOKEN_CONTRACT_ABI, PTOKEN_CONTRACT_ADDRESS);
    }
}

// Enhanced Wallet Connection System with Deep Links
function setupWalletConnection() {
    const connectBtn = document.getElementById('connectWallet');
    const walletModal = document.getElementById('walletModal');
    const closeModal = document.querySelector('.close-modal');
    const walletOptions = document.querySelectorAll('.wallet-option');

    // Open modal when connect button is clicked
    connectBtn.addEventListener('click', () => {
        walletModal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    });

    // Close modal
    closeModal.addEventListener('click', () => {
        walletModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });

    // Close modal when clicking outside
    walletModal.addEventListener('click', (e) => {
        if (e.target === walletModal) {
            walletModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });

    // Handle wallet selection with deep links
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

// Enhanced wallet connection with deep links
async function connectToWallet(walletType, deepLink) {
    const t = translations[currentLanguage];
    
    try {
        showNotification(`Opening ${walletType}...`, 'info');
        
        // Check if we're on mobile
        const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
        
        switch (walletType) {
            case 'metamask':
                await connectMetaMask(isMobile, deepLink);
                break;
                
            case 'trustwallet':
                await connectTrustWallet(isMobile, deepLink);
                break;
                
            case 'coinbase':
                await connectCoinbaseWallet(isMobile, deepLink);
                break;
                
            case 'safepal':
                await connectSafePal(isMobile, deepLink);
                break;
                
            case 'tokenpocket':
                await connectTokenPocket(isMobile, deepLink);
                break;
                
            case 'brave':
                await connectBraveWallet();
                break;
                
            case 'phantom':
                await connectPhantom();
                break;
                
            default:
                await connectGenericWallet(walletType, deepLink, isMobile);
        }
        
    } catch (error) {
        console.error(`Error connecting to ${walletType}:`, error);
        showNotification(`Failed to connect to ${walletType}`, 'error');
    }
}

// MetaMask Connection with Deep Link
async function connectMetaMask(isMobile, deepLink) {
    if (isMobile) {
        // Redirect to MetaMask app
        window.location.href = deepLink || 'https://metamask.app.link/dapp/' + window.location.hostname;
        showNotification('Opening MetaMask app...', 'info');
    } else {
        // Desktop browser
        if (window.ethereum && window.ethereum.isMetaMask) {
            await handleBrowserWalletConnection('metamask');
        } else {
            // MetaMask not installed
            const install = confirm('MetaMask not detected. Would you like to install it?');
            if (install) {
                window.open('https://metamask.io/download.html', '_blank');
            }
        }
    }
}

// Trust Wallet Connection
async function connectTrustWallet(isMobile, deepLink) {
    if (isMobile) {
        window.location.href = deepLink || 'https://link.trustwallet.com/dapp/' + window.location.hostname;
        showNotification('Opening Trust Wallet...', 'info');
    } else {
        if (window.ethereum && window.ethereum.isTrust) {
            await handleBrowserWalletConnection('trustwallet');
        } else {
            showNotification('Please open in Trust Wallet browser', 'info');
        }
    }
}

// Coinbase Wallet Connection
async function connectCoinbaseWallet(isMobile, deepLink) {
    if (isMobile) {
        window.location.href = deepLink || 'https://go.cb-w.com/dapp?url=' + window.location.href;
        showNotification('Opening Coinbase Wallet...', 'info');
    } else {
        if (window.ethereum && window.ethereum.isCoinbaseWallet) {
            await handleBrowserWalletConnection('coinbase');
        } else {
            // Try to use Coinbase Wallet injected provider
            if (window.coinbaseWalletExtension) {
                await handleBrowserWalletConnection('coinbase');
            } else {
                showNotification('Please install Coinbase Wallet', 'info');
            }
        }
    }
}

// SafePal Wallet Connection
async function connectSafePal(isMobile, deepLink) {
    if (isMobile) {
        window.location.href = deepLink || 'https://link.safepal.io/dapp?url=' + window.location.href;
        showNotification('Opening SafePal...', 'info');
    } else {
        showNotification('SafePal is primarily a mobile wallet', 'info');
    }
}

// TokenPocket Wallet Connection
async function connectTokenPocket(isMobile, deepLink) {
    if (isMobile) {
        window.location.href = deepLink || 'https://tp-lab.github.io/dapp-docs/dapp-dispatch.html?url=' + window.location.href;
        showNotification('Opening TokenPocket...', 'info');
    } else {
        if (window.ethereum && window.ethereum.isTokenPocket) {
            await handleBrowserWalletConnection('tokenpocket');
        } else {
            showNotification('Please install TokenPocket extension', 'info');
        }
    }
}

// Brave Wallet Connection
async function connectBraveWallet() {
    if (window.ethereum && window.ethereum.isBraveWallet) {
        await handleBrowserWalletConnection('brave');
    } else {
        showNotification('Please use Brave browser or install Brave Wallet', 'info');
    }
}

// Phantom Wallet Connection
async function connectPhantom() {
    if (window.phantom && window.phantom.ethereum) {
        web3 = new Web3(window.phantom.ethereum);
        await window.phantom.ethereum.request({ method: 'eth_requestAccounts' });
        
        const accounts = await web3.eth.getAccounts();
        userAccount = accounts[0];
        
        await initializeAfterConnection();
        showNotification('Connected with Phantom!', 'success');
    } else {
        showNotification('Please install Phantom Wallet', 'info');
    }
}

// Generic wallet handler for browser extensions
async function handleBrowserWalletConnection(walletType) {
    web3 = new Web3(window.ethereum);
    
    try {
        // Request account access
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        
        // Switch to Polygon network
        await switchToPolygon();
        
        const accounts = await web3.eth.getAccounts();
        userAccount = accounts[0];
        
        await initializeAfterConnection();
        showNotification(`Connected with ${walletType}!`, 'success');
        
    } catch (error) {
        if (error.code === 4001) {
            // User rejected the connection
            showNotification('Connection rejected by user', 'error');
        } else {
            throw error;
        }
    }
}

// تغییر به شبکه پالیگان
async function switchToPolygon() {
    try {
        await window.ethereum.request({
            method: 'wallet_switchEthereumChain',
            params: [{ chainId: '0x89' }],
        });
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
                showNotification('Error adding Polygon network', 'error');
            }
        }
    }
}

// Generic wallet connection for mobile
async function connectGenericWallet(walletType, deepLink, isMobile) {
    if (isMobile && deepLink) {
        window.location.href = deepLink;
        showNotification(`Opening ${walletType}...`, 'info');
    } else {
        showNotification(`${walletType} connection not configured`, 'error');
    }
}

// Handle returning from wallet app
function handleWalletReturn() {
    // Check if we have a connected account when page loads
    if (window.ethereum && window.ethereum.selectedAddress) {
        userAccount = window.ethereum.selectedAddress;
        initializeAfterConnection();
    }
}

// Initialize after successful connection
async function initializeAfterConnection() {
    await loadContractData();
    initPTokenContract();
    updateWalletInfo();
    await updateAllData();
    await updatePTokenInfo();
    
    // Update connect button text
    const connectBtn = document.getElementById('connectWallet');
    const t = translations[currentLanguage];
    connectBtn.innerHTML = `<i class="fas fa-check"></i> ${t.connected}`;
    connectBtn.disabled = true;
}

// بارگذاری داده‌های قرارداد
async function loadContractData() {
    if (!web3) return;

    try {
        contract = new web3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS);
        
        const accounts = await web3.eth.getAccounts();
        userAccount = accounts[0];
        
        if (userAccount) {
            await updateUserBalance();
            updateWalletInfo();
            await updateAllData();
        }
        
        // رفرش خودکار هر 30 ثانیه
        setInterval(async () => {
            if (userAccount) {
                await updateAllData();
            }
        }, 30000);
        
    } catch (error) {
        console.error('Error loading contract:', error);
        showNotification('Error loading contract', 'error');
    }
}

// بروزرسانی تمام داده‌ها
async function updateAllData() {
    await updateDashboard();
    await updatePools();
    await updateUserStats();
    await updateRecentWinners();
    await updateUserBalance();
}

// بروزرسانی موجودی کاربر
async function updateUserBalance() {
    if (!userAccount) return;
    
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
    
    if (userAccount) {
        const shortAddress = `${userAccount.substring(0, 6)}...${userAccount.substring(38)}`;
        walletAddress.textContent = shortAddress;
        walletInfo.style.display = 'flex';
    }
}

// بروزرسانی داشبورد
async function updateDashboard() {
    try {
        // This would be replaced with actual contract calls
        document.getElementById('ticketPrice').textContent = `11 MATIC`;
        document.getElementById('totalTickets').textContent = '0';
        document.getElementById('totalPrizes').textContent = `0 MATIC`;
        document.getElementById('contractBalance').textContent = `0 MATIC`;
    } catch (error) {
        console.error('Error updating dashboard:', error);
    }
}

// بروزرسانی استخرها
async function updatePools() {
    try {
        // Mock data - replace with actual contract calls
        document.getElementById('pool1Tickets').textContent = `0/125`;
        document.getElementById('pool1Prize').textContent = `0 MATIC`;
        document.getElementById('pool1Progress').style.width = `0%`;
        
        document.getElementById('pool2Tickets').textContent = `0/500`;
        document.getElementById('pool2Prize').textContent = `0 MATIC`;
        document.getElementById('pool2Progress').style.width = `0%`;
        
        document.getElementById('pool3Tickets').textContent = `0/2500`;
        document.getElementById('pool3Prize').textContent = `0 MATIC`;
        document.getElementById('pool3Progress').style.width = `0%`;
        
    } catch (error) {
        console.error('Error updating pools:', error);
    }
}

// بروزرسانی آمار کاربر
async function updateUserStats() {
    if (!userAccount) return;
    
    try {
        // Mock data - replace with actual contract calls
        document.getElementById('profileTotalTickets').textContent = '0';
        document.getElementById('profileRounds').textContent = '0';
        document.getElementById('profileWins').textContent = '0';
        document.getElementById('profileTotalPrize').textContent = `0 MATIC`;
        
    } catch (error) {
        console.error('Error updating user stats:', error);
    }
}

// بروزرسانی برندگان اخیر
async function updateRecentWinners() {
    try {
        const t = translations[currentLanguage];
        let winnersHTML = '';
        
        // Mock data - replace with actual contract calls
        winnersHTML = `<div class="winner-item">${t.noWinners}</div>`;
        
        document.getElementById('recentWinners').innerHTML = winnersHTML;
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
            document.getElementById(tabId).classList.add('active');
        });
    });
}

// P-Token Functions
async function updatePTokenInfo() {
    if (!pTokenContract || !userAccount) return;
    
    try {
        // Get P-Token price
        const priceInWei = await pTokenContract.methods.getPTokenPriceInWei().call();
        const priceInMatic = web3.utils.fromWei(priceInWei, 'ether');
        
        document.getElementById('pTokenPrice').textContent = `${parseFloat(priceInMatic).toFixed(6)} MATIC`;
        
        // Get user's P-Token balance
        const balance = await pTokenContract.methods.balanceOf(userAccount).call();
        const balanceFormatted = web3.utils.fromWei(balance, 'ether');
        
        document.getElementById('pTokenBalance').textContent = `${parseFloat(balanceFormatted).toFixed(2)} P-Token`;
        
        // Update sell button state
        const sellBtn = document.getElementById('sellPTokens');
        if (parseFloat(balanceFormatted) > 0) {
            sellBtn.disabled = false;
        } else {
            sellBtn.disabled = true;
        }
        
        // Update estimated MATIC
        updateEstimatedMatic();
        
    } catch (error) {
        console.error('Error updating P-Token info:', error);
    }
}

// Update estimated MATIC when P-Token amount changes
function updateEstimatedMatic() {
    const pTokenAmount = document.getElementById('pTokenAmount').value;
    const pTokenPriceElement = document.getElementById('pTokenPrice');
    const priceText = pTokenPriceElement.textContent;
    const price = parseFloat(priceText.split(' ')[0]);
    
    const estimatedMatic = (pTokenAmount * price).toFixed(6);
    document.getElementById('estimatedMatic').textContent = estimatedMatic;
}

// Change P-Token amount
function changePTokenAmount(change) {
    const input = document.getElementById('pTokenAmount');
    let value = parseInt(input.value) + change;
    value = Math.max(1, value);
    input.value = value;
    updateEstimatedMatic();
}

// Sell P-Tokens
async function sellPTokens() {
    if (!pTokenContract || !userAccount) {
        showNotification('Please connect your wallet first', 'error');
        return;
    }
    
    const pTokenAmount = document.getElementById('pTokenAmount').value;
    const pTokenAmountWei = web3.utils.toWei(pTokenAmount.toString(), 'ether');
    const t = translations[currentLanguage];
    
    try {
        const sellBtn = document.getElementById('sellPTokens');
        const originalText = sellBtn.innerHTML;
        sellBtn.innerHTML = '<div class="loading"></div> ' + t.selling;
        sellBtn.disabled = true;
        
        // Execute sell transaction
        await pTokenContract.methods.sellPToken(pTokenAmountWei).send({
            from: userAccount,
            gas: 300000
        });
        
        showNotification(t.soldSuccess, 'success');
        
        // Update balances
        await updatePTokenInfo();
        await updateUserBalance();
        
    } catch (error) {
        console.error('Error selling P-Tokens:', error);
        showNotification(t.sellError, 'error');
    } finally {
        const sellBtn = document.getElementById('sellPTokens');
        if (sellBtn) {
            sellBtn.innerHTML = '<i class="fas fa-money-bill-wave"></i><span class="sell-text">' + t.sellPTokens + '</span>';
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
        refreshBtn.addEventListener('click', updatePTokenInfo);
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
    let value = parseInt(input.value) + change;
    value = Math.max(1, Math.min(1000, value));
    input.value = value;
    updateTotalPrice();
}

// بروزرسانی قیمت کل
function updateTotalPrice() {
    const ticketCount = document.getElementById('ticketCount').value;
    const totalPrice = ticketCount * 11;
    document.getElementById('totalPrice').textContent = `${totalPrice} MATIC`;
}

// خرید بلیط
async function buyTickets() {
    const ticketCount = document.getElementById('ticketCount').value;
    const totalPrice = web3.utils.toWei((ticketCount * 11).toString(), 'ether');
    const t = translations[currentLanguage];
    
    if (!userAccount) {
        showNotification(t.connectFirst, 'error');
        return;
    }
    
    if (parseFloat(userMaticBalance) < (ticketCount * 11)) {
        showNotification(t.insufficientBalance, 'error');
        return;
    }
    
    try {
        const buyBtn = document.getElementById('buyTickets');
        const originalText = buyBtn.innerHTML;
        buyBtn.innerHTML = '<div class="loading"></div> Processing...';
        buyBtn.disabled = true;
        
        // This would be replaced with actual contract call
        // await contract.methods.buyTicket(ticketCount).send({
        //     from: userAccount,
        //     value: totalPrice,
        //     gas: 300000
        // });
        
        // Simulate transaction
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
            buyBtn.innerHTML = `<i class="fas fa-shopping-cart"></i><span class="purchase-text">${t.buyTickets}</span>`;
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
    spinBtn.disabled = true;
    spinBtn.innerHTML = `<i class="fas fa-sync-alt fa-spin"></i> ${t.spinning}`;
    
    // افزودن کلاس چرخش
    wheel.classList.add('spinning');
    
    // شبیه‌سازی چرخش
    setTimeout(() => {
        wheel.classList.remove('spinning');
        spinBtn.disabled = false;
        spinBtn.innerHTML = `<i class="fas fa-play"></i><span class="spin-text">${t.spinWheel}</span>`;
        
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
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    
    let icon = 'fas fa-info-circle';
    if (type === 'success') icon = 'fas fa-check-circle';
    if (type === 'error') icon = 'fas fa-exclamation-circle';
    
    notification.innerHTML = `
        <i class="${icon}"></i>
        <span>${message}</span>
    `;
    
    container.appendChild(notification);
    
    // حذف خودکار بعد از 5 ثانیه
    setTimeout(() => {
        notification.style.animation = 'slideInRight 0.3s ease reverse';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 5000);
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
            showNotification(t.walletDisconnected, 'error');
        }
    });
    
    window.ethereum.on('chainChanged', (chainId) => {
        const t = translations[currentLanguage];
        if (chainId !== '0x89') {
            showNotification(t.switchNetwork, 'error');
        }
    });
}