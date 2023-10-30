import React, { useState } from 'react';
import TagButton from './TagButton';
import characterSets from './CharacterSets'
import 'lodash.combinations';
import _ from 'lodash';

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

        // Sets -> Array
        const clickedTagsArray = Array.from(clickedTags)

        let tagsCombinations = _.flatMap(clickedTagsArray, (v, i, a) => _.combinations(a, i + 1));
        const returnOperatorList = tagsCombinations.map(x => {
            const toBeIntersect = [];
            x.forEach(y => {
                toBeIntersect.push(characterSets[y]);
            });

            if (x.length <= 3) {
                const result = toBeIntersect.reduce((a, b) => a.filter(c => b.includes(c)));
                if (result.length > 0) {
                    console.log(`${x}: [${result}]`);
                    return result; // Return the result for each combination
                }
            }
});

        
    }

    const renderTagButtons = () => {
        // const keys = Object.keys(characterSets);
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