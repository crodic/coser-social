"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Settings, Heart, MessageCircle, AlertTriangle, Bell } from "lucide-react";

interface Notification {
  id: string;
  type: "follow" | "like" | "comment" | "system";
  user?: {
    name: string;
    image: string;
    initials: string;
  };
  action: string;
  target?: string;
  timestamp: string;
  read: boolean;
}

const notifications: Notification[] = [
  {
    id: "1",
    type: "follow",
    user: {
      name: "Brigid Dawson",
      image: "/placeholder.svg?height=40&width=40",
      initials: "BD",
    },
    action: "followed you",
    timestamp: "4 hours ago",
    read: false,
  },
  {
    id: "2",
    type: "like",
    user: {
      name: "John Dwyer",
      image: "/placeholder.svg?height=40&width=40",
      initials: "JD",
    },
    action: "liked",
    target: "your post",
    timestamp: "Yesterday",
    read: false,
  },
  {
    id: "3",
    type: "like",
    user: {
      name: "Tim Hellman",
      image: "/placeholder.svg?height=40&width=40",
      initials: "TH",
    },
    action: "liked",
    target: "your post",
    timestamp: "Tuesday",
    read: true,
  },
  {
    id: "4",
    type: "system",
    action: "Running low on storage space",
    timestamp: "Monday",
    read: true,
  },
  {
    id: "5",
    type: "comment",
    user: {
      name: "Shannon Shaw",
      image: "/placeholder.svg?height=40&width=40",
      initials: "SS",
    },
    action: "commented on",
    target: "your post",
    timestamp: "4 days ago",
    read: true,
  },
];

export default function NotificationsPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [notificationsList, setNotificationsList] = useState(notifications);

  const markAllAsRead = () => {
    setNotificationsList(
      notificationsList.map((notification) => ({
        ...notification,
        read: true,
      })),
    );
  };

  const unreadCount = notificationsList.filter((n) => !n.read).length;

  return (
    <div className="relative">
      <Button variant="ghost" size="icon" className="relative" onClick={() => setIsOpen(!isOpen)}>
        <Bell className="size-6" />
        {unreadCount > 0 && (
          <span className="absolute top-0 right-0 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs font-medium text-white">
            {unreadCount}
          </span>
        )}
      </Button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className="fixed inset-0 z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              className="absolute right-0 z-50 mt-2 w-[380px] overflow-hidden rounded-lg bg-white shadow-lg"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex items-center justify-between px-4 py-3 pb-0">
                <h2 className="text-lg font-semibold">Thông báo</h2>
                <Button variant="ghost" size="icon" onClick={markAllAsRead}>
                  <Settings className="h-5 w-5" />
                </Button>
              </div>

              <ScrollArea className="h-[400px]">
                <div className="divide-y">
                  {notificationsList.map((notification) => (
                    <motion.div
                      key={notification.id}
                      className="flex items-start gap-3 px-4 py-3 hover:bg-gray-50"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.2 }}
                    >
                      {notification.type === "system" ? (
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-200">
                          <AlertTriangle className="h-5 w-5 text-gray-600" />
                        </div>
                      ) : (
                        <div className="relative">
                          <Avatar className="h-10 w-10">
                            <AvatarImage src={notification.user?.image} alt={notification.user?.name} />
                            <AvatarFallback>{notification.user?.initials}</AvatarFallback>
                          </Avatar>
                          {notification.type === "like" && (
                            <div className="absolute -right-1 -bottom-1 rounded-full bg-white p-0.5">
                              <Heart className="h-4 w-4 fill-red-500 stroke-red-500" />
                            </div>
                          )}
                          {notification.type === "comment" && (
                            <div className="absolute -right-1 -bottom-1 rounded-full bg-white p-0.5">
                              <MessageCircle className="h-4 w-4 fill-blue-500 stroke-blue-500" />
                            </div>
                          )}
                        </div>
                      )}
                      <div className="flex-1">
                        <p className="text-sm">
                          {notification.user && <span className="font-semibold">{notification.user.name} </span>}
                          <span className="text-gray-600">{notification.action}</span>
                          {notification.target && <span className="font-semibold"> {notification.target}</span>}
                        </p>
                        <p className="text-xs text-gray-500">{notification.timestamp}</p>
                      </div>
                      {!notification.read && <div className="h-2 w-2 rounded-full bg-teal-400" />}
                    </motion.div>
                  ))}
                </div>

                <div className="p-4 pb-0 text-center">
                  <Button variant="ghost" className="text-sm text-teal-500 hover:text-teal-600">
                    See all recent activity
                  </Button>
                </div>
              </ScrollArea>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
