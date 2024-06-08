import React from 'react'
import UserStack from './UserStack';
import AuthStack from './AuthStack';
import Loader from '../components/shared/loader';
import { useSelector } from 'react-redux';




export default function NavigationStack() {
  const { loader } = useSelector((state) => state.general);
  const isLogin = true;

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