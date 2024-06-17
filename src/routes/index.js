import { Component } from "react";
import FollowingPage from "../pages/FollowingPage";
import HomePage from "../pages/HomePage";
import ProfilePage from "../pages/ProfilePage";
import UploadPage from "../pages/UploadPage";
import HeaderOnly from "../layouts/HeaderOnly";


const publicRoutes = [
    {
        path: '/',
        Component: HomePage
    },
    {
        path: '/Following',
        Component: FollowingPage
    },
    {
        path: '/Profile',
        Component: ProfilePage
    },
    {
        path: '/Upload',
        Component: UploadPage,
        layout: HeaderOnly
    },
]

const privateRoutes = [

]

export { publicRoutes, privateRoutes }