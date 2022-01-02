import logo from "./logo.svg";
import "./App.css";
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";
import Hello from "./components/Hello";
import Message from "./components/Message";
import Counter from "./components/Counter";
import FunctionClick from "./components/FunctionClick";
import ClassClick from "./components/ClassClick";
import EventBind from "./components/EventBind";
import ParentComponent from "./components/ParentComponent";
import UserGreeting from "./components/UserGreeting";
import NameList from "./components/NameList";
import Stylesheets from "./components/Stylesheets";
import InlineStyle from "./components/InlineStyle";
import CssModuleStyles from "./components/CssModuleStyles";
import Form from "./components/Form";
import LifecycleA from "./components/LifecycleA";
import FragmentDemo from "./components/FragmentDemo";
import Table from "./components/Table";
import ParentComp from "./components/ParentComp";
import RefsDemo from "./components/RefsDemo";
import FocusInput from "./components/FocusInput";
import FwdRefParentInput from "./components/FwdRefParentInput";
import PortalDemo from "./components/PortalDemo";
import Hero from "./components/Hero";
import ErrorBoundary from "./components/ErrorBoundary";
import ClickCounter from "./components/ClickCounter";
import HoverCounter from "./components/HoverCounter";
import ClickCounterTwo from "./components/ClickCounterTwo";
import HoverCounterTwo from "./components/HoverCounterTwo";
import User from "./components/User";
import RenderCounter from "./components/RenderCounter";

function App() {
  return (
    <div className="App">
      {/* 25) Render props Ex */}
      <User name={(isLoggedIn) => (isLoggedIn ? "Vishal" : "Guest")}></User>
      <RenderCounter
        render={(count, incrementCount) => (
          <ClickCounterTwo
            count={count}
            incrementCount={incrementCount}
          ></ClickCounterTwo>
        )}
      ></RenderCounter>
      <RenderCounter
        render={(count, incrementCount) => (
          <HoverCounterTwo
            count={count}
            incrementCount={incrementCount}
          ></HoverCounterTwo>
        )}
      ></RenderCounter>

      {/* 24) Higher Order Component Ex */}
      {/* <ClickCounter></ClickCounter>
      <HoverCounter></HoverCounter> */}

      {/* 23) Error Boundary Ex */}
      {/* <ErrorBoundary>
        <Hero heroName="Batman"></Hero>
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroName="Superman"></Hero>
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroName="Joker"></Hero>
      </ErrorBoundary> */}

      {/* 22) Portals Ex */}
      {/* <PortalDemo></PortalDemo> */}

      {/* 21) Forward Ref Ex */}
      {/* <FwdRefParentInput></FwdRefParentInput> */}

      {/* 20) Refs demo */}
      {/* <RefsDemo></RefsDemo> */}
      {/* <FocusInput></FocusInput> */}

      {/* 19)  React Memo Ex*/}
      {/* <ParentComp></ParentComp> */}

      {/* 18) Pure Component Ex */}
      {/* <ParentComp></ParentComp> */}

      {/* 17) React.Fragment Ex */}
      {/* <FragmentDemo></FragmentDemo>
      <Table></Table> */}

      {/* 16) Mounting, Updating Life cylce Ex */}
      {/* <LifecycleA></LifecycleA> */}

      {/* 15) Form Handling Ex */}
      {/* <Form></Form> */}

      {/* 14) Styling using CSS Module ex */}
      {/* <CssModuleStyles></CssModuleStyles> */}

      {/* 13) Styling using Inline Style ex*/}
      {/* <InlineStyle></InlineStyle> */}

      {/* 12) Styling using CSS Stylesheets ex */}
      {/* <  primary={true}></Stylesheets> */}

      {/* 11) List rendering ex */}
      {/* <NameList></NameList> */}

      {/* 10) Conditional rendernig */}
      {/* <UserGreeting></UserGreeting> */}

      {/* 9) update parent from child  */}
      {/* <ParentComponent></ParentComponent> */}

      {/* 8) binding event handler in CC */}
      {/* <EventBind></EventBind> */}

      {/* 7) event binding in CC */}
      {/* <ClassClick></ClassClick> */}

      {/* 6) event binding in FC */}
      {/* <FunctionClick></FunctionClick> */}

      {/* 5) setState in CC */}
      {/* <Counter></Counter> */}

      {/* 4) state in CC */}
      {/* <Message></Message> */}

      {/* 3) JSX understanding */}
      {/*  <Hello></Hello> */}

      {/* 2) Class component */}
      {/* <Welcome name="Sunil"></Welcome> */}

      {/* 1) Functional component */}
      {/* <Greet name="Vishal" city="pune">
        <p>This is children props</p>
       </Greet> */}
    </div>
  );
}

export default App;
