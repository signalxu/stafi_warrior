import React from 'react';
import Head from 'next/head';


type RewardsProps = {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  pathname?: string;
};

export function RewardsCard({
  title = 'test',
  description = 'test',
  image,
  url = "https://test.com",
  pathname,

}:RewardsProps){


}