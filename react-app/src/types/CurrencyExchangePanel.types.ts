export type CurrencyExchangePanelInput = {
  fromCurrency: string,
  targetCurrency: string,
  amount: string,
  live: boolean
}

export type CurrencyExchangePanelHandler = (values: CurrencyExchangePanelInput) => void;
