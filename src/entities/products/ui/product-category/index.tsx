import React from 'react';

const categories = [
  {
    id: 1,
    name: 'Детские товары',
    parent_id: 0,
  },
  {
    id: 2,
    name: 'Игрушки и игры',
    parent_id: 1,
  },
  {
    id: 3,
    name: 'Книги для детей',
    parent_id: 1,
  },
  {
    id: 4,
    name: 'Детская одежда и обувь',
    parent_id: 1,
  },
  {
    id: 5,
    name: 'Конструкторы',
    parent_id: 2,
  },
  {
    id: 6,
    name: 'Мягкие игрушки',
    parent_id: 2,
  },
  {
    id: 7,
    name: 'Настольные игры',
    parent_id: 2,
  },
  {
    id: 8,
    name: 'Куклы',
    parent_id: 2,
  },
];
const getCategory = (category_id: number) =>
  categories.filter(i => i.id === category_id)[0]?.name;

export const ProductCategory: React.FC<{ category_id: number }> = ({
  category_id,
}) => {
  const category = getCategory(category_id);
  return (
    category && (
      <div className="absolute bottom-2 left-2 py-1 px-2 bg-green-300 z-10 rounded-full">
        {category}
      </div>
    )
  );
};
