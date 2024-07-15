import 'preline/preline'
import { useEffect, useState } from 'react';
import PostComponent from '../../components/PostComponent/PostComponent';
import NotFollowedUserTagComponent from '../../components/UserTagComponent/NotFollowedUserTagComponent';

const HomePage = (props) => {
  const Users = [
    {userName: "User A", userID: "@user001", userImage:"", follow: false},
    {userName: "User B", userID: "@user002", userImage:"", follow: false},
    {userName: "User C", userID: "@user003", userImage:"", follow: true}
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
    <div className="app slide-up">     
    {/* post  */}
      <div className="flex w-full h-full gap-4">     
        <div className='flex-col space-y-4'>
          <div className="flex bg-white border border-gray-200 shadow-xl rounded-xl p-4 w-full gap-3">
            <img className="size-[62px] rounded-full" src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80" alt="userAavatar"/>
            <input type="text" onClick={() => props.setTrigger(true)} id="input-label" class="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-red-500 focus:ring-red-500 disabled:opacity-50 disabled:pointer-events-nne" placeholder="Which do you think right now?"/>
            <button type="button" onClick={() => props.setTrigger(true)} class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-red-600 text-white hover:bg-red-700 disabled:opacity-50 disabled:pointer-events-none">
              Upload
            </button>
          </div>    

          {posts.map((post, index) =>{
            return(
              <PostComponent post={post} setTrigger={props}/>
            )
          })}              
        </div>    
        
        {/* trending */}
        <div className= "self-start sticky top-10 flex flex-col w-[900px] gap-4">
          <div className="flex flex-col bg-white border border-gray-200 shadow-sm rounded-xl">
            <div className="flex items-start justify-between text-xl font-bold px-4 py-3 border-b border-gray-200"> Trending</div>
            <button type="button" className="inline-flex items-center gap-x-2 py-3 px-4 text-sm text-start font-medium text-gray-800 hover:text-red-600 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg focus:z-10 disabled:opacity-50 disabled:pointer-events-none">            
              #Active
            </button>
            <button type="button" className="inline-flex items-center gap-x-2 py-3 px-4 text-sm text-start font-medium text-gray-800 hover:text-red-600 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg focus:z-10 disabled:opacity-50 disabled:pointer-events-none">
              #Link
            </button>
            <button type="button" className="inline-flex items-center gap-x-2 py-3 px-4 text-sm text-start font-medium text-gray-800 hover:text-red-600 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg focus:z-10 disabled:opacity-50 disabled:pointer-events-none">
              #Disabled
            </button>
          </div> 

          <ul className="flex flex-col bg-white border border-gray-200 shadow-sm rounded-xl gap-4 pb-4">
            <li className="flex items-start justify-between text-xl font-bold px-4 py-3 border-b border-gray-200"> Maybe you know</li>            
            
            {users.map((user, index)=>{
              return(
                <NotFollowedUserTagComponent user={user}/>
            )})}

          </ul>


        </div>             
      </div> 
    </div>    
  )
}

export default HomePage;
    