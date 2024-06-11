import mock from '../mock';

import FlagEn from '../../assets/images/flag/icon-flag-en.svg';
import FlagRu from '../../assets/images/flag/icon-flag-ru.svg';
import FlagUz from '../../assets/images/flag/icon-flag-uz.svg';

const LanguageData = [
  {
    id: 1,
    flagname: 'English',
    icon: FlagEn,
  },
  {
    id: 2,
    flagname: 'Russian',
    icon: FlagRu,
  },
  {
    id: 3,
    flagname: 'Uzbek',
    icon: FlagUz,
  },
];

mock.onGet('/api/data/language/LanguageData').reply(() => {
  return [200, LanguageData];
});

export default LanguageData;
