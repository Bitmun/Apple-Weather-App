import { Coords } from "@/api/data";

type DebouncedFunction<Args extends any[]> = (...args: Args) => void;

export function debounce<Func extends (...args: any[]) => any>(
  func: Func,
  wait: number,
): DebouncedFunction<Parameters<Func>> {
  let timeout: ReturnType<typeof setTimeout>;

  return (...args: Parameters<Func>): void => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

export const filterItems = (itemsList: Array<Coords>, query: string) => {
  const filteredItems = itemsList.filter((item) =>
    item.name.toLowerCase().includes(query),
  );
  return filteredItems;
};
