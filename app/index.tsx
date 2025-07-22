import { AdaptiveSearchHeader } from '~/components/nativewindui/AdaptiveSearchHeader';
import { ESTIMATED_ITEM_HEIGHT, List, ListItem } from '~/components/nativewindui/List';
import { Link, router } from 'expo-router';
import { useState, useRef } from 'react';
import type { AdaptiveSearchBarRef } from '~/components/nativewindui/AdaptiveSearchHeader/types';

export default function Screen() {
  const [searchValue, setSearchValue] = useState('');
  const searchRef = useRef<AdaptiveSearchBarRef | null>(null);

  console.log('Search value:', searchValue); // Debug log

  const DEMO_PAGES = [
    {
      id: '1',
      title: 'Text Demo',
      subTitle: 'Typography components and variants',
      isFirstInSection: true,
      href: '/demo/text-demo',
    },
    {
      id: '2',
      title: 'Action Sheet',
      subTitle: 'Native action sheets with theme support',
      href: '/demo/action-sheet-demo',
    },
    {
      id: '3',
      title: 'Activity Indicator',
      subTitle: 'Loading indicators with custom styling',
      href: '/demo/activity-indicator-demo',
      isLastInSection: true,
    },
  ];

  // Filter data based on search query
  const filteredData = searchValue
    ? DEMO_PAGES.filter(
      (item) =>
        item.title.toLowerCase().includes(searchValue.toLowerCase()) ||
        item.subTitle.toLowerCase().includes(searchValue.toLowerCase())
    )
    : DEMO_PAGES;

  console.log('Filtered data length:', filteredData.length); // Debug log

  // Update section flags for filtered data
  const dataWithSections = filteredData.map((item, index) => ({
    ...item,
    isFirstInSection: index === 0,
    isLastInSection: index === filteredData.length - 1,
  }));

  return (
    <>
      <AdaptiveSearchHeader
        iosIsLargeTitle
        iosTitle="NativeWindUI"
        searchBar={{
          placeholder: 'Search demos...',
          onChangeText: setSearchValue,
          iosHideWhenScrolling: false,
          ref: searchRef,
          content: (
            <List
              variant="insets"
              contentInsetAdjustmentBehavior="automatic"
              data={dataWithSections}
              estimatedItemSize={ESTIMATED_ITEM_HEIGHT.withSubTitle}
              renderItem={(info) => {
                return (
                  <Link asChild href={(info.item as any).href}>
                    <ListItem onPress={() => {
                      // Dismiss search mode before navigation
                      if (searchRef.current) {
                        searchRef.current.cancelSearch();
                      }
                      router.push((info.item as any).href);
                    }} {...info} />
                  </Link>
                );
              }}
              keyExtractor={(item) => (item as any).id}
            />
          ),
        }}
      />
      <List
        variant="insets"
        contentInsetAdjustmentBehavior="automatic"
        data={dataWithSections}
        estimatedItemSize={ESTIMATED_ITEM_HEIGHT.withSubTitle}
        renderItem={(info) => {
          return (
            <Link asChild href={(info.item as any).href}>
              <ListItem {...info} />
            </Link>
          );
        }}
        keyExtractor={(item) => (item as any).id}
      />
    </>
  );
}
