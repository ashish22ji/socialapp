import { BookmarkBorderOutlined, BarChart, Bookmark, SupervisorAccount, WorkOutline,Report, DynamicFeed, AttachMoney, ChatBubbleOutline, Feedback, Home,MailOutline,MailOutlined,PermIdentityOutlined,Storefront,Timeline,TrendingUp, PermIdentityTwoTone, PermIdentitySharp, PermIdentityRounded, VerifiedUserOutlined, SupervisedUserCircleOutlined, RssFeed, Chat, PlayCircleFilledOutlined, HelpOutline, WorkOutlined, Group, Event, More, MoreOutlined, ExpandMore, UnfoldMore, MoreVert, Settings, HomeOutlined, RssFeedOutlined, ChatOutlined, GroupOutlined, BookmarkOutlined, HelpOutlineOutlined, EventOutlined, MoreVertOutlined, SettingsOutlined, PlayCircleOutline, Work, PersonAdd } from '@material-ui/icons';

export const sidebarData=[
        {
            // menu:'Dashboard',
            menu:'Menu',
            values:[
                {
                    subMenu:'Home',
                    icon: <HomeOutlined/>,
                    path:'/'
                },
                {
                    subMenu:'Feed',
                    icon:<RssFeedOutlined/>,
                    path:'/'
                },
                {
                    subMenu:'Chats',
                    icon:<ChatOutlined/>,
                    path:'/'
                },
                {
                    subMenu:'Videos',
                    icon:<PlayCircleOutline/>,
                    path:'/'
                },
                {
                    subMenu:'Groups',
                    icon:<GroupOutlined/>,
                    path:'/'
                },
                {
                    subMenu:'Bookmarks',
                    icon:<BookmarkBorderOutlined/>,
                    path:'/'
                },
                {
                    subMenu:'Question',
                    icon:<HelpOutlineOutlined/>,
                    path:'/'
                },
                {
                    subMenu:'Jobs',
                    icon:<WorkOutline/>,
                    path:'/'
                },
                {
                    subMenu:'Events',
                    icon:<EventOutlined/>,
                    path:'/'
                },
                {
                    subMenu:'Show More',
                    icon:<MoreVertOutlined/>,
                    path:'/'
                },

            ]
        },
        {
            menu:'Quick Menu',
            values:[
                {
                    subMenu:'My Profile',
                    icon:<PermIdentityOutlined/>,
                    path:'/profile'
                },
                {
                    subMenu:'User-List',
                    icon:<SupervisedUserCircleOutlined/>,
                    path:'/userlist',
                },
                {
                    subMenu:'Admin',
                    icon:<SupervisorAccount/>,
                    path:'/admin'
                },
                
                {
                    subMenu:'User',
                    icon:<PersonAdd/>,
                    path:'/newUser'
                },
                
                {
                    subMenu:'Settings',
                    icon:<SettingsOutlined/>,
                    path:'/'
                },
                {
                    subMenu:'Near Store',
                    icon:<Storefront/>,
                    path:'/'
                },
                // {
                //     subMenu:'Reports',
                //     icon:<BarChart/>,
                //     path:'/'
                // }
            ]
        },
        {
            menu:'Authorization',
            // menu:'Staff',
            values:[
                {
                    subMenu:'Mail',
                    icon:<MailOutline/>,
                    path:'/'
                },
                {
                    subMenu:'Feedback',
                    icon:<DynamicFeed/>,
                    path:'/'
                },
                {
                    subMenu:'Massages',
                    icon:<ChatBubbleOutline/>,
                    path:'/'
                },
                // {
                //     subMenu:'Login',
                //     icon:<SignalCellular0Bar/>,
                //     path:'/'
                // }
            ]
        }, 
        // {
        //     menu:'Staff',
        //     values:[
        //         {
        //             subMenu:'Manage',
        //             icon:<WorkOutline/>,
        //             path:'/'
        //         },
        //         {
        //             subMenu:'Analytics',
        //             icon:<Timeline/>,
        //             path:'/'
        //         },
        //         {
        //             subMenu:'Reports',
        //             icon:<Report/>,
        //             path:'/'
        //         },
        //     ]
        // },   

]