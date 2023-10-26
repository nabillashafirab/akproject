import React, { useState } from 'react';
import TagButton from './TagButton';
import characterSets from './CharacterSets'

const RecruitmentCalculator = () => {
    const [clickedTags, setClickedTags] = useState(new Set());

    const handleClickedTags = (tag) => {
        setClickedTags(clickedTags.add(tag));
    }

    const renderTagButtons = () => {
        const keys = Object.keys(characterSets);
        console.log(characterSets);
        console.log(keys);

        // [1, 2, 3]
        // array.map(number => number * 2);
        // [2, 4, 6]

        // [Guard, DPS, Support]
        // array.map(tag => (<TagButton key={tag}>{tag}</TagButton>))
        // [<TagButton key="Guard">Guard</TagButton>, <TagButton key="DPS">DPS</TagButton>, <TagButton key="Support">Support</TagButton>]
        return (
            <>
            {Object.keys(characterSets).map(tag => (<TagButton key={tag}>{tag}</TagButton>))}
            </>
        );
    }

    return (
        <>
          {renderTagButtons()}
        </>
      );
}
export default RecruitmentCalculator;