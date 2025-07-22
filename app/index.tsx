import { ESTIMATED_ITEM_HEIGHT, List, ListItem } from '~/components/nativewindui/List';
import { Link } from 'expo-router';
import { useHeaderSearchBar } from '~/lib/useHeaderSearchBar';

export default function Screen() {
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

  const searchValue = useHeaderSearchBar();

  // Filter data based on search query
  const filteredData = searchValue
    ? DEMO_PAGES.filter(
      (item) =>
        item.title.toLowerCase().includes(searchValue.toLowerCase()) ||
        item.subTitle.toLowerCase().includes(searchValue.toLowerCase())
    )
    : DEMO_PAGES;

  // Update section flags for filtered data
  const dataWithSections = filteredData.map((item, index) => ({
    ...item,
    isFirstInSection: index === 0,
    isLastInSection: index === filteredData.length - 1,
  }));

  return (
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
  );
}
