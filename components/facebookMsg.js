"use client";
import React from 'react';
import { FacebookProvider, CustomChat } from 'react-facebook';

const facebookMsg = () => {
  return (
    <FacebookProvider appId="1137987444280593" chatSupport>
        <CustomChat pageId="105681252100762" minimized={true}/>
    </FacebookProvider> 
  );
}

export default facebookMsg;
