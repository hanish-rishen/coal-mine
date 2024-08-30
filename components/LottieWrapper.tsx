'use client'

import React from 'react';
import Lottie from 'lottie-react';
import type { LottieComponentProps } from 'lottie-react';

const LottieWrapper: React.FC<LottieComponentProps> = (props) => {
  return <Lottie {...props} />;
};

export default LottieWrapper;