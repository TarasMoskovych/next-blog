import { isValidSignature, SIGNATURE_HEADER_NAME } from '@sanity/webhook';
import { NextApiRequest, NextApiResponse } from 'next';

const SANITY_WEBHOOK_SECRET = process.env.SANITY_WEBHOOK_SECRET as string;

type Data = {
  revalidated?: boolean;
  message?: string;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const signature = req.headers[SIGNATURE_HEADER_NAME] as string;
  const isValid = isValidSignature(JSON.stringify(req.body), signature, SANITY_WEBHOOK_SECRET);
  const slug = req.body.slug;

  console.log('===== isValidSignature =====', isValid);

  if (!isValid) {
    res.status(401).json({ revalidated: false, message: 'Invalid signature' });
    return;
  }

  await revalidate('/', res);
  await revalidate(`/blogs/${slug}`, res);

  res.status(200).json({ revalidated: true });
}

const revalidate = async (path: string, res: NextApiResponse<Data>) => {
  if (!path) {
    return console.warn('===== No path to revalidate =====', path);
  }

  try {
    await res.revalidate(path);
    console.log(`===== Revalidated: ${path} =====`);
  } catch (err) {
    console.error(`===== Error while revalidating: ${path} =====`);
    res.status(500).send({ message: 'Error while revalidating' });
  }
};
