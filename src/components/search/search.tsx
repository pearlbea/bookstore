import { useState, FormEvent } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { SearchIcon } from "lucide-react";

export function Search({
  onSubmitSearch,
}: {
  onSubmitSearch: (value: string) => void;
}) {
  const [value, setValue] = useState("");

  function handleSearch(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    onSubmitSearch(value);
  }

  return (
    <form className="flex w-full max-w-sm" onSubmit={handleSearch}>
      <Input
        type="text"
        placeholder="Search"
        onChange={(e) => setValue(e.currentTarget.value)}
        className="rounded-none rounded-l focus-visible:border-orange-500 focus-visible:ring-0"
        value={value}
      />
      <Button type="submit" className="rounded-none rounded-r ">
        <SearchIcon />
      </Button>
    </form>
  );
}
