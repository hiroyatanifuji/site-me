import { NextApiRequest, NextApiResponse } from 'next';
import UserModel from '../../models/user';

export default async (req: NextApiRequest, res: NextApiResponse<UserModel.User>) => {
  if (req.method === 'GET') {
    const user: UserModel.User = {
      iconUrl: '/images/icons/profile-icon.png',
      name: 'Hiroya Tanifuji',
      info: 'Software Engineer',
    };
    res.status(200).json(user);
    return;
  } else {
    res.status(404).end();
    return;
  }
};
