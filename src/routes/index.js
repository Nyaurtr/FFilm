import FollowingPage from "../pages/FollowingPage/FollowingPage";
import HomePage from "../pages/HomePage/HomePage";
import MarketplacePage from "../pages/MarketplacePage/MarketplacePage";
import Messenger from "../pages/MessengerPage/MessengerPage";
import NotificationPage from "../pages/NotificationPage/NotificationPage";
import ProfilePage from "../pages/ProfilePage/ProfilePage";
import SuggestionsPage from "../pages/SuggestionPage/SuggestionPage";

import LoginPage from "../pages/SigninPage/LoginPage";
import SignupPage from "../pages/SigninPage/SignupPage"; 
import ResetPasswordPage from "../pages/SigninPage/ResetPasswordPage";
import AdminPage from "../admin/pages/AdminPage/AdminPage";
import SearchPage from "../pages/SearchPage/SearchPage";
import UserPage from "../admin/pages/UserPage/UserPage";
import StatPage from "../admin/pages/StatPage/StatPage";

export const routes = [
    {
        path: '/',
        page: HomePage,
        props: { setTrigger: 'setPopupPost', setTriggerPost: 'setPopupPoster' },
        isShowSidebar: true,
    },
    {
        path: '/home',
        page: HomePage,
        props: { setTrigger: 'setPopupPost', setTriggerPost: 'setPopupPoster' },
        isShowSidebar: true,
    },
    {
        path: '/marketplace/*',
        page: MarketplacePage,
        isShowSidebar: true,
    },
    {
        path: '/notifications',
        props: { setTriggerPost: 'setPopupPoster' },
        page: NotificationPage,
        isShowSidebar: true,
    },
    {
        path: '/suggestions',
        props: { setTriggerPost: 'setPopupPoster' },
        page: SuggestionsPage,
        isShowSidebar: true,
    },
    {
        path: '/following',
        props: { setTriggerPost: 'setPopupPoster' },
        page: FollowingPage,
        isShowSidebar: true,
    },
    {
        path: '/messenger',
        page: Messenger,
        isShowSidebar: true,
    },
    {
        path: '/search',
        page: SearchPage,
        props: { setTriggerPost: 'setPopupPoster' },
        isShowSidebar: true,
    },
    {
        path: '/profile',
        page: ProfilePage,
        isShowSidebar: true,
    },
    {
        path: '/login',
        page: LoginPage,
        isShowSidebar: false,
    },
    {
        path: '/signup',
        page: SignupPage,
        isShowSidebar: false,
    },
    {
        path: '/resetPassword',
        page: ResetPasswordPage,
        isShowSidebar: false,
    },
    {
        path: '/adminpage/*',
        page: AdminPage,
        isShowSidebar: false,
    },
];

export const adminroutes = [
    {
        path: '/',
        page: StatPage,
        isShowSidebar: true,
    },
    {
        path: '/user',
        page: UserPage,
        isShowSidebar: true,
    },
    {
        path: '/stat',
        page: StatPage,
        isShowSidebar: true,
    },
];