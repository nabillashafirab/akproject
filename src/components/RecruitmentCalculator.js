import React, { useState, useEffect } from 'react';
import TagButton from './TagButton';
import characterSets from './CharacterSets'

const RecruitmentCalculator = () => {
    const [clickedTags, setClickedTags] = useState(new Set());
    const handleClickedTags = (tag) => {
        if (clickedTags.has(tag)) {
        clickedTags.delete(tag);
        } else {
        clickedTags.add(tag);
        }
        setClickedTags(clickedTags)
        console.log(clickedTags); // Log the updated Set

        const clickedTagsArray = Array.from(clickedTags)
        const intersection = characterSets[clickedTagsArray[0]].filter((character) =>
            clickedTagsArray.every((key) => characterSets[key].includes(character))
        );

        console.log(intersection);
    }

    const renderTagButtons = () => {
        const keys = Object.keys(characterSets);
        // console.log(characterSets);
        // console.log(keys);

        // [1, 2, 3]
        // array.map(number => number * 2);
        // [2, 4, 6]

        // [Guard, DPS, Support]
        // array.map(tag => (<TagButton key={tag}>{tag}</TagButton>))
        // [<TagButton key="Guard">Guard</TagButton>, <TagButton key="DPS">DPS</TagButton>, <TagButton key="Support">Support</TagButton>]
        return (
            <>
            {Object.keys(characterSets).map(tag => (<TagButton key={tag} onTagClick={() => handleClickedTags(tag)}>{tag}</TagButton>))}
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