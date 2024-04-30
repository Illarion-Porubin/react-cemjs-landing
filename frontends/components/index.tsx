import { Cemjsx, front, Func, Static, Fn, Ref } from "cemjs-all";
import Navigation from "./navigation";

front.listener.finish = () => {
    return
}

front.func.test = () => {
    return
}

front.loader = () => {
  front.Variable.openSidebar = false; // загружает компонет/фронт, стили
  return;
};

front.display = () => {
  return (
    <Navigation />
  );
};

export { front };
