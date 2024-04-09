import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";

export default function BoardDetail() {
  const router = useRouter();

  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: router.query.boardId },
  });

  return <BoardDetailUI data={data} />;
}
