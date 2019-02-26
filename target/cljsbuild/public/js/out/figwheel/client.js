// Compiled by ClojureScript 1.10.339 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.16";
figwheel.client.js_stringify = (((((typeof JSON !== 'undefined')) && (!((JSON.stringify == null)))))?(function (x){
return ["#js ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join('');
}catch (e48151){if((e48151 instanceof Error)){
var e = e48151;
return "Error: Unable to stringify";
} else {
throw e48151;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__48154 = arguments.length;
switch (G__48154) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__48152_SHARP_){
if(typeof p1__48152_SHARP_ === 'string'){
return p1__48152_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__48152_SHARP_);
}
}),args)], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__4534__auto__ = [];
var len__4531__auto___48157 = arguments.length;
var i__4532__auto___48158 = (0);
while(true){
if((i__4532__auto___48158 < len__4531__auto___48157)){
args__4534__auto__.push((arguments[i__4532__auto___48158]));

var G__48159 = (i__4532__auto___48158 + (1));
i__4532__auto___48158 = G__48159;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq48156){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq48156));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4534__auto__ = [];
var len__4531__auto___48161 = arguments.length;
var i__4532__auto___48162 = (0);
while(true){
if((i__4532__auto___48162 < len__4531__auto___48161)){
args__4534__auto__.push((arguments[i__4532__auto___48162]));

var G__48163 = (i__4532__auto___48162 + (1));
i__4532__auto___48162 = G__48163;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq48160){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq48160));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)"].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Figwheel autoloading ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method.
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 * 
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__48164){
var map__48165 = p__48164;
var map__48165__$1 = ((((!((map__48165 == null)))?(((((map__48165.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48165.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48165):map__48165);
var message = cljs.core.get.call(null,map__48165__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__48165__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__3949__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__3938__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__3938__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__3938__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return ((cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts))));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__38236__auto___48244 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38236__auto___48244,ch){
return (function (){
var f__38237__auto__ = (function (){var switch__38077__auto__ = ((function (c__38236__auto___48244,ch){
return (function (state_48216){
var state_val_48217 = (state_48216[(1)]);
if((state_val_48217 === (7))){
var inst_48212 = (state_48216[(2)]);
var state_48216__$1 = state_48216;
var statearr_48218_48245 = state_48216__$1;
(statearr_48218_48245[(2)] = inst_48212);

(statearr_48218_48245[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48217 === (1))){
var state_48216__$1 = state_48216;
var statearr_48219_48246 = state_48216__$1;
(statearr_48219_48246[(2)] = null);

(statearr_48219_48246[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48217 === (4))){
var inst_48169 = (state_48216[(7)]);
var inst_48169__$1 = (state_48216[(2)]);
var state_48216__$1 = (function (){var statearr_48220 = state_48216;
(statearr_48220[(7)] = inst_48169__$1);

return statearr_48220;
})();
if(cljs.core.truth_(inst_48169__$1)){
var statearr_48221_48247 = state_48216__$1;
(statearr_48221_48247[(1)] = (5));

} else {
var statearr_48222_48248 = state_48216__$1;
(statearr_48222_48248[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48217 === (15))){
var inst_48176 = (state_48216[(8)]);
var inst_48191 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_48176);
var inst_48192 = cljs.core.first.call(null,inst_48191);
var inst_48193 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_48192);
var inst_48194 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_48193)].join('');
var inst_48195 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_48194);
var state_48216__$1 = state_48216;
var statearr_48223_48249 = state_48216__$1;
(statearr_48223_48249[(2)] = inst_48195);

(statearr_48223_48249[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48217 === (13))){
var inst_48200 = (state_48216[(2)]);
var state_48216__$1 = state_48216;
var statearr_48224_48250 = state_48216__$1;
(statearr_48224_48250[(2)] = inst_48200);

(statearr_48224_48250[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48217 === (6))){
var state_48216__$1 = state_48216;
var statearr_48225_48251 = state_48216__$1;
(statearr_48225_48251[(2)] = null);

(statearr_48225_48251[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48217 === (17))){
var inst_48198 = (state_48216[(2)]);
var state_48216__$1 = state_48216;
var statearr_48226_48252 = state_48216__$1;
(statearr_48226_48252[(2)] = inst_48198);

(statearr_48226_48252[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48217 === (3))){
var inst_48214 = (state_48216[(2)]);
var state_48216__$1 = state_48216;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48216__$1,inst_48214);
} else {
if((state_val_48217 === (12))){
var inst_48175 = (state_48216[(9)]);
var inst_48189 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_48175,opts);
var state_48216__$1 = state_48216;
if(cljs.core.truth_(inst_48189)){
var statearr_48227_48253 = state_48216__$1;
(statearr_48227_48253[(1)] = (15));

} else {
var statearr_48228_48254 = state_48216__$1;
(statearr_48228_48254[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48217 === (2))){
var state_48216__$1 = state_48216;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48216__$1,(4),ch);
} else {
if((state_val_48217 === (11))){
var inst_48176 = (state_48216[(8)]);
var inst_48181 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_48182 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_48176);
var inst_48183 = cljs.core.async.timeout.call(null,(1000));
var inst_48184 = [inst_48182,inst_48183];
var inst_48185 = (new cljs.core.PersistentVector(null,2,(5),inst_48181,inst_48184,null));
var state_48216__$1 = state_48216;
return cljs.core.async.ioc_alts_BANG_.call(null,state_48216__$1,(14),inst_48185);
} else {
if((state_val_48217 === (9))){
var inst_48176 = (state_48216[(8)]);
var inst_48202 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_48203 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_48176);
var inst_48204 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_48203);
var inst_48205 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_48204)].join('');
var inst_48206 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_48205);
var state_48216__$1 = (function (){var statearr_48229 = state_48216;
(statearr_48229[(10)] = inst_48202);

return statearr_48229;
})();
var statearr_48230_48255 = state_48216__$1;
(statearr_48230_48255[(2)] = inst_48206);

(statearr_48230_48255[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48217 === (5))){
var inst_48169 = (state_48216[(7)]);
var inst_48171 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_48172 = (new cljs.core.PersistentArrayMap(null,2,inst_48171,null));
var inst_48173 = (new cljs.core.PersistentHashSet(null,inst_48172,null));
var inst_48174 = figwheel.client.focus_msgs.call(null,inst_48173,inst_48169);
var inst_48175 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_48174);
var inst_48176 = cljs.core.first.call(null,inst_48174);
var inst_48177 = figwheel.client.autoload_QMARK_.call(null);
var state_48216__$1 = (function (){var statearr_48231 = state_48216;
(statearr_48231[(8)] = inst_48176);

(statearr_48231[(9)] = inst_48175);

return statearr_48231;
})();
if(cljs.core.truth_(inst_48177)){
var statearr_48232_48256 = state_48216__$1;
(statearr_48232_48256[(1)] = (8));

} else {
var statearr_48233_48257 = state_48216__$1;
(statearr_48233_48257[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48217 === (14))){
var inst_48187 = (state_48216[(2)]);
var state_48216__$1 = state_48216;
var statearr_48234_48258 = state_48216__$1;
(statearr_48234_48258[(2)] = inst_48187);

(statearr_48234_48258[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48217 === (16))){
var state_48216__$1 = state_48216;
var statearr_48235_48259 = state_48216__$1;
(statearr_48235_48259[(2)] = null);

(statearr_48235_48259[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48217 === (10))){
var inst_48208 = (state_48216[(2)]);
var state_48216__$1 = (function (){var statearr_48236 = state_48216;
(statearr_48236[(11)] = inst_48208);

return statearr_48236;
})();
var statearr_48237_48260 = state_48216__$1;
(statearr_48237_48260[(2)] = null);

(statearr_48237_48260[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48217 === (8))){
var inst_48175 = (state_48216[(9)]);
var inst_48179 = figwheel.client.reload_file_state_QMARK_.call(null,inst_48175,opts);
var state_48216__$1 = state_48216;
if(cljs.core.truth_(inst_48179)){
var statearr_48238_48261 = state_48216__$1;
(statearr_48238_48261[(1)] = (11));

} else {
var statearr_48239_48262 = state_48216__$1;
(statearr_48239_48262[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__38236__auto___48244,ch))
;
return ((function (switch__38077__auto__,c__38236__auto___48244,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__38078__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__38078__auto____0 = (function (){
var statearr_48240 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48240[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__38078__auto__);

(statearr_48240[(1)] = (1));

return statearr_48240;
});
var figwheel$client$file_reloader_plugin_$_state_machine__38078__auto____1 = (function (state_48216){
while(true){
var ret_value__38079__auto__ = (function (){try{while(true){
var result__38080__auto__ = switch__38077__auto__.call(null,state_48216);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38080__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38080__auto__;
}
break;
}
}catch (e48241){if((e48241 instanceof Object)){
var ex__38081__auto__ = e48241;
var statearr_48242_48263 = state_48216;
(statearr_48242_48263[(5)] = ex__38081__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48216);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48241;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38079__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48264 = state_48216;
state_48216 = G__48264;
continue;
} else {
return ret_value__38079__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__38078__auto__ = function(state_48216){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__38078__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__38078__auto____1.call(this,state_48216);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__38078__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__38078__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__38078__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__38078__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__38078__auto__;
})()
;})(switch__38077__auto__,c__38236__auto___48244,ch))
})();
var state__38238__auto__ = (function (){var statearr_48243 = f__38237__auto__.call(null);
(statearr_48243[(6)] = c__38236__auto___48244);

return statearr_48243;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38238__auto__);
});})(c__38236__auto___48244,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__48265_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__48265_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_48269 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_48269){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_48267 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_48268 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_48267,_STAR_print_fn_STAR_48268,sb,base_path_48269){
return (function (x){
return sb.append(x);
});})(_STAR_print_newline_STAR_48267,_STAR_print_fn_STAR_48268,sb,base_path_48269))
;

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join(''),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_48268;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_48267;
}}catch (e48266){if((e48266 instanceof Error)){
var e = e48266;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_48269], null));
} else {
var e = e48266;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_48269))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__48270){
var map__48271 = p__48270;
var map__48271__$1 = ((((!((map__48271 == null)))?(((((map__48271.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48271.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48271):map__48271);
var opts = map__48271__$1;
var build_id = cljs.core.get.call(null,map__48271__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__48271,map__48271__$1,opts,build_id){
return (function (p__48273){
var vec__48274 = p__48273;
var seq__48275 = cljs.core.seq.call(null,vec__48274);
var first__48276 = cljs.core.first.call(null,seq__48275);
var seq__48275__$1 = cljs.core.next.call(null,seq__48275);
var map__48277 = first__48276;
var map__48277__$1 = ((((!((map__48277 == null)))?(((((map__48277.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48277.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48277):map__48277);
var msg = map__48277__$1;
var msg_name = cljs.core.get.call(null,map__48277__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__48275__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__48274,seq__48275,first__48276,seq__48275__$1,map__48277,map__48277__$1,msg,msg_name,_,map__48271,map__48271__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__48274,seq__48275,first__48276,seq__48275__$1,map__48277,map__48277__$1,msg,msg_name,_,map__48271,map__48271__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__48271,map__48271__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__48279){
var vec__48280 = p__48279;
var seq__48281 = cljs.core.seq.call(null,vec__48280);
var first__48282 = cljs.core.first.call(null,seq__48281);
var seq__48281__$1 = cljs.core.next.call(null,seq__48281);
var map__48283 = first__48282;
var map__48283__$1 = ((((!((map__48283 == null)))?(((((map__48283.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48283.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48283):map__48283);
var msg = map__48283__$1;
var msg_name = cljs.core.get.call(null,map__48283__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__48281__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__48285){
var map__48286 = p__48285;
var map__48286__$1 = ((((!((map__48286 == null)))?(((((map__48286.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48286.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48286):map__48286);
var on_compile_warning = cljs.core.get.call(null,map__48286__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__48286__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__48286,map__48286__$1,on_compile_warning,on_compile_fail){
return (function (p__48288){
var vec__48289 = p__48288;
var seq__48290 = cljs.core.seq.call(null,vec__48289);
var first__48291 = cljs.core.first.call(null,seq__48290);
var seq__48290__$1 = cljs.core.next.call(null,seq__48290);
var map__48292 = first__48291;
var map__48292__$1 = ((((!((map__48292 == null)))?(((((map__48292.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48292.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48292):map__48292);
var msg = map__48292__$1;
var msg_name = cljs.core.get.call(null,map__48292__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__48290__$1;
var pred__48294 = cljs.core._EQ_;
var expr__48295 = msg_name;
if(cljs.core.truth_(pred__48294.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__48295))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__48294.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__48295))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__48286,map__48286__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__38236__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38236__auto__,msg_hist,msg_names,msg){
return (function (){
var f__38237__auto__ = (function (){var switch__38077__auto__ = ((function (c__38236__auto__,msg_hist,msg_names,msg){
return (function (state_48384){
var state_val_48385 = (state_48384[(1)]);
if((state_val_48385 === (7))){
var inst_48304 = (state_48384[(2)]);
var state_48384__$1 = state_48384;
if(cljs.core.truth_(inst_48304)){
var statearr_48386_48433 = state_48384__$1;
(statearr_48386_48433[(1)] = (8));

} else {
var statearr_48387_48434 = state_48384__$1;
(statearr_48387_48434[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48385 === (20))){
var inst_48378 = (state_48384[(2)]);
var state_48384__$1 = state_48384;
var statearr_48388_48435 = state_48384__$1;
(statearr_48388_48435[(2)] = inst_48378);

(statearr_48388_48435[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48385 === (27))){
var inst_48374 = (state_48384[(2)]);
var state_48384__$1 = state_48384;
var statearr_48389_48436 = state_48384__$1;
(statearr_48389_48436[(2)] = inst_48374);

(statearr_48389_48436[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48385 === (1))){
var inst_48297 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_48384__$1 = state_48384;
if(cljs.core.truth_(inst_48297)){
var statearr_48390_48437 = state_48384__$1;
(statearr_48390_48437[(1)] = (2));

} else {
var statearr_48391_48438 = state_48384__$1;
(statearr_48391_48438[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48385 === (24))){
var inst_48376 = (state_48384[(2)]);
var state_48384__$1 = state_48384;
var statearr_48392_48439 = state_48384__$1;
(statearr_48392_48439[(2)] = inst_48376);

(statearr_48392_48439[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48385 === (4))){
var inst_48382 = (state_48384[(2)]);
var state_48384__$1 = state_48384;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48384__$1,inst_48382);
} else {
if((state_val_48385 === (15))){
var inst_48380 = (state_48384[(2)]);
var state_48384__$1 = state_48384;
var statearr_48393_48440 = state_48384__$1;
(statearr_48393_48440[(2)] = inst_48380);

(statearr_48393_48440[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48385 === (21))){
var inst_48333 = (state_48384[(2)]);
var inst_48334 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_48335 = figwheel.client.auto_jump_to_error.call(null,opts,inst_48334);
var state_48384__$1 = (function (){var statearr_48394 = state_48384;
(statearr_48394[(7)] = inst_48333);

return statearr_48394;
})();
var statearr_48395_48441 = state_48384__$1;
(statearr_48395_48441[(2)] = inst_48335);

(statearr_48395_48441[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48385 === (31))){
var inst_48363 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_48384__$1 = state_48384;
if(cljs.core.truth_(inst_48363)){
var statearr_48396_48442 = state_48384__$1;
(statearr_48396_48442[(1)] = (34));

} else {
var statearr_48397_48443 = state_48384__$1;
(statearr_48397_48443[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48385 === (32))){
var inst_48372 = (state_48384[(2)]);
var state_48384__$1 = state_48384;
var statearr_48398_48444 = state_48384__$1;
(statearr_48398_48444[(2)] = inst_48372);

(statearr_48398_48444[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48385 === (33))){
var inst_48359 = (state_48384[(2)]);
var inst_48360 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_48361 = figwheel.client.auto_jump_to_error.call(null,opts,inst_48360);
var state_48384__$1 = (function (){var statearr_48399 = state_48384;
(statearr_48399[(8)] = inst_48359);

return statearr_48399;
})();
var statearr_48400_48445 = state_48384__$1;
(statearr_48400_48445[(2)] = inst_48361);

(statearr_48400_48445[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48385 === (13))){
var inst_48318 = figwheel.client.heads_up.clear.call(null);
var state_48384__$1 = state_48384;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48384__$1,(16),inst_48318);
} else {
if((state_val_48385 === (22))){
var inst_48339 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_48340 = figwheel.client.heads_up.append_warning_message.call(null,inst_48339);
var state_48384__$1 = state_48384;
var statearr_48401_48446 = state_48384__$1;
(statearr_48401_48446[(2)] = inst_48340);

(statearr_48401_48446[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48385 === (36))){
var inst_48370 = (state_48384[(2)]);
var state_48384__$1 = state_48384;
var statearr_48402_48447 = state_48384__$1;
(statearr_48402_48447[(2)] = inst_48370);

(statearr_48402_48447[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48385 === (29))){
var inst_48350 = (state_48384[(2)]);
var inst_48351 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_48352 = figwheel.client.auto_jump_to_error.call(null,opts,inst_48351);
var state_48384__$1 = (function (){var statearr_48403 = state_48384;
(statearr_48403[(9)] = inst_48350);

return statearr_48403;
})();
var statearr_48404_48448 = state_48384__$1;
(statearr_48404_48448[(2)] = inst_48352);

(statearr_48404_48448[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48385 === (6))){
var inst_48299 = (state_48384[(10)]);
var state_48384__$1 = state_48384;
var statearr_48405_48449 = state_48384__$1;
(statearr_48405_48449[(2)] = inst_48299);

(statearr_48405_48449[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48385 === (28))){
var inst_48346 = (state_48384[(2)]);
var inst_48347 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_48348 = figwheel.client.heads_up.display_warning.call(null,inst_48347);
var state_48384__$1 = (function (){var statearr_48406 = state_48384;
(statearr_48406[(11)] = inst_48346);

return statearr_48406;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48384__$1,(29),inst_48348);
} else {
if((state_val_48385 === (25))){
var inst_48344 = figwheel.client.heads_up.clear.call(null);
var state_48384__$1 = state_48384;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48384__$1,(28),inst_48344);
} else {
if((state_val_48385 === (34))){
var inst_48365 = figwheel.client.heads_up.flash_loaded.call(null);
var state_48384__$1 = state_48384;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48384__$1,(37),inst_48365);
} else {
if((state_val_48385 === (17))){
var inst_48324 = (state_48384[(2)]);
var inst_48325 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_48326 = figwheel.client.auto_jump_to_error.call(null,opts,inst_48325);
var state_48384__$1 = (function (){var statearr_48407 = state_48384;
(statearr_48407[(12)] = inst_48324);

return statearr_48407;
})();
var statearr_48408_48450 = state_48384__$1;
(statearr_48408_48450[(2)] = inst_48326);

(statearr_48408_48450[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48385 === (3))){
var inst_48316 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_48384__$1 = state_48384;
if(cljs.core.truth_(inst_48316)){
var statearr_48409_48451 = state_48384__$1;
(statearr_48409_48451[(1)] = (13));

} else {
var statearr_48410_48452 = state_48384__$1;
(statearr_48410_48452[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48385 === (12))){
var inst_48312 = (state_48384[(2)]);
var state_48384__$1 = state_48384;
var statearr_48411_48453 = state_48384__$1;
(statearr_48411_48453[(2)] = inst_48312);

(statearr_48411_48453[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48385 === (2))){
var inst_48299 = (state_48384[(10)]);
var inst_48299__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_48384__$1 = (function (){var statearr_48412 = state_48384;
(statearr_48412[(10)] = inst_48299__$1);

return statearr_48412;
})();
if(cljs.core.truth_(inst_48299__$1)){
var statearr_48413_48454 = state_48384__$1;
(statearr_48413_48454[(1)] = (5));

} else {
var statearr_48414_48455 = state_48384__$1;
(statearr_48414_48455[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48385 === (23))){
var inst_48342 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_48384__$1 = state_48384;
if(cljs.core.truth_(inst_48342)){
var statearr_48415_48456 = state_48384__$1;
(statearr_48415_48456[(1)] = (25));

} else {
var statearr_48416_48457 = state_48384__$1;
(statearr_48416_48457[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48385 === (35))){
var state_48384__$1 = state_48384;
var statearr_48417_48458 = state_48384__$1;
(statearr_48417_48458[(2)] = null);

(statearr_48417_48458[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48385 === (19))){
var inst_48337 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_48384__$1 = state_48384;
if(cljs.core.truth_(inst_48337)){
var statearr_48418_48459 = state_48384__$1;
(statearr_48418_48459[(1)] = (22));

} else {
var statearr_48419_48460 = state_48384__$1;
(statearr_48419_48460[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48385 === (11))){
var inst_48308 = (state_48384[(2)]);
var state_48384__$1 = state_48384;
var statearr_48420_48461 = state_48384__$1;
(statearr_48420_48461[(2)] = inst_48308);

(statearr_48420_48461[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48385 === (9))){
var inst_48310 = figwheel.client.heads_up.clear.call(null);
var state_48384__$1 = state_48384;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48384__$1,(12),inst_48310);
} else {
if((state_val_48385 === (5))){
var inst_48301 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_48384__$1 = state_48384;
var statearr_48421_48462 = state_48384__$1;
(statearr_48421_48462[(2)] = inst_48301);

(statearr_48421_48462[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48385 === (14))){
var inst_48328 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_48384__$1 = state_48384;
if(cljs.core.truth_(inst_48328)){
var statearr_48422_48463 = state_48384__$1;
(statearr_48422_48463[(1)] = (18));

} else {
var statearr_48423_48464 = state_48384__$1;
(statearr_48423_48464[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48385 === (26))){
var inst_48354 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_48384__$1 = state_48384;
if(cljs.core.truth_(inst_48354)){
var statearr_48424_48465 = state_48384__$1;
(statearr_48424_48465[(1)] = (30));

} else {
var statearr_48425_48466 = state_48384__$1;
(statearr_48425_48466[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48385 === (16))){
var inst_48320 = (state_48384[(2)]);
var inst_48321 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_48322 = figwheel.client.heads_up.display_exception.call(null,inst_48321);
var state_48384__$1 = (function (){var statearr_48426 = state_48384;
(statearr_48426[(13)] = inst_48320);

return statearr_48426;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48384__$1,(17),inst_48322);
} else {
if((state_val_48385 === (30))){
var inst_48356 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_48357 = figwheel.client.heads_up.display_warning.call(null,inst_48356);
var state_48384__$1 = state_48384;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48384__$1,(33),inst_48357);
} else {
if((state_val_48385 === (10))){
var inst_48314 = (state_48384[(2)]);
var state_48384__$1 = state_48384;
var statearr_48427_48467 = state_48384__$1;
(statearr_48427_48467[(2)] = inst_48314);

(statearr_48427_48467[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48385 === (18))){
var inst_48330 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_48331 = figwheel.client.heads_up.display_exception.call(null,inst_48330);
var state_48384__$1 = state_48384;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48384__$1,(21),inst_48331);
} else {
if((state_val_48385 === (37))){
var inst_48367 = (state_48384[(2)]);
var state_48384__$1 = state_48384;
var statearr_48428_48468 = state_48384__$1;
(statearr_48428_48468[(2)] = inst_48367);

(statearr_48428_48468[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48385 === (8))){
var inst_48306 = figwheel.client.heads_up.flash_loaded.call(null);
var state_48384__$1 = state_48384;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48384__$1,(11),inst_48306);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__38236__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__38077__auto__,c__38236__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__38078__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__38078__auto____0 = (function (){
var statearr_48429 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48429[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__38078__auto__);

(statearr_48429[(1)] = (1));

return statearr_48429;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__38078__auto____1 = (function (state_48384){
while(true){
var ret_value__38079__auto__ = (function (){try{while(true){
var result__38080__auto__ = switch__38077__auto__.call(null,state_48384);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38080__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38080__auto__;
}
break;
}
}catch (e48430){if((e48430 instanceof Object)){
var ex__38081__auto__ = e48430;
var statearr_48431_48469 = state_48384;
(statearr_48431_48469[(5)] = ex__38081__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48384);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48430;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38079__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48470 = state_48384;
state_48384 = G__48470;
continue;
} else {
return ret_value__38079__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__38078__auto__ = function(state_48384){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__38078__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__38078__auto____1.call(this,state_48384);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__38078__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__38078__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__38078__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__38078__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__38078__auto__;
})()
;})(switch__38077__auto__,c__38236__auto__,msg_hist,msg_names,msg))
})();
var state__38238__auto__ = (function (){var statearr_48432 = f__38237__auto__.call(null);
(statearr_48432[(6)] = c__38236__auto__);

return statearr_48432;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38238__auto__);
});})(c__38236__auto__,msg_hist,msg_names,msg))
);

return c__38236__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__38236__auto___48499 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38236__auto___48499,ch){
return (function (){
var f__38237__auto__ = (function (){var switch__38077__auto__ = ((function (c__38236__auto___48499,ch){
return (function (state_48485){
var state_val_48486 = (state_48485[(1)]);
if((state_val_48486 === (1))){
var state_48485__$1 = state_48485;
var statearr_48487_48500 = state_48485__$1;
(statearr_48487_48500[(2)] = null);

(statearr_48487_48500[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48486 === (2))){
var state_48485__$1 = state_48485;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48485__$1,(4),ch);
} else {
if((state_val_48486 === (3))){
var inst_48483 = (state_48485[(2)]);
var state_48485__$1 = state_48485;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48485__$1,inst_48483);
} else {
if((state_val_48486 === (4))){
var inst_48473 = (state_48485[(7)]);
var inst_48473__$1 = (state_48485[(2)]);
var state_48485__$1 = (function (){var statearr_48488 = state_48485;
(statearr_48488[(7)] = inst_48473__$1);

return statearr_48488;
})();
if(cljs.core.truth_(inst_48473__$1)){
var statearr_48489_48501 = state_48485__$1;
(statearr_48489_48501[(1)] = (5));

} else {
var statearr_48490_48502 = state_48485__$1;
(statearr_48490_48502[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48486 === (5))){
var inst_48473 = (state_48485[(7)]);
var inst_48475 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_48473);
var state_48485__$1 = state_48485;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48485__$1,(8),inst_48475);
} else {
if((state_val_48486 === (6))){
var state_48485__$1 = state_48485;
var statearr_48491_48503 = state_48485__$1;
(statearr_48491_48503[(2)] = null);

(statearr_48491_48503[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48486 === (7))){
var inst_48481 = (state_48485[(2)]);
var state_48485__$1 = state_48485;
var statearr_48492_48504 = state_48485__$1;
(statearr_48492_48504[(2)] = inst_48481);

(statearr_48492_48504[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48486 === (8))){
var inst_48477 = (state_48485[(2)]);
var state_48485__$1 = (function (){var statearr_48493 = state_48485;
(statearr_48493[(8)] = inst_48477);

return statearr_48493;
})();
var statearr_48494_48505 = state_48485__$1;
(statearr_48494_48505[(2)] = null);

(statearr_48494_48505[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__38236__auto___48499,ch))
;
return ((function (switch__38077__auto__,c__38236__auto___48499,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__38078__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__38078__auto____0 = (function (){
var statearr_48495 = [null,null,null,null,null,null,null,null,null];
(statearr_48495[(0)] = figwheel$client$heads_up_plugin_$_state_machine__38078__auto__);

(statearr_48495[(1)] = (1));

return statearr_48495;
});
var figwheel$client$heads_up_plugin_$_state_machine__38078__auto____1 = (function (state_48485){
while(true){
var ret_value__38079__auto__ = (function (){try{while(true){
var result__38080__auto__ = switch__38077__auto__.call(null,state_48485);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38080__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38080__auto__;
}
break;
}
}catch (e48496){if((e48496 instanceof Object)){
var ex__38081__auto__ = e48496;
var statearr_48497_48506 = state_48485;
(statearr_48497_48506[(5)] = ex__38081__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48485);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48496;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38079__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48507 = state_48485;
state_48485 = G__48507;
continue;
} else {
return ret_value__38079__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__38078__auto__ = function(state_48485){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__38078__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__38078__auto____1.call(this,state_48485);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__38078__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__38078__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__38078__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__38078__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__38078__auto__;
})()
;})(switch__38077__auto__,c__38236__auto___48499,ch))
})();
var state__38238__auto__ = (function (){var statearr_48498 = f__38237__auto__.call(null);
(statearr_48498[(6)] = c__38236__auto___48499);

return statearr_48498;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38238__auto__);
});})(c__38236__auto___48499,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__38236__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38236__auto__){
return (function (){
var f__38237__auto__ = (function (){var switch__38077__auto__ = ((function (c__38236__auto__){
return (function (state_48513){
var state_val_48514 = (state_48513[(1)]);
if((state_val_48514 === (1))){
var inst_48508 = cljs.core.async.timeout.call(null,(3000));
var state_48513__$1 = state_48513;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48513__$1,(2),inst_48508);
} else {
if((state_val_48514 === (2))){
var inst_48510 = (state_48513[(2)]);
var inst_48511 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_48513__$1 = (function (){var statearr_48515 = state_48513;
(statearr_48515[(7)] = inst_48510);

return statearr_48515;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48513__$1,inst_48511);
} else {
return null;
}
}
});})(c__38236__auto__))
;
return ((function (switch__38077__auto__,c__38236__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__38078__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__38078__auto____0 = (function (){
var statearr_48516 = [null,null,null,null,null,null,null,null];
(statearr_48516[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__38078__auto__);

(statearr_48516[(1)] = (1));

return statearr_48516;
});
var figwheel$client$enforce_project_plugin_$_state_machine__38078__auto____1 = (function (state_48513){
while(true){
var ret_value__38079__auto__ = (function (){try{while(true){
var result__38080__auto__ = switch__38077__auto__.call(null,state_48513);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38080__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38080__auto__;
}
break;
}
}catch (e48517){if((e48517 instanceof Object)){
var ex__38081__auto__ = e48517;
var statearr_48518_48520 = state_48513;
(statearr_48518_48520[(5)] = ex__38081__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48513);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48517;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38079__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48521 = state_48513;
state_48513 = G__48521;
continue;
} else {
return ret_value__38079__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__38078__auto__ = function(state_48513){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__38078__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__38078__auto____1.call(this,state_48513);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__38078__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__38078__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__38078__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__38078__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__38078__auto__;
})()
;})(switch__38077__auto__,c__38236__auto__))
})();
var state__38238__auto__ = (function (){var statearr_48519 = f__38237__auto__.call(null);
(statearr_48519[(6)] = c__38236__auto__);

return statearr_48519;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38238__auto__);
});})(c__38236__auto__))
);

return c__38236__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__5457__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__5457__auto__)){
var figwheel_version = temp__5457__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__38236__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38236__auto__,figwheel_version,temp__5457__auto__){
return (function (){
var f__38237__auto__ = (function (){var switch__38077__auto__ = ((function (c__38236__auto__,figwheel_version,temp__5457__auto__){
return (function (state_48528){
var state_val_48529 = (state_48528[(1)]);
if((state_val_48529 === (1))){
var inst_48522 = cljs.core.async.timeout.call(null,(2000));
var state_48528__$1 = state_48528;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48528__$1,(2),inst_48522);
} else {
if((state_val_48529 === (2))){
var inst_48524 = (state_48528[(2)]);
var inst_48525 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_48526 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_48525);
var state_48528__$1 = (function (){var statearr_48530 = state_48528;
(statearr_48530[(7)] = inst_48524);

return statearr_48530;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48528__$1,inst_48526);
} else {
return null;
}
}
});})(c__38236__auto__,figwheel_version,temp__5457__auto__))
;
return ((function (switch__38077__auto__,c__38236__auto__,figwheel_version,temp__5457__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__38078__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__38078__auto____0 = (function (){
var statearr_48531 = [null,null,null,null,null,null,null,null];
(statearr_48531[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__38078__auto__);

(statearr_48531[(1)] = (1));

return statearr_48531;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__38078__auto____1 = (function (state_48528){
while(true){
var ret_value__38079__auto__ = (function (){try{while(true){
var result__38080__auto__ = switch__38077__auto__.call(null,state_48528);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38080__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38080__auto__;
}
break;
}
}catch (e48532){if((e48532 instanceof Object)){
var ex__38081__auto__ = e48532;
var statearr_48533_48535 = state_48528;
(statearr_48533_48535[(5)] = ex__38081__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48528);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48532;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38079__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48536 = state_48528;
state_48528 = G__48536;
continue;
} else {
return ret_value__38079__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__38078__auto__ = function(state_48528){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__38078__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__38078__auto____1.call(this,state_48528);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__38078__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__38078__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__38078__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__38078__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__38078__auto__;
})()
;})(switch__38077__auto__,c__38236__auto__,figwheel_version,temp__5457__auto__))
})();
var state__38238__auto__ = (function (){var statearr_48534 = f__38237__auto__.call(null);
(statearr_48534[(6)] = c__38236__auto__);

return statearr_48534;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38238__auto__);
});})(c__38236__auto__,figwheel_version,temp__5457__auto__))
);

return c__38236__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__48537){
var map__48538 = p__48537;
var map__48538__$1 = ((((!((map__48538 == null)))?(((((map__48538.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48538.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48538):map__48538);
var file = cljs.core.get.call(null,map__48538__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__48538__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__48538__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__48540 = "";
var G__48540__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__48540),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__48540);
var G__48540__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__48540__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__48540__$1);
if(cljs.core.truth_((function (){var and__3938__auto__ = line;
if(cljs.core.truth_(and__3938__auto__)){
return column;
} else {
return and__3938__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__48540__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__48540__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__48541){
var map__48542 = p__48541;
var map__48542__$1 = ((((!((map__48542 == null)))?(((((map__48542.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48542.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48542):map__48542);
var ed = map__48542__$1;
var formatted_exception = cljs.core.get.call(null,map__48542__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__48542__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__48542__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__48544_48548 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__48545_48549 = null;
var count__48546_48550 = (0);
var i__48547_48551 = (0);
while(true){
if((i__48547_48551 < count__48546_48550)){
var msg_48552 = cljs.core._nth.call(null,chunk__48545_48549,i__48547_48551);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_48552);


var G__48553 = seq__48544_48548;
var G__48554 = chunk__48545_48549;
var G__48555 = count__48546_48550;
var G__48556 = (i__48547_48551 + (1));
seq__48544_48548 = G__48553;
chunk__48545_48549 = G__48554;
count__48546_48550 = G__48555;
i__48547_48551 = G__48556;
continue;
} else {
var temp__5457__auto___48557 = cljs.core.seq.call(null,seq__48544_48548);
if(temp__5457__auto___48557){
var seq__48544_48558__$1 = temp__5457__auto___48557;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__48544_48558__$1)){
var c__4351__auto___48559 = cljs.core.chunk_first.call(null,seq__48544_48558__$1);
var G__48560 = cljs.core.chunk_rest.call(null,seq__48544_48558__$1);
var G__48561 = c__4351__auto___48559;
var G__48562 = cljs.core.count.call(null,c__4351__auto___48559);
var G__48563 = (0);
seq__48544_48548 = G__48560;
chunk__48545_48549 = G__48561;
count__48546_48550 = G__48562;
i__48547_48551 = G__48563;
continue;
} else {
var msg_48564 = cljs.core.first.call(null,seq__48544_48558__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_48564);


var G__48565 = cljs.core.next.call(null,seq__48544_48558__$1);
var G__48566 = null;
var G__48567 = (0);
var G__48568 = (0);
seq__48544_48548 = G__48565;
chunk__48545_48549 = G__48566;
count__48546_48550 = G__48567;
i__48547_48551 = G__48568;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Error on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__48569){
var map__48570 = p__48569;
var map__48570__$1 = ((((!((map__48570 == null)))?(((((map__48570.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48570.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48570):map__48570);
var w = map__48570__$1;
var message = cljs.core.get.call(null,map__48570__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),["Figwheel: Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.config_defaults !== 'undefined')){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"target/cljsbuild/public/js/out/figwheel/client.cljs",33,1,361,361,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"target/cljsbuild/public/js/out/figwheel/client.cljs",30,1,353,353,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__3938__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__3938__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__3938__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_json_message_watch = (function figwheel$client$add_json_message_watch(key,callback){
return figwheel.client.add_message_watch.call(null,key,cljs.core.comp.call(null,callback,cljs.core.clj__GT_js));
});
goog.exportSymbol('figwheel.client.add_json_message_watch', figwheel.client.add_json_message_watch);
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__48572 = cljs.core.seq.call(null,plugins);
var chunk__48573 = null;
var count__48574 = (0);
var i__48575 = (0);
while(true){
if((i__48575 < count__48574)){
var vec__48576 = cljs.core._nth.call(null,chunk__48573,i__48575);
var k = cljs.core.nth.call(null,vec__48576,(0),null);
var plugin = cljs.core.nth.call(null,vec__48576,(1),null);
if(cljs.core.truth_(plugin)){
var pl_48582 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__48572,chunk__48573,count__48574,i__48575,pl_48582,vec__48576,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_48582.call(null,msg_hist);
});})(seq__48572,chunk__48573,count__48574,i__48575,pl_48582,vec__48576,k,plugin))
);
} else {
}


var G__48583 = seq__48572;
var G__48584 = chunk__48573;
var G__48585 = count__48574;
var G__48586 = (i__48575 + (1));
seq__48572 = G__48583;
chunk__48573 = G__48584;
count__48574 = G__48585;
i__48575 = G__48586;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__48572);
if(temp__5457__auto__){
var seq__48572__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__48572__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__48572__$1);
var G__48587 = cljs.core.chunk_rest.call(null,seq__48572__$1);
var G__48588 = c__4351__auto__;
var G__48589 = cljs.core.count.call(null,c__4351__auto__);
var G__48590 = (0);
seq__48572 = G__48587;
chunk__48573 = G__48588;
count__48574 = G__48589;
i__48575 = G__48590;
continue;
} else {
var vec__48579 = cljs.core.first.call(null,seq__48572__$1);
var k = cljs.core.nth.call(null,vec__48579,(0),null);
var plugin = cljs.core.nth.call(null,vec__48579,(1),null);
if(cljs.core.truth_(plugin)){
var pl_48591 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__48572,chunk__48573,count__48574,i__48575,pl_48591,vec__48579,k,plugin,seq__48572__$1,temp__5457__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_48591.call(null,msg_hist);
});})(seq__48572,chunk__48573,count__48574,i__48575,pl_48591,vec__48579,k,plugin,seq__48572__$1,temp__5457__auto__))
);
} else {
}


var G__48592 = cljs.core.next.call(null,seq__48572__$1);
var G__48593 = null;
var G__48594 = (0);
var G__48595 = (0);
seq__48572 = G__48592;
chunk__48573 = G__48593;
count__48574 = G__48594;
i__48575 = G__48595;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var G__48597 = arguments.length;
switch (G__48597) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.__figwheel_start_once__ !== 'undefined')){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__48598_48603 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__48599_48604 = null;
var count__48600_48605 = (0);
var i__48601_48606 = (0);
while(true){
if((i__48601_48606 < count__48600_48605)){
var msg_48607 = cljs.core._nth.call(null,chunk__48599_48604,i__48601_48606);
figwheel.client.socket.handle_incoming_message.call(null,msg_48607);


var G__48608 = seq__48598_48603;
var G__48609 = chunk__48599_48604;
var G__48610 = count__48600_48605;
var G__48611 = (i__48601_48606 + (1));
seq__48598_48603 = G__48608;
chunk__48599_48604 = G__48609;
count__48600_48605 = G__48610;
i__48601_48606 = G__48611;
continue;
} else {
var temp__5457__auto___48612 = cljs.core.seq.call(null,seq__48598_48603);
if(temp__5457__auto___48612){
var seq__48598_48613__$1 = temp__5457__auto___48612;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__48598_48613__$1)){
var c__4351__auto___48614 = cljs.core.chunk_first.call(null,seq__48598_48613__$1);
var G__48615 = cljs.core.chunk_rest.call(null,seq__48598_48613__$1);
var G__48616 = c__4351__auto___48614;
var G__48617 = cljs.core.count.call(null,c__4351__auto___48614);
var G__48618 = (0);
seq__48598_48603 = G__48615;
chunk__48599_48604 = G__48616;
count__48600_48605 = G__48617;
i__48601_48606 = G__48618;
continue;
} else {
var msg_48619 = cljs.core.first.call(null,seq__48598_48613__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_48619);


var G__48620 = cljs.core.next.call(null,seq__48598_48613__$1);
var G__48621 = null;
var G__48622 = (0);
var G__48623 = (0);
seq__48598_48603 = G__48620;
chunk__48599_48604 = G__48621;
count__48600_48605 = G__48622;
i__48601_48606 = G__48623;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__4534__auto__ = [];
var len__4531__auto___48628 = arguments.length;
var i__4532__auto___48629 = (0);
while(true){
if((i__4532__auto___48629 < len__4531__auto___48628)){
args__4534__auto__.push((arguments[i__4532__auto___48629]));

var G__48630 = (i__4532__auto___48629 + (1));
i__4532__auto___48629 = G__48630;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__48625){
var map__48626 = p__48625;
var map__48626__$1 = ((((!((map__48626 == null)))?(((((map__48626.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48626.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48626):map__48626);
var opts = map__48626__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq48624){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq48624));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e48631){if((e48631 instanceof Error)){
var e = e48631;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e48631;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__48632){
var map__48633 = p__48632;
var map__48633__$1 = ((((!((map__48633 == null)))?(((((map__48633.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48633.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48633):map__48633);
var msg_name = cljs.core.get.call(null,map__48633__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1551156951111