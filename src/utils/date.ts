export const padding = (value: number) => `00${value}`.slice(-2);

export const dateToString = (dateObj: Date): string => {
  const year = dateObj.getFullYear();
  const month = dateObj.getMonth() + 1;
  const date = dateObj.getDate();

  return `${year}.${padding(month)}.${padding(date)}`;
};
