import React, { useContext, useRef, useEffect, useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { useInfiniteQuery } from '@tanstack/react-query';
import { getNotification } from '../api/NotificationAPI';
import { AppContext } from '../contextAPI/AppContext';
import { format } from 'timeago.js';
import gsap from 'gsap';

const NotificationSection = ({ hasFetched, setHasFetched }) => {
  const { user } = useContext(AppContext);
  const observerRef = useRef(null);
  const spinnerRef = useRef(null);

  const fetchNotifications = async ({ pageParam = 1 }) => {
    const result = await getNotification(user.token, pageParam, 10);
    return result.data.notifications;
  };

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    refetch
  } = useInfiniteQuery({
    queryKey: ['notifications'],
    queryFn: fetchNotifications,
    getNextPageParam: (lastPage, pages) => (lastPage.length ? pages.length + 1 : undefined),
    enabled: !hasFetched, 
  });

  useEffect(() => {
    if (!hasNextPage || !observerRef.current) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        fetchNextPage();
      }
    }, { threshold: 1 });

    observer.observe(observerRef.current);
    return () => observer.disconnect();
  }, [fetchNextPage, hasNextPage]);

  useEffect(() => {
    if (!hasFetched) {
      setHasFetched(true); 
    }
  }, []);

    const handleRefresh = () => {
      const spinnerAnimation = gsap.to(spinnerRef.current,{ 
        duration:1,
        rotation: "+=360", 
        ease: "linear",
        repeat:-1
      }) 
      refetch()
      setTimeout(() => {
        spinnerAnimation.pause();
      }, 3000);
    };

  return (
    <div className='h-full w-full'>
      <button
        ref={spinnerRef}
        className='absolute right-0 top-0 mr-6 mt-1.5 px-1 scale-10 bg-white rounded-full'
        onClick={handleRefresh}
      >
        <i className="ri-refresh-line"></i>
      </button>

      <div className='h-5 w-5 fixed rounded-full flex items-center justify-center bg-white'>
        <i className='ri-close-line'></i>
      </div>

      <div className='h-fit w-full overflow-y-auto'>
      {new Date(user.createdAt).getTime() >= Date.now() - 2 * 24 * 60 * 60 * 1000 && (
        <ul className="h-14 mt-6 mb-1 rounded-md w-full flex items-center bg-slate-100 px-4 shadow-sm">
          <i className="ri-megaphone-line text-lg text-blue-600 mr-2"></i>
          <p className="text-sm font-medium text-gray-800 overflow-ellipsis whitespace-nowrap max-w-40">
            Welcome to Univens🎉
          </p>
        </ul>
      )}

        {data?.pages?.flat().map((notification) => (
          <ul key={notification._id} className="h-auto w-full mt-1 mb-1 p-3 rounded-md bg-slate-100 shadow-sm border border-gray-200 flex items-start gap-3">
            <LazyLoadImage
              src={notification.senderId?.profilePic || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIRR8brJpXF3vGjGa6wg-2z3Xo_OqJL2G3vg&s"}
              alt="User"
              effect="blur"
              height={100}
              width={100}
              className="h-10 w-10 rounded-full object-cover shadow-sm"
              referrerPolicy="no-referrer"
            />
            <div className="flex flex-col">
              <p className="text-sm text-gray-700">
                <span className="font-semibold text-black">{notification.senderId?.fullname || 'Unknown'}:&nbsp;</span>  
                {notification.message}
              </p>
              <span className="text-xs text-gray-400 mt-1">{ format(notification.createdAt) }</span>
            </div>
          </ul>
        ))}

        <div ref={observerRef} />
        {isFetchingNextPage && <p className="text-center text-gray-500">Loading more...</p>}
      </div>
    </div>
  );
};

export default NotificationSection;
