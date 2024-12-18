import type { Book } from "../../../data";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function BookComponent({ book }: { book: Book }): React.ReactElement {
  const { author, title } = book;

  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <h3>by {author}</h3>
      </CardContent>
      <CardFooter></CardFooter>
    </Card>
  );
}
