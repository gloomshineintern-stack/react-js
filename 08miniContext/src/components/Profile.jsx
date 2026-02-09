import React, {useContext} from 'react'
import UserContext from '../Context/UserContext';

export default function Profile() {
  const {user} =useContext(UserContext);

  if(!user){
    return <div> Please Login </div>
  }

  return (
  <div className="justify-center items-center flex h-screen bg-[#1F1E1E] overflow-hidden">
    <div 
      className="text-2xl font-bold border-transparent shadow-2xl bg-[#80F218] p-20 rounded-lg"> Welcome {user.username} 
    </div>
  </div>);
}

