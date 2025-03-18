'use client';

import { Button } from '@/components/ui/button';
import { HandThumbUpIcon, HeartIcon } from '@heroicons/react/24/solid';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import useSWR from 'swr';

async function incrementClaps(url: string) {
  const res = await fetch('/api/claps', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ url }),
  });

  return await res.json();
}

export default function Claps() {
  const pathname = usePathname();
  const [claps, setClaps] = useState(0);
  const [hasBeenClicked, setHasBeenClicked] = useState(false);
  useSWR(`/api/claps?url=${pathname}`, async (url: string) => {
    const res = await fetch(url);
    const data = await res.json();
    setClaps(data.claps);
    return data;
  });

  return (
    <div>
        <Button
          variant="secondary"
          onClick={() => {
            setClaps(claps + 1);
            setHasBeenClicked(true);
            incrementClaps(pathname);
          }}
          size='lg'
        >
          <HeartIcon
            className={`h-6 w-6 transition-transform duration-500 ${
              hasBeenClicked ? 'text-red-500' : 'animate-bounce text-gray-400'
            }`}
          />
          {claps}
        </Button>
    </div>
  );
}
