'use client';

import { Button } from '@/components/ui/button';
import { HandThumbUpIcon, HeartIcon } from '@heroicons/react/24/solid';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import useSWR from 'swr';
import { motion, AnimatePresence } from 'framer-motion';

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
  const [hearts, setHearts] = useState<number[]>([]);

  useSWR(`/api/claps?url=${pathname}`, async (url: string) => {
    const res = await fetch(url);
    const data = await res.json();
    setClaps(data.claps);
    return data;
  });

  const handleClick = () => {
    setClaps(claps + 1);
    setHasBeenClicked(true);
    incrementClaps(pathname);

    // Add a new heart with a unique key
    setHearts((prev) => [...prev, Date.now()]);
  };

  return (
    <div className="relative flex justify-center items-center w-20 h-20">
      <Button
        variant="secondary"
        onClick={handleClick}
        size='lg'
        className="relative"
      >
        <motion.div
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 0.3 }}
        >
          <HeartIcon
            className={`h-8 w-8 transition-transform duration-500 ${
              hasBeenClicked ? 'text-red-500' : 'text-gray-400'
            }`}
          />
        </motion.div>
        {claps}
      </Button>

      {/* Floating hearts animation */}
      <AnimatePresence>
        {hearts.map((heart) => (
          <motion.div
            key={heart}
            initial={{ opacity: 1, y: 0, scale: 0.8 }}
            animate={{ opacity: 0, y: -40, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="absolute"
          >
            <HeartIcon className="h-6 w-6 text-red-400" />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
