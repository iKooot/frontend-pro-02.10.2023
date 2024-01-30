import React, {useMemo} from "react";

export function MemoDialog({ list }) {
  console.log('render MemoDialog')

  // const memoList = useMemo( () => {
  //   const newList = list.map( (el, i) => ({id: i, el}))
  //   return newList
  // }, []);
  const memoList = useMemo(() => {
    const newList = list.map((el, i) => ({ id: i, el }));
    return newList;
  }, []);

  // console.log('Memoized list =>', memoList)

  return (
    <ul>
      {memoList.map(({id, el }) => (
        <li key={id}>{el}</li>
      ))}
      {/*{list.map((el) => (*/}
      {/*    <li key={el}>{el}</li>*/}
      {/*))}*/}
    </ul>
  );
}
