export enum ResumeEditProfileFormProperties {
  Profile = 'profile'
}
export type ResumeEditProfileFormData = {
  [P in ResumeEditProfileFormProperties]: string;
};

export const RESUME_EDIT_PROFILE_FORM_GROUP = {
  [ResumeEditProfileFormProperties.Profile]: ''
};
