import axiosInstance from "./index";

export const communityListRequest = async (page) => {
  const res = await axiosInstance.get(
    `/community?page=${page}&order=createdAt`
  );
  return res.data;
};

export const communityCreateRequest = async (
  name,
  communityImage,
  introduction,
  token
) => {
  const formData = new FormData();
  formData.append("name", name);
  formData.append("communityImage", communityImage);
  formData.append("introduction", introduction);
  const res = await axiosInstance.post("/community", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${token}`,
    },
  });
  return res;
};

export const communityLikeRequest = async (communityId, token) => {
  const res = await axiosInstance.post(
    `/community/${communityId}/like`,
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return res;
};

export const communityUnLikeRequest = async (communityId, token) => {
  const res = await axiosInstance.post(
    `/community/${communityId}/nolike`,
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return res;
};
