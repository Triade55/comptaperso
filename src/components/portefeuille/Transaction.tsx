import { getDate, getMontantInCFA } from "@/lib/utils";
import { TransactionById } from "@/query/walet.query";
import Link from "next/link";
import React from "react";
type Props = {
  transaction: TransactionById;
};
export default function Transaction({ transaction }: Props) {
  return (
    <>
      {transaction && (
        <Link href={`/${transaction?.id}`} className="">
          <div className="w-full flex items-center justify-between p-5 border-b-8 border-blue-400 dark:border-blue-900">
            <div className="flex flex-col gap-2 text-xl">
              {transaction?.name}
              <div className="text-sm italic ">
                {getDate(transaction?.createdAt)}{" "}
              </div>
            </div>
            <div className="">
              {transaction?.DorR == "D" && "-"}
              {getMontantInCFA(transaction?.montant)}
            </div>
          </div>
        </Link>
      )}
    </>
  );
}
