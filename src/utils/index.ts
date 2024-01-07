const MONTHS = [
  "Oca",
  "Şub",
  "Mar",
  "Nis",
  "May",
  "Haz",
  "Tem",
  "Ağu",
  "Eyl",
  "Eki",
  "Kas",
  "Ara",
];

export const getMonthName = (date: Date) => MONTHS[new Date(date).getMonth()];

export const getSlugFromPathname = (pathname: string) => {
  // URL nesnesini kullanarak pathname'i ayrıştır
  // const url = new URL(`file://${urlString}`);
  // const pathname = url.pathname;

  // Son '/' karakterinden sonra gelen kısmı al (dosya adı)
  const filename = pathname.substring(pathname.lastIndexOf('/') + 1);

  // Dosya adından dosya uzantısını çıkar
  const slug = filename.split('.').slice(0, -1).join('.');

  return slug;
};
