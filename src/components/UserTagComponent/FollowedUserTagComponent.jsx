import React, { useContext } from 'react'
import { AuthContext } from '../../assets/contexts/AuthContext'
import axios from 'axios'
import Intercept from '../../Tools/refrech'

const FollowedUserTagComponent = (props) => {
  const {user, dispatch} = useContext(AuthContext)
  const axiosJWT = axios.create()
  Intercept(axiosJWT);
  const unFollow = (async () => {
    await axiosJWT.put(
      `https://demo2-swart-six.vercel.app/api/user/${props.user.username}/unfollow`,
      {},
      {
        headers: {
          Authorization: "Bearer " + user.accessToken,
        },
      }
    );
    dispatch({ type: "UNFOLLOW", payload: props.user._id });
  })
  console.log(props)
  return (
    <div>
      <li className="flex items-center justify-between gap-4 ml-4 mr-4"> 
        <div className="flex gap-4 items-center">
            <img className="size-[62px] rounded-full" src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80" alt="userAavatar"/>
            <div>
            <div className="text-lg font-bold">{props.user.username}</div>
            <div className="text-xs font-normal">@{props.user.username}</div>
            </div>
        </div>              
        <span
        onClick={unFollow}
        class="inline-flex items-center justify-center size-[38px] text-sm font-semibold rounded-full leading-none border border-red-200 bg-white text-red-800 shadow-xl">
        UnFollow
        </span>
     </li>   
    </div>
  )
}

export default FollowedUserTagComponent
