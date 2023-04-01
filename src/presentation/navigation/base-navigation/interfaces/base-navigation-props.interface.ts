export interface BaseNavigationProps {
  screens: {
    component: React.ComponentType;
    name: string;
  }[];
}
