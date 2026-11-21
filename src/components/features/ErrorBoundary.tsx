import { Component, type ErrorInfo, type ReactNode } from 'react';
interface Props{children:ReactNode}
interface State{hasError:boolean}
export default class ErrorBoundary extends Component<Props,State>{state:State={hasError:false};static getDerivedStateFromError(){return{hasError:true};}componentDidCatch(error:Error,info:ErrorInfo){console.error('Restaurant application error',error,info);}render(){if(this.state.hasError)return <main className="container-shell py-24 text-center"><h1 className="section-title">A QUICK PAUSE IN THE KITCHEN</h1><p className="muted mt-4">Please reload the page, or call the restaurant to place your order.</p><a href="tel:+923077792999" className="btn-primary mt-6">Call 03077792999</a></main>;return this.props.children;}}
