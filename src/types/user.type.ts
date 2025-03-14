export interface UserType {
  _id: string;
  username: string;
  displayName: string;
  email: string;
  password: string;
  avatar?: string;
  coverPhoto?: string;
  bio?: string;
  role: "USER";
  level: number;
  xp: number;
  xpToNextLevel: number;
  xpHistory: Array<{ action: string; amount: number; timestamp: Date }>;
  followers: string;
  following: string;
  badges: Array<{ name: string; icon: string }>;
  interests: string[];
  active: boolean;
  activeToken: string;
  createdAt: string;
  updatedAt: string;
}

export type UserLoginResType = Omit<
  UserType,
  "password" | "followers" | "following" | "badges" | "activeToken" | "xpHistory"
>;
