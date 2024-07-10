import 'preline/preline';
import { useState, useEffect } from 'react';

function SuggestionsPage(){
    const Users = [
        {userName: "User A", userID: "@user001", userImage:""},
        {userName: "User B", userID: "@user002", userImage:""},
        {userName: "User C", userID: "@user003", userImage:""}
      ]
    
      const Posts = [
        {user: {
          userName: "User A",
          userAvatar: "",
        },
        dateUploaded: "2017-06-01T08:30", imageUploaded: "", description: "LOREM IPSUM!!", numberLike: "222", numberDislike: "9999",},
        {user: {
          userName: "User A",
          userAvatar: "",
        },
        dateUploaded: "2017-06-01T08:30", imageUploaded: "", description: "LOREM IPSUM!!", numberLike: "222", numberDislike: "9999",},
        {user: {
          userName: "User A",
          userAvatar: "",
        },
        dateUploaded: "2017-06-01T08:30", imageUploaded: "", description: "LOREM IPSUM!!", numberLike: "222", numberDislike: "9999",},
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
          <div className="flex w-full h-full gap-4">     
            <div className='flex-col space-y-4'>                  
    
              {posts.map((post, index) =>{
                return(
                  <>
                    <div className="flex-col w-full gap-4 ">
                      <div className="flex flex-col bg-white border border-gray-200 shadow-xl rounded-xl p-4 gap-2">    
                        <div className='flex gap-2 justify-between'>
                          <div className="flex gap-4">
                            <img className="inline-block size-[62px] rounded-full" src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80" alt="userAavatar"/>
                            <a href='#user001'>
                              <h3 className="text-xl font-bold">{post.user.userName}</h3>
                              <p className="text-gray-600">{post.dateUploaded}</p>
                            </a>
                          </div>                      
                          <button type="button" className="py-2 px-4 align-baseline items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-red-500 hover:bg-red-100 hover:text-red-800 disabled:opacity-50 disabled:pointer-events-none dark:hover:bg-red-800/30 dark:hover:text-red-400">
                            <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                              <path stroke="red" stroke-linecap="round" stroke-width="2" d="M6 12h.01m6 0h.01m5.99 0h.01"/>
                            </svg>                            
                          </button>
                        </div>  
                        <div>
                          <img className='rounded-xl' src='https://images.unsplash.com/photo-1633114128174-2f8aa49759b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80' alt='pictureUserA'/>
                        </div>  
                        <div className='relative flex justify-between'>
                          <div className='flex'>
                            <div className='flex font-bold items-center'>
                              <button type="button" className="py-2 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-red-500 hover:bg-red-100 hover:text-red-800 disabled:opacity-50 disabled:pointer-events-none dark:hover:bg-red-800/30 dark:hover:text-red-400">
                                <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                  <path stroke="red" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 11c.889-.086 1.416-.543 2.156-1.057a22.323 22.323 0 0 0 3.958-5.084 1.6 1.6 0 0 1 .582-.628 1.549 1.549 0 0 1 1.466-.087c.205.095.388.233.537.406a1.64 1.64 0 0 1 .384 1.279l-1.388 4.114M7 11H4v6.5A1.5 1.5 0 0 0 5.5 19v0A1.5 1.5 0 0 0 7 17.5V11Zm6.5-1h4.915c.286 0 .372.014.626.15.254.135.472.332.637.572a1.874 1.874 0 0 1 .215 1.673l-2.098 6.4C17.538 19.52 17.368 20 16.12 20c-2.303 0-4.79-.943-6.67-1.475"/>
                                </svg>              
                              </button>
                              {post.numberLike}
                            </div>
                            <div className='flex font-bold items-center'>
                              <button type="button" className="py-2 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-red-500 hover:bg-red-100 hover:text-red-800 disabled:opacity-50 disabled:pointer-events-none dark:hover:bg-red-800/30 dark:hover:text-red-400">
                                <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                  <path stroke="red" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 13c-.889.086-1.416.543-2.156 1.057a22.322 22.322 0 0 0-3.958 5.084 1.6 1.6 0 0 1-.582.628 1.549 1.549 0 0 1-1.466.087 1.587 1.587 0 0 1-.537-.406 1.666 1.666 0 0 1-.384-1.279l1.389-4.114M17 13h3V6.5A1.5 1.5 0 0 0 18.5 5v0A1.5 1.5 0 0 0 17 6.5V13Zm-6.5 1H5.585c-.286 0-.372-.014-.626-.15a1.797 1.797 0 0 1-.637-.572 1.873 1.873 0 0 1-.215-1.673l2.098-6.4C6.462 4.48 6.632 4 7.88 4c2.302 0 4.79.943 6.67 1.475"/>
                                </svg>              
                              </button>
                              {post.numberDislike}
                            </div>
                          </div>
                          <button type="button" className="py-2 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-red-500 hover:bg-red-100 hover:text-red-800 disabled:opacity-50 disabled:pointer-events-none dark:hover:bg-red-800/30 dark:hover:text-red-400">
                            <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                              <path stroke="red" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 9h5m3 0h2M7 12h2m3 0h5M5 5h14a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1h-6.616a1 1 0 0 0-.67.257l-2.88 2.592A.5.5 0 0 1 8 18.477V17a1 1 0 0 0-1-1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z"/>
                            </svg>                          
                          </button>
                          <button type="button" className="py-2 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-red-500 hover:bg-red-100 hover:text-red-800 disabled:opacity-50 disabled:pointer-events-none dark:hover:bg-red-800/30 dark:hover:text-red-400">
                            <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                              <path stroke="red" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.248 19C3.22 15.77 5.275 8.232 12.466 8.232V6.079a1.025 1.025 0 0 1 1.644-.862l5.479 4.307a1.108 1.108 0 0 1 0 1.723l-5.48 4.307a1.026 1.026 0 0 1-1.643-.861v-2.154C5.275 13.616 4.248 19 4.248 19Z"/>
                            </svg>                          
                          </button>
                        </div>                                   
                      </div>
                    </div>   
                  </>
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
                  <>
                    <li className="flex items-center justify-between gap-4 ml-4 mr-4"> 
                    <div className="flex gap-4 items-center">
                      <img className="size-[62px] rounded-full" src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80" alt="userAavatar"/>
                      <div>
                        <div className="text-lg font-bold">{user.userName}</div>
                        <div className="text-xs font-normal">{user.userID}</div>
                      </div>
                    </div>              
                    <button type="button" class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-red-600 text-white hover:bg-red-700 disabled:opacity-50 disabled:pointer-events-none">
                      Follow
                    </button>
                    </li>
                  </>
                )})}
    
              </ul>
    
    
            </div>             
          </div> 
        </div>    
      )
}

export default SuggestionsPage;