/**
 * @returns {boolean}
 */
export const isWindows = () => {
  // browser
  if (typeof window === 'object') {
    return (
      // @ts-expect-error some browsers support userAgentData.platform, not all though...
      window.navigator.userAgentData?.platform === 'Windows' ||
      window.navigator.userAgent.includes('Windows')
    );
  }
  // node
  return process?.platform === 'win32';
};
