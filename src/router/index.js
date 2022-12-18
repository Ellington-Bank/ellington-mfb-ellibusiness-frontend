import Vue from 'vue'
import VueRouter from 'vue-router'

//***Auth Pages***//
import Login from '../views/auth-pages/Login.vue'
import Register from '../views/auth-pages/Register.vue'
import RegisterBiz from '../views/auth-pages/RegisterBiz.vue'
import ResetPassword from '../views/auth-pages/ResetPassword.vue'

//***Other Dashbord Pages***//
import Welcome from '../views/dashboard-pages/Welcome.vue'
import Home from '../views/dashboard-pages/Home.vue'
import PersonalInfo from '../views/dashboard-pages/Personal-info.vue'
import BankInfo from '../views/dashboard-pages/Bank-info.vue'
import BankDetails from '../views/dashboard-pages/BankDetails.vue'
import ProcessingRequest from '../views/dashboard-pages/ProcessingRequest.vue'
import RequestDenied from '../views/dashboard-pages/RequestDenied.vue'
import Loans from '../views/dashboard-pages/Loans.vue'
import Payroll from '../views/dashboard-pages/Payroll.vue'
import RolesSettings from '../views/dashboard-pages/RolesSettings.vue'

//***Transfer Pages***//
import Transfer from '../views/transfer-pages/Transfer.vue'
import BankTransfer from '../views/transfer-pages/BankTransfer.vue'
import AiropayTransfer from '../views/transfer-pages/AiropayTransfer.vue'

//***Collections Pages***//
import Collections from '../views/collections-pages/Collections.vue'
import BankTransferCollection from '../views/collections-pages/BankTransferCollection.vue'
import UssdCollection from '../views/collections-pages/UssdCollection.vue'
import PosCollection from '../views/collections-pages/PosCollection.vue'
import QrcodeCollection from '../views/collections-pages/QrcodeCollection.vue'

//***Wallet Pages***//
import Wallet from '../views/wallet-pages/Wallet.vue'
import RequestCard from '../views/wallet-pages/RequestCard.vue'
import RequestCardSent from '../views/wallet-pages/RequestCardSent.vue'

//***Invoice Pages***//
import Invoice from '../views/invoice-pages/Invoice.vue'
import NewInvoice from '../views/invoice-pages/NewInvoice.vue'
import Invoice2 from '../views/invoice-pages/Invoice2.vue'

//***Transactions Pages***//
import Transactions from '../views/transactions-pages/Transactions.vue'
import Transactions2 from '../views/transactions-pages/Transactions2.vue'

//***Savings-and-Invest Pages***//
import SaveInvest from '../views/save-invest-pages/SaveInvest.vue'
import SaveInvest2 from '../views/save-invest-pages/SaveInvest2.vue'

//***More Dashboard Pages***//
import Support from '../views/Support.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Welcome',
    component: Welcome
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/personal-info',
    name: 'PersonalInfo',
    component: PersonalInfo
  },
  {
    path: '/bank-info',
    name: 'BankInfo',
    component: BankInfo
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/register-biz',
    name: 'RegisterBiz',
    component: RegisterBiz
  },
  {
    path: '/reset-password',
    name: 'ResetPassword',
    component: ResetPassword
  },
  {
    path: '/bank-details',
    name: 'BankDetails',
    component: BankDetails
  },
  {
    path: '/transactions',
    name: 'Transactions',
    component: Transactions
  },
  {
    path: '/transactions2',
    name: 'Transactions2',
    component: Transactions2
  },
  {
    path: '/processing-request',
    name: 'ProcessingRequest',
    component: ProcessingRequest
  },
  {
    path: '/request-denied',
    name: 'RequestDenied',
    component: RequestDenied
  },
  {
    path: '/loans',
    name: 'Loans',
    component: Loans
  },
  {
    path: '/transfer',
    name: 'Transfer',
    component: Transfer
  },
  {
    path: '/bank-transfer',
    name: 'BankTransfer',
    component: BankTransfer
  },
  {
    path: '/airopay-transfer',
    name: 'AiropayTransfer',
    component: AiropayTransfer
  },
  {
    path: '/collections',
    name: 'Collections',
    component: Collections
  },
  {
    path: '/bank-transfer-collection',
    name: 'BankTransferCollection',
    component: BankTransferCollection
  },
  {
    path: '/ussd-collection',
    name: 'UssdCollection',
    component: UssdCollection
  },
  {
    path: '/pos-collection',
    name: 'PosCollection',
    component: PosCollection
  },
  {
    path: '/qrcode-collection',
    name: 'QrcodeCollection',
    component: QrcodeCollection
  },
  {
    path: '/wallet',
    name: 'Wallet',
    component: Wallet
  },
  {
    path: '/request-card',
    name: 'RequestCard',
    component: RequestCard
  },
  {
    path: '/request-card-sent',
    name: 'RequestCardSent',
    component: RequestCardSent
  },
  {
    path: '/payroll',
    name: 'Payroll',
    component: Payroll
  },
  {
    path: '/invoice',
    name: 'Invoice',
    component: Invoice
  },
  {
    path: '/new-invoice',
    name: 'NewInvoice',
    component: NewInvoice
  },
  {
    path: '/invoice2',
    name: 'Invoice2',
    component: Invoice2
  },
 
  {
    path: '/save-and-invest',
    name: 'SaveInvest',
    component: SaveInvest
  },
  {
    path: '/save-and-invest2',
    name: 'SaveInvest2',
    component: SaveInvest2
  },
  {
    path: '/roles-and-settings',
    name: 'RolesSettings',
    component: RolesSettings
  },
  {
    path: '/support',
    name: 'Support',
    component: Support
  }
  // {
  //   path: '/about',
  //   name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
