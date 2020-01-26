import React from 'react';

type item = {
  name: string;
  description: string;
  url: string;
  comment: string;
};

type CategoryProps = { categoryName: string; items: Array<item> };

export const Category = ({ categoryName, items }: CategoryProps) => {
  return (
    <>
      <div className='CategoryHeader'>...{categoryName.toLowerCase()}</div>
      <ul className='CategoryList'>
        {items.map((item, index) => (
          <li className='CategoryItem' key={index}>
            <a href={item.url}>[{item.name.toLowerCase()}]</a>{' '}
            {item.description}{' '}
            <span className='Comment'> //{item.comment}</span>
          </li>
        ))}
      </ul>
    </>
  );
};
