export const createAction = type => payload => ({
  type,
  payload,
});

export const test = 'test';

export const getIsMobile = () => {
  const data = {
    isMobile: false,
    isTablet: false,
  };

  if (navigator) {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const { userAgent } = navigator;
    if (userAgent.includes('Mobile')) {
      if (width < 768) {
        data.isMobile = true;
      }
      if (width > height) {
        data.isMobile = false;
        data.isTablet = true;
      }
      if (width >= 1280) {
        data.isTablet = false;
        data.isMobile = false;
      }
    }
  }

  return data;
};
