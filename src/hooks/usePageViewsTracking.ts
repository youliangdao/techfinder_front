import { getAnalytics, logEvent } from 'firebase/analytics';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const usePageViewsTracking = () => {
  const location = useLocation();
  const analytics = getAnalytics();
  useEffect(() => {
    logEvent(analytics, 'page_view', {
      page_title: document.title,
      page_location: location.pathname + location.search,
    });
  }, [location, analytics]);
};
