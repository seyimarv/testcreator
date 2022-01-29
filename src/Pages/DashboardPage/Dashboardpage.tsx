import React from 'react'
import Sidebar from '../../Components/sidebar/Sidebar'
import { useLogOutUser } from '../../services/user.services'


const DashboardPage = () => {
const Logout = useLogOutUser()
 return (
     <div>
        <Sidebar />
     </div>
 )
}

export default DashboardPage