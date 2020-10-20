// api/dictionary.js

import { fetch } from '@/utils/axios'

export const DictionaryList = () => fetch({ url: `/dictionary/list`, type: 'get' })
