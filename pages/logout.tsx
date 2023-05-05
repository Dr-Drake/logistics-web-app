import { PageLoader } from '@/components/Reusables/Loaders/PageLoader';
import { useAppDispatch } from '@/utils/hooks/useReduxHooks';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { resetAuthState } from 'store/auth/slice';

const Logout = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  useEffect(() => {
    // Clear all states
    dispatch(resetAuthState());

    // Clear all tokens
    localStorage.clear();

    // Push to login page
    router.push('/sign-in');
    // eslint-disable-next-line
  }, []);

  return <PageLoader message="Logging out" />;
};

export default Logout;
