"use client";
import ColContainer from "./ColContainer";
import { useState } from "react";

type SearchInputProps = {
  placeholder: string;
  completed: boolean;
};

export default function SearchInput({
  placeholder,
  completed,
}: SearchInputProps) {
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <ColContainer>
      <input
        className={`w-100 px-4 py-2 rounded-5 border-1`}
        placeholder={placeholder}
        value={searchQuery}
        onChange={(e) => {
          setSearchQuery(e.target.value);
        }}
      />
    </ColContainer>
  );
}
