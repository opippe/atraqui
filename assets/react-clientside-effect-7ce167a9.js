import{a as l,b as h}from"./@babel-d7b299da.js";import{R as y,r as E}from"./react-ce22c937.js";function x(f,s){function m(i){return i.displayName||i.name||"Component"}return function(u){var n=[],a;function c(){a=f(n.map(function(t){return t.props})),s(a)}var p=function(t){h(e,t);function e(){return t.apply(this,arguments)||this}e.peek=function(){return a};var o=e.prototype;return o.componentDidMount=function(){n.push(this),c()},o.componentDidUpdate=function(){c()},o.componentWillUnmount=function(){var d=n.indexOf(this);n.splice(d,1),c()},o.render=function(){return y.createElement(u,this.props)},e}(E.PureComponent);return l(p,"displayName","SideEffect("+m(u)+")"),p}}export{x as w};
