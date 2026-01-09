export interface MenuItem {
  id: string;
  name: string;
  icon: React.ReactNode;
  badge?: number;
  href?: string;
}