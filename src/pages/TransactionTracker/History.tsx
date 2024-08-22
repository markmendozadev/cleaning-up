import { useAppSelector } from "@/app-config/hooks";

function History() {
  const { transactions } = useAppSelector((state) => state.transaction);
  return (
    <div>
      {transactions.length > 0 ? (
        transactions?.map((transaction) => {
          return (
            <div className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0">
              <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
              <div className="space-y-1">
                <p className="text-sm font-medium leading-none">
                  {transaction?.title as string}{" "}
                  <span>{transaction?.amount as string} PHP</span> {" - "}
                  {transaction?.description as string}
                </p>
                <p className="text-sm text-muted-foreground">
                  {transaction?.transactionType as string}
                </p>
              </div>
            </div>
          );
        })
      ) : (
        <p className="text-lg text-center text-slate-600">
          No Transactions Found
        </p>
      )}
    </div>
  );
}

export default History;
