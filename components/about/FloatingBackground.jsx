import React from 'react';

const FloatingBackground = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      <div className="absolute top-10 left-10 w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 bg-blue-200/20 dark:bg-blue-800/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 sm:w-48 sm:h-48 lg:w-60 lg:h-60 bg-purple-200/20 dark:bg-purple-800/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/4 w-20 h-20 sm:w-28 sm:h-28 lg:w-36 lg:h-36 bg-pink-200/20 dark:bg-pink-800/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
    </div>
  );
};

export default FloatingBackground;
