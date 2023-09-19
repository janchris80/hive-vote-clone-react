import FaqPage from 'pages/FaqPage';
import LoginPage from 'pages/LoginPage';

const dashboardRoutes = [
  {
    path: '/login',
    name: 'Login',
    icon: 'pe-7s-home',
    component: LoginPage,
    protected: false,
  },
  {
    path: '/faq',
    name: 'FAQ',
    icon: 'pe-7s-home',
    component: FaqPage,
    protected: false,
  },
  {
    path: '/home',
    name: 'Home',
    icon: 'pe-7s-home',
    component: Home,
    protected: true,
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    icon: 'pe-7s-user',
    component: Dashboard,
    protected: true,
  },
  {
    path: '/curation-trail',
    name: 'Curation Trail',
    icon: 'pe-7s-angle-up-circle',
    component: CurationTrail,
    protected: true,
  },
  {
    path: '/downvote-trail',
    name: 'Downvote Trail',
    icon: 'pe-7s-angle-down-circle',
    component: DownvoteTrail,
    protected: true,
  },
  {
    path: '/fanbase',
    name: 'Fanbase',
    icon: 'pe-7s-like',
    component: Fanbase,
    protected: true,
  },
  {
    path: '/schedule-posts',
    name: 'Schedule Posts',
    icon: 'pe-7s-date',
    component: SchedulePost,
    protected: true,
  },
  {
    path: '/upvote-comments',
    name: 'Upvote Comments',
    icon: 'pe-7s-comment',
    component: UpvoteComment,
    protected: true,
  },
  {
    path: '/claim-rewards',
    name: 'Claim Rewards',
    icon: 'pe-7s-wallet',
    component: ClaimReward,
    protected: true,
  },
  {
    path: '/notifications',
    name: 'Notifications',
    icon: 'pe-7s-bell',
    component: Notification,
    protected: true,
  },
  {
    path: '/logout',
    name: 'Logout',
    icon: 'pe-7s-back-2',
    component: Dashboard,
    upgrade: true,
  },
];

export default dashboardRoutes;
