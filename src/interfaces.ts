export interface IUser {
  avatar_url: string;
  display_name: string;
  open_id: string;
  error: {
    code: string;
    message: string;
  };
}
