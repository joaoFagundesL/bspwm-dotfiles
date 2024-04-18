(self.webpackChunknotion_next=self.webpackChunknotion_next||[]).push([[3878],{98025:(e,r,t)=>{"use strict";t.r(r),t.d(r,{formulaToString:()=>i});var n=t(57170),o=t(21856),a=t(19584),s=t(91905);function i(e,r){if(!e)return"";const t=m(e,r);if(!t)return"";const n=t.toString({parenthesis:"auto"});return n.replace(/\\/g,"\\\\").replace(/\n/g,"\\n").replace(/\t/g,"\\t")}const p=n.U(o.$),u=(0,a.Q8)(s._G,(e=>e.value)),l=(0,a.Q8)(s.Gn,(e=>e.apply)),f=(0,a.Q8)(s.wk,(e=>e.apply));function m(e,r){if(!e)return p.uninitialized;if("conditional"===e.type)return new p.ConditionalNode(m(e.condition,r),m(e.true,r),m(e.false,r));if("constant"===e.type){const r="number"===e.value_type?parseFloat(e.value):"boolean"===e.value_type?e.value||"true"===e.value:e.value;return new p.ConstantNode(r)}if("function"===e.type)return new p.FunctionNode(new p.SymbolNode(e.name),(e.args||[]).map((e=>m(e,r))).filter((e=>void 0!==e)));if("operator"===e.type)return new p.OperatorNode(e.operator,e.name,(e.args||[]).map((e=>m(e,r))).filter((e=>void 0!==e)));if("property"===e.type){const t=r[e.id],n=t?t.name:e.name;return new p.FunctionNode("prop",[new p.ConstantNode(n)])}return"symbol"===e.type?new p.SymbolNode(e.name):p.uninitialized}p.import(u,{override:!0}),p.import(l,{override:!0}),p.import(f,{override:!0})},68703:(e,r,t)=>{"use strict";t.r(r),t.d(r,{stringToFormula:()=>d});var n=t(57170),o=t(21856),a=t(57347),s=t(53965),i=t(99036);const p=/(.+) \(char (\d+)\)/,u=[{regex:/Syntax error in part (.+)$/,translate:(e,r)=>e.formatMessage({id:"mathParseHelpers.syntax.error",defaultMessage:"Syntax error in part {token}"},{token:r})},{regex:/End of (?:matrix|string) ([\]\"\']) expected/,translate:(e,r)=>e.formatMessage({id:"mathParseHelpers.tokenExpected.error",defaultMessage:"{token} expected"},{token:r})},{regex:/Parenthesis ([\)\]]) expected/,translate:(e,r)=>e.formatMessage({id:"mathParseHelpers.tokenExpected.error",defaultMessage:"{token} expected"},{token:r})},{regex:/Unexpected (?:operator|part) (.+)$/,translate:(e,r)=>e.formatMessage({id:"mathParseHelpers.unexpected.error",defaultMessage:"Unexpected {token}"},{token:r})},{regex:/Unexpected end of expression$/,translate:(e,r)=>e.formatMessage({id:"mathParseHelpers.unexpectedEndOfExpression.error",defaultMessage:"Unexpected end of expression"})}];var l=t(18955),f=t(91905),m=t(98025);const c=n.U(o.$);function d(e){const{str:r,property:t,schema:n,intl:o,propertyTypeDisplayName:s}=e;if(""===r.trim())return;let i;try{i=c.parse(r)}catch(l){const{message:e}=(0,a.t)(l),r=function(e,r){const t=p.exec(r);if(!t)return r;let n=t[1];const o=t[2],a=o?e.formatMessage({id:"mathParseHelpers.errorPosition.message",defaultMessage:"char {position}"},{position:o}):"";return u.forEach((r=>{let{regex:t,translate:o}=r;if(n.match(t)){const r=t.exec(n);if(r){const t=r[1];n=o(e,t)}}})),e.formatMessage({id:"mathParseHelpers.fullError.message",defaultMessage:"{errorBody} ({postfix})"},{errorBody:n,postfix:a})}(o,e);return{type:"error",message:r,size:1}}return y(o,i,t,n,s)}function y(e,r,t,n,o){if(r){if("AccessorNode"===r.type||"ArrayNode"===r.type||"AssignmentNode"===r.type||"BlockNode"===r.type||"FunctionAssignmentNode"===r.type||"IndexNode"===r.type||"ObjectNode"===r.type||"RangeNode"===r.type)return{type:"error",size:1,message:e.formatMessage({id:"formulaHelpers.error.invalidSyntax",defaultMessage:"Invalid syntax: {input}"},{input:r.toString()})};if("ConditionalNode"===r.type){const a=y(e,r.condition,t,n,o),s=y(e,r.trueExpr,t,n,o),i=y(e,r.falseExpr,t,n,o);if(!a)return;if("error"===a.type)return a;if(s&&"error"===s.type)return s;if(i&&"error"===i.type)return i;if(s&&i)return s.result_type!==i.result_type?{type:"error",size:1,message:e.formatMessage({id:"formulaHelpers.error.branchCondition",defaultMessage:"Each branch of a condition must be of the same type: {input}"},{input:r.toString()})}:{type:"conditional",result_type:s.result_type,condition:a,true:s,false:i}}else{if("ConstantNode"===r.type){const{value:t}=r,n=typeof t,o={string:"text",number:"number",boolean:"checkbox"};return n in o?{type:"constant",result_type:o[n],value:t,value_type:n}:{type:"error",size:1,message:e.formatMessage({id:"formulaHelpers.error.illegalConstant",defaultMessage:"Illegal constant: {value}"},{value:String(t)})}}if("FunctionNode"===r.type){const{fn:a,args:p}=r;if("prop"===a.name){if(1!==p.length)return{type:"error",size:1,message:e.formatMessage({id:"formulaHelpers.error.tooManyArgumentsInProp",defaultMessage:"Too many arguments passed to prop()."})};const r=p[0];if("ConstantNode"!==r.type)return{type:"error",size:1,message:e.formatMessage({id:"formulaHelpers.error.invalidPropertyReference",defaultMessage:"Invalid property reference: {input}"},{input:r.toString()})};const o=r.value,a=Object.keys(n).find((e=>{const r=n[e];return Boolean(r&&r.name===o)})),s=a&&n[a];if(!a||!s)return{type:"error",size:1,message:e.formatMessage({id:"formulaHelpers.error.propertyNotFound",defaultMessage:"Property not found: prop({input})"},{input:o})};if(i.rX.includes(s.type))return{type:"error",size:1,message:e.formatMessage({id:"formulaHelpers.error.propertyNotSupported",defaultMessage:"Property not supported: prop({propertySchemaName})"},{propertySchemaName:s.name})};if("formula"===s.type){const{formula:r}=s;if(!r||!r.result_type)return;return(0,l.b$)(r).includes(t)?{type:"error",size:1,message:e.formatMessage({id:"formulaHelpers.error.circularDependency",defaultMessage:"Property {propertySchemaName} creates a circular dependency."},{propertySchemaName:s.name})}:{type:"property",result_type:(0,l.z6)(s),name:o,id:a}}return{type:"property",result_type:(0,l.z6)(s),name:o,id:a}}const u=f.uf(a.name)||f.aV(a.name);if(!u)return{type:"error",size:1,message:e.formatMessage({id:"formulaHelpers.error.undefinedFunction",defaultMessage:"Undefined function: {functionName}"},{functionName:a.name})};const m=s.oA((p||[]).map((r=>y(e,r,t,n,o)))),c=g({intl:e,functionName:a.name,functionArgs:m,signatures:u.signatures,schema:n,propertyTypeDisplayName:o});if(c.error)return c.error;return{type:"function",result_type:c.value.resultType,name:a.name,args:m}}if("OperatorNode"===r.type){const{op:a,fn:i,args:p}=r,u=f.aV(i);if(!u)return{type:"error",size:1,message:e.formatMessage({id:"formulaHelpers.error.undefinedOperator",defaultMessage:"Undefined operator: {operator}"},{operator:a})};const l=s.oA((p||[]).map((r=>y(e,r,t,n,o)))),m=g({intl:e,functionName:i,functionArgs:l,signatures:u.signatures,schema:n,propertyTypeDisplayName:o});if(m.error)return m.error;return{type:"operator",result_type:m.value.resultType,operator:a,name:i,args:l}}if("ParenthesisNode"===r.type)return y(e,r.content,t,n,o);if("SymbolNode"===r.type){const{name:t}=r;return t in f._G?{type:"symbol",result_type:f._G[t].resultType,name:t}:{type:"error",size:1,message:e.formatMessage({id:"formulaHelpers.error.undefinedConstant",defaultMessage:"Undefined constant: {constantName}"},{constantName:t})}}}}}function g(e){const{intl:r,functionName:t,functionArgs:n,signatures:o,schema:a,propertyTypeDisplayName:i}=e;return o.reduce(((e,o)=>{if(!e.error)return e;const p=function(e){const{intl:r,functionName:t,functionArgs:n,signature:o,schema:a,propertyTypeDisplayName:i}=e,{arity:p,variadic:u}=o;if(u){if(!(n.length>0))return{type:"error",size:1,message:r.formatMessage({id:"formulaHelpers.error.tooFewArgumentsVariadic",defaultMessage:"Too few arguments in function {functionName}"},{functionName:t})};{const e=s.oA(n.map((e=>N({intl:r,resultType:u,functionArg:e,schema:a,propertyTypeDisplayName:i}))));if(e.length>0)return{...e[0],size:e.length}}}if(p){if(n.length<p.length)return{type:"error",size:1,message:r.formatMessage({id:"formulaHelpers.error.tooFewArguments",defaultMessage:"Too few arguments in function {functionName}"},{functionName:t})};if(n.length>p.length)return{type:"error",size:1,message:r.formatMessage({id:"formulaHelpers.error.tooManyArguments",defaultMessage:"Too many arguments in function {functionName}"},{functionName:t})};const e=s.oA(n.map(((e,t)=>N({intl:r,resultType:p[t],functionArg:e,schema:a,propertyTypeDisplayName:i}))));if(e.length>0)return{...e[0],size:e.length}}}({intl:r,functionName:t,functionArgs:n,signature:o,schema:a,propertyTypeDisplayName:i});return p?e.error.size<p.size?e:{error:p}:{value:o}}),{error:{type:"error",size:99,message:r.formatMessage({id:"formulaHelpers.error.noSignatureForFunction",defaultMessage:"No signatures found for function: {functionName}"},{functionName:t})}})}function N(e){const{intl:r,resultType:t,functionArg:n,schema:o,propertyTypeDisplayName:a}=e;if("error"===n.type)return n;if(t!==n.result_type){const e=(0,m.formulaToString)(n,o);return{type:"error",size:1,message:r.formatMessage({id:"formulaHelpers.error.typeMismatch",defaultMessage:"Type mismatch {nodeString} is not a {localizedPropertyTypeDisplayName}."},{nodeString:e,localizedPropertyTypeDisplayName:t?a[t]:r.formatMessage({id:"formatMessage.error.undefinedResultType",defaultMessage:"undefined"})})}}}},75042:()=>{}}]);