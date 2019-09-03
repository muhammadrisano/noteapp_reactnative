import { createDrawerNavigator, createStackNavigator, createAppContainer } from 'react-navigation'

// import Login from '../../screens/login/Login'
// import Register from '../../screens/register/Register'
import Home from '../../screens/Home/Home'
import Editnote from '../../screens/Editnote/Editnote'
import Addnote from '../../screens/Addnote/Addnote'
import CustomsDrawer from '../../components/CustomsDrawer'


const AppNavigation = createStackNavigator({
    // Login,
    // Register,
    Home,
    Editnote,
    Addnote
}, {
        initialRouteName: 'Editnote',
        headerMode: 'none'
    })

const DrawerNavigation = createDrawerNavigator({
    Menu: {
        screen: Home
    },
    Home,
    Editnote,
    Addnote
}, {
        // drawerPosition: 'left',
        // contentComponent: CustomDrawerContentComponent,
        // drawerOpenRoute: 'DrawerOpen',
        // drawerCloseRoute: 'DrawerClose',
        // drawerToggleRoute: 'DrawerToggle',
        contentComponent: CustomsDrawer,

    })
export default createAppContainer(DrawerNavigation)