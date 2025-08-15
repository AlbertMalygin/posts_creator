import React from "react";
import MyInput from "./UI/input/MyInput";
import MySelect from "./UI/select/MySelect";

export default function PostFilter({ filter, setFilter }) {
  return (
    <div className="post-filter">
      <MySelect
        value={filter.sort}
        onChange={(selectedSort) =>
          setFilter({ ...filter, sort: selectedSort })
        }
        defaultValue={"Сортировка:"}
        options={[
          {
            name: "по заголовку",
            value: "title",
          },
          {
            name: "по описанию",
            value: "body",
          },
          {
            name: "по дате",
            value: "date",
          },
        ]}
      />
      <MyInput
        value={filter.query}
        onChange={(e) =>
          setFilter({ ...filter, query: e.target.value.toLowerCase() })
        }
        placeholder="Поиск..."
      />
    </div>
  );
}
