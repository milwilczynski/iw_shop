import React, { FC, PropsWithChildren } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Card, CardBody, CardHeader } from '@nextui-org/card';
import { Image, Progress } from '@nextui-org/react';

interface InternalCardProps {}

const InternalCard: FC<PropsWithChildren<InternalCardProps>> = () => (
  <Card isPressable isHoverable className="max-w-full p-10 pt-5" shadow="sm">
    <CardHeader className="pb-0 pt-2 px-4 flex-col items-center">
      <Image
        alt="Card background"
        className="object-cover rounded-xl"
        src="https://nextui.org/images/hero-card-complete.jpeg"
        width={270}
      />
    </CardHeader>
    <CardBody className="overflow-visible py-2 text-primary">
      <h2 className="text-large font-bold text-default-500">
        Dziewczyna z zapałkami
      </h2>
      <div className="flex flex-col">
        <Progress aria-label="Rating" value={60} className="max-w-md mt-1" />
        <div className="flex w-full justify-end text-tiny text-default-500">
          Ponad 292 opinii
        </div>
      </div>
      <div className="flex text-large text-primary">€39.99</div>
      <div className="text-default-500">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed
        justo elementum dolor viverra semper. Vivamus vitae dolor malesuada,
        porta sapien id, porttitor urna. Fusce sodales, risus in porta accumsan,
        metus libero condimentum purus, non venenatis orci dolor sed neque. Nam
        dignissim ligula sit amet suscipit euismod.
      </div>
    </CardBody>
  </Card>
);

export default InternalCard;
