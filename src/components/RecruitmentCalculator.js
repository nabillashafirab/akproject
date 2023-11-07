import React, { useState } from "react";
import TagButton from "./TagButton";
import characterSets from "./CharacterSets";
import "lodash.combinations";
import _ from "lodash";

const RecruitmentCalculator = () => {
  const [clickedTags, setClickedTags] = useState(new Set());
  const [calculatedOperatorList, setCalculatedOperatorList] = useState(null);

  const handleClickedTags = (tag) => {
    // add tag to clickedTags
    if (clickedTags.has(tag)) {
      clickedTags.delete(tag);
    } else {
      clickedTags.add(tag);
    }
    setClickedTags(new Set(clickedTags));
  };

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
        {Object.keys(characterSets).map((tag) => (
          <TagButton key={tag} onTagClick={handleClickedTags}>
            {tag}
          </TagButton>
        ))}
      </>
    );
  };

  const operatorList = () => {
    // Sets -> Array
    const clickedTagsArray = Array.from(clickedTags);
    const cleanData = [];

    //max clicked tags is 5
    if (clickedTagsArray.length <= 5) {
      let tagsCombinations = _.flatMap(clickedTagsArray, (v, i, a) =>
        _.combinations(a, i + 1)
      );
      return tagsCombinations.map((x) => {
        //return results for each combinations
        const toBeIntersect = [];
        x.forEach((y) => {
          toBeIntersect.push(characterSets[y]);
        });

        console.log(x);
        if (x.length <= 3) {
          const result = toBeIntersect.reduce((a, b) =>
            a.filter((c) => b.includes(c))
          );
          if (result.length > 0) {
            console.log(`${x}: [${result}]`);
            cleanData.push({
              tags: x,
              operators: result,
            });
            return (
              <>
                <p>{x.toString()}</p>
                <p>{result.toString()}</p>
              </>
            );
          }
        }
      });
    } else {
      console.log(`MAX tag has reached`);
      console.log(clickedTags);
    }

    console.log(cleanData);
    // You can set `cleanData` as state, or return it
    // setCalculatedOperatorList(cleanData);

    return <></>;
  };

  // operatorList();

  const renderOperatorList = () => {
    return <></>;
  };

  return (
    <>
      {renderTagButtons()}
      {/* {renderOperatorList()} */}
      {operatorList()}
    </>
  );
};

export default RecruitmentCalculator;
