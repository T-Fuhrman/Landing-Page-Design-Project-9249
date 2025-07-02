import React, { useEffect } from 'react';
import { GetStarted } from '@questlabs/react-sdk';
import { questConfig } from '../config/questConfig';

const GetStartedComponent = () => {
  useEffect(() => {
    // Generate or retrieve userId from localStorage
    if (!localStorage.getItem('userId')) {
      localStorage.setItem('userId', questConfig.USER_ID);
    }
  }, []);

  return (
    <div className="w-full max-w-4xl mx-auto p-6">
      <GetStarted
        questId={questConfig.GET_STARTED_QUESTID}
        uniqueUserId={localStorage.getItem('userId') || questConfig.USER_ID}
        accent={questConfig.PRIMARY_COLOR}
        autoHide={false}
      >
        <GetStarted.Header />
        <GetStarted.Progress />
        <GetStarted.Content />
        <GetStarted.Footer />
      </GetStarted>
    </div>
  );
};

export default GetStartedComponent;