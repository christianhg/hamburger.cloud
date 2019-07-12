export function sortData(data) {
  return [...data].sort((a, b) =>
    a.end && !b.end
      ? 1
      : !a.end && b.end
      ? -1
      : a.end && b.end
      ? new Date(b.end).getTime() - new Date(a.end).getTime()
      : new Date(b.start).getTime() - new Date(a.start).getTime()
  );
}
