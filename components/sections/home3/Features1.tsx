import FeautureTwo from "../home1/FeautureTwo";

/**
 * home3 aynı iki kartı `style4` varyantıyla gösterir.
 * İçerik tek yerden yönetilsin diye home1 bileşeni yeniden kullanılır.
 */
export default function Features1() {
  return <FeautureTwo variant="style4" />;
}
