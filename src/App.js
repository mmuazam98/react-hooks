import EffectTutorial from "./Hooks/useEffect";
import LayoutEffectTutorial from "./Hooks/useLayoutEffect";
import ReducerTutorial from "./Hooks/useReducer";
import RefTutorial from "./Hooks/useRef";
import StateTutorial from "./Hooks/useState";
import ImperativeTutorial from "./Hooks/useImperativeHandle";
import ContextTutorial from "./Hooks/useContext/useContext";
import MemoTutorial from "./Hooks/useMemo";
import CallBackTutorial from "./Hooks/useCallback";

const App = () => {
  return (
    <div className="App">
      <StateTutorial />
      <ReducerTutorial />
      <EffectTutorial />
      <RefTutorial />
      <LayoutEffectTutorial />
      <ImperativeTutorial />
      <ContextTutorial />
      <MemoTutorial />
      <CallBackTutorial />
    </div>
  );
};

export default App;
