// تنظیمات قرارداد
const CONTRACT_ADDRESS = '0xdFC970De4C016AB950F965e5364048C16468e2Ec';
const CONTRACT_ABI = [
    // ... (همان ABI کامل قرارداد اصلی از قبل)
];

// P-Token Contract Configuration
const PTOKEN_CONTRACT_ADDRESS = '0x82F7dBe1792436d15bdA22bB3340bD3f45D614Fa';
const PTOKEN_CONTRACT_ABI = [
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_projectWallet",
                "type": "address"
            }
        ],
        "stateMutability": "payable",
        "type": "constructor"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "owner",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "spender",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
            }
        ],
        "name": "Approval",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "maticAmount",
                "type": "uint256"
            }
        ],
        "name": "BackingIncreased",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "buyer",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "maticAmount",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "pTokenAmount",
                "type": "uint256"
            }
        ],
        "name": "BuyPToken",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "donor",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "maticAmount",
                "type": "uint256"
            }
        ],
        "name": "DonationAdded",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "previousOwner",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "newOwner",
                "type": "address"
            }
        ],
        "name": "OwnershipTransferred",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "seller",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "pTokenAmount",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "maticAmount",
                "type": "uint256"
            }
        ],
        "name": "SellPToken",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "from",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
            }
        ],
        "name": "Transfer",
        "type": "event"
    },
    {
        "inputs": [],
        "name": "BACKING_FEE",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "FEE_DENOMINATOR",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "FEE_PERCENT",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "INITIAL_BACKING",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "INITIAL_SUPPLY",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "PROJECT_FEE",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "owner",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "spender",
                "type": "address"
            }
        ],
        "name": "allowance",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "spender",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "approve",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            }
        ],
        "name": "balanceOf",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
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
        "outputs": [
            {
                "internalType": "uint8",
                "name": "",
                "type": "uint8"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "spender",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "subtractedValue",
                "type": "uint256"
            }
        ],
        "name": "decreaseAllowance",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
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
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getPTokenPrice",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getPTokenPriceInWei",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "spender",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "addedValue",
                "type": "uint256"
            }
        ],
        "name": "increaseAllowance",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "lockedSupply",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "name",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "owner",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
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
            {
                "internalType": "uint256",
                "name": "minPTokenAmount",
                "type": "uint256"
            }
        ],
        "name": "safeBuyPToken",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "pTokenAmount",
                "type": "uint256"
            }
        ],
        "name": "sellPToken",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "symbol",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "totalBackingMatic",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "totalSupply",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "transfer",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "from",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "transferFrom",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "newOwner",
                "type": "address"
            }
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
        // ... (همان ترجمه‌های قبلی)
    },
    fa: {
        // ... (همان ترجمه‌های قبلی)
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

// Initialize contracts - بهبود یافته
function initContracts() {
    if (web3) {
        try {
            contract = new web3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS);
            pTokenContract = new web3.eth.Contract(PTOKEN_CONTRACT_ABI, PTOKEN_CONTRACT_ADDRESS);
            console.log('Contracts initialized successfully');
            
            // تست اتصال به قراردادها
            testContractConnection();
        } catch (error) {
            console.error('Error initializing contracts:', error);
            showNotification('Error connecting to smart contracts', 'error');
        }
    }
}

// تست اتصال به قراردادها
async function testContractConnection() {
    try {
        // تست اتصال به قرارداد اصلی
        const ticketPrice = await contract.methods.ticketPrice().call();
        console.log('Ticket price from contract:', ticketPrice);
        
        // تست اتصال به P-Token
        const pTokenName = await pTokenContract.methods.name().call();
        console.log('P-Token name:', pTokenName);
        
        const pTokenSymbol = await pTokenContract.methods.symbol().call();
        console.log('P-Token symbol:', pTokenSymbol);
        
        showNotification('Successfully connected to smart contracts', 'success');
    } catch (error) {
        console.error('Error testing contract connection:', error);
        showNotification('Warning: Could not connect to smart contracts', 'warning');
    }
}

// Enhanced Wallet Connection System
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

    // Handle wallet selection
    walletOptions.forEach(option => {
        option.addEventListener('click', async () => {
            const walletType = option.getAttribute('data-wallet');
            await connectToWallet(walletType);
            walletModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        });
    });
}

// Enhanced wallet connection
async function connectToWallet(walletType) {
    const t = translations[currentLanguage];
    
    try {
        showNotification(`Connecting to ${walletType}...`, 'info');
        
        if (window.ethereum) {
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
            
        } else {
            showNotification(`${walletType} not detected. Please install it first.`, 'error');
        }
        
    } catch (error) {
        console.error(`Error connecting to ${walletType}:`, error);
        
        if (error.code === 4001) {
            showNotification('Connection rejected by user', 'error');
        } else {
            showNotification(`Failed to connect to ${walletType}`, 'error');
        }
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

// P-Token Functions - بهبود یافته
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

// Sell P-Tokens - بهبود یافته
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
        
        // دریافت قیمت گس
        const gasPrice = await web3.eth.getGasPrice();
        const increasedGasPrice = Math.floor(gasPrice * 1.2); // افزایش 20% برای اطمینان
        
        // اجرای تراکنش فروش
        const receipt = await pTokenContract.methods.sellPToken(pTokenAmountWei).send({
            from: userAccount,
            gas: 300000,
            gasPrice: increasedGasPrice
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
            } else if (error.message.includes('execution reverted')) {
                errorMessage = 'Transaction failed - contract reverted';
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

// ... (بقیه توابع بدون تغییر)

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