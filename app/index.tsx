import { useHeaderHeight } from '@react-navigation/elements';
import { LegendList } from '@legendapp/list';
import { cssInterop } from 'nativewind';
import * as React from 'react';
import { Linking, useWindowDimensions, View, Alert } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import {
  ESTIMATED_ITEM_HEIGHT,
  List,
  ListItem,
  ListSectionHeader
} from '~/components/nativewindui/List';
import { Icon } from '@roninoss/icons';

import { Text } from '~/components/nativewindui/Text';

import { useColorScheme } from '~/lib/useColorScheme';
import { useHeaderSearchBar } from '~/lib/useHeaderSearchBar';
import { Link } from 'expo-router';


export default function Screen() {
  // const searchValue = useHeaderSearchBar({ hideWhenScrolling: COMPONENTS.length === 0 });

  // const data = searchValue
  //   ? COMPONENTS.filter((c) => c.name.toLowerCase().includes(searchValue.toLowerCase()))
  //   : COMPONENTS;

  const DEMO_PAGES = [
    {
      id: '1',
      title: 'Hello',
      subTitle: 'World',
      isFirstInSection: true,
      href: '/demo/text-demo',
    },
    {
      id: '2',
      title: 'Hello',
      subTitle: 'World',
      href: '/demo/action-sheet-demo',
      isLastInSection: true,
    },


  ]

  return (
    <List
      variant='insets'
      contentInsetAdjustmentBehavior="automatic"
      data={DEMO_PAGES}
      estimatedItemSize={ESTIMATED_ITEM_HEIGHT.withSubTitle}
      renderItem={(info) => {
        return <Link asChild href={(info.item as any).href}><ListItem {...info} /></Link>;
      }}
      keyExtractor={(item) => (item as any).id}
    />
  );
}

