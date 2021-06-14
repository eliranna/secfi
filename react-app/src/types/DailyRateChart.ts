export type DailyRateChartProps = {
  data: DailyRate[];
  isLoading: boolean;
  error: any;
};

type DailyRate = {
  day: String;
  values: DailyRateValues;
};

type DailyRateValues = {
  open: String;
  high: String;
  low: String;
  close: String;
};
