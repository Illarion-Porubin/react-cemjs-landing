import { Cemjsx, Static, Ref, Fn, front, Func } from "cemjs-all";
import Billboard from "./Billboard";
import Cases from "./Cases";
import Ofer from "./Ofer";
import WeWork from "./WeWork";
import Solutins from "./Solutions";

export default function () {
  return (
    <div>
      <main class="wrapper">
        <Billboard />
        <Cases/>
        <Ofer />
      </main>
      <WeWork />
      <main class="wrapper">
        <Solutins/>
      </main>
    </div>
  );
}
