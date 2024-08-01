export const getUser = () => {
  const url = new URL(window.location.href);
  const searchParams = new URLSearchParams(url.search);

  return searchParams.get("user");
};
