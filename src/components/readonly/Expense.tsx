import React from 'react';
import { ExpenseAsStringType } from '../../types/model';

export default function Expense({
  item: { amount, categoryName, tagNames },
}: {
  item: ExpenseAsStringType;
}) {
  return (
    // TODO: make prettier
    <span>{`${amount} Ft - ${categoryName} ${tagNames
      .map((tag) => tag.toUpperCase())
      .join(' ')}`}</span>
  );
}
