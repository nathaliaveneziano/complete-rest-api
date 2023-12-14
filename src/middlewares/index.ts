import * as express from 'express';
import { merge } from 'lodash';
import { getUserBySessionoken } from '../db/users';

export const isAuthenticated = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  try {
    const sessionToken = req.cookies['NATH-DEV-AUTH'];

    // Validação de cookie
    if (!sessionToken) {
      return res.sendStatus(403);
    }

    const existingUser = await getUserBySessionoken(sessionToken);

    // Validação de usuário
    if (!existingUser) {
      return res.sendStatus(403);
    }

    merge(req, { identity: existingUser });

    return next();
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};
