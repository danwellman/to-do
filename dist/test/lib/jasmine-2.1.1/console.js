/*
Copyright (c) 2008-2014 Pivotal Labs

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

function getJasmineRequireObj(){return typeof module!="undefined"&&module.exports?exports:(window.jasmineRequire=window.jasmineRequire||{},window.jasmineRequire)}getJasmineRequireObj().console=function(e,t){t.ConsoleReporter=e.ConsoleReporter()},getJasmineRequireObj().ConsoleReporter=function(){function t(t){function h(){n("\n")}function p(e,t){return r?l[e]+t+l.none:t}function d(e,t){return t==1?e:e+"s"}function v(e,t){var n=[];for(var r=0;r<t;r++)n.push(e);return n}function m(e,t){var n=(e||"").split("\n"),r=[];for(var i=0;i<n.length;i++)r.push(v(" ",t).join("")+n[i]);return r.join("\n")}function g(e){h(),n(e.fullName);for(var t=0;t<e.failedExpectations.length;t++){var r=e.failedExpectations[t];h(),n(m(r.message,2)),n(m(r.stack,2))}h()}function y(e){for(var t=0;t<e.failedExpectations.length;t++)h(),n(p("red","An error was thrown in an afterAll")),h(),n(p("red","AfterAll "+e.failedExpectations[t].message));h()}var n=t.print,r=t.showColors||!1,i=t.onComplete||function(){},s=t.timer||e,o,u,a=[],f,l={green:"[32m",red:"[31m",yellow:"[33m",none:"[0m"},c=[];return n("ConsoleReporter is deprecated and will be removed in a future version."),this.jasmineStarted=function(){o=0,u=0,f=0,n("Started"),h(),s.start()},this.jasmineDone=function(){h();for(var e=0;e<a.length;e++)g(a[e]);if(o>0){h();var t=o+" "+d("spec",o)+", "+u+" "+d("failure",u);f&&(t+=", "+f+" pending "+d("spec",f)),n(t)}else n("No specs found");h();var r=s.elapsed()/1e3;n("Finished in "+r+" "+d("second",r)),h();for(e=0;e<c.length;e++)y(c[e]);i(u===0)},this.specDone=function(e){o++;if(e.status=="pending"){f++,n(p("yellow","*"));return}if(e.status=="passed"){n(p("green","."));return}e.status=="failed"&&(u++,a.push(e),n(p("red","F")))},this.suiteDone=function(e){e.failedExpectations&&e.failedExpectations.length>0&&(u++,c.push(e))},this}var e={start:function(){},elapsed:function(){return 0}};return t};