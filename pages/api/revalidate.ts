import { isValidSignature, SIGNATURE_HEADER_NAME } from '@sanity/webhook';
import { NextApiRequest, NextApiResponse } from 'next';

const SANITY_WEBHOOK_SECRET = process.env.SANITY_WEBHOOK_SECRET as string;

type Data = {
  revalidated?: boolean;
  message?: string;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const signature = req.headers[SIGNATURE_HEADER_NAME] as string;
  const body = await readBody(req);
  const isValid = isValidSignature(body, signature, SANITY_WEBHOOK_SECRET);

  if (!isValid) {
    res.status(401).json({ revalidated: false, message: 'Invalid signature' });
    return;
  }

  try {
    const pathToRevalidate = `/blogs/${JSON.parse(body).slug}`;
    console.log(`===== Revalidating: ${pathToRevalidate}`);

    await res.revalidate(pathToRevalidate);
    await res.revalidate('/');
    return res.status(200).json({ revalidated: true });
  } catch (err) {
    // Could not revalidate. The stale page will continue to be shown until
    // this issue is fixed.
    console.log(err);
    return res.status(500).send({ message: 'Error while revalidating' });
  }
}

export const config = {
  api: {
    bodyParser: false,
  },
};

async function readBody(readable: any) {
  const chunks = [];

  for await (const chunk of readable) {
    chunks.push(typeof chunk === 'string' ? Buffer.from(chunk) : chunk);
  }

  return Buffer.concat(chunks).toString('utf8');
}
