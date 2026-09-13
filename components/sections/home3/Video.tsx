import Video from "../home1/Video";

/**
 * home3 aynı video bölümünü kayan yazı şeridiyle (`video-one--two`) gösterir.
 * İçerik tek yerden yönetilsin diye home1 bileşeni yeniden kullanılır.
 */
export default function VideoHome3() {
  return <Video variant="two" />;
}
