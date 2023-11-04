import React, { FC, PropsWithChildren } from 'react';

interface CategoriesProps {}

const Categories: FC<PropsWithChildren<CategoriesProps>> = () => (
  <section className="categories flex flex-col">
    <h2>Our Collection</h2>
  </section>
);

export default Categories;
