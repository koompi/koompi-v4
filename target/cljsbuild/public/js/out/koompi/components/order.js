// Compiled by ClojureScript 1.10.339 {}
goog.provide('koompi.components.order');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('ajax.core');
goog.require('cljs.tools.reader.edn');
goog.require('goog.string');
goog.require('goog.string.format');
goog.require('cljs.pprint');
goog.require('koompi.reagent.validation');
goog.require('koompi.sendMail.sendMail');
goog.require('koompi.states.state');
koompi.components.order.order = (function koompi$components$order$order(){
koompi.components.order.order_more_than_one = (function koompi$components$order$order_$_order_more_than_one(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Koompi Color*"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"two fields"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"field"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"number",new cljs.core.Keyword(null,"value","value",305978217),(((cljs.core.deref.call(null,koompi.states.state.rose_gold_num_order) > (cljs.core.deref.call(null,koompi.states.state.atom_order_number) | (0))))?"0":(((cljs.core.deref.call(null,koompi.states.state.rose_gold_num_order) < (0)))?"0":cljs.core.deref.call(null,koompi.states.state.rose_gold_num_order)
)),new cljs.core.Keyword(null,"class","class",-2030961996),"roseGold",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__35442_SHARP_){
return cljs.core.reset_BANG_.call(null,koompi.states.state.rose_gold_num_order,p1__35442_SHARP_.target.value);
})], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"field"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"number",new cljs.core.Keyword(null,"readOnly","readOnly",-1749118317),true,new cljs.core.Keyword(null,"class","class",-2030961996),"grayColor",new cljs.core.Keyword(null,"value","value",305978217),(((cljs.core.deref.call(null,koompi.states.state.rose_gold_num_order) > (cljs.core.deref.call(null,koompi.states.state.atom_order_number) | (0))))?"0":(((cljs.core.deref.call(null,koompi.states.state.rose_gold_num_order) < (0)))?"0":((((cljs.core.deref.call(null,koompi.states.state.atom_order_number) | (0)) > (0)))?((cljs.core.deref.call(null,koompi.states.state.atom_order_number) | (0)) - (cljs.core.deref.call(null,koompi.states.state.rose_gold_num_order) | (0))):"0")
)),new cljs.core.Keyword(null,"min","min",444991522),"0"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"three fields"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"field"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),"Total: ",cljs.core.deref.call(null,koompi.states.state.atom_order_number)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"field"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),"Rose Gold Color: ",(((cljs.core.deref.call(null,koompi.states.state.rose_gold_num_order) > (cljs.core.deref.call(null,koompi.states.state.atom_order_number) | (0))))?"0":(((cljs.core.deref.call(null,koompi.states.state.rose_gold_num_order) < (0)))?"0":cljs.core.deref.call(null,koompi.states.state.rose_gold_num_order)
))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"field"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),"Gray Color: ",(((cljs.core.deref.call(null,koompi.states.state.rose_gold_num_order) > (cljs.core.deref.call(null,koompi.states.state.atom_order_number) | (0))))?"0":(((cljs.core.deref.call(null,koompi.states.state.rose_gold_num_order) < (0)))?"0":((((cljs.core.deref.call(null,koompi.states.state.atom_order_number) | (0)) > (0)))?((cljs.core.deref.call(null,koompi.states.state.atom_order_number) | (0)) - (cljs.core.deref.call(null,koompi.states.state.rose_gold_num_order) | (0))):"0")
))], null)], null)], null)], null);
});

koompi.components.order.order_only_one = (function koompi$components$order$order_$_order_only_one(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"Which color do you preferred?"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"inline fields"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"field"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"ui radio checkbox"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),"koompiColor",new cljs.core.Keyword(null,"checked","checked",-50955819),cljs.core._EQ_.call(null,cljs.core.deref.call(null,koompi.states.state.atom_laptop_color),new cljs.core.Keyword(null,"gray-color","gray-color",1928511242)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (){
return cljs.core.reset_BANG_.call(null,koompi.states.state.atom_laptop_color,new cljs.core.Keyword(null,"gray-color","gray-color",1928511242));
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.orderLatopColor","label.orderLatopColor",-413436550),"Gray Color"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"field"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"ui radio checkbox"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),"koompiColor",new cljs.core.Keyword(null,"checked","checked",-50955819),cljs.core._EQ_.call(null,cljs.core.deref.call(null,koompi.states.state.atom_laptop_color),new cljs.core.Keyword(null,"rose-gold-color","rose-gold-color",137086458)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (){
return cljs.core.reset_BANG_.call(null,koompi.states.state.atom_laptop_color,new cljs.core.Keyword(null,"rose-gold-color","rose-gold-color",137086458));
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.orderLatopColor","label.orderLatopColor",-413436550),"Rose Gold Color"], null)], null)], null)], null)], null);
});

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ui.container.containerOrder","div.ui.container.containerOrder",1774405816),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.orderPadding","div.orderPadding",260785634),(cljs.core.truth_(cljs.core.get_in.call(null,cljs.core.deref.call(null,koompi.states.state.alertSMS),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"alertsms","alertsms",1767514623)], null)))?((cljs.core._EQ_.call(null,["Order Successfully Completed"].join(''),cljs.core.deref.call(null,koompi.states.state.atom_order_koompi)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.modalSuccess","div.modalSuccess",1224087088),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"animated bounceIn fast"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"ui icon header"], null),"Your order was successfully completed"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"content"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Thank you so much for your support. Please check your email to complete the order proccess."], null)], null)], null):((cljs.core._EQ_.call(null,cljs.core.deref.call(null,koompi.states.state.atom_order_koompi),""))?"":new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"modalError animated bounceIn fast"], null),"Order failed"], null)
)):null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2.orderKoompi","h2.orderKoompi",-1244879830),"Order Koompi",cljs.core.deref.call(null,koompi.states.state.atom_order_koompi)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.orderDesc","p.orderDesc",-1667154601),"We are grateful for our partners that believe in our mission."], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"ui negative message OrderKoompiSMS"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"header"], null),"Note* All the fields are require"], null)], null),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"ui large form"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"two fields"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"field"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),"First Name* "], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,koompi.states.state.atom_fname),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__35443_SHARP_){
return cljs.core.reset_BANG_.call(null,koompi.states.state.atom_fname,p1__35443_SHARP_.target.value);
})], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"field"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),"Last Name* "], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,koompi.states.state.atom_lname),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__35444_SHARP_){
return cljs.core.reset_BANG_.call(null,koompi.states.state.atom_lname,p1__35444_SHARP_.target.value);
})], null)], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"field"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),"E-mail* "], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"email",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,koompi.states.state.atom_email),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),cljs.core.deref.call(null,koompi.states.state.atom_email),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__35445_SHARP_){
return cljs.core.reset_BANG_.call(null,koompi.states.state.atom_email,p1__35445_SHARP_.target.value);
})], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"two fields"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"field"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),"Phone Number* "], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"number",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,koompi.states.state.atom_phone_number),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__35446_SHARP_){
return cljs.core.reset_BANG_.call(null,koompi.states.state.atom_phone_number,p1__35446_SHARP_.target.value);
})], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"field"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),"Province* "], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,koompi.states.state.atom_province),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__35447_SHARP_){
return cljs.core.reset_BANG_.call(null,koompi.states.state.atom_province,p1__35447_SHARP_.target.value);
})], null)], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"field"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),"Number of laptop*"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"number",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,koompi.states.state.atom_order_number),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__35448_SHARP_){
return cljs.core.reset_BANG_.call(null,koompi.states.state.atom_order_number,p1__35448_SHARP_.target.value);
})], null)], null)], null),((cljs.core._EQ_.call(null,(cljs.core.deref.call(null,koompi.states.state.atom_order_number) | (0)),(1)))?koompi.components.order.order_only_one.call(null):koompi.components.order.order_more_than_one.call(null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"Payment Option*"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"inline fields"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"field"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"ui radio checkbox"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),"payment",new cljs.core.Keyword(null,"checked","checked",-50955819),cljs.core._EQ_.call(null,cljs.core.deref.call(null,koompi.states.state.atom_payment),new cljs.core.Keyword(null,"cash","cash",181122222)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (){
return cljs.core.reset_BANG_.call(null,koompi.states.state.atom_payment,new cljs.core.Keyword(null,"cash","cash",181122222));
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.orderLatopColor","label.orderLatopColor",-413436550),"Cash - $339"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"field"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"ui radio checkbox"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),"payment",new cljs.core.Keyword(null,"checked","checked",-50955819),cljs.core._EQ_.call(null,cljs.core.deref.call(null,koompi.states.state.atom_payment),new cljs.core.Keyword(null,"special-financing","special-financing",-358530313)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (){
return cljs.core.reset_BANG_.call(null,koompi.states.state.atom_payment,new cljs.core.Keyword(null,"special-financing","special-financing",-358530313));
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.orderLatopColor","label.orderLatopColor",-413436550),"6 Months of special financing - $369 (0% Interest)"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"field"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),"What else do you want to advise us?"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"rows","rows",850049680),"5",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,koompi.states.state.atom_message),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__35449_SHARP_){
return cljs.core.reset_BANG_.call(null,koompi.states.state.atom_message,p1__35449_SHARP_.target.value);
})], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ui.submit.button.positive","div.ui.submit.button.positive",850757489),((cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,koompi.states.state.atom_fname)))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"disabled negative"], null):((cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,koompi.states.state.atom_lname)))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"disabled negative loading"], null):(cljs.core.truth_(((cljs.core._EQ_.call(null,koompi.reagent.validation.is_email_QMARK_.call(null,cljs.core.deref.call(null,koompi.states.state.atom_email)),false))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"disabled negative loading"], null):null))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"disabled negative loading"], null):(cljs.core.truth_((cljs.core.truth_(koompi.reagent.validation.max_length_QMARK_.call(null,cljs.core.deref.call(null,koompi.states.state.atom_phone_number),(8)))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"disabled negative loading"], null):null))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"disabled negative loading"], null):((cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,koompi.states.state.atom_province)))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"disabled negative loading"], null):((cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,koompi.states.state.atom_order_number)))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"disabled negative loading"], null):((cljs.core._EQ_.call(null,cljs.core.deref.call(null,koompi.states.state.atom_payment),""))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"disabled negative"], null):new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
koompi.sendMail.sendMail.order_koompi.call(null);

koompi.sendMail.sendMail.send_mail.call(null);

cljs.core.reset_BANG_.call(null,koompi.states.state.atom_fname,"");

cljs.core.reset_BANG_.call(null,koompi.states.state.atom_lname,"");

cljs.core.reset_BANG_.call(null,koompi.states.state.atom_email,"");

cljs.core.reset_BANG_.call(null,koompi.states.state.atom_phone_number,"");

cljs.core.reset_BANG_.call(null,koompi.states.state.atom_province,"");

cljs.core.reset_BANG_.call(null,koompi.states.state.atom_order_number,"");

var and__3938__auto___35450 = cljs.core.reset_BANG_.call(null,koompi.states.state.gray_num_order,"");
if(cljs.core.truth_(and__3938__auto___35450)){
cljs.core.reset_BANG_.call(null,koompi.states.state.rose_gold_num_order,"");
} else {
}

cljs.core.reset_BANG_.call(null,koompi.states.state.atom_payment,"");

return cljs.core.reset_BANG_.call(null,koompi.states.state.atom_message,"");
})], null)
))))))),"Submit"], null)], null)], null)], null)], null);
});

//# sourceMappingURL=order.js.map?rel=1551156909777