import React from 'react'
import UserStack from './UserStack';
import AuthStack from './AuthStack';
import Loader from '../components/shared/Loader';




export default function NavigationStack() {
  const { loader } = useSelector((state) => state.general);
  const isLogin = false;
  //const loader = true;
  return (
    <>
    {
      isLogin ? <UserStack /> : <AuthStack />
    }
    {
      loader && <Loader Loader={loader} />
    }
    </>
  )
}