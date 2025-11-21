import React, { createContext, useState, useEffect } from "react";
import sample from "../data/services";

export const DataContext = createContext();

export function DataProvider({ children }){
  const [services, setServices] = useState(() => {
    const saved = localStorage.getItem("lsf_services");
    return saved ? JSON.parse(saved) : sample;
  });

  const [bookings, setBookings] = useState(() => {
    const saved = localStorage.getItem("lsf_bookings");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => localStorage.setItem("lsf_services", JSON.stringify(services)), [services]);
  useEffect(() => localStorage.setItem("lsf_bookings", JSON.stringify(bookings)), [bookings]);

  const addBooking = (b) => setBookings(prev => [b, ...prev]);
  const addReviewToService = (serviceId, review) => {
    setServices(prev => 
      prev.map(s => s.id === serviceId ? 
        { ...s,
         reviews: [review, ...(s.reviews||[])],
         rating: Math.round(
          ((s.rating*(s.reviews?.length||0)) + review.rating) /
          ((s.reviews?.length||0)+1) *
           10
          ) / 10 
        }
         : s
        )
      );
  };

  return <DataContext.Provider value={{ services, bookings, addBooking, addReviewToService }}>{children}</DataContext.Provider>;
}


