import { rest } from 'msw';
import { setupServer } from 'msw/node';
import {
  currentUserResult,
  searchResult,
  userPlaylistResult,
} from './response';

export const server = setupServer(
  rest.get(`https://api.spotify.com/v1/search`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(searchResult));
  }),
  rest.get(`https://api.spotify.com/v1/me`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(currentUserResult));
  }),
  rest.get(`https://api.spotify.com/v1/me/playlists`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(userPlaylistResult));
  })
);
