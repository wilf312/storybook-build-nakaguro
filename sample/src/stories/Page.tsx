import React from 'react';

import './page.css';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { schema, SchemaType } from './schema';

export const Page: React.FC = () => {
  const methods = useForm<SchemaType>({
    resolver: zodResolver(schema),
    mode: 'onTouched',
    defaultValues: {
      ネスト: {
        '中黒・あり': 'default value',
      },
    },
  });

  const onSubmit = (data: SchemaType) => {
    console.log(JSON.stringify(data, null, 2));
  };

  return (
    <article>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <input {...methods.register('ネスト.中黒・あり')} />
      </form>
    </article>
  );
};
