export const checkProfileImage = (cast , src) => {
  return cast.profile_path ? `${src}${cast.profile_path}` : `/default_icon.svg`;
}