import React, { FC, PropsWithChildren, useState } from 'react';
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Image,
  Progress,
} from '@nextui-org/react';
import styles from './ProductCard.module.scss';

interface ProductCardProps {
  title: string;
  img: string;
  price: string;
}

const ProductCard: FC<PropsWithChildren<ProductCardProps>> = ({
  title,
  img,
  price,
}) => {
  const [buy, setBuy] = useState<boolean>(false);
  const [isFavorite, setIsFavorite] = useState<boolean>(false);
  return (
    <Card
      isPressable
      as="a"
      href={`?${title}`}
      radius="sm"
      className={`${styles.card}`}
      key={title}
      shadow="sm"
    >
      <CardFooter className={`justify-between ${styles.cardFooter}`}>
        <Button
          radius="lg"
          className={styles.button}
          onClick={(event) => {
            event.preventDefault();
            setIsFavorite((prevState) => !prevState);
          }}
        >
          <span className="material-icons-round">
            {isFavorite ? 'star' : 'star_outline'}
          </span>
        </Button>
        <Button
          radius="lg"
          onClick={(event) => {
            event.preventDefault();
            setBuy((prevState) => !prevState);
          }}
          className={styles.button}
          as="div"
        >
          {!buy ? (
            <span className="material-symbols-outlined">shopping_cart</span>
          ) : (
            <span className="material-symbols-outlined">
              remove_shopping_cart
            </span>
          )}
        </Button>
      </CardFooter>
      <CardHeader className={styles.cardHeader}>
        <Image
          isZoomed
          isBlurred
          radius="sm"
          loading="lazy"
          shadow="sm"
          alt="Card background"
          src={img}
          width="100%"
          className="object-cover"
        />
      </CardHeader>
      <CardBody className={styles.cardBody}>
        <h2 className="text-large font-bold text-default-500">{title}</h2>
        <div className="flex flex-col">
          <Progress aria-label="Rating" value={60} className="mt-1" />
          <div className="flex w-full justify-end text-tiny text-default-500">
            Ponad 292 opinii
          </div>
        </div>
        <div className="flex text-large text-primary">{price}</div>
      </CardBody>
    </Card>
  );
};

export default ProductCard;
