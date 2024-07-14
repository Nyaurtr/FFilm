import React from 'react'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const SearchPage = (props) => {
  const Users = [
    {userName: "user B", userID: "@user002", userImage:"", numberFollower:"1655", description: "user B had an comment on your post" ,dateJoin:"2017-06-01", verify: "verified"},
    {userName: "user C", userID: "@user003", userImage:"", numberFollower:"1655", description: "user C had like your post" ,dateJoin:"2017-06-01", verify: "non-verified"},
  ];
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
 ]

  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
      setUsers(Users);
      setPosts(Posts);
  }, []);

  return (
    <div className='app slide-up flex flex-col rounded-2xl gap-4'>
      <div class="relative flex flex-col w-full">
        <div class="relative">
          <div class="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-3.5">
            <svg class="flex-shrink-0 size-4 text-gray-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </svg>
          </div>
          <input class="py-3 ps-10 pe-4 block w-full border-gray-200 rounded-lg text-sm focus:border-red-500 focus:ring-red-500 disabled:opacity-50 disabled:pointer-events-none" type="text" placeholder="Type a name"put=""/>
        </div>        
      </div>   

      <div className="min-w-full mx-auto rounded-xl shadow-2xl">
        <div className="flex flex-col">
            <div className="-m-1.5 overflow-x-auto">
            <div className="p-1.5 min-w-full inline-block align-middle">
                <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
                    <div className="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-b border-gray-200 text-3xl font-bold">
                    People
                    </div>
                <table className="min-w-full divide-y divide-gray-200 ">
                    <thead className="bg-gray-50 ">                    
                    <tr>
                        <th scope="col" className="px-6 py-3 text-start">
                        <div className="flex items-center gap-x-2">
                            <span className="text-xs font-semibold uppercase tracking-wide text-gray-800">
                            User
                            </span>
                        </div>
                        </th>

                        <th scope="col" className="px-6 py-3 text-start">
                        <div className="flex items-center gap-x-2">
                            <span className="text-xs font-semibold uppercase tracking-wide text-gray-800">
                            Number of Follower
                            </span>
                        </div>
                        </th>

                        <th scope="col" className="px-6 py-3 text-start">
                        <div className="flex items-center gap-x-2">
                            <span className="text-xs font-semibold uppercase tracking-wide text-gray-800">
                            Description
                            </span>
                        </div>
                        </th>

                        <th scope="col" className="px-6 py-3 text-start">
                        <div className="flex items-center gap-x-2">
                            <span className="text-xs font-semibold uppercase tracking-wide text-gray-800">
                            Date join
                            </span>
                        </div>
                        </th>

                        <th scope="col" className="px-6 py-3 text-start">
                        <div className="flex items-center gap-x-2">
                            <span className="text-xs font-semibold uppercase tracking-wide text-gray-800">
                            Verify
                            </span>
                        </div>
                        </th>
                    </tr>
                    </thead>

                    <tbody className="divide-y divide-gray-200 ">

                    {users.map((user, index)=>{
                        return(
                            <>
                                <tr className="bg-white hover:bg-gray-50">                                    
                                    <td className="size-px whitespace-nowrap align-top">
                                    <Link to="/profile" className="block p-6" href="#test">
                                        <div className="flex items-center gap-x-3">
                                        <img className="inline-block size-[38px] rounded-full" src="https://images.unsplash.com/photo-1531927557220-a9e23c1e4794?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80" alt="Image Description"/>
                                        <div className="grow">
                                            <span className="block text-sm font-semibold text-gray-800">{user.userName}</span>
                                            <span className="block text-sm text-gray-500">{user.userID}</span>
                                        </div>
                                        </div>
                                    </Link>
                                    </td>
                                    <td className="h-px w-72 min-w-72 align-top">
                                    <Link to="/profile" className="block p-6" href="#test">
                                        <span className="block text-sm text-gray-500">{user.numberFollower}</span>
                                    </Link>
                                    </td>
                                    <td className="h-px w-72 min-w-72 align-top">
                                    <Link to="/profile" className="block p-6" href="#test">
                                        <span className="block text-sm text-gray-500">{user.description}</span>
                                    </Link>
                                    </td>
                                    <td className="size-px whitespace-nowrap align-top">
                                    <Link to="/profile" className="block p-6" href="#test">
                                        <span className="text-sm text-gray-600">{user.dateJoin}</span>
                                    </Link>
                                    </td>
                                    <td className="size-px whitespace-nowrap align-top">
                                    <Link to="/profile" className="block p-6" href="#test">
                                        <span className="py-1 px-1.5 inline-flex items-center gap-x-1 text-xs font-medium bg-teal-100 text-teal-800 rounded-full">
                                        <svg className="size-2.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                                        </svg>
                                        {user.verify}
                                        </span>
                                    </Link>
                                    </td>
                                </tr>
                            </>
                        )
                    })}    
                    </tbody>
                </table>
                </div>
            </div>
            </div>
        </div>
        </div>  

        <div className="min-w-full mx-auto rounded-xl shadow-2xl">
        <div className="flex flex-col">
            <div className="-m-1.5 overflow-x-auto">
            <div className="p-1.5 min-w-full inline-block align-middle">
                <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
                    <div className="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-b border-gray-200 text-3xl font-bold">
                    Marketplace
                    </div> 

                    <div className="flex p-4">
                      <div className="grid grid-cols-4 grid-rows-3 gap-4 min-w-[98%] min-h-full">
                          <div class="relative group overflow-hidden rounded-xl col-start-1 row-start-1">
                            <img class="rounded-xl shadow-xl border border-gray-200 w-full sm:size-full object-cover" src="https://vmi.tv/wp-content/uploads/sites/3/2020/01/Summicron-C_40mm_horizontal_left-scaled-e1609928072225.jpg" alt="pictureUserA" />
                            <div class="absolute inset-0 flex items-end">
                              <div class="w-full bg-black bg-opacity-30 h-[30%] transform transition-transform duration-300 ease-in-out group-hover:translate-y-0 translate-y-full">
                                <div class="text-white p-4">description</div>
                              </div>
                            </div>
                          </div>
                          
                          <div class="relative group overflow-hidden rounded-xl col-start-1 row-start-2">
                            <img class="rounded-xl shadow-xl border border-gray-200 w-full sm:size-full object-cover" src="https://vmi.tv/wp-content/uploads/sites/3/2020/01/Summicron-C_40mm_horizontal_left-scaled-e1609928072225.jpg" alt="pictureUserA" />
                            <div class="absolute inset-0 flex items-end">
                              <div class="w-full bg-black bg-opacity-30 h-[30%] transform transition-transform duration-300 ease-in-out group-hover:translate-y-0 translate-y-full">
                                <div class="text-white p-4">description</div>
                              </div>
                            </div>
                          </div>

                          <div class="relative group overflow-hidden rounded-xl col-start-1 row-start-3">
                            <img class="rounded-xl shadow-xl border border-gray-200 w-full sm:size-80 object-cover" src="https://vmi.tv/wp-content/uploads/sites/3/2020/01/Summicron-C_40mm_horizontal_left-scaled-e1609928072225.jpg" alt="pictureUserA" />
                            <div class="absolute inset-0 flex items-end">
                              <div class="w-full bg-black bg-opacity-30 h-[30%] transform transition-transform duration-300 ease-in-out group-hover:translate-y-0 translate-y-full">
                                <div class="text-white p-4">description</div>
                              </div>
                            </div>
                          </div>

                          <div class="relative group overflow-hidden rounded-xl col-start-2 row-start-1">
                            <img class="rounded-xl shadow-xl border border-gray-200 w-full sm:size-full object-cover" src="https://vmi.tv/wp-content/uploads/sites/3/2020/01/Summicron-C_40mm_horizontal_left-scaled-e1609928072225.jpg" alt="pictureUserA" />
                            <div class="absolute inset-0 flex items-end">
                              <div class="w-full bg-black bg-opacity-30 h-[30%] transform transition-transform duration-300 ease-in-out group-hover:translate-y-0 translate-y-full">
                                <div class="text-white p-4">description</div>
                              </div>
                            </div>
                          </div>

                          <div class="relative group overflow-hidden rounded-xl col-start-2 row-start-2">
                            <img class="rounded-xl shadow-xl border border-gray-200 w-full sm:size-full object-cover" src="https://vmi.tv/wp-content/uploads/sites/3/2020/01/Summicron-C_40mm_horizontal_left-scaled-e1609928072225.jpg" alt="pictureUserA" />
                            <div class="absolute inset-0 flex items-end">
                              <div class="w-full bg-black bg-opacity-30 h-[30%] transform transition-transform duration-300 ease-in-out group-hover:translate-y-0 translate-y-full">
                                <div class="text-white p-4">description</div>
                              </div>
                            </div>
                          </div>

                          <div class="relative group overflow-hidden rounded-xl col-start-2 row-start-3">
                            <img class="rounded-xl shadow-xl border border-gray-200 w-full sm:size-80 object-cover" src="https://vmi.tv/wp-content/uploads/sites/3/2020/01/Summicron-C_40mm_horizontal_left-scaled-e1609928072225.jpg" alt="pictureUserA" />
                            <div class="absolute inset-0 flex items-end">
                              <div class="w-full bg-black bg-opacity-30 h-[30%] transform transition-transform duration-300 ease-in-out group-hover:translate-y-0 translate-y-full">
                                <div class="text-white p-4">description</div>
                              </div>
                            </div>
                          </div>

                          <div class="relative group overflow-hidden rounded-xl col-start-3 row-start-1">
                            <img class="rounded-xl shadow-xl border border-gray-200 w-full sm:size-80 object-cover" src="https://vmi.tv/wp-content/uploads/sites/3/2020/01/Summicron-C_40mm_horizontal_left-scaled-e1609928072225.jpg" alt="pictureUserA" />
                            <div class="absolute inset-0 flex items-end">
                              <div class="w-full bg-black bg-opacity-30 h-[30%] transform transition-transform duration-300 ease-in-out group-hover:translate-y-0 translate-y-full">
                                <div class="text-white p-4">description</div>
                              </div>
                            </div>
                          </div>

                          <div class="relative group overflow-hidden rounded-xl col-start-3 row-start-2">
                            <img class="rounded-xl shadow-xl border border-gray-200 w-full sm:size-80 object-cover" src="https://vmi.tv/wp-content/uploads/sites/3/2020/01/Summicron-C_40mm_horizontal_left-scaled-e1609928072225.jpg" alt="pictureUserA" />
                            <div class="absolute inset-0 flex items-end">
                              <div class="w-full bg-black bg-opacity-30 h-[30%] transform transition-transform duration-300 ease-in-out group-hover:translate-y-0 translate-y-full">
                                <div class="text-white p-4">description</div>
                              </div>
                            </div>
                          </div>

                          <div class="relative group overflow-hidden rounded-xl col-start-3 row-start-3">
                            <img class="rounded-xl shadow-xl border border-gray-200 w-full sm:size-80 object-cover" src="https://vmi.tv/wp-content/uploads/sites/3/2020/01/Summicron-C_40mm_horizontal_left-scaled-e1609928072225.jpg" alt="pictureUserA" />
                            <div class="absolute inset-0 flex items-end">
                              <div class="w-full bg-black bg-opacity-30 h-[30%] transform transition-transform duration-300 ease-in-out group-hover:translate-y-0 translate-y-full">
                                <div class="text-white p-4">description</div>
                              </div>
                            </div>
                          </div>

                          <div class="relative group overflow-hidden rounded-xl col-start-4 row-start-1">
                            <img class="rounded-xl shadow-xl border border-gray-200 w-full sm:size-80 object-cover" src="https://vmi.tv/wp-content/uploads/sites/3/2020/01/Summicron-C_40mm_horizontal_left-scaled-e1609928072225.jpg" alt="pictureUserA" />
                            <div class="absolute inset-0 flex items-end">
                              <div class="w-full bg-black bg-opacity-30 h-[30%] transform transition-transform duration-300 ease-in-out group-hover:translate-y-0 translate-y-full">
                                <div class="text-white p-4">description</div>
                              </div>
                            </div>
                          </div>

                          <div class="relative group overflow-hidden rounded-xl col-start-4 row-start-2">
                            <img class="rounded-xl shadow-xl border border-gray-200 w-full sm:size-80 object-cover" src="https://vmi.tv/wp-content/uploads/sites/3/2020/01/Summicron-C_40mm_horizontal_left-scaled-e1609928072225.jpg" alt="pictureUserA" />
                            <div class="absolute inset-0 flex items-end">
                              <div class="w-full bg-black bg-opacity-30 h-[30%] transform transition-transform duration-300 ease-in-out group-hover:translate-y-0 translate-y-full">
                                <div class="text-white p-4">description</div>
                              </div>
                            </div>
                          </div>

                          <div class="relative group overflow-hidden rounded-xl col-start-4 row-start-3">
                            <img class="rounded-xl shadow-xl border border-gray-200 w-full sm:size-80 object-cover" src="https://vmi.tv/wp-content/uploads/sites/3/2020/01/Summicron-C_40mm_horizontal_left-scaled-e1609928072225.jpg" alt="pictureUserA" />
                            <div class="absolute inset-0 flex items-end">
                              <div class="w-full bg-black bg-opacity-30 h-[30%] transform transition-transform duration-300 ease-in-out group-hover:translate-y-0 translate-y-full">
                                <div class="text-white p-4">description</div>
                              </div>
                            </div>
                          </div>
                      </div>
                      </div>               
                </div>
            </div>
            </div>
        </div>
        </div> 

        <div className="min-w-full mx-auto rounded-xl shadow-2xl">
        <div className="flex flex-col">
            <div className="-m-1.5 overflow-x-auto">
            <div className="p-1.5 min-w-full inline-block align-middle">
                <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
                    <div className="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-b border-gray-200 text-3xl font-bold">
                    People
                    </div>
                    
                    {posts.map((post, index) =>{
                    return(
                      <div className='flex p-4'>
                        <div className="flex-col w-full gap-4 cursor-pointer">
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
                            
                            <div onClick={(() => props.setTriggerPost(true))} class="relative group overflow-hidden rounded-xl">
                              <img class="w-full rounded-xl" src="https://images.unsplash.com/photo-1633114128174-2f8aa49759b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" alt="pictureUserA" />
                              <div class="absolute inset-0 flex items-end">
                                <div class="w-full bg-black bg-opacity-30 h-[30%] transform transition-transform duration-300 ease-in-out group-hover:translate-y-0 translate-y-full">
                                  <div class="text-white p-4">{post.description}</div>
                                </div>
                              </div>
                            </div>


                            <div className='relative flex justify-between'>
                              <div className='flex gap-1'>
                                <div className='flex font-bold items-center gap-1'>
                                  <button type="button" className="py-2 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-red-500 hover:bg-red-100 hover:text-red-800 disabled:opacity-50 disabled:pointer-events-none dark:hover:bg-red-800/30 dark:hover:text-red-400">
                                    <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                      <path stroke="red" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 11c.889-.086 1.416-.543 2.156-1.057a22.323 22.323 0 0 0 3.958-5.084 1.6 1.6 0 0 1 .582-.628 1.549 1.549 0 0 1 1.466-.087c.205.095.388.233.537.406a1.64 1.64 0 0 1 .384 1.279l-1.388 4.114M7 11H4v6.5A1.5 1.5 0 0 0 5.5 19v0A1.5 1.5 0 0 0 7 17.5V11Zm6.5-1h4.915c.286 0 .372.014.626.15.254.135.472.332.637.572a1.874 1.874 0 0 1 .215 1.673l-2.098 6.4C17.538 19.52 17.368 20 16.12 20c-2.303 0-4.79-.943-6.67-1.475"/>
                                    </svg>              
                                  </button>
                                  {post.numberLike}
                                </div>
                                <div className='flex font-bold items-center gap-1'>
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
                      </div>
                    )
                  })} 
                </div>
            </div>
            </div>
        </div>
        </div>  
        
    </div>
  );
};

export default SearchPage
