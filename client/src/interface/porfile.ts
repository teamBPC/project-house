export interface LoginIdForm {
  userEmail: string;
}

export interface LoginPwForm {
  userPw: string;
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
