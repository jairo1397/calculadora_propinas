import { tipOptions } from "../data/db";
import { Dispatch } from "react";
import { OrderActions } from "../reducers/order-reducer";

type TipPercentageFormProps = {
  dispatch: Dispatch<OrderActions>;
};

export default function TipPercentageForm({
  dispatch,
}: TipPercentageFormProps) {
  return (
    <div>
      <h3 className="font-black text-2xl">Propina:</h3>

      <form action="">
        {tipOptions.map((tip) => (
          <div className="flex gap-2" key={tip.id}>
            <label htmlFor={tip.id}>{tip.label}</label>
            <input
              id={tip.id}
              type="radio"
              value={tip.value}
              name="tip"
              onChange={() =>
                dispatch({ type: "set_tip", payload: { tip: tip.value } })
              }
            />
          </div>
        ))}
      </form>
    </div>
  );
}
