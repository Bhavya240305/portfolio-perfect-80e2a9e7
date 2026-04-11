export type CertificationEntry = {
  id: string;
  title: string;
  /** Optional — opens in a new tab when set */
  url?: string;
};

export const certifications: CertificationEntry[] = [
  {
    id: "award-1",
    title: "3rd Position in Product Makeover",
    url: "https://drive.google.com/file/d/18CszzoswLzPzM001Gzage6YAUaPanVdv/view?usp=drive_link",
  },
  {
    id: "cert-1",
    title: "Google Data Analytics",
    url: "https://drive.google.com/file/d/1MG69F1t3N610y_3bzdqoJEiL9Mqlg2QB/view?usp=drive_link",
  },
  {
    id: "cert-2",
    title: "Master Data Management for Beginners",
    url: "https://drive.google.com/file/d/1cUzFZlOLotdGm3Y1ms_WDoiJock60fuS/view?usp=drive_link",
  },
];
