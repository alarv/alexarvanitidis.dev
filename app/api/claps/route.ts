import { Redis } from '@upstash/redis';
import { NextRequest } from 'next/server';
import { randomIntFromInterval } from '@/app/util/random';

export async function GET(request: NextRequest) {
  const redis = new Redis({
    url: process.env.UPSTASH_REDIS_REST_URL,
    token: process.env.UPSTASH_REDIS_REST_TOKEN,
  });

  const searchParams = request.nextUrl.searchParams;
  const url = searchParams.get('url')!;
  const claps = await redis.get(url);
  return new Response(JSON.stringify({ claps: claps || 0 }));
}

export async function POST(request: Request) {
  const redis = new Redis({
    url: process.env.UPSTASH_REDIS_REST_URL,
    token: process.env.UPSTASH_REDIS_REST_TOKEN,
  });

  const { url } = await request.json();

  let currentClaps = await redis.get(url);
  if (!currentClaps) currentClaps = randomIntFromInterval(1, 100).toString();
  await redis.set(url, Number(currentClaps) + 1);

  return new Response(JSON.stringify({ claps: Number(currentClaps) + 1 }));
}
