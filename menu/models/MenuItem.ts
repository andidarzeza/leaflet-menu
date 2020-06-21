export interface MenuItem {
  icon: string;
  tooltip: {
    text: string,
    position?: 'above' | 'below' | 'left' | 'right' | 'before' | 'after'
  };
  action: string;
}
