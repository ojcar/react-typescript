import * as React from "react";
import { Greeting } from "./Greeting";

export interface HelloProps {
  compiler: string,
  framework: string
}
export class Hello extends React.Component<HelloProps,{}> {
  constructor(props:any){
    super(props);
  }

  render() {
    return (
      <div>
      <h1>Typescript starter</h1>
      <p>Everything seems to be ok.</p>
      <Greeting name="WORLD" />
      </div>
    )
  }
}