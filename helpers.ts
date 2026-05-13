export interface Tabs {
  id: number;
  label: string;
  path: string;
}

export interface Experience {
  company_name: string;
  position: string;
  link: string;
  duration: string;
}

export interface ProjectSchema {
  id: number;
  title: string;
  des: string;
}

export interface BlogSchema {
  id: number;
  title: string;
  des: string;
  date_published: string;
  /** Absolute external URL or site-relative path (e.g. /blog/prompt-vault) */
  link: string;
}

export interface PaymentSchema {
  icon: React.ReactNode;
  token: string;
  wallet_address: string;
}

export interface TalksSchema {
  id: number;
  date: string;
  title: string;
  images: string[];
}
