import React from 'react'
import ChangeProfile from '../components/Profile/ChangeProfile';
import DeleteAllNotes from '../components/Profile/DeleteAllNotes';
import ChnagePassword from '../components/Profile/ChnagePassword';
import DeleteAccount from '../components/Profile/DeleteAccount';
import { useSelector } from 'react-redux';
import Loading from '../components/Loading';

const Profile = () => {

  const auth = useSelector(state=>state.auth);

  if( auth.loading ) {
    return <Loading></Loading>
  }

  return (
    <div className="flex w-11/12 max-w-[1160px] py-12 mx-auto gap-x-12 gap-y-10 justify-between flex-wrap">

      <div className="w-11/12 max-w-[500px] flex flex-col gap-y-12 flex-wrap justify-center mx-auto">

        <ChangeProfile></ChangeProfile>
        <DeleteAllNotes></DeleteAllNotes>

      </div>

      <div className="w-11/12 max-w-[500px] flex flex-col gap-y-12 flex-wrap justify-center mx-auto">

        <ChnagePassword></ChnagePassword>
        <DeleteAccount></DeleteAccount>
            
      </div>
    </div>
  )
}

export default Profile