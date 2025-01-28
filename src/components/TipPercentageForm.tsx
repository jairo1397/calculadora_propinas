import { tipOptions } from "../data/db";
import { Dispatch, SetStateAction } from "react";

type TipPercentageFormProps = {
    setTip: Dispatch<SetStateAction<number>>;
}

export default function TipPercentageForm({ setTip }: TipPercentageFormProps) {
  return (
    <div>
        <h3 className="font-black text-2xl">Propina:</h3>

        <form action="">
            {tipOptions.map(tip => (
            <div className="flex gap-2" key={tip.id}>
                <label htmlFor={tip.id}>{tip.label}</label>
                <input id={tip.id} type="radio" value={tip.value} name="tip"
                    onChange={() => setTip(tip.value)}
                />
            </div>
            ))}
        </form>
    </div>
  )
}
