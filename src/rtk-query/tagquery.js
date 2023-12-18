import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const operatorTagApi = createApi({
  reducerPath: 'operatorTag',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://aceship.github.io/AN-EN-Tags/json/tl-tags.json' }),
  endpoints: (builder) => ({
    getOperatorTag: builder.query({
      query: (_) => '',
      transformResponse: (response) => {
        const data = {
          translate: {},
          classification: {},
        };

        response.map((tag) => {
          const { tag_en: tagName, type, tag_cn: cnTagName } = tag;

          if (type !== '') {
            if (!(type in data.classification)) {
              data.classification[type] = [];
            }
            data.classification[type].push(tagName);
            data.translate[cnTagName] = tagName;
          }
        });

        // Cleansing duplicates
        for (const [key, value] of Object.entries(data.classification)) {
          data.classification[key] = Array.from(new Set(value));
        }

        return data;
      },
    }),
  }),
});

export const { useGetOperatorTagQuery } = operatorTagApi;