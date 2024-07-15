import React from 'react'

const FollowedUserTagComponent = (props) => {
    const {user} = props;
  return (
    <div>
      <li className="flex items-center justify-between gap-4 ml-4 mr-4"> 
        <div className="flex gap-4 items-center">
            <img className="size-[62px] rounded-full" src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80" alt="userAavatar"/>
            <div>
            <div className="text-lg font-bold">{user.userName}</div>
            <div className="text-xs font-normal">{user.userID}</div>
            </div>
        </div>              
        <span class="inline-flex items-center justify-center size-[38px] text-sm font-semibold rounded-full leading-none border border-red-200 bg-white text-red-800 shadow-xl">
        {user.numberNewPost}
        </span>
     </li>   
    </div>
  )
}

export default FollowedUserTagComponent
