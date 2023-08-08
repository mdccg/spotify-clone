import { Fragment } from 'react';
import { StyleProp, StyleSheet, ViewStyle } from 'react-native';
import Theme from './../../stylesheets/theme';
import { RoundedTag, Tag, TagGroupContainer, FixedTagGroupWrapper, TagLabel, XMarkSolidIcon } from './styles';

type TagGroupProps = {
  selectedFilter: string | undefined;
  setSelectedFilter: React.Dispatch<React.SetStateAction<TagGroupProps['selectedFilter']>>;
  filters: string[];
  selectFilter: (newFilter: string) => void;
  isFixed: boolean;
  style?: StyleProp<ViewStyle>;
}

const TagGroup: React.FC<TagGroupProps> = ({
  selectedFilter,
  setSelectedFilter,
  filters,
  selectFilter,
  isFixed,
  style
}) => {
  const Wrapper = isFixed ? FixedTagGroupWrapper : Fragment;

  return (
    <Wrapper>
      <TagGroupContainer contentContainerStyle={[styles.tagGroup, style]} horizontal>
        {selectedFilter && (
          <RoundedTag onPress={() => setSelectedFilter(undefined)}>
            <XMarkSolidIcon />
          </RoundedTag>
        )}

        {filters.map((currentFilter) => {
          const isSelected = currentFilter === selectedFilter;

          return (!selectedFilter || isSelected) && (
            <Tag
              key={currentFilter}
              style={isSelected ? styles.selectedTag : {}}
              onPress={() => selectFilter(currentFilter)}>
              <TagLabel style={isSelected ? styles.selectedTagLabel : {}}>
                {currentFilter}
              </TagLabel>
            </Tag>
          );
        })}
      </TagGroupContainer>
    </Wrapper>
  );
}

const styles = StyleSheet.create({
  tagGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 16,
    paddingRight: 0,
    paddingBottom: 16,
    paddingLeft: 0,
  },

  selectedTag: {
    backgroundColor: Theme.colors.green,
  },

  selectedTagLabel: {
    color: Theme.colors.black
  },
});

export default TagGroup;