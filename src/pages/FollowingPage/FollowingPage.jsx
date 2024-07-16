import 'preline/preline';
import { useState, useEffect } from 'react';
import PostComponent from '../../components/PostComponent/PostComponent';
import FollowedUserTagComponent from '../../components/UserTagComponent/FollowedUserTagComponent';

const FollowingPage = (props) => {
    const Users = [
        {userName: "User A", userID: "@user001", userImage:"", numberNewPost:"123"},
        {userName: "User B", userID: "@user002", userImage:"", numberNewPost:"123"},
        {userName: "User C", userID: "@user003", userImage:"", numberNewPost:"12"},
        {userName: "User C", userID: "@user003", userImage:"", numberNewPost:"123"},
        {userName: "User C", userID: "@user003", userImage:"", numberNewPost:"123"},
        {userName: "User C", userID: "@user003", userImage:"", numberNewPost:"96"},
        {userName: "User C", userID: "@user003", userImage:"", numberNewPost:"123"},
        {userName: "User C", userID: "@user003", userImage:"", numberNewPost:"22"},
      ]
    
      const Posts = [
        {user: {
          userName: "User A",
          userAvatar: "",
        },
        dateUploaded: "2017-06-01T08:30", imageUploaded: "", description: "LOREM IPSUM!!", numberLike: "222", numberDislike: "9999",},
      ]
    
      const [users, setUsers] = useState([]);
      const [posts, setPosts] = useState([]);
    
      useEffect(()=>{
        setUsers(Users);
        setPosts(Posts);
      }, [])
    
      // useEffect(() => {
      //   axios
      //     .get(`API nhận 1 cái gì đó`)
      //     .then((response) => {
      //       console.log(response.data.items);
      //       set???(response.data.items);
      //     })
      //     .catch((error) => {
      //       console.error("Error fetching options:", error);
      //     });
      // }, []);
    
      return(
        <div className="app">     
        {/* post  */}
          <div className="flex w-full h-full gap-4 slide-up">     
            <div className='flex-col space-y-4'>                      
              {posts.map((post, index) =>{
              return(
                <PostComponent post={post} setTrigger={props}/>
              )
            })}  
            </div>    
            
            {/* trending */}
            <div className= "self-start sticky flex flex-col w-[900px] gap-4 shadow-2xl rounded-xl">
              <ul className="flex flex-col bg-white border border-gray-200 shadow-sm rounded-xl gap-4 pb-4">
                <li className="flex items-start justify-between text-xl font-bold px-4 py-3 border-b border-gray-200"> Followed</li>            
                
                {users.map((user, index)=>{
                  return(
                    <FollowedUserTagComponent user={user}/>
                )})}    
              </ul>
            </div>           
          </div> 
        </div>   
    )
}

export default FollowingPage;