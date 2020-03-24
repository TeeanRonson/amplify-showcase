export interface UserBasicInfo {
  sub?: string;
  profileIcon?: string;
  firstName?: string;
  lastName?: string;
  headline?: string;
  location?: string;
  about?: string;
}

export interface UserActivity {
  id?: number;
  profileIcon?: string;
  activity?: string;
  date?: Date;
}
