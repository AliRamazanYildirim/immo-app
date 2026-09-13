import News from "../home2/News";

/**
 * home3 aynı blog kartlarını arka planlı `style2` varyantıyla gösterir.
 * İçerik tek yerden yönetilsin diye home2 bileşeni yeniden kullanılır.
 */
export default function Blog() {
  return <News variant="style2" />;
}
