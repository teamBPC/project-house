export interface LoginIdForm {
  userId: string;
}

export interface JoinForm {
  userEmail: string;
  userNm: string;
  userPw: string;
  website?: string;
}

export interface ProfileForm {
  email: string;
  name: string;
  password: string;
}
