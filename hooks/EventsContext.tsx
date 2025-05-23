import React, { createContext, ReactNode, useContext, useState } from "react";

type Event = {
  title: string;
  category: string;
  date: string;
  time: string;
  place: string;
  description: string;
};

type EventsContextType = {
  events: Event[];
  addEvent: (event: Event) => void;
};

const EventsContext = createContext<EventsContextType | undefined>(undefined);

export const EventsProvider = ({ children }: { children: ReactNode }) => {
  const [events, setEvents] = useState<Event[]>([
    {
      title: "Sample Event",
      category: "Workshop",
      date: "2025-06-01",
      time: "10:00",
      place: "Room 101",
      description: "Welcome to the first event!",
    },
  ]);

  const addEvent = (event: Event) => {
    setEvents((prevEvents) => [event, ...prevEvents]);
  };

  return (
    <EventsContext.Provider value={{ events, addEvent }}>
      {children}
    </EventsContext.Provider>
  );
};

// Custom hook for consuming context easily
export const useEvents = () => {
  const context = useContext(EventsContext);
  if (!context) {
    throw new Error("useEvents must be used within an EventsProvider");
  }
  return context;
};
