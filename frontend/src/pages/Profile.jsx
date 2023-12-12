import React from 'react'
import ChangeProfile from '../components/Profile/ChangeProfile';
import DeleteAllNotes from '../components/Profile/DeleteAllNotes';
import ChnagePassword from '../components/Profile/ChnagePassword';
import DeleteAccount from '../components/Profile/DeleteAccount';

const Profile = () => {

  return (
    <div className="flex w-11/12 max-w-[1160px] py-4 pt-8 mx-auto gap-x-12 gap-y-0 justify-between flex-wrap gap-12">

      <div className="w-11/12 max-w-[500px] flex flex-col gap-y-12 flex-wrap justify-center">

        <ChangeProfile></ChangeProfile>
        <DeleteAllNotes></DeleteAllNotes>

      </div>

      <div className="w-11/12 max-w-[500px] flex flex-col gap-y-12 flex-wrap justify-center">

        <ChnagePassword></ChnagePassword>
        <DeleteAccount></DeleteAccount>
            
      </div>


    </div>
  )
}

export default Profile