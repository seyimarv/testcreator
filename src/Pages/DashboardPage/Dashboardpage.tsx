import React from 'react'
import { useLogOutUser } from '../../services/user.services'


const DashboardPage = () => {
const Logout = useLogOutUser()
 return (
     <div onClick={Logout}>
         DashhhhBoard
     </div>
 )
}

export default DashboardPage