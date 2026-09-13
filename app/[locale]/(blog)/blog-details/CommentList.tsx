import Link from "next/link";
import type { BlogDict } from "@/lib/i18n/locales/de/blog";

export type CommentListProps = {
  comments: BlogDict["details"]["comments"];
};

export default function CommentList({ comments }: CommentListProps) {
  return (
    <div className="comment-one">
      <h3 className="comment-one__title">
        {comments.title.replace("{count}", String(comments.items.length))}
      </h3>
      {comments.items.map((comment) => (
        <div key={comment.author} className="comment-one__single">
          <div className="comment-one__image">
            <img
              src={comment.avatar}
              alt=""
              decoding="async"
              loading="lazy"
              width={100}
              height={100}
            />
          </div>
          <div className="comment-one__content">
            <h3>{comment.author}</h3>
            <p>{comment.text}</p>
            <span>
              {comment.date}{" "}
              <Link href="#" className="comment-one__btn">
                {comments.replyLabel}
              </Link>
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
