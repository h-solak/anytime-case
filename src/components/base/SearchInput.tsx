"use client";
import ColContainer from "./ColContainer";
import { useState } from "react";

type SearchInputProps = {
  placeholder: string;
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
};

export default function SearchInput({
  placeholder,
  searchQuery,
  setSearchQuery,
}: SearchInputProps) {
  return (
    <ColContainer>
      <input
        className={`w-100 px-4 py-2 rounded-5 border-0`}
        placeholder={placeholder}
        value={searchQuery}
        onChange={(e) => {
          setSearchQuery(e.target.value);
        }}
      />
    </ColContainer>
  );
}
