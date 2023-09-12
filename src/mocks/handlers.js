import { rest } from "msw";

const baseURL = "https://spanish-e3266f9308e3.herokuapp.com/";

export const handlers = [
  rest.get(`${baseURL}dj-rest-auth/user/`, (req, res, ctx) => {
    return res(ctx.json({
      })
    );
  }),
];