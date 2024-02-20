import MockAdapter from "axios-mock-adapter";

export const mockListBreedsQuery = (
  mock: MockAdapter,
  response = [
    { id: "breed1", name: "Breed 1" },
    { id: "breed2", name: "Breed 2" },
  ]
) => {
  mock.onGet("/breeds").replyOnce(200, response);
};

export const mockCatQuery = (mock: MockAdapter, id: string, response = {}) => {
  mock.onGet(`/images/${id}`).replyOnce(200, response);
};

export const mockListCatImagesQuery = (
  mock: MockAdapter,
  breed?: string,
  responese = [
    { id: "image1", url: "https://example.com/image1.jpg" },
    { id: "image2", url: "https://example.com/image2.jpg" },
  ]
) => {
  const params = {
    limit: process.env.VITE_API_LIMIT,
    page: 0,
    breed_ids: breed
  }
  mock
    .onGet(`/images/search`, {
      params
    })
    .replyOnce(200, responese);
};