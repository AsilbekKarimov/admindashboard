import {
  IconPoint,
  IconNotes,
  IconCalendar,
  IconBorderAll,
  IconBorderHorizontal,
  IconBorderInner,
  IconBorderVertical,
  IconBorderTop,
  IconUserCircle,
  IconBasket,
  IconAperture,
  IconShoppingCart,
  IconBorderStyle2,
  IconHome,
  IconCategory2,
  IconTrendingUp,
  IconReportSearch,
  IconList,
} from '@tabler/icons';

import { uniqueId } from 'lodash';

const Menuitems = [
  {
    navlabel: true,
    subheader: 'Home',
  },

  {
    id: uniqueId(),
    title: 'Dashboard',
    icon: IconAperture,
    href: '/dashboards/modern',
    chip: 'New',
    chipColor: 'secondary',
  },
  {
    id: uniqueId(),
    title: 'eCommerce',
    icon: IconShoppingCart,
    href: '/dashboards/ecommerce',
  },
  {
    navlabel: true,
    subheader: 'Apps',
  },
  {
    id: uniqueId(),
    title: 'Ecommerce',
    icon: IconBasket,
    href: '/apps/ecommerce/',
    children: [
      {
        id: uniqueId(),
        title: 'Shop',
        icon: IconPoint,
        href: '/apps/ecommerce/shop',
      },
      {
        id: uniqueId(),
        title: 'Detail',
        icon: IconPoint,
        href: '/apps/ecommerce/detail/1',
      },
      {
        id: uniqueId(),
        title: 'List',
        icon: IconPoint,
        href: '/apps/ecommerce/eco-product-list',
      },
      {
        id: uniqueId(),
        title: 'Checkout',
        icon: IconPoint,
        href: '/apps/ecommerce/eco-checkout',
      },
    ],
  },
  {
    id: uniqueId(),
    title: 'Users',
    icon: IconUserCircle,
    href: '/user-profile',
    children: [
      {
        id: uniqueId(),
        title: 'Profile',
        icon: IconPoint,
        href: '/user-profile',
      },
      {
        id: uniqueId(),
        title: 'Followers',
        icon: IconPoint,
        href: '/apps/followers',
      },
      {
        id: uniqueId(),
        title: 'Friends',
        icon: IconPoint,
        href: '/apps/friends',
      },
      {
        id: uniqueId(),
        title: 'Gallery',
        icon: IconPoint,
        href: '/apps/gallery',
      },
    ],
  },
  {
    id: uniqueId(),
    title: 'Notes',
    icon: IconNotes,
    href: '/apps/notes',
  },
  {
    id: uniqueId(),
    title: 'Calendar',
    icon: IconCalendar,
    href: '/apps/calendar',
  },
  {
    id: uniqueId(),
    title: 'Branches',
    icon: IconHome,
    href: '/apps/branches',
  },
  {
    id: uniqueId(),
    title: 'Categories',
    icon: IconCategory2,
    href: '/apps/categories',
  },
  {
    id: uniqueId(),
    title: 'Reviews',
    icon: IconReportSearch,
    href: '/apps/reviews',
  },
  {
    id: uniqueId(),
    title: 'Orders',
    icon: IconList,
    href: '/apps/orders',
  },
  {
    id: uniqueId(),
    title: 'Incoming',
    icon: IconTrendingUp,
    href: '/apps/incoming',
  },
  {
    navlabel: true,
    subheader: 'Tables',
  },
  {
    id: uniqueId(),
    title: 'Basic',
    icon: IconBorderAll,
    href: '/tables/basic',
  },
  {
    id: uniqueId(),
    title: 'Collapsible',
    icon: IconBorderHorizontal,
    href: '/tables/collapsible',
  },
  {
    id: uniqueId(),
    title: 'Enhanced',
    icon: IconBorderInner,
    href: '/tables/enhanced',
  },
  {
    id: uniqueId(),
    title: 'Fixed Header',
    icon: IconBorderVertical,
    href: '/tables/fixed-header',
  },
  {
    id: uniqueId(),
    title: 'Pagination',
    icon: IconBorderTop,
    href: '/tables/pagination',
  },
  {
    id: uniqueId(),
    title: 'Search',
    icon: IconBorderStyle2,
    href: '/tables/search',
  },
];

export default Menuitems;
