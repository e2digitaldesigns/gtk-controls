export const getUserId = () => {
  const url = new URL(window.location.href);
  const pathParts = url.pathname.split("/");
  return pathParts[2];
};
