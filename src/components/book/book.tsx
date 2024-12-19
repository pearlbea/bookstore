import type { Book } from "../../../data";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BookDetail } from "../book-detail/book-detail";

export function BookCard({ book }: { book: Book }) {
  const { author, title } = book;

  return (
    <Card className="flex flex-col justify-between">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <h3>by {author}</h3>
      </CardContent>
      <CardFooter className="flex justify-center align-end">
        <BookDetail book={book} />
      </CardFooter>
    </Card>
  );
}
